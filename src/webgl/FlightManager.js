import * as THREE from 'three';
import FlightPoint from './FlightPoint';

export default class FlightManager {
  constructor(context) {
    this.context = context;

    this.flights = [];
    this.group = new THREE.Group();
    this.bbox = new THREE.Box3();
  }

  get center() {
    return this.bbox.setFromObject(this.group).getCenter();
  }

  setNewFlights(flights) {
    this.clearFlights();
    for(const flight of flights) {
      const flightPoint = new FlightPoint();
      const { x, y, z } = this.latLonToVector3(
        flight.latitude,
        flight.longitude,
        2,
        0.15,
      );
      flightPoint.position.set(x, y, z);

      this.flights.push(flightPoint);
      this.group.add(flightPoint.mesh);
    }
  }

  clearFlights() {
    this.flights = [];
    this.group.remove(...this.group.children);
  }

  updateFlights(flights) {

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
}
