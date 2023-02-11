#version 300 es
precision highp float;

layout(std140, column_major) uniform;

uniform sampler2D throughputBuffer;

in vec2 vUV;

layout(location=0) out vec4 outColor;


void main() {

vec4 base = texture( throughputBuffer, vUV ).rgba;

outColor = base;

}
