import Visualizer from './Visualizer';

export default class WebGLApplication {
  constructor() {
    this.app = new Visualizer();
  }
  
  setup(canvas) {
    this.app.setup(canvas);
  }

  render() {
    this.app.render();
  }
}
