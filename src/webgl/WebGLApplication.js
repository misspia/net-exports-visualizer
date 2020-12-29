import Visualizer from './Visualizer';

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

  render() {
    this.app.render();
  }
}
