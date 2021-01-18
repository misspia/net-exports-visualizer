precision highp float;

uniform bool uIsExporter;
uniform float uProgress;

varying float vProgressIndex;
varying vec3 vPosition;
varying vec2 vUv;


void main() {
  float alpha = 0.0;
  // blue
  vec3 color = vec3(0.0, 0.0, 1.0);

  // red
  if(uIsExporter) {
    color = vec3(1.0, 0.0, 0.0);
  }
  
  float dist = distance(vec3(0.0, 0.0, 0.0), vPosition);
  if(vProgressIndex < uProgress) {
    alpha = 1.0;
  }

  gl_FragColor = vec4(color, alpha);
}
