import * as THREE from 'three';
import TradeVector from './TradeVector';

export default class TradeManager {
  constructor(context) {
    this.context = context;

    this.trades = [];
    this.group = new THREE.Group();
    this.bbox = new THREE.Box3();
  }

  setNewTrades(trades) {
    this.clearTrades();
    for(const trade of trades) {
      const tradeVector = new TradeVector(
        trade.exporter,
        trade.importer,
        trade.netTradeValue > 0
      );
      this.trades.push(tradeVector);
      this.group.add(tradeVector.mesh);
    }
  }

  clearTrades() {
    this.trades = [];
    this.group.remove(...this.group.children);
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
