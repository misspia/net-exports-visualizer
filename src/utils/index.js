import { Vector3 } from 'three';

export const toRadians = (degrees) => (
  degrees * Math.PI / 180
);

export const toDegrees = (radians) => (
  radians * 180 / Math.PI
);

export const remap = (min1, max1, min2, max2, value) => (
  min2 + (max2 - min2) * (value - min1) / (max1 - min1)
);

export const clamp = (num, min, max) => {
  return num <= min ? min : (num >= max ? max : num);
}

/**
 * https://github.com/d3/d3-geo/blob/54f8890a44826828bd29a81d0bc6dfba9e6786b4/src/math.js#L34-L36 
 */
const haversin = (x) => {
  return (x = Math.sin(x / 2)) * x;
}
/**
 *  https://github.com/d3/d3-geo/blob/54f8890a44826828bd29a81d0bc6dfba9e6786b4/src/interpolate.js
 */
export const geoInterpolate = (a, b) => {
  var x0 = toRadians(a[0]),
    y0 = toRadians(a[1]),
    x1 = toRadians(b[0]),
    y1 = toRadians(b[1]),
    cy0 = Math.cos(y0),
    sy0 = Math.sin(y0),
    cy1 = Math.cos(y1),
    sy1 = Math.sin(y1),
    kx0 = cy0 * Math.cos(x0),
    ky0 = cy0 * Math.sin(x0),
    kx1 = cy1 * Math.cos(x1),
    ky1 = cy1 * Math.sin(x1),
    d = 2 * Math.asin(Math.sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
    k = Math.sin(d);

  var interpolate = d ? function (t) {
    var B = Math.sin(t *= d) / k,
      A = Math.sin(d - t) / k,
      x = A * kx0 + B * kx1,
      y = A * ky0 + B * ky1,
      z = A * sy0 + B * sy1;
    return [
      toDegrees(Math.atan2(y, x)),
      toDegrees(Math.atan2(z, Math.sqrt(x * x + y * y)))
    ];
  } : function () {
    return [toDegrees(x0), toDegrees(y0)];
  };

  interpolate.distance = d;

  return interpolate;
}

export const coordinateToPosition = (lat, lon, radius, height = 0) => {
  const phi = lat * Math.PI / 180;
  const theta = (lon - 180) * Math.PI / 180;

  return new Vector3(
    -(radius + height) * Math.cos(phi) * Math.cos(theta),
    (radius + height) * Math.sin(phi),
    (radius + height) * Math.cos(phi) * Math.sin(theta),
  );
}

/**
 * https://stackblitz.com/edit/webgl-globe-1?file=globe%2Futils.js 
 */
// export const coordinateToPosition = (lat, lng, radius) => {
//   const phi = toRadians(90 - lat);
//   const theta = toRadians(lng + 180);

//   return new Vector3(
//     - radius * Math.sin(phi) * Math.cos(theta),
//     radius * Math.cos(phi),
//     radius * Math.sin(phi) * Math.sin(theta)
//   );
// }
