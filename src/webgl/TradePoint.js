import * as THREE from 'three';

export default class TradePoint {
  constructor() {
    const geometry = new THREE.SphereGeometry(0.05, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
  }

  get position() {
    return this.mesh.position;
  }

  update() {

  }
}
