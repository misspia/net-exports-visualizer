import * as THREE from 'three';
import { Assets } from '../themes';

export default class Earth {
  constructor(context) {
    this.context = context; 

    this.geometry = new THREE.SphereGeometry(2, 50, 50);
    
    const texture = new THREE.TextureLoader().load(Assets.textures.earth);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    this.material = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 0.2,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  latLonToVector3(lat, lon, radius, height) {
    const phi = lat * Math.PI / 180;
    const theta = (lon - 180) * Math.PI / 180;

    return new THREE.Vector3(
      -(radius + height) * Math.cos(phi) * Math.cos(theta),
      (radius + height) * Math.sin(phi),
      (radius + height) * Math.cos(phi) * Math.sin(theta),
    );
  }

  update() {

  }
}
