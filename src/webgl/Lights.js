import * as THREE from 'three';

export default class Lights {
  constructor(context) {
    this.context = context;
    
    this.directional = new THREE.DirectionalLight(0x3333ee, 3.5);
    this.directional.position.set(1, 1, 1);
  }

  update() {

  }
}
