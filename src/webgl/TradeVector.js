import * as THREE from 'three';
import { geoInterpolate, coordinateToPosition, clamp, remap } from '../utils';
import { GLOBE_RADIUS } from '../data/webgl';
import fragmentShader from './shaders/path.frag';
import vertexShader from './shaders/path.vert';

const CURVE_SEGMENTS = 32;
const CURVE_MIN_ALTITUDE = 1;
const CURVE_MAX_ALTITUDE = 1.5;

// https://mflux.tumblr.com/post/28367579774/armstradeviz
// https://medium.com/@xiaoyangzhao/drawing-curves-on-webgl-globe-using-three-js-and-d3-draft-7e782ffd7ab
export default class TradeVector {
  constructor(start, end, isExporter) {
    this.progressVelocity = 0.005;

    this.geometry = this.createCurve(start, end);
    const progressIndicies = this.createProgressIndicies();
    this.geometry.setAttribute(
      'progressIndex', 
      new THREE.BufferAttribute(progressIndicies, 1)
    );

    this.material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        uIsExporter: { value: isExporter },
        uProgress: { value: 0 }
      },
      transparent: true,
    })
    this.mesh = new THREE.Line(this.geometry, this.material);
  }

  get uniforms() {
    return this.material.uniforms; 
  }

  createProgressIndicies() {
    let indicies = [];
    let progress = 0;
    const progressIncrement = 1 / 32
    for(let i = 0; i < CURVE_SEGMENTS; i++) {
      indicies.push(progress);
      progress += progressIncrement;
    }

    return new Float32Array(indicies)
  }

  getSplineFromCoords(startSet, endSet) {
    const startLat = startSet.latitude;
    const startLng = startSet.longitude;
    const endLat = endSet.latitude;
    const endLng = endSet.longitude;

    const start = coordinateToPosition(startLat, startLng, GLOBE_RADIUS);
    const end = coordinateToPosition(endLat, endLng, GLOBE_RADIUS);

    const altitude = clamp(start.distanceTo(end) * .75, CURVE_MIN_ALTITUDE, CURVE_MAX_ALTITUDE);

    const interpolate = geoInterpolate([startLng, startLat], [endLng, endLat]);
    const midCoord1 = interpolate(0.25);
    const midCoord2 = interpolate(0.75);
    const mid1 = coordinateToPosition(midCoord1[1], midCoord1[0], GLOBE_RADIUS + altitude);
    const mid2 = coordinateToPosition(midCoord2[1], midCoord2[0], GLOBE_RADIUS + altitude);

    return new THREE.CubicBezierCurve3(start, mid1, mid2, end);
  }

  createCurve(start, end) {
    const spline = this.getSplineFromCoords(start, end);
    const curveGeometry = new THREE.BufferGeometry();
    const points = new Float32Array(CURVE_SEGMENTS * 3);
    const vertices = spline.getPoints(CURVE_SEGMENTS - 1);

    for (let i = 0, j = 0; i < vertices.length; i++) {
      const vertex = vertices[i];
      points[j++] = vertex.x;
      points[j++] = vertex.y;
      points[j++] = vertex.z;
    }

    curveGeometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
    curveGeometry.setDrawRange(0, CURVE_SEGMENTS);

    return curveGeometry;
  }

  update() {
    if(this.uniforms.uProgress.value <= 1) {
      this.uniforms.uProgress.value += this.progressVelocity;
    }
  }
}
