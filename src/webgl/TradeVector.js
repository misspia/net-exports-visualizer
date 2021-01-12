import * as THREE from 'three';

export default class TradeVector {
  constructor(start, end, isExport) {
    
    const line = new THREE.LineCurve3(start, end);
    const points = line.getPoints();
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    console.debug(points)
    const material = new THREE.LineBasicMaterial({
      color: 0xff0000
    });
    this.mesh = new THREE.Line(geometry, material);
  }
  // constructor(start, end, isExport) {
  //   const geometry = new THREE.BufferGeometry().setFromPoints([
  //     new THREE.Vector3(- 10, 0, 0),
  //     new THREE.Vector3(0, 10, 0),
  //     new THREE.Vector3(10, 0, 0),
  //   ]);
  //   const material = new THREE.LineBasicMaterial({ 
  //     color: 0x0000ff 
  //   });
  //   this.mesh = new THREE.Line(geometry, material);
  // }
}
