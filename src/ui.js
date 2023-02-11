import PicoGL from 'picogl';
import app from './app';
import utils from './utils/utils';
import gaussianFilter from './filters/gaussianFilter';

let webglCanvas = document.getElementById( 'webgl-canvas-container' );
let webgl_canvas_layers = window.document.styleSheets[1];

app.function.menuBar = {
  main: {
    loadImageMenuBar: async ( files ) => {
      return new Promise( async ( resolve ) => {
        imageDropdown.style.display = 'inline';

        let getBlobFromPath = ( file, callback ) => {
          let xhr = new XMLHttpRequest();
          xhr.onload = function() {
            //let blob = xhr.response;
            callback( xhr.response );
          };
          xhr.open( 'GET', file );
          xhr.responseType = 'blob';
          xhr.send();
        };

        // for each image in the image array
        for( let j = 0; j < files.length; j++ ){
          await new Promise( async ( resolve ) => {
            let file = files[j];

            await getBlobFromPath(file, async (blob) => {

              let imageUrl = window.URL.createObjectURL(blob)
              let imageName = file.replace(/^.*[\\\/]/, '')

              // create an image object for the dropdown to access
              let imageObject = {
                index: app.imageArray.length,
                type: 'Image',
                url: imageUrl,
                name: imageName,
              };

              await app.function.menuBar.loadImage.append(imageObject); // create a dropdown item

              app.imageArray.push(imageObject); // push image url and name to the array

              await utils.loadImages([imageObject.url]).then(([blob]) => {
                return new Promise(async (resolve) => {
                  let textures = [];
                  // for each bitDepth dropdown item
                  // create a texture with that bitDepth
                  for (let k = 0; k < app.initial.bitDepths.length; k++) {
                    textures.push(
                       app.createTexture2D(blob, {
                         internalFormat: app.initial.bitDepths[k].internalFormat,
                         flipY: true,
                         maxAnisotropy: PicoGL.WEBGL_INFO.MAX_TEXTURE_ANISOTROPY,
                         wrapS: PicoGL.CLAMP_TO_EDGE,
                         wrapT: PicoGL.CLAMP_TO_EDGE
                       })
                    )
                  }

                  resolve(app.textureArray.push(textures)); // push bit depths to the texture array

                });

              });

              img.src = file;
              img.style.display = "inline-block";

              app.texture = app.textureArray[imageDropdown.selectedIndex][bitdepth.selectedIndex];

              let name = `Image ${ j }`
              let styleName = `Output Canvas ${ name }`; // CSS style sheet canvas style name

              let z = 600; // for z index

              webgl_canvas_layers.insertRule(`#${ styleName.replace(/\s/g, '') } {
                max-width: ${ 800 }px;
                max-height: ${ 600 }px;
                z-index: ${ z };
              }`, j );
              let canvas = document.createElement('canvas');
              canvas.id = styleName.replace(/\s/g, '');
              canvas.width = app.texture.width;
              canvas.height = app.texture.height;

              // insert canvas into '#webgl-canvas-collection' div
              webglCanvas.insertBefore( canvas, webglCanvas.childNodes[ j ] ); // insert at Index "i"

              resolve()
            });
          })
        }


        // after all images are loaded
        // render the images at index 0
        imageDropdown.selectedIndex = 0; // set dropdown to index 0

        img.src = app.imageArray[imageDropdown.selectedIndex].url; // set the preview window image to the selected index
        img.style.display = "inline-block";

        app.texture = app.textureArray[imageDropdown.selectedIndex][bitdepth.selectedIndex];

        // Get and set the active WebGL output canvas
        app.layerCollection.webglCanvas = webglCanvas.children[ imageDropdown.selectedIndex ]; // get the webgl output canvas
        app.layerCollection.webglCTX = app.layerCollection.webglCanvas.getContext('2d'); // set the webgl canvas context

        app.needsRender = true;
        await app.function.webGL.draw(); // DRAW  - draw the image on the canvas //

      });
    },
  },
  dropdown:{
    bitdepth: () => {
      return new Promise( async ( resolve ) => {
        app.texture = app.textureArray[ imageDropdown.selectedIndex ][ bitdepth.selectedIndex ];
        app.defaultMenuBar.dropdownIndex.bitDepth = bitdepth.selectedIndex;
        app.needsRender = true;
        await app.function.webGL.draw(); // DRAW  - draw the image on the canvas //
      });
    },
  },
  loadImage:{
    append: async ( image ) => {
      return new Promise( ( resolve ) => {
        let option = document.createElement( 'option' ); // create a dropdown item
        option.innerHTML = image.name; // use the image name as the dropdown item name
        imageDropdown.append( option ); // place it in the dropdown
        imageDropdown.selectedIndex = imageDropdown.length - 1;
        resolve();
      });
    },
    update: ( boolean ) => {
      return new Promise( async ( resolve ) => {

        let destCtx = app.layerCollection.webglCTX; // get the context for WebGL output us
        destCtx.clearRect(0, 0, app.texture.width, app.texture.height);

        app.layerCollection.renderIndex = imageDropdown.selectedIndex;

        img.src = app.imageArray[imageDropdown.selectedIndex].url;
        img.style.display = "inline-block";

        app.texture = app.textureArray[imageDropdown.selectedIndex][bitdepth.selectedIndex];

        // Get and set the active WebGL output canvas
        app.layerCollection.webglCanvas = webglCanvas.children[ imageDropdown.selectedIndex ]; // get the webgl output canvas
        app.layerCollection.webglCTX = app.layerCollection.webglCanvas.getContext('2d'); // set the webgl canvas context

        app.needsRender = true;
        await app.function.webGL.draw(); // DRAW  - draw the image on the canvas //

        resolve();
      });
    },
  },
};





///////////////////// LOAD IMAGES //////////////////////////
///////////////////// LOAD IMAGES //////////////////////////
///////////////////// LOAD IMAGES //////////////////////////
let img = document.getElementById( 'reference-image' );
let imageDropdown = document.getElementById( 'selectImageDropdown' );

imageDropdown.oninput = async ( e ) => {
  await app.function.menuBar.loadImage.update(); // get image from dropdown
  e.stopPropagation();
  e.preventDefault();
};

let imageFiles = [
  'images/image.jpg',
  'images/image1.png'
]
app.function.menuBar.main.loadImageMenuBar( imageFiles );


let formatValue = ( x ) => x.toFixed( 2 );
let setupSlider = ( name, uniformIndex ) => {
  let slider = document.getElementById( `${name}Slider` );
  let label = document.getElementById( `${name}Amount` );

  slider.oninput = async () => {
    let v = slider.value / 1000.0;
    if( v === 0 ){
      v = 0.0;
    }else{
      v = Math.pow( 2.0, ( v * 12.0 ) ) * 0.25;
    }
    label.innerHTML = formatValue( v );
    //app.filterParams.set( uniformIndex, v ).update();
    app.filterParams.Gaussian.set( uniformIndex, v ).update(); // alpha radius
    app.needsRender = true;
    await app.function.webGL.draw(); // DRAW  - draw the image on the canvas //
  }
  slider.oninput();
}
setupSlider( 'Gaussian', 1 );


///////////////////// FILTER DROPDOWN //////////////////////////
let filter = { name: "Test Electron 4 bit - 16 bit", filter: gaussianFilter };
let filterArray = [ filter ];
app.activeFilter = filterArray[ 0 ].filter;
///////////////////// END FILTER DROPDOWN //////////////////////////


// create dropdown for bit-depth selection //
let bitdepth = document.getElementById( 'bitDepthDropdown' );
bitdepth.oninput = app.function.menuBar.dropdown.bitdepth;

// "app.initial.bitDepths" object that contains the
// bit-depth dropdown parameters
// for each item populate the bit-depth dropdown
// with their parameters
app.initial.bitDepths.forEach( depth => {
  let option = document.createElement( 'option' );
  option.innerHTML = depth.name;
  bitdepth.append( option );
});
bitdepth.selectedIndex = app.layerCollection.menuBar.dropdownIndex.bitDepth;
// End color bit depth dropdown //

