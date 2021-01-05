import Visualizer from './Visualizer';
import { DefaultLoadingManager } from 'three';

export default class WebGLApplication {
  constructor() {
    this.app = new Visualizer();
  }

  setup(canvas) {
    this.app.setup(canvas);
  }

  setNewFlights(flights) {
    this.app.setNewFlights(flights);
  }

  updateFlights(flights) {
    this.app.updateFlights(flights);
  }

  onLoadProgress(handler) {
    DefaultLoadingManager.onProgress((url, loaded, total) => (
      handler(url, loaded, total)
    ));
  }

  render() {
    this.app.render();
  }
}
