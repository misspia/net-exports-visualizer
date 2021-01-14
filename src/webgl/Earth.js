import * as THREE from 'three';
import { toRadians } from '../utils';
import { Assets } from '../themes';

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
    this.globe = {};
    this.createGlobe();
    

    this.group = new THREE.Group();
    this.group.add(this.globe);
  }

  add(obj) {
    this.group.add(obj);
  }

  createGlobe() {
    const geometry = new THREE.SphereGeometry(2, 50, 50);
    
    const texture = new THREE.TextureLoader().load(Assets.textures.earth);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const material = new THREE.MeshPhongMaterial({
      map: texture,
      color: 0xffffff,
      shininess: 0.2,
    });

    this.globe = new THREE.Mesh(geometry, material); 
    // this.globe.rotation.x = toRadians(5);
    // this.globe.rotation.z = toRadians(-23.4);
  }

  update() {
    // this.group.rotation.y += ROTATION_VELOCITY_Y;
  }
}
