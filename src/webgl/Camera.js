import { PerspectiveCamera } from 'three';
import gsap from 'gsap';
export default class Camera extends PerspectiveCamera {
  constructor() {
    super();
  }

  transitionTo(position, lookat) {
    console.debug('[GSAP]', gsap);
  }
}
