import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class Controls extends OrbitControls {
  constructor(context) {
    super(context.camera, context.renderer.domElement);
    this.minDistance = 3;
    this.maxDistance = 20; 
  }
}
