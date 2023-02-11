import PicoGL from 'picogl';

import app from '../app';
import screenQuad from '../geometry/screenQuad';
import vertexShaderSource from '../shaders/quad.vert';

import fragmentShaderGaussianHorizontalAlpha from '../shaders/separableGaussian.Horizontal.frag';
import fragmentShaderGaussianVerticalAlpha from '../shaders/separableGaussian.Vertical.frag';
import fragmentShaderImageThroughput from '../shaders/imageThroughput.frag';

const filter = {
  name: 'Test Electron 4 bit - 16 bit', drawCall: null
};

const shaders = [
  [ vertexShaderSource, fragmentShaderGaussianHorizontalAlpha ],
  [ vertexShaderSource, fragmentShaderGaussianVerticalAlpha ],
  [ vertexShaderSource, fragmentShaderImageThroughput ],
];

app.createPrograms( ...shaders ).then( ( programs ) => {

  let drawCall_GaussianHorizontalAlpha = app.createDrawCall( programs[ 0 ], screenQuad );
  drawCall_GaussianHorizontalAlpha.uniformBlock( 'FilterParams', app.filterParams.Gaussian );

  let drawCall_GaussianVerticalAlpha = app.createDrawCall( programs[ 1 ], screenQuad );
  drawCall_GaussianVerticalAlpha.uniformBlock( 'FilterParams', app.filterParams.Gaussian );

  let drawCall_ImageThroughPut = app.createDrawCall( programs[ 2 ], screenQuad );

  let buffer = [];
  for( let i = 0; i < app.initial.bitDepths.length; i++ ){
    // for all bit-depths
    let temp = []; // clear the temp frame buffer array
    for( let j = 0; j < 1; j++ ){
      // create 5 temp frame buffers
      // push each frame buffer to the temp array
        temp.push(
          app.createFramebuffer()
          .colorTarget( 0, app.createTexture2D(
            app.width, app.height, {
              internalFormat: app.initial.bitDepths[ i ].internalFormat,
              flipY: true,
              maxAnisotropy: PicoGL.WEBGL_INFO.MAX_TEXTURE_ANISOTROPY,
              wrapS: PicoGL.CLAMP_TO_EDGE,
              wrapT: PicoGL.CLAMP_TO_EDGE
            } )
          )
        )
    }
    let result = []; // clear the result frame buffer array
    for( let k = 0; k < 1; k++ ){
      // create 2 result frame buffers
      // push each frame buffer to the result array
      result.push(
        app.createFramebuffer()
        .colorTarget( 0, app.createTexture2D(
          app.width, app.height, {
            internalFormat: app.initial.bitDepths[ i ].internalFormat,
            flipY: true,
            maxAnisotropy: PicoGL.WEBGL_INFO.MAX_TEXTURE_ANISOTROPY,
            wrapS: PicoGL.CLAMP_TO_EDGE,
            wrapT: PicoGL.CLAMP_TO_EDGE
          } )
        )
      )
    }
    // once both the temp and result arrays are filled
    // push those arrays to the buffer array
    // at the index of its associated bit-depth
    buffer.push( [ temp, result ] );
  }


  console.assert(
    buffer[ app.layerCollection.menuBar.dropdownIndex.bitDepth ][ 0 ][ 0 ].getStatus() === PicoGL.FRAMEBUFFER_COMPLETE,
    buffer[ app.layerCollection.menuBar.dropdownIndex.bitDepth ][ 1 ][ 0 ].getStatus() === PicoGL.FRAMEBUFFER_COMPLETE,
    'G-buffer framebuffer is not complete!' );


    let temp = 0; // the index for the temp frame buffer array
    let result = 1; // the index for the result frame buffer array

    filter.drawCall = {
      draw: () => {

        let bitdepthIndex = app.defaultMenuBar.dropdownIndex.bitDepth;

        // Check render targets have correct size
        if ( buffer[ bitdepthIndex ][ temp ][ 0 ].width !== app.width || buffer[ bitdepthIndex ][ temp ][ 0 ].height !== app.height ) {

          for( let i = 0; i < app.initial.bitDepths.length; i++ ){

            for( let j = 0; j < 1; j++ ){
              buffer[ i ][ 0 ][ j ].resize( app.width, app.height );
            }

            for( let k = 0; k < 1; k++ ){
              buffer[ i ][ 1 ][ k ].resize( app.width, app.height );
            }
          }
        }




          // Call the Gaussian Blur filter
          drawCall_GaussianHorizontalAlpha.texture( 'tex', app.texture );
          // Write to Buffer
          app.drawFramebuffer( buffer[ bitdepthIndex ][ temp ][ 0 ] ).clear();
          drawCall_GaussianHorizontalAlpha.draw();

          // Feed output of previous stage in next stage
          drawCall_GaussianVerticalAlpha.texture( 'alphaSeparableBuffer', buffer[ bitdepthIndex ][ temp ][ 0 ].colorAttachments[ 0 ] );

        /*
        // Write to screen
        app.defaultDrawFramebuffer().clear();
        drawCall_GaussianVerticalAlpha.draw();
        // !!  NOTE THAT IF YOU ENABLE THE ABOVE WRITE TO SCREEN CODE
        // !!  AND THEN COMMENT OUT THE CODE BELOW THIS LINE
        // !!  EVEN THOUGH THE DEMO IS SET TO USE THE 4-BIT BUFFER
        // !!  THE RESULTS WILL BE AS IF YOU ARE NOT WORKING WITH 4-BIT DATA AND DISPLAY AS IF IT'S 8-BIT BUFFER
        // !!  SIMILAR TO WHEN UPDATING TO ELECTRON 21.4.1 OR GREATER
        */


          // Write to Buffer
          app.drawFramebuffer( buffer[ bitdepthIndex ][ result ][ 0 ] ).clear();
          drawCall_GaussianVerticalAlpha.draw();

        // Pass to though put filer
        // NOTE!!!
        // If you bypass this the resulting image appears as and 8 bit image even though it is in 4 bit
        drawCall_ImageThroughPut.texture( 'throughputBuffer', buffer[ bitdepthIndex ][ result ][ 0 ].colorAttachments[ 0 ] );

        // Write to screen
        app.defaultDrawFramebuffer().clear();
        drawCall_ImageThroughPut.draw();


      },

    };
  });

  // Export right away, but shaders still need to be compiled
  export default filter;
