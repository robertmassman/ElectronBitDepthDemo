#version 300 es

layout(std140, column_major) uniform;

layout(location=0) in vec4 position; // xy: position, zw: uv

out vec2 vUV;

void main() {
  vUV = position.zw;
  gl_Position = vec4( position.xy, 0.0, 1.0 );
}
