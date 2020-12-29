import * as THREE from 'three';
import SceneManager from './SceneManager';

import FlightManager from './FlightManager';
import Earth from './Earth';
import Lights from './Lights';

export default class Visualizer extends SceneManager {
  constructor() {
    super();
    this.earth = new Earth(this);
    this.lights = new Lights(this);
    this.flightManager = new FlightManager(this);
  }

  setup(canvas) {
    this.initializeScene(canvas);

    this.setClearColor(0x000006);
    this.camera.position.set(0, 0, 10);

    const center = new THREE.Vector3();
    this.lookAt(center)
    this.scene.add(this.lights.directional);
    this.scene.add(this.earth.mesh);
    this.scene.add(this.flightManager.group);
  }

  setNewFlights(flights) {
    this.flightManager.setNewFlights(flights);
  }

  updateFlights(flights) {
    this.flightManager.updateFlights(flights)
  }

  render = () => {
    this.renderer.render(this.scene, this.camera);    


    requestAnimationFrame(this.render);
  }
}
