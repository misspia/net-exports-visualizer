import { PerspectiveCamera, Vector3 } from 'three';
import { coordinateToPosition } from '../utils';
import { GLOBE_RADIUS } from '../data/webgl';
import gsap from 'gsap';
export default class Camera extends PerspectiveCamera {
  constructor() {
    super();
  }

  transitionTo(reporterCoords) {
    const { longitude, latitude } = reporterCoords;
    const lookAt = new Vector3(0,0,0)
    const position = coordinateToPosition(latitude, longitude, GLOBE_RADIUS, 10);

    /**
     * https://stackoverflow.com/a/27961439
     */
    const currentLookAtPosition = new Vector3(0, 0, -1);
    currentLookAtPosition.applyQuaternion(this.quaternion);


    const tl = gsap.timeline();

    tl.to(this.position, 2, {
      x: position.x,
      y: position.y,
      z: position.z,
    }, 0)
    .to(currentLookAtPosition, 2, {
      x: lookAt.x,
      y: lookAt.y,
      z: lookAt.z,
      onUpdate: () => {
        this.lookAt(currentLookAtPosition);
      }
    }, 0)
  }
}
