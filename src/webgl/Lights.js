import * as THREE from 'three';

export default class Lights {
  constructor(context) {
    this.context = context;
    
    this.directional = new THREE.DirectionalLight(0xffffff, 0);
    this.directional.position.set(0, 1, 0);

    this.ambient = new THREE.AmbientLight(0xffffff, 2);
  }

  update() {

  }
}
