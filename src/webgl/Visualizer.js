import * as THREE from 'three';
import SceneManager from './SceneManager';

import TradeManager from './TradeManager';
import Earth from './Earth';
import Lights from './Lights';

export default class Visualizer extends SceneManager {
  constructor() {
    super();
    this.earth = new Earth(this);
    this.lights = new Lights(this);
    this.tradeManager = new TradeManager(this);
  }

  setup(canvas) {
    this.initializeScene(canvas);

    this.setClearColor(0xbabec9, 0);
    this.camera.position.set(0, 0, 10);

    const center = new THREE.Vector3();
    this.lookAt(center)
    this.scene.add(this.lights.directional);

    // this.scene.add(this.tradeManager.group);
    this.earth.add(this.tradeManager.group);
    this.scene.add(this.earth.group);
  }

  setNewTrades(trades) {
    this.tradeManager.setNewTrades(trades);
  }

  render = () => {
    this.renderer.render(this.scene, this.camera);    

    this.earth.update();

    requestAnimationFrame(this.render);
  }
}
