import PicoGL from "picogl";

import app from '../app';

// Fullscreen triangle with positions and uvs
// (will actually be clipped to quad with uvs in range 0-1)
const positions = app.createVertexBuffer( PicoGL.FLOAT, 4,
  new Float32Array( [
    -1, -1, 0, 0, // x, y, uvx, uvy
    3, -1, 2, 0, // x, y, uvx, uvy
    -1, 3, 0, 2 // x, y, uvx, uvy
  ] )
);

const vertexArray = app.createVertexArray()
  .vertexAttributeBuffer( 0, positions );

export default vertexArray;
