#version 300 es
precision highp float;

layout(std140, column_major) uniform;

uniform sampler2D alphaSeparableBuffer;

uniform FilterParams {
  vec4 step;
  float alphaRadius;
  float betaRadius;
  float ratio;
  float gaussianWindowSize;
};

in vec2 vUV;

layout(location=0) out vec4 alpha;


void main() {
  // scale the blur radius based weather or not the UI is active
  // if not the ratio is 1.0 so no blur scaling is applied
  float scaleRadius = ratio * alphaRadius;

  float N = min( pow( 2.0, ceil( log2( 3.0 * scaleRadius ) ) ), ratio * gaussianWindowSize );
  // Find closet square pixel
  // Do this by taking the scaled radius and multiplying it by 3
  // Then multiply that by 0.25 to derive 1/4 of the radius
  // Floor that value to get the closest integer
  // Then multiply that value by 4 to get the closest square pixel
  // if that value is below 2.0, 2.0 will be the minimum value provided

  // Then get the gaussian windows size and multiply it by the ratio to get the correct scale
  // Assign the smallest of this value to N
  //float N = min( max( floor( (3.0 * scaleRadius) * 0.25 ) * 4.0, 2.0 ), ratio * gaussianWindowSize );

  float scaler = -1.0 / ( 2.0 * scaleRadius * scaleRadius );

  vec4 baseColor_A = texture( alphaSeparableBuffer, vUV ).rgba;
  baseColor_A.rgb *= baseColor_A.a;
  vec4 totalColor_A = baseColor_A;
  float totalWeight_A = 1.0;
  vec2 delta = vec2( step.z, step.w );


  for ( float s = 1.0; s <= N; s += 2.0 ) {
    // Sample from left and right at same time to re-use weight
    vec2 p = vec2( s, s + 1.0 );

    vec2 weights_A = exp( p * p * scaler );
    float weight_A = dot( vec2( 1.0 ), weights_A) ;
    float offset_A = dot( p, weights_A) / weight_A;

    // baseColor_A = texture( alphaSeparableBuffer, vUV + delta * offset_A ).rgba;
    baseColor_A = texture( alphaSeparableBuffer, vUV + delta * offset_A );
    baseColor_A.rgb *= baseColor_A.a;
    totalColor_A += weight_A * baseColor_A;

    // baseColor_A = texture( alphaSeparableBuffer, vUV - delta * offset_A ).rgba;
    baseColor_A = texture( alphaSeparableBuffer, vUV - delta * offset_A );
    baseColor_A.rgb *= baseColor_A.a;
    totalColor_A += weight_A * baseColor_A;

    totalWeight_A += 2.0 * weight_A;

  }

  vec4 finalColor = clamp( totalColor_A / totalWeight_A, 0.0, 1.0 );
  alpha = vec4( finalColor );

}
