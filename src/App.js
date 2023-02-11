import PicoGL from 'picogl';

let canvas = document.getElementById( 'webgl-canvas' );

let gl = canvas.getContext( 'webgl2' );
if ( !gl ) {
  document.body.innerHTML = 'WebGL2 is not supported in this browser. Please try again with Firefox or Chrome';
}

const app = PicoGL.createApp( canvas );
app.canvas = canvas;

app.defaultMenuBar = {
    /**
    * @param {object} dropdownIndex holds menu bar dropdown index values
    * @param {number} image the image index to be used by the WebGL filter
    * @param {number} filter the filter index to be used by the Pico WebGL program
    * @param {number} range the range index represents the largest gaussian value
    * that can be used by the WebGL filter
    * @param {number} window the window index represents the maximum size of the window
    * to be used by the WebGL filter when processing assign value weights by the WebGL filter
    * @param {number} recipe the recipe index used to create the current layers
    * @param {number} bitDepth the bit depth index used by the WebGL filter
    */
    dropdownIndex:{
      image: 0,
      filter: 0,
      range: 3,
      window: 0,
      recipe: 0,
      bitDepth: 0,
    },
};
app.filterParams = {
  /**
  * @param {array} Gaussian create the gaussian uniform buffer
  * @param {vec4} PicoGL.FLOAT_VEC4 step (inverse of viewport [ inverted image width, 0.0, 0.0, inverted image height ] )
  * @param {float} PicoGL.FLOAT alpha radius
  * @param {float} PicoGL.FLOAT beta radius
  * @param {float} PicoGL.FLOAT ratio
  * @param {float} PicoGL.FLOAT gaussian window size
  */
  Gaussian: app.createUniformBuffer([
    PicoGL.FLOAT_VEC4,
    PicoGL.FLOAT,
    PicoGL.FLOAT,
    PicoGL.FLOAT,
    PicoGL.FLOAT,
  ]),
};


/**
Set the default values for the WebGL filters uniform buffer
*/
// GAUSSIAN
app.filterParams.Gaussian.set( 0, [ 0.0, 0.0, 0.0, 0.0 ] ).update(); // step (inverse of viewport [ inverted image width, 0.0, 0.0, inverted image height ] )
app.filterParams.Gaussian.set( 1, 65.3 ).update(); // alpha radius
app.filterParams.Gaussian.set( 2, 3.29 ).update(); // beta radius
app.filterParams.Gaussian.set( 3, 1.0 ).update(); // ratio based on image scale ratio value
app.filterParams.Gaussian.set( 4, 3072.0 ).update(); // gaussian window size



/**
* @param {object} app.initial that contains the initial inputs for HTML and Layer creation
*/
app.initial = {

  /**
  * @param {object} zIndex that contains z indexes for HTML and Canvas elements
  */
  zIndex: {
    canvasWebGL: 600,
    canvasUI: 100,
    canvasUIActive: 200,
    canvasUIDetection: 500,
    canvasUITrasnparent: 199,
    menu: 1000,
  },

  /**
  * @param {array} bitDepths of objects that holds the WebGL bitdepth internal format
  * used when building filters and loading new images
  */
  bitDepths: [
    {
      name:"4 bit",
      internalFormat: PicoGL.RGBA4
    },{
      name:"8 bit",
      internalFormat: PicoGL.RGBA8
    },{
      name:"16 bit",
      internalFormat: PicoGL.RGBA16F
    },//{
      //name:"32 bit",
      //internalFormat: PicoGL.RGBA32F
      //},
    ],
  };

  /**
  * @param {boolean} app.needsRender set this to "true" whenever we want to trigger a render
  */
  app.needsRender = false;

  /**
  * @param {boolean} app.renderAccepted "true" when WebGL render is possible
  */
  app.renderAccepted = false;


  /**
  * @param {object} app.function that contains the funcitons used by the app
  * @param {object} menuBar funcitons used and created in menu bar js
  * @param {object} layerWindow funcitons used and created in layer window js
  * @param {object} frequencyUI funcitons used and created in frequency js
  * @param {object} sequencer funcitons used and created in sequencer js
  * @param {object} webGL funcitons used and created in app js
  */
  app.function = {
    menuBar: null,
    layerWindow: null,
    frequencyUI: null,
    sequencer: null,
    webGL: null,
  };

  app.texture = null; // the texture to be used by the WebGL filter
  app.textureArray = []; // the array of textures used by the WebGL filter. Selected from the dropdown in the menubar
  app.imageArray = []; // the array of image URLs/Blobs used to create textures. Selected from the dropdown in the menubar. Also contains loaded images names
  app.recipeArray = []; // the array of recipes loaded. Selected from the dropdown in the menubar
  app.frequencyUI = null; // the object that contains the frequency UI parameters
  app.loadJSON = false;
  app.newWindow = {}; // the object that holds the new window

  /**
  * @param {array} app.commandPatternUndo an array that holds the applications input commands
  * allowing for the applications undo states.
  */
  app.commandPatternUndo = [];

  /**
  * @param {array} app.commandPatternRedo an array that holds the applications undone commands
  * allowing for the applications redo its undone states.
  */
  app.commandPatternRedo = [];

  /**
  * @param {object} app.layerCollection that contains the apps layers states
  */
  app.layerCollection = {

    /**
    * @param {array} layers holds all layer states
    */
    layers:[], // holds all layer states

    /**
    * @param {array} sampledTextures holds arrays of object layers
    * holds the layer states of the sampled texture
    * used by the program to create the sampled textures
    */
    sampledTextures: [],

    /**
    * @param {object} background holds canvas background
    * Populated when initial image is loaded from menu-bar.js
    * function "handleUploadedImages()"
    */
    background:{
      width: null,
      height: null,
      maxWidth: null,
      maxHeight: null,
    },

    /**
    * @param {number} activeIndex The index of the active layer in the layer window
    */
    activeIndex: undefined,

    /**
    * @param {number} renderIndex The index of the layers data to be used by the WebGL filter
    */
    renderIndex: undefined,

    /**
    * @param {object} offset The object that holds the mouses to layers offset relationship
    * @param {number} x clicked layer windows offsetLeft - mouse event "x"
    * @param {number} y clicked layer windows offsetTop - mouse event "y"
    * assigned when the mouse clicks on a layer
    */
    offset: {
      x: null,
      y: null,
    },

    /**
    * @param {canvas} webglCanvas The WebGL canvas to draw on
    */
    webglCanvas: null,

    /**
    * @param {context} webglCTX The WebGL context to draw in
    */
    webglCTX: null,

    /**
    * @param {canvas} uiCanvas The frequency UI canvas to draw on
    */
    uiCanvas: null,

    /**
    * @param {context} uiCTX The frequency UI context to draw in
    */
    uiCTX: null, // the frequency UI context to draw in

    /**
    * @param {object} menuBar holds menu bar states for recipe export
    */
    menuBar: JSON.parse( JSON.stringify( app.defaultMenuBar ) ),


    /**
    * @param {object} mouseEvent holds mouse interaciton boolean values with layers
    * @param {boolean} sliders if true active layers sliders are being updated
    * @param {boolean} frequency if true frequency UI is being updated
    * @param {boolean} sequencer if true sequncer is active
    * @param {boolean} keys if true there is a key being pressed
    * @param {boolean} dialog if true the layers rename dialog is open
    */
    mouseEvent:{
      sliders: false,
      frequency: false,
      sequencer: false,
      keys: false,
      dialog: false,
    },
  };

let animate;
  /**
  * @param {object} app.function.webGL holds functions that calls the WebGL filter
  * draw the results of that filter to the active layer
  */
  app.function.webGL = {
    /**
    * Resolves at the end so that calling the await function can be move forward
    *
    * @param {object} drawCanvas draw the results of that filter to the active layer
    * @param {object} p holds the position and scale used when drawing the canvas
    */
    drawCanvas: ( p ) => {
      return new Promise( async ( resolve ) => {
        let destCtx = app.layerCollection.webglCTX; // get the context for WebGL output us

        // update the active canvas with the WebGL filter output
        destCtx.clearRect(0, 0, app.texture.width, app.texture.height);
        destCtx.save();
        destCtx.transform( p._layerScale, 0, 0,  p._layerScale, p._x , p._y );
        destCtx.drawImage( app.canvas, 0, 0, app.texture.width, app.texture.height );
        destCtx.restore();

        resolve();
      });
    },
    /**
    * Checks to see if conditions for updating the active layers canvas are meet.
    * If all conditions are meet the active layers canvas will be updated with the WebGls filter output.
    *
    * @param {object} draw draw the results of that filter to the active layer
    */
    draw: () => {

      /**
      * @param {boolean} app.needsRender is true
      * @param {object} app.activeFilter is there a valid Pico WebGL program to be used
      * @param {object} app.activeFilter.drawCall is there a valid the Pico WebGL filter to be used
      * @param {object} app.texture is there a valid image texture to be used by the WebGL filter
      * @param {number} app.layerCollection.renderIndex active layers index whoes canvas will be updated
      * @param {number} layer.dropdownIndex.selectFrom if greater than 0 a select from dropdown item is selected
      * @param {number} layer.dropdownIndex.fillWith if greater than 0 a will with dropdown item is selected
      * @param {boolean} layer.switches.visible is true
      */
      if( app.needsRender && app.activeFilter &&
        app.activeFilter.drawCall && app.texture ){
          app.renderAccepted = true; // update WebGL filter
        }else{
          app.needsRender = false; // reset back to false
          app.renderAccepted = false; // prevent WebGL filter update
        }


        // if the render was accepted by the above logic
        // call the WebGL filter to be animated
        if( app.renderAccepted ){
          //let position = layer.position; // get layers position object

          let position ={
            "imageScale": 0.5,
             "radius": 1,
             "radiusScale": 0.5,
             "w": 1600,
             "h": 1200,
             "x": 0,
             "y": 0,
             "_layerScale": 1,
             "_imageScale": 1,
             "_w": 800,
             "_h": 600,
             "_x": 0,
             "_y": 0,
             "x_Offset": 0,
             "y_Offset": 0
          }

            // because the mouse is not moving the image does not need to be scaled
            // set the gaussian radius ratio back to normal
            app.filterParams.Gaussian.set( 3, 1.0 ).update();
            app.resize( app.texture.width, app.texture.height ); // reset the image to its original size


          // update the gaussian filters scale based on the images width and height
          // the image scale changes size based on weather or not the UI is active
          app.filterParams.Gaussian.set( 0, [ 1 / app.width, 0, 0, 1 / app.height ] ).update();

          app.activeFilter.drawCall.draw(); // represents the webgl functional object to be called now.


          //await app.function.webGL.drawCanvas( position );
          app.function.webGL.drawCanvas( position );
          // Set app render states back to their default states
          app.needsRender = false; // set to "false" so that another render is not triggered
          app.renderAccepted = false; // set to "false" so that the app can check to see if a render is needed

          animate = requestAnimationFrame( app.function.webGL.draw ); // start frame animation


        }else{
          // else there is nothing to be rendered
          // so cancel the animation

          // Set app render states back to their default states of false
          app.needsRender = false; // set to "false" so that another render is not triggered
          app.renderAccepted = false; // set to "false" so that the app can check to see if a render is needed
          cancelAnimationFrame( animate ); // stop the stop asking for draw commands

          }

        },
      };

export default app;
