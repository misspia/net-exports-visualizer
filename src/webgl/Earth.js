import * as THREE from 'three';
import { Assets } from '../themes';

export default class Earth {
  constructor(context) {
    this.context = context; 

    this.geometry = new THREE.SphereGeometry(2, 20, 20);
    
    const texture = new THREE.TextureLoader().load(Assets.textures.earth);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    this.material = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 0.2,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  
  update() {

  }
}
