import * as THREE from 'three';
import { geoInterpolate, coordinateToPosition, clamp } from '../utils';
import fragmentShader from './shaders/path.frag'
import vertexShader from './shaders/path.vert'

const CURVE_SEGMENTS = 32;
const GLOBE_RADIUS = 2;
export const CURVE_MIN_ALTITUDE = 1;
export const CURVE_MAX_ALTITUDE = 1.5;

// https://mflux.tumblr.com/post/28367579774/armstradeviz
// https://medium.com/@xiaoyangzhao/drawing-curves-on-webgl-globe-using-three-js-and-d3-draft-7e782ffd7ab
export default class TradeVector {
  constructor(start, end, isExporter) {

    const spline = this.getSplineFromCoords(start, end);
    const geometry = this.createCurve(spline);

    const material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        uIsExporter: { value: isExporter },
      },
    })
    this.mesh = new THREE.Line(geometry, material);
  }

  getSplineFromCoords(startSet, endSet) {
    const startLat = startSet.latitude;
    const startLng = startSet.longitude;
    const endLat = endSet.latitude;
    const endLng = endSet.longitude;

    // start and end points
    const start = coordinateToPosition(startLat, startLng, GLOBE_RADIUS);
    const end = coordinateToPosition(endLat, endLng, GLOBE_RADIUS);

    // altitude
    const altitude = clamp(start.distanceTo(end) * .75, CURVE_MIN_ALTITUDE, CURVE_MAX_ALTITUDE);

    // 2 control points
    const interpolate = geoInterpolate([startLng, startLat], [endLng, endLat]);
    const midCoord1 = interpolate(0.25);
    const midCoord2 = interpolate(0.75);
    const mid1 = coordinateToPosition(midCoord1[1], midCoord1[0], GLOBE_RADIUS + altitude);
    const mid2 = coordinateToPosition(midCoord2[1], midCoord2[0], GLOBE_RADIUS + altitude);

    return new THREE.CubicBezierCurve3(start, mid1, mid2, end);
  }

  createCurve(spline) {
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
}
