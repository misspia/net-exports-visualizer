precision highp float;

uniform bool uIsExporter;

void main() {
  // blue
  vec3 color = vec3(0.0, 0.0, 1.0);
  
  // red
  if(uIsExporter) {
    color = vec3(1.0, 0.0, 0.0);
  }
  
  gl_FragColor = vec4(color, 1.0);
}
