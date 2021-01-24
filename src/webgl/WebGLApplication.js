import Visualizer from './Visualizer';
import { DefaultLoadingManager } from 'three';

export default class WebGLApplication {
  constructor() {
    this.app = new Visualizer();
  }

  setup(canvas) {
    this.app.setup(canvas);
  }

  setNewTrades(trades) {
    this.app.setNewTrades(trades);
  }

  onLoadProgress(handler) {
    DefaultLoadingManager.onProgress = (url, loaded, total) => (
      handler(url, loaded, total)
    );
  }

  resize(width, height) {
    this.app.resize(width, height);
  }

  render() {
    this.app.render();
  }
}
