import * as THREE from 'three';
import { toRadians } from '../utils';
import { Assets } from '../themes';

const ROTATION_VELOCITY_Y = -0.005;
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

  update() {
    this.group.rotation.y += ROTATION_VELOCITY_Y;
  }

  createGlobe() {
    const geometry = new THREE.SphereGeometry(2, 50, 50);
    
    const texture = new THREE.TextureLoader().load(Assets.textures.earth);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const material = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 0.2,
    });

    this.globe = new THREE.Mesh(geometry, material); 
    this.globe.rotation.x = toRadians(5);
    this.globe.rotation.z = toRadians(-23.4);
  }
}
