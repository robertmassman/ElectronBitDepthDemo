import commonjs from '@rollup/plugin-commonjs';
import glsl from 'rollup-plugin-glsl';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    resolve(),
    glsl({
      compress: false,
      include: 'src/shaders/**'
    }),
    commonjs({
      include: [
        'node_modules/**'
      ],
      exclude: [
        'node_modules/process-es6/**'
      ]
    })
  ]
};
