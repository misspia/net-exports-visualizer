import * as THREE from 'three';
import { GLOBE_RADIUS } from '../data/webgl';
import { Assets } from '../themes';
import vertexShader from './shaders/earth.vert';
import fragmentShader from './shaders/earth.frag';

const ROTATION_VELOCITY_Y = -0.005;

// https://github.com/jdomingu/ThreeGeoJSON/blob/master/lib/threeGeoJSON.js
// http://www.smartjava.org/content/html5-render-open-data-3d-world-globe-threejs/
/**
 * glow effect
 * https://github.com/dataarts/webgl-globe/blob/master/globe/globe.js
 */
export default class Earth {
  constructor(context) {
    this.context = context; 

    const geometry = new THREE.SphereGeometry(GLOBE_RADIUS, 50, 50);
    
    const texture = new THREE.TextureLoader().load(Assets.textures.earth);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        texture: { type: 't', value: texture },
      }
    })

    this.globe = new THREE.Mesh(geometry, material); 
    

    this.group = new THREE.Group();
    this.group.add(this.globe);
  }

  get rotation() {
    return this.group.rotation;
  }

  add(obj) {
    this.group.add(obj);
  }


  createGlobe() {
    
    // this.globe.rotation.x = toRadians(5);
    // this.globe.rotation.z = toRadians(-23.4);
    
  }

  update() {
    // this.group.rotation.y += ROTATION_VELOCITY_Y;
  }
}
