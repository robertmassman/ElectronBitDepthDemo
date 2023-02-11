(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    ///////////////////////////////////////////////////////////////////////////////////
    // The MIT License (MIT)
    //
    // Copyright (c) 2017 Tarek Sherif
    //
    // Permission is hereby granted, free of charge, to any person obtaining a copy of
    // this software and associated documentation files (the "Software"), to deal in
    // the Software without restriction, including without limitation the rights to
    // use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    // the Software, and to permit persons to whom the Software is furnished to do so,
    // subject to the following conditions:
    //
    // The above copyright notice and this permission notice shall be included in all
    // copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    // FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    // COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    // IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    // CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    ///////////////////////////////////////////////////////////////////////////////////

    // https://www.khronos.org/registry/webgl/specs/1.0/
    // https://www.khronos.org/registry/webgl/specs/latest/2.0/#1.1
    const GL = {
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_BUFFER_BIT
            @private
         */
        DEPTH_BUFFER_BIT: 0x00000100,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BUFFER_BIT
            @private
         */
        STENCIL_BUFFER_BIT: 0x00000400,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_BUFFER_BIT
            @private
         */
        COLOR_BUFFER_BIT: 0x00004000,
        /**
            @type {GLenum}
            @name PicoGL.POINTS
            @private
         */
        POINTS: 0x0000,
        /**
            @type {GLenum}
            @name PicoGL.LINES
            @private
         */
        LINES: 0x0001,
        /**
            @type {GLenum}
            @name PicoGL.LINE_LOOP
            @private
         */
        LINE_LOOP: 0x0002,
        /**
            @type {GLenum}
            @name PicoGL.LINE_STRIP
            @private
         */
        LINE_STRIP: 0x0003,
        /**
            @type {GLenum}
            @name PicoGL.TRIANGLES
            @private
         */
        TRIANGLES: 0x0004,
        /**
            @type {GLenum}
            @name PicoGL.TRIANGLE_STRIP
            @private
         */
        TRIANGLE_STRIP: 0x0005,
        /**
            @type {GLenum}
            @name PicoGL.TRIANGLE_FAN
            @private
         */
        TRIANGLE_FAN: 0x0006,
        /**
            @type {GLenum}
            @name PicoGL.ZERO
            @private
         */
        ZERO: 0,
        /**
            @type {GLenum}
            @name PicoGL.ONE
            @private
         */
        ONE: 1,
        /**
            @type {GLenum}
            @name PicoGL.SRC_COLOR
            @private
         */
        SRC_COLOR: 0x0300,
        /**
            @type {GLenum}
            @name PicoGL.ONE_MINUS_SRC_COLOR
            @private
         */
        ONE_MINUS_SRC_COLOR: 0x0301,
        /**
            @type {GLenum}
            @name PicoGL.SRC_ALPHA
            @private
         */
        SRC_ALPHA: 0x0302,
        /**
            @type {GLenum}
            @name PicoGL.ONE_MINUS_SRC_ALPHA
            @private
         */
        ONE_MINUS_SRC_ALPHA: 0x0303,
        /**
            @type {GLenum}
            @name PicoGL.DST_ALPHA
            @private
         */
        DST_ALPHA: 0x0304,
        /**
            @type {GLenum}
            @name PicoGL.ONE_MINUS_DST_ALPHA
            @private
         */
        ONE_MINUS_DST_ALPHA: 0x0305,
        /**
            @type {GLenum}
            @name PicoGL.DST_COLOR
            @private
         */
        DST_COLOR: 0x0306,
        /**
            @type {GLenum}
            @name PicoGL.ONE_MINUS_DST_COLOR
            @private
         */
        ONE_MINUS_DST_COLOR: 0x0307,
        /**
            @type {GLenum}
            @name PicoGL.SRC_ALPHA_SATURATE
            @private
         */
        SRC_ALPHA_SATURATE: 0x0308,
        /**
            @type {GLenum}
            @name PicoGL.FUNC_ADD
            @private
         */
        FUNC_ADD: 0x8006,
        /**
            @type {GLenum}
            @name PicoGL.BLEND_EQUATION
            @private
         */
        BLEND_EQUATION: 0x8009,
        /**
            @type {GLenum}
            @name PicoGL.BLEND_EQUATION_RGB
            @private
         */
        BLEND_EQUATION_RGB: 0x8009,
        /**
            @type {GLenum}
            @name PicoGL.BLEND_EQUATION_ALPHA
            @private
         */
        BLEND_EQUATION_ALPHA: 0x883D,
        /**
            @type {GLenum}
            @name PicoGL.FUNC_SUBTRACT
            @private
         */
        FUNC_SUBTRACT: 0x800A,
        /**
            @type {GLenum}
            @name PicoGL.FUNC_REVERSE_SUBTRACT
            @private
         */
        FUNC_REVERSE_SUBTRACT: 0x800B,
        /**
            @type {GLenum}
            @name PicoGL.BLEND_DST_RGB
            @private
         */
        BLEND_DST_RGB: 0x80C8,
        /**
            @type {GLenum}
            @name PicoGL.BLEND_SRC_RGB
            @private
         */
        BLEND_SRC_RGB: 0x80C9,
        /**
            @type {GLenum}
            @name PicoGL.BLEND_DST_ALPHA
            @private
         */
        BLEND_DST_ALPHA: 0x80CA,
        /**
            @type {GLenum}
            @name PicoGL.BLEND_SRC_ALPHA
            @private
         */
        BLEND_SRC_ALPHA: 0x80CB,
        /**
            @type {GLenum}
            @name PicoGL.CONSTANT_COLOR
            @private
         */
        CONSTANT_COLOR: 0x8001,
        /**
            @type {GLenum}
            @name PicoGL.ONE_MINUS_CONSTANT_COLOR
            @private
         */
        ONE_MINUS_CONSTANT_COLOR: 0x8002,
        /**
            @type {GLenum}
            @name PicoGL.CONSTANT_ALPHA
            @private
         */
        CONSTANT_ALPHA: 0x8003,
        /**
            @type {GLenum}
            @name PicoGL.ONE_MINUS_CONSTANT_ALPHA
            @private
         */
        ONE_MINUS_CONSTANT_ALPHA: 0x8004,
        /**
            @type {GLenum}
            @name PicoGL.BLEND_COLOR
            @private
         */
        BLEND_COLOR: 0x8005,
        /**
            @type {GLenum}
            @name PicoGL.ARRAY_BUFFER
            @private
         */
        ARRAY_BUFFER: 0x8892,
        /**
            @type {GLenum}
            @name PicoGL.ELEMENT_ARRAY_BUFFER
            @private
         */
        ELEMENT_ARRAY_BUFFER: 0x8893,
        /**
            @type {GLenum}
            @name PicoGL.ARRAY_BUFFER_BINDING
            @private
         */
        ARRAY_BUFFER_BINDING: 0x8894,
        /**
            @type {GLenum}
            @name PicoGL.ELEMENT_ARRAY_BUFFER_BINDING
            @private
         */
        ELEMENT_ARRAY_BUFFER_BINDING: 0x8895,
        /**
            @type {GLenum}
            @name PicoGL.STREAM_DRAW
            @private
         */
        STREAM_DRAW: 0x88E0,
        /**
            @type {GLenum}
            @name PicoGL.STATIC_DRAW
            @private
         */
        STATIC_DRAW: 0x88E4,
        /**
            @type {GLenum}
            @name PicoGL.DYNAMIC_DRAW
            @private
         */
        DYNAMIC_DRAW: 0x88E8,
        /**
            @type {GLenum}
            @name PicoGL.BUFFER_SIZE
            @private
         */
        BUFFER_SIZE: 0x8764,
        /**
            @type {GLenum}
            @name PicoGL.BUFFER_USAGE
            @private
         */
        BUFFER_USAGE: 0x8765,
        /**
            @type {GLenum}
            @name PicoGL.CURRENT_VERTEX_ATTRIB
            @private
         */
        CURRENT_VERTEX_ATTRIB: 0x8626,
        /**
            @type {GLenum}
            @name PicoGL.FRONT
            @private
         */
        FRONT: 0x0404,
        /**
            @type {GLenum}
            @name PicoGL.BACK
            @private
         */
        BACK: 0x0405,
        /**
            @type {GLenum}
            @name PicoGL.FRONT_AND_BACK
            @private
         */
        FRONT_AND_BACK: 0x0408,
        /**
            @type {GLenum}
            @name PicoGL.CULL_FACE
            @private
         */
        CULL_FACE: 0x0B44,
        /**
            @type {GLenum}
            @name PicoGL.BLEND
            @private
         */
        BLEND: 0x0BE2,
        /**
            @type {GLenum}
            @name PicoGL.DITHER
            @private
         */
        DITHER: 0x0BD0,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_TEST
            @private
         */
        STENCIL_TEST: 0x0B90,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_TEST
            @private
         */
        DEPTH_TEST: 0x0B71,
        /**
            @type {GLenum}
            @name PicoGL.SCISSOR_TEST
            @private
         */
        SCISSOR_TEST: 0x0C11,
        /**
            @type {GLenum}
            @name PicoGL.POLYGON_OFFSET_FILL
            @private
         */
        POLYGON_OFFSET_FILL: 0x8037,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLE_ALPHA_TO_COVERAGE
            @private
         */
        SAMPLE_ALPHA_TO_COVERAGE: 0x809E,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLE_COVERAGE
            @private
         */
        SAMPLE_COVERAGE: 0x80A0,
        /**
            @type {GLenum}
            @name PicoGL.NO_ERROR
            @private
         */
        NO_ERROR: 0,
        /**
            @type {GLenum}
            @name PicoGL.INVALID_ENUM
            @private
         */
        INVALID_ENUM: 0x0500,
        /**
            @type {GLenum}
            @name PicoGL.INVALID_VALUE
            @private
         */
        INVALID_VALUE: 0x0501,
        /**
            @type {GLenum}
            @name PicoGL.INVALID_OPERATION
            @private
         */
        INVALID_OPERATION: 0x0502,
        /**
            @type {GLenum}
            @name PicoGL.OUT_OF_MEMORY
            @private
         */
        OUT_OF_MEMORY: 0x0505,
        /**
            @type {GLenum}
            @name PicoGL.CW
            @private
         */
        CW: 0x0900,
        /**
            @type {GLenum}
            @name PicoGL.CCW
            @private
         */
        CCW: 0x0901,
        /**
            @type {GLenum}
            @name PicoGL.LINE_WIDTH
            @private
         */
        LINE_WIDTH: 0x0B21,
        /**
            @type {GLenum}
            @name PicoGL.ALIASED_POINT_SIZE_RANGE
            @private
         */
        ALIASED_POINT_SIZE_RANGE: 0x846D,
        /**
            @type {GLenum}
            @name PicoGL.ALIASED_LINE_WIDTH_RANGE
            @private
         */
        ALIASED_LINE_WIDTH_RANGE: 0x846E,
        /**
            @type {GLenum}
            @name PicoGL.CULL_FACE_MODE
            @private
         */
        CULL_FACE_MODE: 0x0B45,
        /**
            @type {GLenum}
            @name PicoGL.FRONT_FACE
            @private
         */
        FRONT_FACE: 0x0B46,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_RANGE
            @private
         */
        DEPTH_RANGE: 0x0B70,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_WRITEMASK
            @private
         */
        DEPTH_WRITEMASK: 0x0B72,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_CLEAR_VALUE
            @private
         */
        DEPTH_CLEAR_VALUE: 0x0B73,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_FUNC
            @private
         */
        DEPTH_FUNC: 0x0B74,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_CLEAR_VALUE
            @private
         */
        STENCIL_CLEAR_VALUE: 0x0B91,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_FUNC
            @private
         */
        STENCIL_FUNC: 0x0B92,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_FAIL
            @private
         */
        STENCIL_FAIL: 0x0B94,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_PASS_DEPTH_FAIL
            @private
         */
        STENCIL_PASS_DEPTH_FAIL: 0x0B95,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_PASS_DEPTH_PASS
            @private
         */
        STENCIL_PASS_DEPTH_PASS: 0x0B96,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_REF
            @private
         */
        STENCIL_REF: 0x0B97,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_VALUE_MASK
            @private
         */
        STENCIL_VALUE_MASK: 0x0B93,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_WRITEMASK
            @private
         */
        STENCIL_WRITEMASK: 0x0B98,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BACK_FUNC
            @private
         */
        STENCIL_BACK_FUNC: 0x8800,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BACK_FAIL
            @private
         */
        STENCIL_BACK_FAIL: 0x8801,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BACK_PASS_DEPTH_FAIL
            @private
         */
        STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BACK_PASS_DEPTH_PASS
            @private
         */
        STENCIL_BACK_PASS_DEPTH_PASS: 0x8803,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BACK_REF
            @private
         */
        STENCIL_BACK_REF: 0x8CA3,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BACK_VALUE_MASK
            @private
         */
        STENCIL_BACK_VALUE_MASK: 0x8CA4,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BACK_WRITEMASK
            @private
         */
        STENCIL_BACK_WRITEMASK: 0x8CA5,
        /**
            @type {GLenum}
            @name PicoGL.VIEWPORT
            @private
         */
        VIEWPORT: 0x0BA2,
        /**
            @type {GLenum}
            @name PicoGL.SCISSOR_BOX
            @private
         */
        SCISSOR_BOX: 0x0C10,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_CLEAR_VALUE
            @private
         */
        COLOR_CLEAR_VALUE: 0x0C22,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_WRITEMASK
            @private
         */
        COLOR_WRITEMASK: 0x0C23,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_ALIGNMENT
            @private
         */
        UNPACK_ALIGNMENT: 0x0CF5,
        /**
            @type {GLenum}
            @name PicoGL.PACK_ALIGNMENT
            @private
         */
        PACK_ALIGNMENT: 0x0D05,
        /**
            @type {GLenum}
            @name PicoGL.MAX_TEXTURE_SIZE
            @private
         */
        MAX_TEXTURE_SIZE: 0x0D33,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VIEWPORT_DIMS
            @private
         */
        MAX_VIEWPORT_DIMS: 0x0D3A,
        /**
            @type {GLenum}
            @name PicoGL.SUBPIXEL_BITS
            @private
         */
        SUBPIXEL_BITS: 0x0D50,
        /**
            @type {GLenum}
            @name PicoGL.RED_BITS
            @private
         */
        RED_BITS: 0x0D52,
        /**
            @type {GLenum}
            @name PicoGL.GREEN_BITS
            @private
         */
        GREEN_BITS: 0x0D53,
        /**
            @type {GLenum}
            @name PicoGL.BLUE_BITS
            @private
         */
        BLUE_BITS: 0x0D54,
        /**
            @type {GLenum}
            @name PicoGL.ALPHA_BITS
            @private
         */
        ALPHA_BITS: 0x0D55,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_BITS
            @private
         */
        DEPTH_BITS: 0x0D56,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_BITS
            @private
         */
        STENCIL_BITS: 0x0D57,
        /**
            @type {GLenum}
            @name PicoGL.POLYGON_OFFSET_UNITS
            @private
         */
        POLYGON_OFFSET_UNITS: 0x2A00,
        /**
            @type {GLenum}
            @name PicoGL.POLYGON_OFFSET_FACTOR
            @private
         */
        POLYGON_OFFSET_FACTOR: 0x8038,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_BINDING_2D
            @private
         */
        TEXTURE_BINDING_2D: 0x8069,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLE_BUFFERS
            @private
         */
        SAMPLE_BUFFERS: 0x80A8,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLES
            @private
         */
        SAMPLES: 0x80A9,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLE_COVERAGE_VALUE
            @private
         */
        SAMPLE_COVERAGE_VALUE: 0x80AA,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLE_COVERAGE_INVERT
            @private
         */
        SAMPLE_COVERAGE_INVERT: 0x80AB,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_TEXTURE_FORMATS
            @private
         */
        COMPRESSED_TEXTURE_FORMATS: 0x86A3,
        /**
            @type {GLenum}
            @name PicoGL.DONT_CARE
            @private
         */
        DONT_CARE: 0x1100,
        /**
            @type {GLenum}
            @name PicoGL.FASTEST
            @private
         */
        FASTEST: 0x1101,
        /**
            @type {GLenum}
            @name PicoGL.NICEST
            @private
         */
        NICEST: 0x1102,
        /**
            @type {GLenum}
            @name PicoGL.GENERATE_MIPMAP_HINT
            @private
         */
        GENERATE_MIPMAP_HINT: 0x8192,
        /**
            @type {GLenum}
            @name PicoGL.BYTE
            @private
         */
        BYTE: 0x1400,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_BYTE
            @private
         */
        UNSIGNED_BYTE: 0x1401,
        /**
            @type {GLenum}
            @name PicoGL.SHORT
            @private
         */
        SHORT: 0x1402,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_SHORT
            @private
         */
        UNSIGNED_SHORT: 0x1403,
        /**
            @type {GLenum}
            @name PicoGL.INT
            @private
         */
        INT: 0x1404,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT
            @private
         */
        UNSIGNED_INT: 0x1405,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT
            @private
         */
        FLOAT: 0x1406,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_COMPONENT
            @private
         */
        DEPTH_COMPONENT: 0x1902,
        /**
            @type {GLenum}
            @name PicoGL.ALPHA
            @private
         */
        ALPHA: 0x1906,
        /**
            @type {GLenum}
            @name PicoGL.RGB
            @private
         */
        RGB: 0x1907,
        /**
            @type {GLenum}
            @name PicoGL.RGBA
            @private
         */
        RGBA: 0x1908,
        /**
            @type {GLenum}
            @name PicoGL.LUMINANCE
            @private
         */
        LUMINANCE: 0x1909,
        /**
            @type {GLenum}
            @name PicoGL.LUMINANCE_ALPHA
            @private
         */
        LUMINANCE_ALPHA: 0x190A,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_SHORT_4_4_4_4
            @private
         */
        UNSIGNED_SHORT_4_4_4_4: 0x8033,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_SHORT_5_5_5_1
            @private
         */
        UNSIGNED_SHORT_5_5_5_1: 0x8034,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_SHORT_5_6_5
            @private
         */
        UNSIGNED_SHORT_5_6_5: 0x8363,
        /**
            @type {GLenum}
            @name PicoGL.FRAGMENT_SHADER
            @private
         */
        FRAGMENT_SHADER: 0x8B30,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_SHADER
            @private
         */
        VERTEX_SHADER: 0x8B31,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VERTEX_ATTRIBS
            @private
         */
        MAX_VERTEX_ATTRIBS: 0x8869,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VERTEX_UNIFORM_VECTORS
            @private
         */
        MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VARYING_VECTORS
            @private
         */
        MAX_VARYING_VECTORS: 0x8DFC,
        /**
            @type {GLenum}
            @name PicoGL.MAX_COMBINED_TEXTURE_IMAGE_UNITS
            @private
         */
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VERTEX_TEXTURE_IMAGE_UNITS
            @private
         */
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C,
        /**
            @type {GLenum}
            @name PicoGL.MAX_TEXTURE_IMAGE_UNITS
            @private
         */
        MAX_TEXTURE_IMAGE_UNITS: 0x8872,
        /**
            @type {GLenum}
            @name PicoGL.MAX_FRAGMENT_UNIFORM_VECTORS
            @private
         */
        MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD,
        /**
            @type {GLenum}
            @name PicoGL.SHADER_TYPE
            @private
         */
        SHADER_TYPE: 0x8B4F,
        /**
            @type {GLenum}
            @name PicoGL.DELETE_STATUS
            @private
         */
        DELETE_STATUS: 0x8B80,
        /**
            @type {GLenum}
            @name PicoGL.LINK_STATUS
            @private
         */
        LINK_STATUS: 0x8B82,
        /**
            @type {GLenum}
            @name PicoGL.VALIDATE_STATUS
            @private
         */
        VALIDATE_STATUS: 0x8B83,
        /**
            @type {GLenum}
            @name PicoGL.ATTACHED_SHADERS
            @private
         */
        ATTACHED_SHADERS: 0x8B85,
        /**
            @type {GLenum}
            @name PicoGL.ACTIVE_UNIFORMS
            @private
         */
        ACTIVE_UNIFORMS: 0x8B86,
        /**
            @type {GLenum}
            @name PicoGL.ACTIVE_ATTRIBUTES
            @private
         */
        ACTIVE_ATTRIBUTES: 0x8B89,
        /**
            @type {GLenum}
            @name PicoGL.SHADING_LANGUAGE_VERSION
            @private
         */
        SHADING_LANGUAGE_VERSION: 0x8B8C,
        /**
            @type {GLenum}
            @name PicoGL.CURRENT_PROGRAM
            @private
         */
        CURRENT_PROGRAM: 0x8B8D,
        /**
            @type {GLenum}
            @name PicoGL.NEVER
            @private
         */
        NEVER: 0x0200,
        /**
            @type {GLenum}
            @name PicoGL.LESS
            @private
         */
        LESS: 0x0201,
        /**
            @type {GLenum}
            @name PicoGL.EQUAL
            @private
         */
        EQUAL: 0x0202,
        /**
            @type {GLenum}
            @name PicoGL.LEQUAL
            @private
         */
        LEQUAL: 0x0203,
        /**
            @type {GLenum}
            @name PicoGL.GREATER
            @private
         */
        GREATER: 0x0204,
        /**
            @type {GLenum}
            @name PicoGL.NOTEQUAL
            @private
         */
        NOTEQUAL: 0x0205,
        /**
            @type {GLenum}
            @name PicoGL.GEQUAL
            @private
         */
        GEQUAL: 0x0206,
        /**
            @type {GLenum}
            @name PicoGL.ALWAYS
            @private
         */
        ALWAYS: 0x0207,
        /**
            @type {GLenum}
            @name PicoGL.KEEP
            @private
         */
        KEEP: 0x1E00,
        /**
            @type {GLenum}
            @name PicoGL.REPLACE
            @private
         */
        REPLACE: 0x1E01,
        /**
            @type {GLenum}
            @name PicoGL.INCR
            @private
         */
        INCR: 0x1E02,
        /**
            @type {GLenum}
            @name PicoGL.DECR
            @private
         */
        DECR: 0x1E03,
        /**
            @type {GLenum}
            @name PicoGL.INVERT
            @private
         */
        INVERT: 0x150A,
        /**
            @type {GLenum}
            @name PicoGL.INCR_WRAP
            @private
         */
        INCR_WRAP: 0x8507,
        /**
            @type {GLenum}
            @name PicoGL.DECR_WRAP
            @private
         */
        DECR_WRAP: 0x8508,
        /**
            @type {GLenum}
            @name PicoGL.VENDOR
            @private
         */
        VENDOR: 0x1F00,
        /**
            @type {GLenum}
            @name PicoGL.RENDERER
            @private
         */
        RENDERER: 0x1F01,
        /**
            @type {GLenum}
            @name PicoGL.VERSION
            @private
         */
        VERSION: 0x1F02,
        /**
            @type {GLenum}
            @name PicoGL.NEAREST
            @private
         */
        NEAREST: 0x2600,
        /**
            @type {GLenum}
            @name PicoGL.LINEAR
            @private
         */
        LINEAR: 0x2601,
        /**
            @type {GLenum}
            @name PicoGL.NEAREST_MIPMAP_NEAREST
            @private
         */
        NEAREST_MIPMAP_NEAREST: 0x2700,
        /**
            @type {GLenum}
            @name PicoGL.LINEAR_MIPMAP_NEAREST
            @private
         */
        LINEAR_MIPMAP_NEAREST: 0x2701,
        /**
            @type {GLenum}
            @name PicoGL.NEAREST_MIPMAP_LINEAR
            @private
         */
        NEAREST_MIPMAP_LINEAR: 0x2702,
        /**
            @type {GLenum}
            @name PicoGL.LINEAR_MIPMAP_LINEAR
            @private
         */
        LINEAR_MIPMAP_LINEAR: 0x2703,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_MAG_FILTER
            @private
         */
        TEXTURE_MAG_FILTER: 0x2800,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_MIN_FILTER
            @private
         */
        TEXTURE_MIN_FILTER: 0x2801,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_WRAP_S
            @private
         */
        TEXTURE_WRAP_S: 0x2802,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_WRAP_T
            @private
         */
        TEXTURE_WRAP_T: 0x2803,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_2D
            @private
         */
        TEXTURE_2D: 0x0DE1,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE
            @private
         */
        TEXTURE: 0x1702,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_CUBE_MAP
            @private
         */
        TEXTURE_CUBE_MAP: 0x8513,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_BINDING_CUBE_MAP
            @private
         */
        TEXTURE_BINDING_CUBE_MAP: 0x8514,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_CUBE_MAP_POSITIVE_X
            @private
         */
        TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_CUBE_MAP_NEGATIVE_X
            @private
         */
        TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_CUBE_MAP_POSITIVE_Y
            @private
         */
        TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_CUBE_MAP_NEGATIVE_Y
            @private
         */
        TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_CUBE_MAP_POSITIVE_Z
            @private
         */
        TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_CUBE_MAP_NEGATIVE_Z
            @private
         */
        TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A,
        /**
            @type {GLenum}
            @name PicoGL.MAX_CUBE_MAP_TEXTURE_SIZE
            @private
         */
        MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE0
            @private
         */
        TEXTURE0: 0x84C0,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE1
            @private
         */
        TEXTURE1: 0x84C1,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE2
            @private
         */
        TEXTURE2: 0x84C2,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE3
            @private
         */
        TEXTURE3: 0x84C3,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE4
            @private
         */
        TEXTURE4: 0x84C4,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE5
            @private
         */
        TEXTURE5: 0x84C5,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE6
            @private
         */
        TEXTURE6: 0x84C6,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE7
            @private
         */
        TEXTURE7: 0x84C7,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE8
            @private
         */
        TEXTURE8: 0x84C8,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE9
            @private
         */
        TEXTURE9: 0x84C9,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE10
            @private
         */
        TEXTURE10: 0x84CA,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE11
            @private
         */
        TEXTURE11: 0x84CB,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE12
            @private
         */
        TEXTURE12: 0x84CC,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE13
            @private
         */
        TEXTURE13: 0x84CD,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE14
            @private
         */
        TEXTURE14: 0x84CE,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE15
            @private
         */
        TEXTURE15: 0x84CF,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE16
            @private
         */
        TEXTURE16: 0x84D0,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE17
            @private
         */
        TEXTURE17: 0x84D1,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE18
            @private
         */
        TEXTURE18: 0x84D2,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE19
            @private
         */
        TEXTURE19: 0x84D3,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE20
            @private
         */
        TEXTURE20: 0x84D4,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE21
            @private
         */
        TEXTURE21: 0x84D5,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE22
            @private
         */
        TEXTURE22: 0x84D6,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE23
            @private
         */
        TEXTURE23: 0x84D7,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE24
            @private
         */
        TEXTURE24: 0x84D8,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE25
            @private
         */
        TEXTURE25: 0x84D9,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE26
            @private
         */
        TEXTURE26: 0x84DA,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE27
            @private
         */
        TEXTURE27: 0x84DB,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE28
            @private
         */
        TEXTURE28: 0x84DC,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE29
            @private
         */
        TEXTURE29: 0x84DD,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE30
            @private
         */
        TEXTURE30: 0x84DE,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE31
            @private
         */
        TEXTURE31: 0x84DF,
        /**
            @type {GLenum}
            @name PicoGL.ACTIVE_TEXTURE
            @private
         */
        ACTIVE_TEXTURE: 0x84E0,
        /**
            @type {GLenum}
            @name PicoGL.REPEAT
            @private
         */
        REPEAT: 0x2901,
        /**
            @type {GLenum}
            @name PicoGL.CLAMP_TO_EDGE
            @private
         */
        CLAMP_TO_EDGE: 0x812F,
        /**
            @type {GLenum}
            @name PicoGL.MIRRORED_REPEAT
            @private
         */
        MIRRORED_REPEAT: 0x8370,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_VEC2
            @private
         */
        FLOAT_VEC2: 0x8B50,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_VEC3
            @private
         */
        FLOAT_VEC3: 0x8B51,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_VEC4
            @private
         */
        FLOAT_VEC4: 0x8B52,
        /**
            @type {GLenum}
            @name PicoGL.INT_VEC2
            @private
         */
        INT_VEC2: 0x8B53,
        /**
            @type {GLenum}
            @name PicoGL.INT_VEC3
            @private
         */
        INT_VEC3: 0x8B54,
        /**
            @type {GLenum}
            @name PicoGL.INT_VEC4
            @private
         */
        INT_VEC4: 0x8B55,
        /**
            @type {GLenum}
            @name PicoGL.BOOL
            @private
         */
        BOOL: 0x8B56,
        /**
            @type {GLenum}
            @name PicoGL.BOOL_VEC2
            @private
         */
        BOOL_VEC2: 0x8B57,
        /**
            @type {GLenum}
            @name PicoGL.BOOL_VEC3
            @private
         */
        BOOL_VEC3: 0x8B58,
        /**
            @type {GLenum}
            @name PicoGL.BOOL_VEC4
            @private
         */
        BOOL_VEC4: 0x8B59,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT2
            @private
         */
        FLOAT_MAT2: 0x8B5A,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT3
            @private
         */
        FLOAT_MAT3: 0x8B5B,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT4
            @private
         */
        FLOAT_MAT4: 0x8B5C,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLER_2D
            @private
         */
        SAMPLER_2D: 0x8B5E,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLER_CUBE
            @private
         */
        SAMPLER_CUBE: 0x8B60,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_ENABLED
            @private
         */
        VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_SIZE
            @private
         */
        VERTEX_ATTRIB_ARRAY_SIZE: 0x8623,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_STRIDE
            @private
         */
        VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_TYPE
            @private
         */
        VERTEX_ATTRIB_ARRAY_TYPE: 0x8625,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_NORMALIZED
            @private
         */
        VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_POINTER
            @private
         */
        VERTEX_ATTRIB_ARRAY_POINTER: 0x8645,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING
            @private
         */
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F,
        /**
            @type {GLenum}
            @name PicoGL.IMPLEMENTATION_COLOR_READ_TYPE
            @private
         */
        IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A,
        /**
            @type {GLenum}
            @name PicoGL.IMPLEMENTATION_COLOR_READ_FORMAT
            @private
         */
        IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B,
        /**
            @type {GLenum}
            @name PicoGL.COMPILE_STATUS
            @private
         */
        COMPILE_STATUS: 0x8B81,
        /**
            @type {GLenum}
            @name PicoGL.LOW_FLOAT
            @private
         */
        LOW_FLOAT: 0x8DF0,
        /**
            @type {GLenum}
            @name PicoGL.MEDIUM_FLOAT
            @private
         */
        MEDIUM_FLOAT: 0x8DF1,
        /**
            @type {GLenum}
            @name PicoGL.HIGH_FLOAT
            @private
         */
        HIGH_FLOAT: 0x8DF2,
        /**
            @type {GLenum}
            @name PicoGL.LOW_INT
            @private
         */
        LOW_INT: 0x8DF3,
        /**
            @type {GLenum}
            @name PicoGL.MEDIUM_INT
            @private
         */
        MEDIUM_INT: 0x8DF4,
        /**
            @type {GLenum}
            @name PicoGL.HIGH_INT
            @private
         */
        HIGH_INT: 0x8DF5,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER
            @private
         */
        FRAMEBUFFER: 0x8D40,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER
            @private
         */
        RENDERBUFFER: 0x8D41,
        /**
            @type {GLenum}
            @name PicoGL.RGBA4
            @private
         */
        RGBA4: 0x8056,
        /**
            @type {GLenum}
            @name PicoGL.RGB5_A1
            @private
         */
        RGB5_A1: 0x8057,
        /**
            @type {GLenum}
            @name PicoGL.RGB565
            @private
         */
        RGB565: 0x8D62,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_COMPONENT16
            @private
         */
        DEPTH_COMPONENT16: 0x81A5,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_INDEX
            @private
         */
        STENCIL_INDEX: 0x1901,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_INDEX8
            @private
         */
        STENCIL_INDEX8: 0x8D48,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_STENCIL
            @private
         */
        DEPTH_STENCIL: 0x84F9,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_WIDTH
            @private
         */
        RENDERBUFFER_WIDTH: 0x8D42,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_HEIGHT
            @private
         */
        RENDERBUFFER_HEIGHT: 0x8D43,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_INTERNAL_FORMAT
            @private
         */
        RENDERBUFFER_INTERNAL_FORMAT: 0x8D44,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_RED_SIZE
            @private
         */
        RENDERBUFFER_RED_SIZE: 0x8D50,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_GREEN_SIZE
            @private
         */
        RENDERBUFFER_GREEN_SIZE: 0x8D51,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_BLUE_SIZE
            @private
         */
        RENDERBUFFER_BLUE_SIZE: 0x8D52,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_ALPHA_SIZE
            @private
         */
        RENDERBUFFER_ALPHA_SIZE: 0x8D53,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_DEPTH_SIZE
            @private
         */
        RENDERBUFFER_DEPTH_SIZE: 0x8D54,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_STENCIL_SIZE
            @private
         */
        RENDERBUFFER_STENCIL_SIZE: 0x8D55,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME
            @private
         */
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL
            @private
         */
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT0
            @private
         */
        COLOR_ATTACHMENT0: 0x8CE0,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_ATTACHMENT
            @private
         */
        DEPTH_ATTACHMENT: 0x8D00,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL_ATTACHMENT
            @private
         */
        STENCIL_ATTACHMENT: 0x8D20,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_STENCIL_ATTACHMENT
            @private
         */
        DEPTH_STENCIL_ATTACHMENT: 0x821A,
        /**
            @type {GLenum}
            @name PicoGL.NONE
            @private
         */
        NONE: 0,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_COMPLETE
            @private
         */
        FRAMEBUFFER_COMPLETE: 0x8CD5,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_INCOMPLETE_ATTACHMENT
            @private
         */
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT
            @private
         */
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_INCOMPLETE_DIMENSIONS
            @private
         */
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_UNSUPPORTED
            @private
         */
        FRAMEBUFFER_UNSUPPORTED: 0x8CDD,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_BINDING
            @private
         */
        FRAMEBUFFER_BINDING: 0x8CA6,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_BINDING
            @private
         */
        RENDERBUFFER_BINDING: 0x8CA7,
        /**
            @type {GLenum}
            @name PicoGL.MAX_RENDERBUFFER_SIZE
            @private
         */
        MAX_RENDERBUFFER_SIZE: 0x84E8,
        /**
            @type {GLenum}
            @name PicoGL.INVALID_FRAMEBUFFER_OPERATION
            @private
         */
        INVALID_FRAMEBUFFER_OPERATION: 0x0506,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_FLIP_Y_WEBGL
            @private
         */
        UNPACK_FLIP_Y_WEBGL: 0x9240,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_PREMULTIPLY_ALPHA_WEBGL
            @private
         */
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241,
        /**
            @type {GLenum}
            @name PicoGL.CONTEXT_LOST_WEBGL
            @private
         */
        CONTEXT_LOST_WEBGL: 0x9242,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_COLORSPACE_CONVERSION_WEBGL
            @private
         */
        UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243,
        /**
            @type {GLenum}
            @name PicoGL.BROWSER_DEFAULT_WEBGL
            @private
         */
        BROWSER_DEFAULT_WEBGL: 0x9244,
        /**
            @type {GLenum}
            @name PicoGL.READ_BUFFER
            @private
         */
        READ_BUFFER: 0x0C02,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_ROW_LENGTH
            @private
         */
        UNPACK_ROW_LENGTH: 0x0CF2,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_SKIP_ROWS
            @private
         */
        UNPACK_SKIP_ROWS: 0x0CF3,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_SKIP_PIXELS
            @private
         */
        UNPACK_SKIP_PIXELS: 0x0CF4,
        /**
            @type {GLenum}
            @name PicoGL.PACK_ROW_LENGTH
            @private
         */
        PACK_ROW_LENGTH: 0x0D02,
        /**
            @type {GLenum}
            @name PicoGL.PACK_SKIP_ROWS
            @private
         */
        PACK_SKIP_ROWS: 0x0D03,
        /**
            @type {GLenum}
            @name PicoGL.PACK_SKIP_PIXELS
            @private
         */
        PACK_SKIP_PIXELS: 0x0D04,
        /**
            @type {GLenum}
            @name PicoGL.COLOR
            @private
         */
        COLOR: 0x1800,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH
            @private
         */
        DEPTH: 0x1801,
        /**
            @type {GLenum}
            @name PicoGL.STENCIL
            @private
         */
        STENCIL: 0x1802,
        /**
            @type {GLenum}
            @name PicoGL.RED
            @private
         */
        RED: 0x1903,
        /**
            @type {GLenum}
            @name PicoGL.RGB8
            @private
         */
        RGB8: 0x8051,
        /**
            @type {GLenum}
            @name PicoGL.RGBA8
            @private
         */
        RGBA8: 0x8058,
        /**
            @type {GLenum}
            @name PicoGL.RGB10_A2
            @private
         */
        RGB10_A2: 0x8059,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_BINDING_3D
            @private
         */
        TEXTURE_BINDING_3D: 0x806A,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_SKIP_IMAGES
            @private
         */
        UNPACK_SKIP_IMAGES: 0x806D,
        /**
            @type {GLenum}
            @name PicoGL.UNPACK_IMAGE_HEIGHT
            @private
         */
        UNPACK_IMAGE_HEIGHT: 0x806E,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_3D
            @private
         */
        TEXTURE_3D: 0x806F,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_WRAP_R
            @private
         */
        TEXTURE_WRAP_R: 0x8072,
        /**
            @type {GLenum}
            @name PicoGL.MAX_3D_TEXTURE_SIZE
            @private
         */
        MAX_3D_TEXTURE_SIZE: 0x8073,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_2_10_10_10_REV
            @private
         */
        UNSIGNED_INT_2_10_10_10_REV: 0x8368,
        /**
            @type {GLenum}
            @name PicoGL.MAX_ELEMENTS_VERTICES
            @private
         */
        MAX_ELEMENTS_VERTICES: 0x80E8,
        /**
            @type {GLenum}
            @name PicoGL.MAX_ELEMENTS_INDICES
            @private
         */
        MAX_ELEMENTS_INDICES: 0x80E9,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_MIN_LOD
            @private
         */
        TEXTURE_MIN_LOD: 0x813A,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_MAX_LOD
            @private
         */
        TEXTURE_MAX_LOD: 0x813B,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_BASE_LEVEL
            @private
         */
        TEXTURE_BASE_LEVEL: 0x813C,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_MAX_LEVEL
            @private
         */
        TEXTURE_MAX_LEVEL: 0x813D,
        /**
            @type {GLenum}
            @name PicoGL.MIN
            @private
         */
        MIN: 0x8007,
        /**
            @type {GLenum}
            @name PicoGL.MAX
            @private
         */
        MAX: 0x8008,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_COMPONENT24
            @private
         */
        DEPTH_COMPONENT24: 0x81A6,
        /**
            @type {GLenum}
            @name PicoGL.MAX_TEXTURE_LOD_BIAS
            @private
         */
        MAX_TEXTURE_LOD_BIAS: 0x84FD,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_COMPARE_MODE
            @private
         */
        TEXTURE_COMPARE_MODE: 0x884C,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_COMPARE_FUNC
            @private
         */
        TEXTURE_COMPARE_FUNC: 0x884D,
        /**
            @type {GLenum}
            @name PicoGL.CURRENT_QUERY
            @private
         */
        CURRENT_QUERY: 0x8865,
        /**
            @type {GLenum}
            @name PicoGL.QUERY_RESULT
            @private
         */
        QUERY_RESULT: 0x8866,
        /**
            @type {GLenum}
            @name PicoGL.QUERY_RESULT_AVAILABLE
            @private
         */
        QUERY_RESULT_AVAILABLE: 0x8867,
        /**
            @type {GLenum}
            @name PicoGL.STREAM_READ
            @private
         */
        STREAM_READ: 0x88E1,
        /**
            @type {GLenum}
            @name PicoGL.STREAM_COPY
            @private
         */
        STREAM_COPY: 0x88E2,
        /**
            @type {GLenum}
            @name PicoGL.STATIC_READ
            @private
         */
        STATIC_READ: 0x88E5,
        /**
            @type {GLenum}
            @name PicoGL.STATIC_COPY
            @private
         */
        STATIC_COPY: 0x88E6,
        /**
            @type {GLenum}
            @name PicoGL.DYNAMIC_READ
            @private
         */
        DYNAMIC_READ: 0x88E9,
        /**
            @type {GLenum}
            @name PicoGL.DYNAMIC_COPY
            @private
         */
        DYNAMIC_COPY: 0x88EA,
        /**
            @type {GLenum}
            @name PicoGL.MAX_DRAW_BUFFERS
            @private
         */
        MAX_DRAW_BUFFERS: 0x8824,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER0
            @private
         */
        DRAW_BUFFER0: 0x8825,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER1
            @private
         */
        DRAW_BUFFER1: 0x8826,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER2
            @private
         */
        DRAW_BUFFER2: 0x8827,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER3
            @private
         */
        DRAW_BUFFER3: 0x8828,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER4
            @private
         */
        DRAW_BUFFER4: 0x8829,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER5
            @private
         */
        DRAW_BUFFER5: 0x882A,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER6
            @private
         */
        DRAW_BUFFER6: 0x882B,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER7
            @private
         */
        DRAW_BUFFER7: 0x882C,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER8
            @private
         */
        DRAW_BUFFER8: 0x882D,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER9
            @private
         */
        DRAW_BUFFER9: 0x882E,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER10
            @private
         */
        DRAW_BUFFER10: 0x882F,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER11
            @private
         */
        DRAW_BUFFER11: 0x8830,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER12
            @private
         */
        DRAW_BUFFER12: 0x8831,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER13
            @private
         */
        DRAW_BUFFER13: 0x8832,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER14
            @private
         */
        DRAW_BUFFER14: 0x8833,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_BUFFER15
            @private
         */
        DRAW_BUFFER15: 0x8834,
        /**
            @type {GLenum}
            @name PicoGL.MAX_FRAGMENT_UNIFORM_COMPONENTS
            @private
         */
        MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VERTEX_UNIFORM_COMPONENTS
            @private
         */
        MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLER_3D
            @private
         */
        SAMPLER_3D: 0x8B5F,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLER_2D_SHADOW
            @private
         */
        SAMPLER_2D_SHADOW: 0x8B62,
        /**
            @type {GLenum}
            @name PicoGL.FRAGMENT_SHADER_DERIVATIVE_HINT
            @private
         */
        FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B,
        /**
            @type {GLenum}
            @name PicoGL.PIXEL_PACK_BUFFER
            @private
         */
        PIXEL_PACK_BUFFER: 0x88EB,
        /**
            @type {GLenum}
            @name PicoGL.PIXEL_UNPACK_BUFFER
            @private
         */
        PIXEL_UNPACK_BUFFER: 0x88EC,
        /**
            @type {GLenum}
            @name PicoGL.PIXEL_PACK_BUFFER_BINDING
            @private
         */
        PIXEL_PACK_BUFFER_BINDING: 0x88ED,
        /**
            @type {GLenum}
            @name PicoGL.PIXEL_UNPACK_BUFFER_BINDING
            @private
         */
        PIXEL_UNPACK_BUFFER_BINDING: 0x88EF,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT2x3
            @private
         */
        FLOAT_MAT2x3: 0x8B65,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT2x4
            @private
         */
        FLOAT_MAT2x4: 0x8B66,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT3x2
            @private
         */
        FLOAT_MAT3x2: 0x8B67,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT3x4
            @private
         */
        FLOAT_MAT3x4: 0x8B68,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT4x2
            @private
         */
        FLOAT_MAT4x2: 0x8B69,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_MAT4x3
            @private
         */
        FLOAT_MAT4x3: 0x8B6A,
        /**
            @type {GLenum}
            @name PicoGL.SRGB
            @private
         */
        SRGB: 0x8C40,
        /**
            @type {GLenum}
            @name PicoGL.SRGB8
            @private
         */
        SRGB8: 0x8C41,
        /**
            @type {GLenum}
            @name PicoGL.SRGB8_ALPHA8
            @private
         */
        SRGB8_ALPHA8: 0x8C43,
        /**
            @type {GLenum}
            @name PicoGL.COMPARE_REF_TO_TEXTURE
            @private
         */
        COMPARE_REF_TO_TEXTURE: 0x884E,
        /**
            @type {GLenum}
            @name PicoGL.RGBA32F
            @private
         */
        RGBA32F: 0x8814,
        /**
            @type {GLenum}
            @name PicoGL.RGB32F
            @private
         */
        RGB32F: 0x8815,
        /**
            @type {GLenum}
            @name PicoGL.RGBA16F
            @private
         */
        RGBA16F: 0x881A,
        /**
            @type {GLenum}
            @name PicoGL.RGB16F
            @private
         */
        RGB16F: 0x881B,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_INTEGER
            @private
         */
        VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD,
        /**
            @type {GLenum}
            @name PicoGL.MAX_ARRAY_TEXTURE_LAYERS
            @private
         */
        MAX_ARRAY_TEXTURE_LAYERS: 0x88FF,
        /**
            @type {GLenum}
            @name PicoGL.MIN_PROGRAM_TEXEL_OFFSET
            @private
         */
        MIN_PROGRAM_TEXEL_OFFSET: 0x8904,
        /**
            @type {GLenum}
            @name PicoGL.MAX_PROGRAM_TEXEL_OFFSET
            @private
         */
        MAX_PROGRAM_TEXEL_OFFSET: 0x8905,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VARYING_COMPONENTS
            @private
         */
        MAX_VARYING_COMPONENTS: 0x8B4B,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_2D_ARRAY
            @private
         */
        TEXTURE_2D_ARRAY: 0x8C1A,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_BINDING_2D_ARRAY
            @private
         */
        TEXTURE_BINDING_2D_ARRAY: 0x8C1D,
        /**
            @type {GLenum}
            @name PicoGL.R11F_G11F_B10F
            @private
         */
        R11F_G11F_B10F: 0x8C3A,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_10F_11F_11F_REV
            @private
         */
        UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B,
        /**
            @type {GLenum}
            @name PicoGL.RGB9_E5
            @private
         */
        RGB9_E5: 0x8C3D,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_5_9_9_9_REV
            @private
         */
        UNSIGNED_INT_5_9_9_9_REV: 0x8C3E,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_BUFFER_MODE
            @private
         */
        TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F,
        /**
            @type {GLenum}
            @name PicoGL.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS
            @private
         */
        MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_VARYINGS
            @private
         */
        TRANSFORM_FEEDBACK_VARYINGS: 0x8C83,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_BUFFER_START
            @private
         */
        TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_BUFFER_SIZE
            @private
         */
        TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN
            @private
         */
        TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88,
        /**
            @type {GLenum}
            @name PicoGL.RASTERIZER_DISCARD
            @private
         */
        RASTERIZER_DISCARD: 0x8C89,
        /**
            @type {GLenum}
            @name PicoGL.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS
            @private
         */
        MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A,
        /**
            @type {GLenum}
            @name PicoGL.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS
            @private
         */
        MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B,
        /**
            @type {GLenum}
            @name PicoGL.INTERLEAVED_ATTRIBS
            @private
         */
        INTERLEAVED_ATTRIBS: 0x8C8C,
        /**
            @type {GLenum}
            @name PicoGL.SEPARATE_ATTRIBS
            @private
         */
        SEPARATE_ATTRIBS: 0x8C8D,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_BUFFER
            @private
         */
        TRANSFORM_FEEDBACK_BUFFER: 0x8C8E,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_BUFFER_BINDING
            @private
         */
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F,
        /**
            @type {GLenum}
            @name PicoGL.RGBA32UI
            @private
         */
        RGBA32UI: 0x8D70,
        /**
            @type {GLenum}
            @name PicoGL.RGB32UI
            @private
         */
        RGB32UI: 0x8D71,
        /**
            @type {GLenum}
            @name PicoGL.RGBA16UI
            @private
         */
        RGBA16UI: 0x8D76,
        /**
            @type {GLenum}
            @name PicoGL.RGB16UI
            @private
         */
        RGB16UI: 0x8D77,
        /**
            @type {GLenum}
            @name PicoGL.RGBA8UI
            @private
         */
        RGBA8UI: 0x8D7C,
        /**
            @type {GLenum}
            @name PicoGL.RGB8UI
            @private
         */
        RGB8UI: 0x8D7D,
        /**
            @type {GLenum}
            @name PicoGL.RGBA32I
            @private
         */
        RGBA32I: 0x8D82,
        /**
            @type {GLenum}
            @name PicoGL.RGB32I
            @private
         */
        RGB32I: 0x8D83,
        /**
            @type {GLenum}
            @name PicoGL.RGBA16I
            @private
         */
        RGBA16I: 0x8D88,
        /**
            @type {GLenum}
            @name PicoGL.RGB16I
            @private
         */
        RGB16I: 0x8D89,
        /**
            @type {GLenum}
            @name PicoGL.RGBA8I
            @private
         */
        RGBA8I: 0x8D8E,
        /**
            @type {GLenum}
            @name PicoGL.RGB8I
            @private
         */
        RGB8I: 0x8D8F,
        /**
            @type {GLenum}
            @name PicoGL.RED_INTEGER
            @private
         */
        RED_INTEGER: 0x8D94,
        /**
            @type {GLenum}
            @name PicoGL.RGB_INTEGER
            @private
         */
        RGB_INTEGER: 0x8D98,
        /**
            @type {GLenum}
            @name PicoGL.RGBA_INTEGER
            @private
         */
        RGBA_INTEGER: 0x8D99,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLER_2D_ARRAY
            @private
         */
        SAMPLER_2D_ARRAY: 0x8DC1,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLER_2D_ARRAY_SHADOW
            @private
         */
        SAMPLER_2D_ARRAY_SHADOW: 0x8DC4,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLER_CUBE_SHADOW
            @private
         */
        SAMPLER_CUBE_SHADOW: 0x8DC5,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_VEC2
            @private
         */
        UNSIGNED_INT_VEC2: 0x8DC6,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_VEC3
            @private
         */
        UNSIGNED_INT_VEC3: 0x8DC7,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_VEC4
            @private
         */
        UNSIGNED_INT_VEC4: 0x8DC8,
        /**
            @type {GLenum}
            @name PicoGL.INT_SAMPLER_2D
            @private
         */
        INT_SAMPLER_2D: 0x8DCA,
        /**
            @type {GLenum}
            @name PicoGL.INT_SAMPLER_3D
            @private
         */
        INT_SAMPLER_3D: 0x8DCB,
        /**
            @type {GLenum}
            @name PicoGL.INT_SAMPLER_CUBE
            @private
         */
        INT_SAMPLER_CUBE: 0x8DCC,
        /**
            @type {GLenum}
            @name PicoGL.INT_SAMPLER_2D_ARRAY
            @private
         */
        INT_SAMPLER_2D_ARRAY: 0x8DCF,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_SAMPLER_2D
            @private
         */
        UNSIGNED_INT_SAMPLER_2D: 0x8DD2,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_SAMPLER_3D
            @private
         */
        UNSIGNED_INT_SAMPLER_3D: 0x8DD3,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_SAMPLER_CUBE
            @private
         */
        UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_SAMPLER_2D_ARRAY
            @private
         */
        UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH_COMPONENT32F
            @private
         */
        DEPTH_COMPONENT32F: 0x8CAC,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH32F_STENCIL8
            @private
         */
        DEPTH32F_STENCIL8: 0x8CAD,
        /**
            @type {GLenum}
            @name PicoGL.FLOAT_32_UNSIGNED_INT_24_8_REV
            @private
         */
        FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING
            @private
         */
        FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_RED_SIZE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE
            @private
         */
        FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_DEFAULT
            @private
         */
        FRAMEBUFFER_DEFAULT: 0x8218,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_INT_24_8
            @private
         */
        UNSIGNED_INT_24_8: 0x84FA,
        /**
            @type {GLenum}
            @name PicoGL.DEPTH24_STENCIL8
            @private
         */
        DEPTH24_STENCIL8: 0x88F0,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNED_NORMALIZED
            @private
         */
        UNSIGNED_NORMALIZED: 0x8C17,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_FRAMEBUFFER_BINDING
            @private
         */
        DRAW_FRAMEBUFFER_BINDING: 0x8CA6,
        /**
            @type {GLenum}
            @name PicoGL.READ_FRAMEBUFFER
            @private
         */
        READ_FRAMEBUFFER: 0x8CA8,
        /**
            @type {GLenum}
            @name PicoGL.DRAW_FRAMEBUFFER
            @private
         */
        DRAW_FRAMEBUFFER: 0x8CA9,
        /**
            @type {GLenum}
            @name PicoGL.READ_FRAMEBUFFER_BINDING
            @private
         */
        READ_FRAMEBUFFER_BINDING: 0x8CAA,
        /**
            @type {GLenum}
            @name PicoGL.RENDERBUFFER_SAMPLES
            @private
         */
        RENDERBUFFER_SAMPLES: 0x8CAB,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER
            @private
         */
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4,
        /**
            @type {GLenum}
            @name PicoGL.MAX_COLOR_ATTACHMENTS
            @private
         */
        MAX_COLOR_ATTACHMENTS: 0x8CDF,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT1
            @private
         */
        COLOR_ATTACHMENT1: 0x8CE1,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT2
            @private
         */
        COLOR_ATTACHMENT2: 0x8CE2,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT3
            @private
         */
        COLOR_ATTACHMENT3: 0x8CE3,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT4
            @private
         */
        COLOR_ATTACHMENT4: 0x8CE4,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT5
            @private
         */
        COLOR_ATTACHMENT5: 0x8CE5,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT6
            @private
         */
        COLOR_ATTACHMENT6: 0x8CE6,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT7
            @private
         */
        COLOR_ATTACHMENT7: 0x8CE7,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT8
            @private
         */
        COLOR_ATTACHMENT8: 0x8CE8,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT9
            @private
         */
        COLOR_ATTACHMENT9: 0x8CE9,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT10
            @private
         */
        COLOR_ATTACHMENT10: 0x8CEA,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT11
            @private
         */
        COLOR_ATTACHMENT11: 0x8CEB,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT12
            @private
         */
        COLOR_ATTACHMENT12: 0x8CEC,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT13
            @private
         */
        COLOR_ATTACHMENT13: 0x8CED,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT14
            @private
         */
        COLOR_ATTACHMENT14: 0x8CEE,
        /**
            @type {GLenum}
            @name PicoGL.COLOR_ATTACHMENT15
            @private
         */
        COLOR_ATTACHMENT15: 0x8CEF,
        /**
            @type {GLenum}
            @name PicoGL.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE
            @private
         */
        FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56,
        /**
            @type {GLenum}
            @name PicoGL.MAX_SAMPLES
            @private
         */
        MAX_SAMPLES: 0x8D57,
        /**
            @type {GLenum}
            @name PicoGL.HALF_FLOAT
            @private
         */
        HALF_FLOAT: 0x140B,
        /**
            @type {GLenum}
            @name PicoGL.RG
            @private
         */
        RG: 0x8227,
        /**
            @type {GLenum}
            @name PicoGL.RG_INTEGER
            @private
         */
        RG_INTEGER: 0x8228,
        /**
            @type {GLenum}
            @name PicoGL.R8
            @private
         */
        R8: 0x8229,
        /**
            @type {GLenum}
            @name PicoGL.RG8
            @private
         */
        RG8: 0x822B,
        /**
            @type {GLenum}
            @name PicoGL.R16F
            @private
         */
        R16F: 0x822D,
        /**
            @type {GLenum}
            @name PicoGL.R32F
            @private
         */
        R32F: 0x822E,
        /**
            @type {GLenum}
            @name PicoGL.RG16F
            @private
         */
        RG16F: 0x822F,
        /**
            @type {GLenum}
            @name PicoGL.RG32F
            @private
         */
        RG32F: 0x8230,
        /**
            @type {GLenum}
            @name PicoGL.R8I
            @private
         */
        R8I: 0x8231,
        /**
            @type {GLenum}
            @name PicoGL.R8UI
            @private
         */
        R8UI: 0x8232,
        /**
            @type {GLenum}
            @name PicoGL.R16I
            @private
         */
        R16I: 0x8233,
        /**
            @type {GLenum}
            @name PicoGL.R16UI
            @private
         */
        R16UI: 0x8234,
        /**
            @type {GLenum}
            @name PicoGL.R32I
            @private
         */
        R32I: 0x8235,
        /**
            @type {GLenum}
            @name PicoGL.R32UI
            @private
         */
        R32UI: 0x8236,
        /**
            @type {GLenum}
            @name PicoGL.RG8I
            @private
         */
        RG8I: 0x8237,
        /**
            @type {GLenum}
            @name PicoGL.RG8UI
            @private
         */
        RG8UI: 0x8238,
        /**
            @type {GLenum}
            @name PicoGL.RG16I
            @private
         */
        RG16I: 0x8239,
        /**
            @type {GLenum}
            @name PicoGL.RG16UI
            @private
         */
        RG16UI: 0x823A,
        /**
            @type {GLenum}
            @name PicoGL.RG32I
            @private
         */
        RG32I: 0x823B,
        /**
            @type {GLenum}
            @name PicoGL.RG32UI
            @private
         */
        RG32UI: 0x823C,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ARRAY_BINDING
            @private
         */
        VERTEX_ARRAY_BINDING: 0x85B5,
        /**
            @type {GLenum}
            @name PicoGL.R8_SNORM
            @private
         */
        R8_SNORM: 0x8F94,
        /**
            @type {GLenum}
            @name PicoGL.RG8_SNORM
            @private
         */
        RG8_SNORM: 0x8F95,
        /**
            @type {GLenum}
            @name PicoGL.RGB8_SNORM
            @private
         */
        RGB8_SNORM: 0x8F96,
        /**
            @type {GLenum}
            @name PicoGL.RGBA8_SNORM
            @private
         */
        RGBA8_SNORM: 0x8F97,
        /**
            @type {GLenum}
            @name PicoGL.SIGNED_NORMALIZED
            @private
         */
        SIGNED_NORMALIZED: 0x8F9C,
        /**
            @type {GLenum}
            @name PicoGL.COPY_READ_BUFFER
            @private
         */
        COPY_READ_BUFFER: 0x8F36,
        /**
            @type {GLenum}
            @name PicoGL.COPY_WRITE_BUFFER
            @private
         */
        COPY_WRITE_BUFFER: 0x8F37,
        /**
            @type {GLenum}
            @name PicoGL.COPY_READ_BUFFER_BINDING
            @private
         */
        COPY_READ_BUFFER_BINDING: 0x8F36,
        /**
            @type {GLenum}
            @name PicoGL.COPY_WRITE_BUFFER_BINDING
            @private
         */
        COPY_WRITE_BUFFER_BINDING: 0x8F37,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BUFFER
            @private
         */
        UNIFORM_BUFFER: 0x8A11,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BUFFER_BINDING
            @private
         */
        UNIFORM_BUFFER_BINDING: 0x8A28,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BUFFER_START
            @private
         */
        UNIFORM_BUFFER_START: 0x8A29,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BUFFER_SIZE
            @private
         */
        UNIFORM_BUFFER_SIZE: 0x8A2A,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VERTEX_UNIFORM_BLOCKS
            @private
         */
        MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B,
        /**
            @type {GLenum}
            @name PicoGL.MAX_FRAGMENT_UNIFORM_BLOCKS
            @private
         */
        MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D,
        /**
            @type {GLenum}
            @name PicoGL.MAX_COMBINED_UNIFORM_BLOCKS
            @private
         */
        MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E,
        /**
            @type {GLenum}
            @name PicoGL.MAX_UNIFORM_BUFFER_BINDINGS
            @private
         */
        MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F,
        /**
            @type {GLenum}
            @name PicoGL.MAX_UNIFORM_BLOCK_SIZE
            @private
         */
        MAX_UNIFORM_BLOCK_SIZE: 0x8A30,
        /**
            @type {GLenum}
            @name PicoGL.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS
            @private
         */
        MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31,
        /**
            @type {GLenum}
            @name PicoGL.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS
            @private
         */
        MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BUFFER_OFFSET_ALIGNMENT
            @private
         */
        UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34,
        /**
            @type {GLenum}
            @name PicoGL.ACTIVE_UNIFORM_BLOCKS
            @private
         */
        ACTIVE_UNIFORM_BLOCKS: 0x8A36,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_TYPE
            @private
         */
        UNIFORM_TYPE: 0x8A37,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_SIZE
            @private
         */
        UNIFORM_SIZE: 0x8A38,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BLOCK_INDEX
            @private
         */
        UNIFORM_BLOCK_INDEX: 0x8A3A,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_OFFSET
            @private
         */
        UNIFORM_OFFSET: 0x8A3B,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_ARRAY_STRIDE
            @private
         */
        UNIFORM_ARRAY_STRIDE: 0x8A3C,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_MATRIX_STRIDE
            @private
         */
        UNIFORM_MATRIX_STRIDE: 0x8A3D,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_IS_ROW_MAJOR
            @private
         */
        UNIFORM_IS_ROW_MAJOR: 0x8A3E,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BLOCK_BINDING
            @private
         */
        UNIFORM_BLOCK_BINDING: 0x8A3F,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BLOCK_DATA_SIZE
            @private
         */
        UNIFORM_BLOCK_DATA_SIZE: 0x8A40,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BLOCK_ACTIVE_UNIFORMS
            @private
         */
        UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES
            @private
         */
        UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER
            @private
         */
        UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44,
        /**
            @type {GLenum}
            @name PicoGL.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER
            @private
         */
        UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46,
        /**
            @type {GLenum}
            @name PicoGL.INVALID_INDEX
            @private
         */
        INVALID_INDEX: 0xFFFFFFFF,
        /**
            @type {GLenum}
            @name PicoGL.MAX_VERTEX_OUTPUT_COMPONENTS
            @private
         */
        MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122,
        /**
            @type {GLenum}
            @name PicoGL.MAX_FRAGMENT_INPUT_COMPONENTS
            @private
         */
        MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125,
        /**
            @type {GLenum}
            @name PicoGL.MAX_SERVER_WAIT_TIMEOUT
            @private
         */
        MAX_SERVER_WAIT_TIMEOUT: 0x9111,
        /**
            @type {GLenum}
            @name PicoGL.OBJECT_TYPE
            @private
         */
        OBJECT_TYPE: 0x9112,
        /**
            @type {GLenum}
            @name PicoGL.SYNC_CONDITION
            @private
         */
        SYNC_CONDITION: 0x9113,
        /**
            @type {GLenum}
            @name PicoGL.SYNC_STATUS
            @private
         */
        SYNC_STATUS: 0x9114,
        /**
            @type {GLenum}
            @name PicoGL.SYNC_FLAGS
            @private
         */
        SYNC_FLAGS: 0x9115,
        /**
            @type {GLenum}
            @name PicoGL.SYNC_FENCE
            @private
         */
        SYNC_FENCE: 0x9116,
        /**
            @type {GLenum}
            @name PicoGL.SYNC_GPU_COMMANDS_COMPLETE
            @private
         */
        SYNC_GPU_COMMANDS_COMPLETE: 0x9117,
        /**
            @type {GLenum}
            @name PicoGL.UNSIGNALED
            @private
         */
        UNSIGNALED: 0x9118,
        /**
            @type {GLenum}
            @name PicoGL.SIGNALED
            @private
         */
        SIGNALED: 0x9119,
        /**
            @type {GLenum}
            @name PicoGL.ALREADY_SIGNALED
            @private
         */
        ALREADY_SIGNALED: 0x911A,
        /**
            @type {GLenum}
            @name PicoGL.TIMEOUT_EXPIRED
            @private
         */
        TIMEOUT_EXPIRED: 0x911B,
        /**
            @type {GLenum}
            @name PicoGL.CONDITION_SATISFIED
            @private
         */
        CONDITION_SATISFIED: 0x911C,
        /**
            @type {GLenum}
            @name PicoGL.WAIT_FAILED
            @private
         */
        WAIT_FAILED: 0x911D,
        /**
            @type {GLenum}
            @name PicoGL.SYNC_FLUSH_COMMANDS_BIT
            @private
         */
        SYNC_FLUSH_COMMANDS_BIT: 0x00000001,
        /**
            @type {GLenum}
            @name PicoGL.VERTEX_ATTRIB_ARRAY_DIVISOR
            @private
         */
        VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE,
        /**
            @type {GLenum}
            @name PicoGL.ANY_SAMPLES_PASSED
            @private
         */
        ANY_SAMPLES_PASSED: 0x8C2F,
        /**
            @type {GLenum}
            @name PicoGL.ANY_SAMPLES_PASSED_CONSERVATIVE
            @private
         */
        ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A,
        /**
            @type {GLenum}
            @name PicoGL.SAMPLER_BINDING
            @private
         */
        SAMPLER_BINDING: 0x8919,
        /**
            @type {GLenum}
            @name PicoGL.RGB10_A2UI
            @private
         */
        RGB10_A2UI: 0x906F,
        /**
            @type {GLenum}
            @name PicoGL.INT_2_10_10_10_REV
            @private
         */
        INT_2_10_10_10_REV: 0x8D9F,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK
            @private
         */
        TRANSFORM_FEEDBACK: 0x8E22,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_PAUSED
            @private
         */
        TRANSFORM_FEEDBACK_PAUSED: 0x8E23,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_ACTIVE
            @private
         */
        TRANSFORM_FEEDBACK_ACTIVE: 0x8E24,
        /**
            @type {GLenum}
            @name PicoGL.TRANSFORM_FEEDBACK_BINDING
            @private
         */
        TRANSFORM_FEEDBACK_BINDING: 0x8E25,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_IMMUTABLE_FORMAT
            @private
         */
        TEXTURE_IMMUTABLE_FORMAT: 0x912F,
        /**
            @type {GLenum}
            @name PicoGL.MAX_ELEMENT_INDEX
            @private
         */
        MAX_ELEMENT_INDEX: 0x8D6B,
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_IMMUTABLE_LEVELS
            @private
         */
        TEXTURE_IMMUTABLE_LEVELS: 0x82DF,
        /**
            @type {GLenum}
            @name PicoGL.TIMEOUT_IGNORED
            @private
         */
        TIMEOUT_IGNORED: -1,
        /**
            @type {GLenum}
            @name PicoGL.MAX_CLIENT_WAIT_TIMEOUT_WEBGL
            @private
         */
        MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247,

        // https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query_webgl2/
        /**
            @type {GLenum}
            @name PicoGL.QUERY_COUNTER_BITS_EXT
            @private
         */
        QUERY_COUNTER_BITS_EXT: 0x8864,
        /**
            @type {GLenum}
            @name PicoGL.TIME_ELAPSED_EXT
            @private
         */
        TIME_ELAPSED_EXT: 0x88BF,
        /**
            @type {GLenum}
            @name PicoGL.TIMESTAMP_EXT
            @private
         */
        TIMESTAMP_EXT: 0x8E28,
        /**
            @type {GLenum}
            @name PicoGL.GPU_DISJOINT_EXT
            @private
         */
        GPU_DISJOINT_EXT: 0x8FBB,

        // https://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
        /**
            @type {GLenum}
            @name PicoGL.TEXTURE_MAX_ANISOTROPY_EXT
            @private
         */
        TEXTURE_MAX_ANISOTROPY_EXT: 0x84FE,
        /**
            @type {GLenum}
            @name PicoGL.MAX_TEXTURE_MAX_ANISOTROPY_EXT
            @private
         */
        MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84FF,

        // https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
        /**
            @type {GLenum}
            @name PicoGL.UNMASKED_VENDOR_WEBGL
            @private
         */
        UNMASKED_VENDOR_WEBGL: 0x9245,
        /**
            @type {GLenum}
            @name PicoGL.UNMASKED_RENDERER_WEBGL
            @private
         */
        UNMASKED_RENDERER_WEBGL: 0x9246,

        // https://www.khronos.org/registry/webgl/extensions/KHR_parallel_shader_compile/
        /**
            @type {GLenum}
            @name PicoGL.COMPLETION_STATUS_KHR
            @private
         */
        COMPLETION_STATUS_KHR: 0x91B1,

        // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGB_S3TC_DXT1_EXT
            @private
         */
        COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_S3TC_DXT1_EXT
            @private
         */
        COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_S3TC_DXT3_EXT
            @private
         */
        COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_S3TC_DXT5_EXT
            @private
         */
        COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3,

        // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB_S3TC_DXT1_EXT
            @private
         */
        COMPRESSED_SRGB_S3TC_DXT1_EXT: 0x8C4C,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT
            @private
         */
        COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 0x8C4D,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT
            @private
         */
        COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 0x8C4E,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
            @private
         */
        COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 0x8C4F,

        // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_R11_EAC
            @private
         */
        COMPRESSED_R11_EAC: 0x9270,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SIGNED_R11_EAC
            @private
         */
        COMPRESSED_SIGNED_R11_EAC: 0x9271,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RG11_EAC
            @private
         */
        COMPRESSED_RG11_EAC: 0x9272,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SIGNED_RG11_EAC
            @private
         */
        COMPRESSED_SIGNED_RG11_EAC: 0x9273,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGB8_ETC2
            @private
         */
        COMPRESSED_RGB8_ETC2: 0x9274,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ETC2
            @private
         */
        COMPRESSED_SRGB8_ETC2: 0x9275,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2
            @private
         */
        COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2
            @private
         */
        COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA8_ETC2_EAC
            @private
         */
        COMPRESSED_RGBA8_ETC2_EAC: 0x9278,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279,

        // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
            @private
         */
        COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8C00,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGB_PVRTC_2BPPV1_IMG
            @private
         */
        COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8C01,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
            @private
         */
        COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8C02,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            @private
         */
        COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8C03,

        // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_4x4_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_4x4_KHR: 0x93B0,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_5x4_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_5x4_KHR: 0x93B1,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_5x5_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_5x5_KHR: 0x93B2,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_6x5_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_6x5_KHR: 0x93B3,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_6x6_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_6x6_KHR: 0x93B4,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_8x5_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_8x5_KHR: 0x93B5,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_8x6_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_8x6_KHR: 0x93B6,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_8x8_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_8x8_KHR: 0x93B7,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_10x5_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_10x5_KHR: 0x93B8,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_10x6_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_10x6_KHR: 0x93B9,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_10x8_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_10x8_KHR: 0x93BA,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_10x10_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_10x10_KHR: 0x93BB,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_12x10_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_12x10_KHR: 0x93BC,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_RGBA_ASTC_12x12_KHR
            @private
         */
        COMPRESSED_RGBA_ASTC_12x12_KHR: 0x93BD,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 0x93D0,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 0x93D1,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 0x93D2,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 0x93D3,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 0x93D4,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 0x93D5,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 0x93D6,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 0x93D7,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 0x93D8,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 0x93D9,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 0x93DA,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 0x93DB,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 0x93DC,
        /**
            @type {GLenum}
            @name PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            @private
         */
        COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 0x93DD
    };


    const TYPE_SIZE = {
        [GL.BYTE]: 1,
        [GL.UNSIGNED_BYTE]: 1,
        [GL.SHORT]: 2,
        [GL.UNSIGNED_SHORT]: 2,
        [GL.INT]: 4,
        [GL.UNSIGNED_INT]: 4,
        [GL.FLOAT]: 4
    };

    // Internal format => [format, type]
    const TEXTURE_FORMATS = {
        [GL.R8]: [ GL.RED, GL.UNSIGNED_BYTE ],
        [GL.R8_SNORM]: [ GL.RED, GL.BYTE ],
        [GL.R16F]: [ GL.RED, GL.FLOAT ],
        [GL.R32F]: [ GL.RED, GL.FLOAT ],
        [GL.R8UI]: [ GL.RED_INTEGER, GL.UNSIGNED_BYTE ],
        [GL.R8I]: [ GL.RED_INTEGER, GL.BYTE ],
        [GL.R16UI]: [ GL.RED_INTEGER, GL.UNSIGNED_SHORT ],
        [GL.R16I]: [ GL.RED_INTEGER, GL.SHORT ],
        [GL.R32UI]: [ GL.RED_INTEGER, GL.UNSIGNED_INT ],
        [GL.R32I]: [ GL.RED_INTEGER, GL.INT ],
        [GL.RG8]: [ GL.RG, GL.UNSIGNED_BYTE ],
        [GL.RG8_SNORM]: [ GL.RG, GL.BYTE ],
        [GL.RG16F]: [ GL.RG, GL.FLOAT ],
        [GL.RG32F]: [ GL.RG, GL.FLOAT ],
        [GL.RG8UI]: [ GL.RG_INTEGER, GL.UNSIGNED_BYTE ],
        [GL.RG8I]: [ GL.RG_INTEGER, GL.BYTE ],
        [GL.RG16UI]: [ GL.RG_INTEGER, GL.UNSIGNED_SHORT ],
        [GL.RG16I]: [ GL.RG_INTEGER, GL.SHORT ],
        [GL.RG32UI]: [ GL.RG_INTEGER, GL.UNSIGNED_INT ],
        [GL.RG32I]: [ GL.RG_INTEGER, GL.INT ],
        [GL.RGB8]: [ GL.RGB, GL.UNSIGNED_BYTE ],
        [GL.SRGB8]: [ GL.RGB, GL.UNSIGNED_BYTE ],
        [GL.RGB565]: [ GL.RGB, GL.UNSIGNED_SHORT_5_6_5 ],
        [GL.RGB8_SNORM]: [ GL.RGB, GL.BYTE ],
        [GL.R11F_G11F_B10F]: [ GL.RGB, GL.UNSIGNED_INT_10F_11F_11F_REV ],
        [GL.RGB9_E5]: [ GL.RGB, GL.UNSIGNED_INT_5_9_9_9_REV ],
        [GL.RGB16F]: [ GL.RGB, GL.FLOAT ],
        [GL.RGB32F]: [ GL.RGB, GL.FLOAT ],
        [GL.RGB8UI]: [ GL.RGB_INTEGER, GL.UNSIGNED_BYTE ],
        [GL.RGB8I]: [ GL.RGB_INTEGER, GL.BYTE ],
        [GL.RGB16UI]: [ GL.RGB_INTEGER, GL.UNSIGNED_SHORT ],
        [GL.RGB16I]: [ GL.RGB_INTEGER, GL.SHORT ],
        [GL.RGB32UI]: [ GL.RGB_INTEGER, GL.UNSIGNED_INT ],
        [GL.RGB32I]: [ GL.RGB_INTEGER, GL.INT ],
        [GL.RGBA8]: [ GL.RGBA, GL.UNSIGNED_BYTE ],
        [GL.SRGB8_ALPHA8]: [ GL.RGBA, GL.UNSIGNED_BYTE ],
        [GL.RGBA8_SNORM]: [ GL.RGBA, GL.BYTE ],
        [GL.RGB5_A1]: [ GL.RGBA, GL.UNSIGNED_SHORT_5_5_5_1 ],
        [GL.RGBA4]: [ GL.RGBA, GL.UNSIGNED_SHORT_4_4_4_4 ],
        [GL.RGB10_A2]: [ GL.RGBA, GL.UNSIGNED_INT_2_10_10_10_REV ],
        [GL.RGBA16F]: [ GL.RGBA, GL.FLOAT ],
        [GL.RGBA32F]: [ GL.RGBA, GL.FLOAT ],
        [GL.RGBA8UI]: [ GL.RGBA_INTEGER, GL.UNSIGNED_BYTE ],
        [GL.RGBA8I]: [ GL.RGBA_INTEGER, GL.BYTE ],
        [GL.RGB10_A2UI]: [ GL.RGBA_INTEGER, GL.UNSIGNED_INT_2_10_10_10_REV ],
        [GL.RGBA16UI]: [ GL.RGBA_INTEGER, GL.UNSIGNED_SHORT ],
        [GL.RGBA16I]: [ GL.RGBA_INTEGER, GL.SHORT ],
        [GL.RGBA32I]: [ GL.RGBA_INTEGER, GL.INT ],
        [GL.RGBA32UI]: [ GL.RGBA_INTEGER, GL.UNSIGNED_INT ],
        [GL.DEPTH_COMPONENT16]: [ GL.DEPTH_COMPONENT, GL.UNSIGNED_SHORT ],
        [GL.DEPTH_COMPONENT24]: [ GL.DEPTH_COMPONENT, GL.UNSIGNED_INT ],
        [GL.DEPTH_COMPONENT32F]: [ GL.DEPTH_COMPONENT, GL.FLOAT ],
        [GL.DEPTH24_STENCIL8]: [ GL.DEPTH_STENCIL, GL.UNSIGNED_INT_24_8 ],
        [GL.DEPTH32F_STENCIL8]: [ GL.DEPTH_STENCIL, GL.FLOAT_32_UNSIGNED_INT_24_8_REV ]
    };

    const COMPRESSED_TEXTURE_TYPES = {
        [GL.COMPRESSED_RGB_S3TC_DXT1_EXT]: true,
        [GL.COMPRESSED_RGBA_S3TC_DXT1_EXT]: true,
        [GL.COMPRESSED_RGBA_S3TC_DXT3_EXT]: true,
        [GL.COMPRESSED_RGBA_S3TC_DXT5_EXT]: true,
        [GL.COMPRESSED_SRGB_S3TC_DXT1_EXT]: true,
        [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]: true,
        [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]: true,
        [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]: true,
        [GL.COMPRESSED_R11_EAC]: true,
        [GL.COMPRESSED_SIGNED_R11_EAC]: true,
        [GL.COMPRESSED_RG11_EAC]: true,
        [GL.COMPRESSED_SIGNED_RG11_EAC]: true,
        [GL.COMPRESSED_RGB8_ETC2]: true,
        [GL.COMPRESSED_SRGB8_ETC2]: true,
        [GL.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]: true,
        [GL.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]: true,
        [GL.COMPRESSED_RGBA8_ETC2_EAC]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]: true,
        [GL.COMPRESSED_RGBA_ASTC_4x4_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_5x4_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_5x5_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_6x5_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_6x6_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_8x5_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_8x6_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_8x8_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_10x5_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_10x6_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_10x8_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_10x10_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_12x10_KHR]: true,
        [GL.COMPRESSED_RGBA_ASTC_12x12_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR]: true,
        [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR]: true,
        [GL.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]: true,
        [GL.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]: true,
        [GL.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]: true,
        [GL.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]: true
    };

    const WEBGL_INFO = {};

    const DUMMY_UNIT_ARRAY = new Array(1);

    const DUMMY_OBJECT = {};

    // DEPRECATED
    const TEXTURE_FORMAT_DEFAULTS = {
        [GL.UNSIGNED_BYTE]: {
            [GL.RED]: GL.R8,
            [GL.RG]: GL.RG8,
            [GL.RGB]: GL.RGB8,
            [GL.RGBA]: GL.RGBA8
        },

        [GL.UNSIGNED_SHORT]: {
            [GL.DEPTH_COMPONENT]: GL.DEPTH_COMPONENT16
        },

        [GL.FLOAT]: {
            [GL.RED]: GL.R16F,
            [GL.RG]: GL.RG16F,
            [GL.RGB]: GL.RGB16F,
            [GL.RGBA]: GL.RGBA16F,
            [GL.DEPTH_COMPONENT]: GL.DEPTH_COMPONENT32F
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        Cubemap for environment mapping.

        @class Cubemap
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLTexture} texture Handle to the texture.
        @prop {GLenum} type Type of data stored in the texture.
        @prop {GLenum} format Layout of texture data.
        @prop {GLenum} internalFormat Internal arrangement of the texture data.
        @prop {Number} currentUnit The current texture unit this cubemap is bound to.
        @prop {boolean} flipY Whether the y-axis is flipped for this cubemap.
        @prop {boolean} premultiplyAlpha Whether alpha should be pre-multiplied when loading this cubemap.
        @prop {Object} appState Tracked GL state.
    */
    class Cubemap {

        constructor(gl, appState, options) {

            this.gl = gl;
            this.texture = null;
            this.appState = appState;

            this.compressed = COMPRESSED_TEXTURE_TYPES[options.internalFormat];

            if (options.format !== undefined) {
                console.warn("Cubemap option 'format' is deprecated and will be removed. Use 'internalFormat' with a sized format instead.");
                this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.format]);
                if (options.type === undefined) {
                    options.type = options.format === GL.DEPTH_COMPONENT ? GL.UNSIGNED_SHORT : GL.UNSIGNED_BYTE;
                }
                if (options.internalFormat === undefined) {
                    if (this.compressed) {
                        options.internalFormat = options.format;
                    } else {
                        options.internalFormat = TEXTURE_FORMAT_DEFAULTS[options.type][options.format];
                    }
                }
            }

            if (this.compressed) {
                // For compressed textures, just need to provide one of format, internalFormat.
                // The other will be the same.
                this.internalFormat = options.internalFormat;
                this.format = options.internalFormat;
                this.type = GL.UNSIGNED_BYTE;
            } else {
                this.internalFormat = options.internalFormat !== undefined ? options.internalFormat : GL.RGBA8;

                let formatInfo = TEXTURE_FORMATS[this.internalFormat];
                this.format = formatInfo[0];
                this.type = options.type !== undefined ? options.type : formatInfo[1];
            }

            // -1 indicates unbound
            this.currentUnit = -1;

            let arrayData = Array.isArray(options.negX);
            let negX = arrayData ? options.negX[0] : options.negX;

            let {
                width = negX.width,
                height = negX.height,
                flipY = false,
                premultiplyAlpha = false,
                minFilter = negX ? GL.LINEAR_MIPMAP_NEAREST : GL.NEAREST,
                magFilter = negX ? GL.LINEAR : GL.NEAREST,
                wrapS = GL.REPEAT,
                wrapT = GL.REPEAT,
                compareMode = GL.NONE,
                compareFunc = GL.LEQUAL,
                minLOD = null,
                maxLOD = null,
                baseLevel = null,
                maxLevel = null,
                maxAnisotropy = 1
            } = options;

            this.width = width;
            this.height = height;
            this.flipY = flipY;
            this.premultiplyAlpha = premultiplyAlpha;
            this.minFilter = minFilter;
            this.magFilter = magFilter;
            this.wrapS = wrapS;
            this.wrapT = wrapT;
            this.compareMode = compareMode;
            this.compareFunc = compareFunc;
            this.minLOD = minLOD;
            this.maxLOD = maxLOD;
            this.baseLevel = baseLevel;
            this.maxLevel = maxLevel;
            this.maxAnisotropy = Math.min(maxAnisotropy, WEBGL_INFO.MAX_TEXTURE_ANISOTROPY);
            this.mipmaps = (minFilter === GL.LINEAR_MIPMAP_NEAREST || minFilter === GL.LINEAR_MIPMAP_LINEAR);
            this.miplevelsProvided = arrayData && options.negX.length > 1;
            this.levels = this.mipmaps ? Math.floor(Math.log2(Math.min(this.width, this.height))) + 1 : 1;

            this.restore(options);
        }

        /**
            Restore cubemap after context loss.

            @method
            @param {Object} [options] Texture options.
            @param {HTMLElement|ArrayBufferView} [options.negX] The image data for the negative X direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.posX] The image data for the positive X direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.negY] The image data for the negative Y direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.posY] The image data for the positive Y direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.negZ] The image data for the negative Z direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.posZ] The image data for the positive Z direction.
                    Can be any format that would be accepted by texImage2D.
            @return {Cubemap} The Cubemap object.
        */
        restore(options = DUMMY_OBJECT) {
            this.texture = this.gl.createTexture();

            if (this.currentUnit !== -1) {
                this.appState.textures[this.currentUnit] = null;
            }

            this.bind(0);
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAG_FILTER, this.magFilter);
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MIN_FILTER, this.minFilter);
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_WRAP_S, this.wrapS);
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_WRAP_T, this.wrapT);
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_COMPARE_FUNC, this.compareFunc);
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_COMPARE_MODE, this.compareMode);

            if (this.baseLevel !== null) {
                this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_BASE_LEVEL, this.baseLevel);
            }

            if (this.maxLevel !== null) {
                this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_LEVEL, this.maxLevel);
            }

            if (this.minLOD !== null) {
                this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MIN_LOD, this.minLOD);
            }

            if (this.maxLOD !== null) {
                this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_LOD, this.maxLOD);
            }

            if (this.maxAnisotropy > 1) {
                this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
            }

            this.gl.texStorage2D(GL.TEXTURE_CUBE_MAP, this.levels, this.internalFormat, this.width, this.height);

            let { negX, posX, negY, posY, negZ, posZ } = options;

            if (negX) {
                this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_X, negX);
                this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_X, posX);
                this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_Y, negY);
                this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_Y, posY);
                this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_Z, negZ);
                this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_Z, posZ);
            }

            if (this.mipmaps && !this.miplevelsProvided) {
                this.gl.generateMipmap(GL.TEXTURE_CUBE_MAP);
            }

            return this;
        }

        /**
            Delete this cubemap.

            @method
            @return {Cubemap} The Cubemap object.
        */
        delete() {
            if (this.texture) {
                this.gl.deleteTexture(this.texture);
                this.texture = null;
                this.appState.textures[this.currentUnit] = null;
                this.currentUnit = -1;
            }

            return this;
        }

        // Input data for one cubemap face.
        faceData(face, data) {
            if (!Array.isArray(data)) {
                DUMMY_UNIT_ARRAY[0] = data;
                data = DUMMY_UNIT_ARRAY;
            }

            let numLevels = this.mipmaps ? data.length : 1;
            let width = this.width;
            let height = this.height;
            let i;

            this.gl.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, this.flipY);
            this.gl.pixelStorei(GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

            if (this.compressed) {
                for (i = 0; i < numLevels; ++i) {
                    this.gl.compressedTexSubImage2D(face, i, 0, 0, width, height, this.format, data[i]);
                    width = Math.max(width >> 1, 1);
                    height = Math.max(height >> 1, 1);
                }
            } else {
                for (i = 0; i < numLevels; ++i) {
                    this.gl.texSubImage2D(face, i, 0, 0, width, height, this.format, this.type, data[i]);
                    width = Math.max(width >> 1, 1);
                    height = Math.max(height >> 1, 1);
                }
            }

            return this;
        }

        // Bind this cubemap to a texture unit.
        bind(unit) {
            let currentTexture = this.appState.textures[unit];

            if (this.appState.activeTexture !== unit) {
                this.gl.activeTexture(GL.TEXTURE0 + unit);
                this.appState.activeTexture = unit;
            }

            if (currentTexture !== this) {
                if (currentTexture) {
                    currentTexture.currentUnit = -1;
                }

                if (this.currentUnit !== -1) {
                    this.appState.textures[this.currentUnit] = null;
                }

                this.gl.bindTexture(GL.TEXTURE_CUBE_MAP, this.texture);

                this.appState.textures[unit] = this;
                this.currentUnit = unit;
            }

            return this;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        A DrawCall represents the program and values of associated
        attributes, uniforms and textures for a single draw call.

        @class DrawCall
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {Program} currentProgram The program to use for this draw call.
        @prop {VertexArray} currentVertexArray Vertex array to use for this draw call.
        @prop {TransformFeedback} currentTransformFeedback Transform feedback to use for this draw call.
        @prop {Array} uniformBuffers Ordered list of active uniform buffers.
        @prop {Array} uniformBlockNames Ordered list of uniform block names.
        @prop {Number} uniformBlockCount Number of active uniform blocks for this draw call.
        @prop {Object} uniformIndices Map of uniform names to indices in the uniform arrays.
        @prop {Array} uniformNames Ordered list of uniform names.
        @prop {Array} uniformValue Ordered list of uniform values.
        @prop {number} uniformCount The number of active uniforms for this draw call.
        @prop {Array} textures Array of active textures.
        @prop {number} textureCount The number of active textures for this draw call.
        @prop {Object} appState Tracked GL state.
        @prop {GLsizei} numElements The number of element to draw.
        @prop {GLsizei} numInstances The number of instances to draw.
    */
    class DrawCall {

        constructor(gl, appState, program, vertexArray = null, primitive) {
            this.gl = gl;
            this.currentProgram = program;
            this.drawPrimitive = GL.TRIANGLES;
            this.currentVertexArray = vertexArray;
            this.currentTransformFeedback = null;
            this.appState = appState;

            this.uniformIndices = {};
            this.uniformNames = new Array(WEBGL_INFO.MAX_UNIFORMS);
            this.uniformValues = new Array(WEBGL_INFO.MAX_UNIFORMS);
            this.uniformCount = 0;
            this.uniformBuffers = new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS);
            this.uniformBlockNames = new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS);
            this.uniformBlockCount = 0;
            this.textures = new Array(WEBGL_INFO.MAX_TEXTURE_UNITS);
            this.textureCount = 0;

            this.offsets = new Int32Array(1);
            this.numElements = new Int32Array(1);
            this.numInstances = new Int32Array(1);

            this.numDraws = 1;
            this.drawCountsFromVertexArray = true;

            if (primitive !== undefined) {
                console.warn("Primitive argument to 'App.createDrawCall' is deprecated and will be removed. Use 'DrawCall.primitive' instead.");
                this.primitive(primitive);
            }
        }

        /**
            Set the current draw primitive for this draw call.

            @method
            @param {GLenum} primitive Primitive to draw.
            @return {DrawCall} The DrawCall object.
        */
        primitive(primitive) {
            this.drawPrimitive = primitive;

            return this;
        }

        /**
            Set the current TransformFeedback object for draw.

            @method
            @param {TransformFeedback} transformFeedback Transform Feedback to set.
            @return {DrawCall} The DrawCall object.
        */
        transformFeedback(transformFeedback) {
            this.currentTransformFeedback = transformFeedback;

            return this;
        }

        /**
            Set the value for a uniform. Array uniforms are supported by
            using appending "[0]" to the array name and passing a flat array
            with all required values.

            @method
            @param {string} name Uniform name.
            @param {any} value Uniform value.
            @return {DrawCall} The DrawCall object.
        */
        uniform(name, value) {
            let index = this.uniformIndices[name];
            if (index === undefined) {
                index = this.uniformCount++;
                this.uniformIndices[name] = index;
                this.uniformNames[index] = name;
            }
            this.uniformValues[index] = value;

            return this;
        }

        /**
            Set texture to bind to a sampler uniform.

            @method
            @param {string} name Sampler uniform name.
            @param {Texture|Cubemap} texture Texture or Cubemap to bind.
            @return {DrawCall} The DrawCall object.
        */
        texture(name, texture) {
            let unit = this.currentProgram.samplers[name];
            this.textures[unit] = texture;

            return this;
        }

        /**
            Set uniform buffer to bind to a uniform block.

            @method
            @param {string} name Uniform block name.
            @param {UniformBuffer} buffer Uniform buffer to bind.
            @return {DrawCall} The DrawCall object.
        */
        uniformBlock(name, buffer) {
            let base = this.currentProgram.uniformBlocks[name];
            this.uniformBuffers[base] = buffer;

            return this;
        }

        /**
            Ranges in the vertex array to draw. Multiple arguments can be provided to set up
            a multi-draw. Note that after this method is called, draw counts will no longer
            automatically be pulled from the VertexArray.

            @method
            @param {...Array} counts Variable number of 2 or 3 element arrays, each containing:
                <ul>
                    <li> (Number) Number of elements to skip at the start of the array.
                    <li> (Number) Number of elements to draw.
                    <li> (Number - optional) Number of instances to draw of the given range.
                </ul>
            @return {DrawCall} The DrawCall object.
        */
        drawRanges(...counts) {
            this.numDraws = counts.length;

            if (this.offsets.length < this.numDraws) {
                this.offsets = new Int32Array(this.numDraws);
            }

            if (this.numElements.length < this.numDraws) {
                this.numElements = new Int32Array(this.numDraws);
            }

            if (this.numInstances.length < this.numDraws) {
                this.numInstances = new Int32Array(this.numDraws);
            }

            for (let i = 0; i < this.numDraws; ++i) {
                let count = counts[i];

                this.offsets[i] = count[0];
                this.numElements[i] = count[1];
                this.numInstances[i] = count[2] || 1;
            }

            this.drawCountsFromVertexArray = false;

            return this;
        }

        /**
            Draw based on current state.

            @method
            @return {DrawCall} The DrawCall object.
        */
        draw() {
            let uniformNames = this.uniformNames;
            let uniformValues = this.uniformValues;
            let uniformBuffers = this.uniformBuffers;
            let uniformBlockCount = this.currentProgram.uniformBlockCount;
            let textures = this.textures;
            let textureCount = this.currentProgram.samplerCount;
            let indexed = false;

            this.currentProgram.bind();

            if (this.currentVertexArray) {
                this.currentVertexArray.bind();
                indexed = this.currentVertexArray.indexed;

                if (this.drawCountsFromVertexArray) {
                    this.numElements[0] = this.currentVertexArray.numElements;
                    this.numInstances[0] = this.currentVertexArray.numInstances;
                }
            }

            for (let uIndex = 0; uIndex < this.uniformCount; ++uIndex) {
                this.currentProgram.uniform(uniformNames[uIndex], uniformValues[uIndex]);
            }

            for (let base = 0; base < uniformBlockCount; ++base) {
                uniformBuffers[base].bind(base);
            }

            for (let tIndex = 0; tIndex < textureCount; ++tIndex) {
                textures[tIndex].bind(tIndex);
            }

            if (this.currentTransformFeedback) {
                this.currentTransformFeedback.bind();
                this.gl.beginTransformFeedback(this.drawPrimitive);
            } else if (this.appState.transformFeedback) {
                this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
                this.appState.transformFeedback = null;
            }

            if (WEBGL_INFO.MULTI_DRAW_INSTANCED) {
                let ext = this.appState.extensions.multiDrawInstanced;
                if (indexed) {
                    ext.multiDrawElementsInstancedWEBGL(this.drawPrimitive, this.numElements, 0, this.currentVertexArray.indexType, this.offsets, 0, this.numInstances, 0, this.numDraws);
                } else {
                    ext.multiDrawArraysInstancedWEBGL(this.drawPrimitive, this.offsets, 0, this.numElements, 0, this.numInstances, 0, this.numDraws);
                }
            } else if (indexed) {
                for (let i = 0; i < this.numDraws; ++i) {
                    this.gl.drawElementsInstanced(this.drawPrimitive, this.numElements[i], this.currentVertexArray.indexType, this.offsets[i], this.numInstances[i]);
                }
            } else {
                for (let i = 0; i < this.numDraws; ++i) {
                    this.gl.drawArraysInstanced(this.drawPrimitive, this.offsets[i], this.numElements[i], this.numInstances[i]);
                }
            }

            if (this.currentTransformFeedback) {
                this.gl.endTransformFeedback();
            }

            return this;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        General-purpose texture.

        @class Texture
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLTexture} texture Handle to the texture.
        @prop {number} width Texture width.
        @prop {number} height Texture height.
        @prop {number} depth Texture depth.
        @prop {GLenum} binding Binding point for the texture.
        @prop {GLenum} type Type of data stored in the texture.
        @prop {GLenum} format Layout of texture data.
        @prop {GLenum} internalFormat Internal arrangement of the texture data.
        @prop {number} currentUnit The current texture unit this texture is bound to.
        @prop {boolean} is3D Whether this texture contains 3D data.
        @prop {boolean} flipY Whether the y-axis is flipped for this texture.
        @prop {boolean} premultiplyAlpha Whether alpha should be pre-multiplied when loading this texture.
        @prop {boolean} mipmaps Whether this texture is using mipmap filtering
            (and thus should have a complete mipmap chain).
        @prop {Object} appState Tracked GL state.
    */
    class Texture {
        constructor(gl, appState, binding, image, width = image.width, height = image.height, depth, is3D, options = DUMMY_OBJECT) {

            this.gl = gl;
            this.binding = binding;
            this.texture = null;
            this.width = width || 0;
            this.height = height || 0;
            this.depth = depth || 0;
            this.is3D = is3D;
            this.appState = appState;

            this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.internalFormat]);

            if (options.format !== undefined) {
                console.warn("Texture option 'format' is deprecated and will be removed. Use 'internalFormat' with a sized format instead.");
                this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.format]);
                if (options.type === undefined) {
                    options.type = options.format === GL.DEPTH_COMPONENT ? GL.UNSIGNED_SHORT : GL.UNSIGNED_BYTE;
                }
                if (options.internalFormat === undefined) {
                    if (this.compressed) {
                        options.internalFormat = options.format;
                    } else {
                        options.internalFormat = TEXTURE_FORMAT_DEFAULTS[options.type][options.format];
                    }
                }
            }

            if (this.compressed) {
                // For compressed textures, just need to provide one of format, internalFormat.
                // The other will be the same.
                this.internalFormat = options.internalFormat;
                this.format = this.internalFormat;
                this.type = GL.UNSIGNED_BYTE;
            } else {
                this.internalFormat = options.internalFormat !== undefined ? options.internalFormat : GL.RGBA8;

                let formatInfo = TEXTURE_FORMATS[this.internalFormat];
                this.format = formatInfo[0];
                this.type = options.type !== undefined ? options.type : formatInfo[1];
            }

            // -1 indicates unbound
            this.currentUnit = -1;

            // Sampling parameters
            let {
                minFilter = image ? GL.LINEAR_MIPMAP_NEAREST : GL.NEAREST,
                magFilter = image ? GL.LINEAR : GL.NEAREST,
                wrapS = GL.REPEAT,
                wrapT = GL.REPEAT,
                wrapR = GL.REPEAT,
                compareMode = GL.NONE,
                compareFunc = GL.LEQUAL,
                minLOD = null,
                maxLOD = null,
                baseLevel = null,
                maxLevel = null,
                maxAnisotropy = 1,
                flipY = false,
                premultiplyAlpha = false
            } = options;

            this.minFilter = minFilter;
            this.magFilter = magFilter;
            this.wrapS = wrapS;
            this.wrapT = wrapT;
            this.wrapR = wrapR;
            this.compareMode = compareMode;
            this.compareFunc = compareFunc;
            this.minLOD = minLOD;
            this.maxLOD = maxLOD;
            this.baseLevel = baseLevel;
            this.maxLevel = maxLevel;
            this.maxAnisotropy = Math.min(maxAnisotropy, WEBGL_INFO.MAX_TEXTURE_ANISOTROPY);
            this.flipY = flipY;
            this.premultiplyAlpha = premultiplyAlpha;
            this.mipmaps = (minFilter === GL.LINEAR_MIPMAP_NEAREST || minFilter === GL.LINEAR_MIPMAP_LINEAR);

            this.restore(image);
        }

        /**
            Restore texture after context loss.

            @method
            @param {HTMLElement|ArrayBufferView|Array} [image] Image data. An array can be passed to manually set all levels
                of the mipmap chain. If a single level is passed and mipmap filtering is being used,
                generateMipmap() will be called to produce the remaining levels.
            @return {Texture} The Texture object.
        */
        restore(image) {
            this.texture = null;
            this.resize(this.width, this.height, this.depth);

            if (image) {
                this.data(image);
            }

            return this;
        }

        /**
            Re-allocate texture storage.

            @method
            @param {number} width Image width.
            @param {number} height Image height.
            @param {number} [depth] Image depth or number of images. Required when passing 3D or texture array data.
            @return {Texture} The Texture object.
        */
        resize(width, height, depth) {
            depth = depth || 0;

            if (this.texture && width === this.width && height === this.height && depth === this.depth) {
                return this;
            }

            this.gl.deleteTexture(this.texture);
            if (this.currentUnit !== -1) {
                this.appState.textures[this.currentUnit] = null;
            }

            this.texture = this.gl.createTexture();
            this.bind(Math.max(this.currentUnit, 0));

            this.width = width;
            this.height = height;
            this.depth = depth;

            this.gl.texParameteri(this.binding, GL.TEXTURE_MIN_FILTER, this.minFilter);
            this.gl.texParameteri(this.binding, GL.TEXTURE_MAG_FILTER, this.magFilter);
            this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_S, this.wrapS);
            this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_T, this.wrapT);
            this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_R, this.wrapR);
            this.gl.texParameteri(this.binding, GL.TEXTURE_COMPARE_FUNC, this.compareFunc);
            this.gl.texParameteri(this.binding, GL.TEXTURE_COMPARE_MODE, this.compareMode);

            if (this.minLOD !== null) {
                this.gl.texParameterf(this.binding, GL.TEXTURE_MIN_LOD, this.minLOD);
            }

            if (this.maxLOD !== null) {
                this.gl.texParameterf(this.binding, GL.TEXTURE_MAX_LOD, this.maxLOD);
            }

            if (this.baseLevel !== null) {
                this.gl.texParameteri(this.binding, GL.TEXTURE_BASE_LEVEL, this.baseLevel);
            }

            if (this.maxLevel !== null) {
                this.gl.texParameteri(this.binding, GL.TEXTURE_MAX_LEVEL, this.maxLevel);
            }

            if (this.maxAnisotropy > 1) {
                this.gl.texParameteri(this.binding, GL.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
            }

            let levels;
            if (this.is3D) {
                if (this.mipmaps) {
                    levels = Math.floor(Math.log2(Math.max(Math.max(this.width, this.height), this.depth))) + 1;
                } else {
                    levels = 1;
                }
                this.gl.texStorage3D(this.binding, levels, this.internalFormat, this.width, this.height, this.depth);
            } else {
                if (this.mipmaps) {
                    levels = Math.floor(Math.log2(Math.max(this.width, this.height))) + 1;
                } else {
                    levels = 1;
                }
                this.gl.texStorage2D(this.binding, levels, this.internalFormat, this.width, this.height);
            }

            return this;
        }

        /**
            Set the image data for the texture. An array can be passed to manually set all levels
            of the mipmap chain. If a single level is passed and mipmap filtering is being used,
            generateMipmap() will be called to produce the remaining levels.
            NOTE: the data must fit the currently-allocated storage!

            @method
            @param {HTMLImageElement|ArrayBufferView|Array} data Image data. If an array is passed, it will be
                used to set mip map levels.
            @return {Texture} The Texture object.
        */
        data(data) {
            if (!Array.isArray(data)) {
                DUMMY_UNIT_ARRAY[0] = data;
                data = DUMMY_UNIT_ARRAY;
            }

            let numLevels = this.mipmaps ? data.length : 1;
            let width = this.width;
            let height = this.height;
            let depth = this.depth;
            let generateMipmaps = this.mipmaps && data.length === 1;
            let i;

            this.bind(Math.max(this.currentUnit, 0));
            this.gl.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, this.flipY);
            this.gl.pixelStorei(GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

            if (this.compressed) {
                if (this.is3D) {
                    for (i = 0; i < numLevels; ++i) {
                        this.gl.compressedTexSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, data[i]);
                        width = Math.max(width >> 1, 1);
                        height = Math.max(height >> 1, 1);
                        depth = Math.max(depth >> 1, 1);
                    }
                } else {
                    for (i = 0; i < numLevels; ++i) {
                        this.gl.compressedTexSubImage2D(this.binding, i, 0, 0, width, height, this.format, data[i]);
                        width = Math.max(width >> 1, 1);
                        height = Math.max(height >> 1, 1);
                    }
                }
            } else if (this.is3D) {
                for (i = 0; i < numLevels; ++i) {
                    this.gl.texSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, this.type, data[i]);
                    width = Math.max(width >> 1, 1);
                    height = Math.max(height >> 1, 1);
                    depth = Math.max(depth >> 1, 1);
                }
            } else {
                for (i = 0; i < numLevels; ++i) {
                    this.gl.texSubImage2D(this.binding, i, 0, 0, width, height, this.format, this.type, data[i]);
                    width = Math.max(width >> 1, 1);
                    height = Math.max(height >> 1, 1);
                }
            }

            if (generateMipmaps) {
                this.gl.generateMipmap(this.binding);
            }

            return this;
        }

        /**
            Delete this texture.

            @method
            @return {Texture} The Texture object.
        */
        delete() {
            if (this.texture) {
                this.gl.deleteTexture(this.texture);
                this.texture = null;

                if (this.currentUnit !== -1 && this.appState.textures[this.currentUnit] === this) {
                    this.appState.textures[this.currentUnit] = null;
                    this.currentUnit = -1;
                }
            }

            return this;
        }

        /**
            Bind this texture to a texture unit.

            @method
            @ignore
            @return {Texture} The Texture object.
        */
        bind(unit) {
            let currentTexture = this.appState.textures[unit];

            if (this.appState.activeTexture !== unit) {
                this.gl.activeTexture(GL.TEXTURE0 + unit);
                this.appState.activeTexture = unit;
            }

            if (currentTexture !== this) {
                if (currentTexture) {
                    currentTexture.currentUnit = -1;
                }

                if (this.currentUnit !== -1) {
                    this.appState.textures[this.currentUnit] = null;
                }

                this.gl.bindTexture(this.binding, this.texture);

                this.appState.textures[unit] = this;
                this.currentUnit = unit;
            }

            return this;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        Offscreen drawing attachment.

        @class Renderbuffer
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLRenderbuffer} renderbuffer Handle to the renderbuffer.
        @prop {number} width Renderbuffer width.
        @prop {number} height Renderbuffer height.
        @prop {GLenum} internalFormat Internal arrangement of the renderbuffer data.
        @prop {number} samples Number of MSAA samples.
    */
    class Renderbuffer {
        constructor(gl, width, height, internalFormat, samples = 0) {
            this.gl = gl;
            this.renderbuffer = null;
            this.width = width;
            this.height = height;
            this.internalFormat = internalFormat;
            this.samples = samples;
            this.restore();
        }

        /**
            Restore renderbuffer after context loss.

            @method
            @return {Renderbuffer} The Renderbuffer object.
        */
        restore() {
            this.renderbuffer = this.gl.createRenderbuffer();
            this.resize(this.width, this.height);

            return this;
        }

        /**
            Resize the renderbuffer.

            @method
            @param {number} width New width of the renderbuffer.
            @param {number} height New height of the renderbuffer.
            @return {Renderbuffer} The Renderbuffer object.
        */
        resize(width, height) {
            this.width = width;
            this.height = height;
            this.gl.bindRenderbuffer(GL.RENDERBUFFER, this.renderbuffer);
            this.gl.renderbufferStorageMultisample(GL.RENDERBUFFER, this.samples, this.internalFormat, this.width, this.height);
            this.gl.bindRenderbuffer(GL.RENDERBUFFER, null);

            return this;
        }

        /**
            Delete this renderbuffer.

            @method
            @return {Renderbuffer} The Renderbuffer object.
        */
        delete() {
            this.gl.deleteRenderbuffer(this.renderbuffer);
            this.renderbuffer = null;

            return this;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        Offscreen drawing surface.

        @class Framebuffer
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLFramebuffer} framebuffer Handle to the framebuffer.
        @prop {number} width Framebuffer width.
        @prop {number} height Framebuffer height.
        @prop {Array} colorAttachments Array of color attachments.
        @prop {Texture|Renderbuffer} depthAttachment Depth attachment.
        @prop {Object} appState Tracked GL state.
    */
    class Framebuffer {

        constructor(gl, appState) {
            this.gl = gl;
            this.framebuffer = null;
            this.appState = appState;

            this.numColorTargets = 0;

            this.colorAttachments = [];
            this.colorAttachmentEnums = [];
            this.colorAttachmentTargets = [];
            this.depthAttachment = null;
            this.depthAttachmentTarget = null;

            this.width = 0;
            this.height = 0;

            this.restore();
        }

        /**
            Restore framebuffer after context loss.

            @method
            @return {Framebuffer} The Framebuffer object.
        */
        restore() {
            let currentFramebuffers = this.appState.framebuffers;
            for (let binding in currentFramebuffers) {
                if (currentFramebuffers[binding] === this) {
                    currentFramebuffers[binding] = null;
                }
            }

            this.framebuffer = this.gl.createFramebuffer();

            return this;
        }

        /**
            Attach a color target to this framebuffer.

            @method
            @param {number} index Color attachment index.
            @param {Texture|Cubemap|Renderbuffer} attachment The texture, cubemap or renderbuffer to attach.
            @param {GLenum} [target] The texture target or layer to attach. If the texture is 3D or a texture array,
                defaults to 0, otherwise to TEXTURE_2D. Ignored for renderbuffers.
            @return {Framebuffer} The Framebuffer object.
        */
        colorTarget(index, attachment, target = attachment.is3D ? 0 : GL.TEXTURE_2D) {

            if (index >= this.numColorTargets) {
                let numColorTargets = index + 1;
                this.colorAttachmentEnums.length = numColorTargets;
                this.colorAttachments.length = numColorTargets;
                this.colorAttachmentTargets.length = numColorTargets;

                for (let i = this.numColorTargets; i < numColorTargets - 1; ++i) {
                    this.colorAttachmentEnums[i] = GL.NONE;
                    this.colorAttachments[i] = null;
                    this.colorAttachmentTargets[i] = 0;
                }

                this.numColorTargets = numColorTargets;
            }

            this.colorAttachmentEnums[index] = GL.COLOR_ATTACHMENT0 + index;
            this.colorAttachments[index] = attachment;
            this.colorAttachmentTargets[index] = target;

            let currentFramebuffer = this.bindAndCaptureState();
            let binding = this.appState.drawFramebufferBinding;

            if (attachment instanceof Renderbuffer) {
                this.gl.framebufferRenderbuffer(binding, this.colorAttachmentEnums[index], GL.RENDERBUFFER, attachment.renderbuffer);
            } else if (attachment.is3D) {
                this.gl.framebufferTextureLayer(binding, this.colorAttachmentEnums[index], attachment.texture, 0, target);
            } else {
                this.gl.framebufferTexture2D(binding, this.colorAttachmentEnums[index], target, attachment.texture, 0);
            }

            this.gl.drawBuffers(this.colorAttachmentEnums);

            this.width = attachment.width;
            this.height = attachment.height;

            this.restoreState(currentFramebuffer);

            return this;
        }

        /**
            Attach a depth target to this framebuffer.

            @method
            @param {Texture|Cubemap|Renderbuffer} texture The texture, cubemap or renderbuffer to attach.
            @param {GLenum} [target] The texture target or layer to attach. If the texture is 3D or a texture array or renderbuffer,
                defaults to 0, otherwise to TEXTURE_2D. Ignored for renderbuffers.
            @return {Framebuffer} The Framebuffer object.
        */
        depthTarget(attachment, target = attachment.is3D ? 0 : GL.TEXTURE_2D) {

            let currentFramebuffer = this.bindAndCaptureState();
            let binding = this.appState.drawFramebufferBinding;

            this.depthAttachment = attachment;
            this.depthAttachmentTarget = target;

            if (attachment instanceof Renderbuffer) {
                this.gl.framebufferRenderbuffer(binding, GL.DEPTH_ATTACHMENT, GL.RENDERBUFFER, attachment.renderbuffer);
            } else if (attachment.is3D) {
                this.gl.framebufferTextureLayer(binding, GL.DEPTH_ATTACHMENT, attachment.texture, 0, target);
            } else {
                this.gl.framebufferTexture2D(binding, GL.DEPTH_ATTACHMENT, target, attachment.texture, 0);
            }

            this.width = attachment.width;
            this.height = attachment.height;

            this.restoreState(currentFramebuffer);

            return this;
        }

        /**
            Resize all attachments.

            @method
            @param {number} [width=app.width] New width of the framebuffer.
            @param {number} [height=app.height] New height of the framebuffer.
            @return {Framebuffer} The Framebuffer object.
        */
        resize(width = this.gl.drawingBufferWidth, height = this.gl.drawingBufferHeight) {

            let currentFramebuffer = this.bindAndCaptureState();
            let binding = this.appState.drawFramebufferBinding;

            for (let i = 0; i < this.numColorTargets; ++i) {
                let attachment = this.colorAttachments[i];

                if (!attachment) {
                    continue;
                }

                attachment.resize(width, height);
                if (attachment instanceof Texture) {
                    // Texture resizing recreates the texture object.
                    if (attachment.is3D) {
                        this.gl.framebufferTextureLayer(binding, this.colorAttachmentEnums[i], attachment.texture, 0, this.colorAttachmentTargets[i]);
                    } else {
                        this.gl.framebufferTexture2D(binding, this.colorAttachmentEnums[i], this.colorAttachmentTargets[i], attachment.texture, 0);
                    }
                }
            }

            if (this.depthAttachment) {
                this.depthAttachment.resize(width, height);
                if (this.depthAttachment instanceof Texture) {
                    // Texture resizing recreates the texture object.
                    if (this.depthAttachment.is3D) {
                        this.gl.framebufferTextureLayer(binding, GL.DEPTH_ATTACHMENT, this.depthAttachment.texture, 0, this.depthAttachmentTarget);
                    } else {
                        this.gl.framebufferTexture2D(binding, GL.DEPTH_ATTACHMENT, this.depthAttachmentTarget, this.depthAttachment.texture, 0);
                    }
                }
            }

            this.width = width;
            this.height = height;

            this.restoreState(currentFramebuffer);

            return this;
        }

        /**
            Delete this framebuffer.

            @method
            @return {Framebuffer} The Framebuffer object.
        */
        delete() {
            if (this.framebuffer) {
                this.gl.deleteFramebuffer(this.framebuffer);
                this.framebuffer = null;

                let currentFramebuffers = this.appState.framebuffers;
                for (let binding in currentFramebuffers) {
                    if (currentFramebuffers[binding] === this) {
                        this.gl.bindFramebuffer(binding, null);
                        currentFramebuffers[binding] = null;
                    }
                }
            }

            return this;
        }

        /**
            Get the current status of this framebuffer.

            @method
            @return {GLenum} The current status of this framebuffer.
        */
        getStatus() {
            let currentFramebuffer = this.bindAndCaptureState();
            let binding = this.appState.drawFramebufferBinding;
            let status = this.gl.checkFramebufferStatus(binding);
            this.restoreState(currentFramebuffer);

            return status;
        }

        /**
            Bind as the draw framebuffer

            @method
            @ignore
            @return {Framebuffer} The Framebuffer object.
        */
        bindForDraw() {
            let binding = this.appState.drawFramebufferBinding;
            let currentFramebuffers = this.appState.framebuffers;
            if (currentFramebuffers[binding] !== this) {
                this.gl.bindFramebuffer(binding, this.framebuffer);
                currentFramebuffers[binding] = this;
            }

            return this;
        }

        /**
            Bind as the read framebuffer

            @method
            @ignore
            @return {Framebuffer} The Framebuffer object.
        */
        bindForRead() {
            let binding = this.appState.readFramebufferBinding;
            let currentFramebuffers = this.appState.framebuffers;
            if (currentFramebuffers[binding] !== this) {
                this.gl.bindFramebuffer(binding, this.framebuffer);
                currentFramebuffers[binding] = this;
            }

            return this;
        }

        /**
            Bind for a framebuffer state update.
            Capture current binding so we can restore it later.

            @method
            @ignore
            @return {Framebuffer} The Framebuffer object.
        */
        bindAndCaptureState() {
            let binding = this.appState.drawFramebufferBinding;
            let currentFramebuffer = this.appState.framebuffers[binding];

            if (currentFramebuffer !== this) {
                this.gl.bindFramebuffer(binding, this.framebuffer);
            }

            return currentFramebuffer;
        }

        /**
            Bind restore previous binding after state update

            @method
            @ignore
            @return {Framebuffer} The Framebuffer object.
        */
        restoreState(framebuffer) {
            if (framebuffer !== this) {
                let binding = this.appState.drawFramebufferBinding;
                this.gl.bindFramebuffer(binding, framebuffer ? framebuffer.framebuffer : null);
            }

            return this;
        }

        // TODO(Tarek): Transitional support for deprecated properties.
        get colorTextures() {
            console.error("Framebuffer.colorTextures is deprecated and will be removed. Please use Framebuffer.colorAttachments.");
            return this.colorAttachments;
        }

        get depthTexture() {
            console.error("Framebuffer.depthTexture is deprecated and will be removed. Please use Framebuffer.depthAttachment.");
            return this.depthAttachment;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        WebGL shader.

        @class Shader
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLShader} shader The shader.
    */
    class Shader {

        constructor(gl, appState, type, source) {
            this.gl = gl;
            this.appState = appState;
            this.shader = null;
            this.type = type;
            this.source = source.trim();

            this.restore();
        }

        /**
            Restore shader after context loss.

            @method
            @return {Shader} The Shader object.
        */
        restore() {
            this.shader = this.gl.createShader(this.type);
            this.gl.shaderSource(this.shader, this.source);
            this.gl.compileShader(this.shader);

            return this;
        }

        /**
            Get the shader source translated for the platform's API.

            @method
            @return {String} The translated shader source.
        */
        translatedSource() {
            if (WEBGL_INFO.DEBUG_SHADERS) {
                return this.appState.extensions.debugShaders.getTranslatedShaderSource(this.shader);
            } else {
                return "(Unavailable)";
            }
        }

        /**
            Delete this shader.

            @method
            @return {Shader} The Shader object.
        */
        delete() {
            if (this.shader) {
                this.gl.deleteShader(this.shader);
                this.shader = null;
            }

            return this;
        }


        checkCompilation() {
            if (!this.gl.getShaderParameter(this.shader, GL.COMPILE_STATUS)) {
                let i, lines;

                console.error(this.gl.getShaderInfoLog(this.shader));
                lines = this.source.split("\n");
                for (i = 0; i < lines.length; ++i) {
                    console.error(`${i + 1}: ${lines[i]}`);
                }
            }

            return this;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////

    // Classes to manage uniform value updates, including
    // caching current values.

    const UNIFORM_FUNC_NAME = {};
    UNIFORM_FUNC_NAME[GL.BOOL] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.INT] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.SAMPLER_2D] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.INT_SAMPLER_2D] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_2D] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.SAMPLER_2D_SHADOW] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.SAMPLER_2D_ARRAY] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.INT_SAMPLER_2D_ARRAY] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.SAMPLER_2D_ARRAY_SHADOW] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.SAMPLER_CUBE] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.INT_SAMPLER_CUBE] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_CUBE] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.SAMPLER_CUBE_SHADOW] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.SAMPLER_3D] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.INT_SAMPLER_3D] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_3D] = "uniform1i";
    UNIFORM_FUNC_NAME[GL.UNSIGNED_INT] = "uniform1ui";
    UNIFORM_FUNC_NAME[GL.FLOAT] = "uniform1f";
    UNIFORM_FUNC_NAME[GL.FLOAT_VEC2] = "uniform2f";
    UNIFORM_FUNC_NAME[GL.FLOAT_VEC3] = "uniform3f";
    UNIFORM_FUNC_NAME[GL.FLOAT_VEC4] = "uniform4f";
    UNIFORM_FUNC_NAME[GL.INT_VEC2] = "uniform2i";
    UNIFORM_FUNC_NAME[GL.INT_VEC3] = "uniform3i";
    UNIFORM_FUNC_NAME[GL.INT_VEC4] = "uniform4i";
    UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC2] = "uniform2ui";
    UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC3] = "uniform3ui";
    UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC4] = "uniform4ui";
    UNIFORM_FUNC_NAME[GL.BOOL_VEC2] = "uniform2i";
    UNIFORM_FUNC_NAME[GL.BOOL_VEC3] = "uniform3i";
    UNIFORM_FUNC_NAME[GL.BOOL_VEC4] = "uniform4i";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT2] = "uniformMatrix2fv";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT3] = "uniformMatrix3fv";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT4] = "uniformMatrix4fv";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT2x3] = "uniformMatrix2x3fv";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT2x4] = "uniformMatrix2x4fv";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT3x2] = "uniformMatrix3x2fv";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT3x4] = "uniformMatrix3x4fv";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT4x2] = "uniformMatrix4x2fv";
    UNIFORM_FUNC_NAME[GL.FLOAT_MAT4x3] = "uniformMatrix4x3fv";

    const UNIFORM_COMPONENT_COUNT = {};
    UNIFORM_COMPONENT_COUNT[GL.BOOL] = 1;
    UNIFORM_COMPONENT_COUNT[GL.INT] = 1;
    UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D] = 1;
    UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_2D] = 1;
    UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_2D] = 1;
    UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_SHADOW] = 1;
    UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_ARRAY] = 1;
    UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_2D_ARRAY] = 1;
    UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = 1;
    UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_ARRAY_SHADOW] = 1;
    UNIFORM_COMPONENT_COUNT[GL.SAMPLER_CUBE] = 1;
    UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_CUBE] = 1;
    UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_CUBE] = 1;
    UNIFORM_COMPONENT_COUNT[GL.SAMPLER_CUBE_SHADOW] = 1;
    UNIFORM_COMPONENT_COUNT[GL.SAMPLER_3D] = 1;
    UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_3D] = 1;
    UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_3D] = 1;
    UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT] = 1;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT] = 1;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC2] = 2;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC3] = 3;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC4] = 4;
    UNIFORM_COMPONENT_COUNT[GL.INT_VEC2] = 2;
    UNIFORM_COMPONENT_COUNT[GL.INT_VEC3] = 3;
    UNIFORM_COMPONENT_COUNT[GL.INT_VEC4] = 4;
    UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC2] = 2;
    UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC3] = 3;
    UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC4] = 4;
    UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC2] = 2;
    UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC3] = 3;
    UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC4] = 4;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2] = 4;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3] = 9;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4] = 16;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2x3] = 6;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2x4] = 8;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3x2] = 6;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3x4] = 12;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4x2] = 8;
    UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4x3] = 12;

    const UNIFORM_CACHE_CLASS = {};
    UNIFORM_CACHE_CLASS[GL.INT] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.SAMPLER_2D] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_2D] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_2D] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_SHADOW] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_ARRAY] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_2D_ARRAY] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_ARRAY_SHADOW] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.SAMPLER_CUBE] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_CUBE] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_CUBE] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.SAMPLER_CUBE_SHADOW] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.SAMPLER_3D] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_3D] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_3D] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT] = Uint32Array;
    UNIFORM_CACHE_CLASS[GL.FLOAT] = Float32Array;
    UNIFORM_CACHE_CLASS[GL.FLOAT_VEC2] = Float32Array;
    UNIFORM_CACHE_CLASS[GL.FLOAT_VEC3] = Float32Array;
    UNIFORM_CACHE_CLASS[GL.FLOAT_VEC4] = Float32Array;
    UNIFORM_CACHE_CLASS[GL.INT_VEC2] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.INT_VEC3] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.INT_VEC4] = Int32Array;
    UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC2] = Uint32Array;
    UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC3] = Uint32Array;
    UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC4] = Uint32Array;

    class SingleComponentUniform {
        
        constructor(gl, handle, type) {
            this.gl = gl;
            this.handle = handle;
            this.glFuncName = UNIFORM_FUNC_NAME[type];
            this.cache = type === GL.BOOL ? false : 0;
        }

        set(value) {
            if (this.cache !== value) {
                this.gl[this.glFuncName](this.handle, value);
                this.cache = value;
            }
        }

    }

    class MultiNumericUniform {

        constructor(gl, handle, type, count) {
            this.gl = gl;
            this.handle = handle;
            this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
            this.count = count;
            this.cache = new UNIFORM_CACHE_CLASS[type](UNIFORM_COMPONENT_COUNT[type] * count);
        }

        set(value) {
            for (let i = 0, len = value.length; i < len; ++i) {
                if (this.cache[i] !== value[i]) {
                    this.gl[this.glFuncName](this.handle, value);
                    this.cache.set(value);
                    return;
                }
            }
        }

    }

    class MultiBoolUniform {

        constructor(gl, handle, type, count) {
            this.gl = gl;
            this.handle = handle;
            this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
            this.count = count;
            this.cache = new Array(UNIFORM_COMPONENT_COUNT[type] * count).fill(false);
        }

        set(value) {
            for (let i = 0, len = value.length; i < len; ++i) {
                if (this.cache[i] !== value[i]) {
                    this.gl[this.glFuncName](this.handle, value);
                    for (let j = i; j < len; j++) {
                        this.cache[j] = value[j];
                    }
                    return;
                }
            }
        }

    }

    class MatrixUniform {

        constructor(gl, handle, type, count) {
            this.gl = gl;
            this.handle = handle;
            this.glFuncName = UNIFORM_FUNC_NAME[type];
            this.count = count;
            this.cache = new Float32Array(UNIFORM_COMPONENT_COUNT[type] * count);
        }

        set(value) {
            for (let i = 0, len = value.length; i < len; ++i) {
                if (this.cache[i] !== value[i]) {
                    this.gl[this.glFuncName](this.handle, false, value);
                    this.cache.set(value);
                    return;
                }
            }
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        WebGL program consisting of compiled and linked vertex and fragment
        shaders.

        @class Program
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLProgram} program The WebGL program.
        @prop {array} transformFeedbackVaryings Names of transform feedback varyings, if any.
        @prop {GLenum} transformFeedbackMode Capture mode of the transform feedback.
        @prop {Object.<string, number>} attributeLocations Map of user-provided attribute names to indices, if any.
        @prop {Object} uniforms Map of uniform names to handles.
        @prop {Object} appState Tracked GL state.
    */
    class Program {

        constructor(gl, appState, vsSource, fsSource, xformFeebackVars, attributeLocations, transformFeedbackMode) {
            this.gl = gl;
            this.appState = appState;
            this.program = null;
            this.transformFeedbackVaryings = xformFeebackVars || null;
            this.transformFeedbackMode = transformFeedbackMode || GL.SEPARATE_ATTRIBS;
            this.attributeLocations = attributeLocations || null;
            this.uniforms = {};
            this.uniformBlocks = {};
            this.uniformBlockCount = 0;
            this.samplers = {};
            this.samplerCount = 0;

            this.vertexSource = null;
            this.vertexShader = null;
            this.fragmentSource = null;
            this.fragmentShader = null;
            this.linked = false;

            if (typeof vsSource === "string") {
                this.vertexSource = vsSource;
            } else {
                this.vertexShader = vsSource;
            }

            if (typeof fsSource === "string") {
                this.fragmentSource = fsSource;
            } else {
                this.fragmentShader = fsSource;
            }

            this.initialize();
        }

        /**
            Restore program after context loss. Note that this
            will stall for completion. <b>App.restorePrograms</b>
            is the preferred method for program restoration as
            it will parallelize compilation where available.

            @method
            @return {Program} The Program object.
        */
        restore() {
            this.initialize();
            this.link();
            this.checkLinkage();

            return this;
        }

        /**
            Get the vertex shader source translated for the platform's API.

            @method
            @return {String} The translated vertex shader source.
        */
        translatedVertexSource() {
            if (this.vertexShader) {
                return this.vertexShader.translatedSource();
            } else {
                let vertexShader = new Shader(this.gl, this.appState, GL.VERTEX_SHADER, this.vertexSource);
                let translatedSource = vertexShader.translatedSource();
                vertexShader.delete();
                return translatedSource;
            }
        }

        /**
            Get the fragment shader source translated for the platform's API.

            @method
            @return {String} The translated fragment shader source.
        */
        translatedFragmentSource() {
            if (this.fragmentShader) {
                return this.fragmentShader.translatedSource();
            } else {
                let fragmentShader = new Shader(this.gl, this.appState, GL.FRAGMENT_SHADER, this.fragmentSource);
                let translatedSource = fragmentShader.translatedSource();
                fragmentShader.delete();
                return translatedSource;
            }
        }

        /**
            Delete this program.

            @method
            @return {Program} The Program object.
        */
        delete() {
            if (this.program) {
                this.gl.deleteProgram(this.program);
                this.program = null;

                if (this.appState.program === this) {
                    this.gl.useProgram(null);
                    this.appState.program = null;
                }
            }

            return this;
        }

        // Initialize program state
        initialize() {
            if (this.appState.program === this) {
                this.gl.useProgram(null);
                this.appState.program = null;
            }

            this.linked = false;
            this.uniformBlockCount = 0;
            this.samplerCount = 0;

            if (this.vertexSource) {
                this.vertexShader = new Shader(this.gl, this.appState, GL.VERTEX_SHADER, this.vertexSource);
            }

            if (this.fragmentSource) {
                this.fragmentShader = new Shader(this.gl, this.appState, GL.FRAGMENT_SHADER, this.fragmentSource);
            }

            this.program = this.gl.createProgram();

            return this;
        }

        // Attach shaders and link program.
        // Done as a separate step to avoid stalls on compileShader
        // when doing async compile.
        link() {
            this.gl.attachShader(this.program, this.vertexShader.shader);
            this.gl.attachShader(this.program, this.fragmentShader.shader);
            if (this.transformFeedbackVaryings) {
                this.gl.transformFeedbackVaryings(this.program, this.transformFeedbackVaryings, this.transformFeedbackMode);
            }
            if (this.attributeLocations) {
                for (let name in this.attributeLocations) {
                    this.gl.bindAttribLocation(this.program, this.attributeLocations[name], name);
                }
            }
            this.gl.linkProgram(this.program);

            return this;
        }

        // Check if compilation is complete
        checkCompletion() {
            if (WEBGL_INFO.PARALLEL_SHADER_COMPILE) {
                return this.gl.getProgramParameter(this.program, GL.COMPLETION_STATUS_KHR);
            }

            return true;
        }

        // Check if program linked.
        // Will stall for completion.
        checkLinkage() {
            if (this.linked) {
                return this;
            }

            if (this.gl.getProgramParameter(this.program, GL.LINK_STATUS)) {
                this.linked = true;
                this.initVariables();
            } else {
                console.error(this.gl.getProgramInfoLog(this.program));
                this.vertexShader.checkCompilation();
                this.fragmentShader.checkCompilation();
            }

            if (this.vertexSource) {
                this.vertexShader.delete();
                this.vertexShader = null;
            }

            if (this.fragmentSource) {
                this.fragmentShader.delete();
                this.fragmentShader = null;
            }

            return this;
        }

        // Get variable handles from program
        initVariables() {
            this.bind();

            let numUniforms = this.gl.getProgramParameter(this.program, GL.ACTIVE_UNIFORMS);
            let textureUnit;

            for (let i = 0; i < numUniforms; ++i) {
                let uniformInfo = this.gl.getActiveUniform(this.program, i);
                let uniformHandle = this.gl.getUniformLocation(this.program, uniformInfo.name);
                let UniformClass = null;
                let type = uniformInfo.type;
                let numElements = uniformInfo.size;

                switch (type) {
                    case GL.SAMPLER_2D:
                    case GL.INT_SAMPLER_2D:
                    case GL.UNSIGNED_INT_SAMPLER_2D:
                    case GL.SAMPLER_2D_SHADOW:
                    case GL.SAMPLER_2D_ARRAY:
                    case GL.INT_SAMPLER_2D_ARRAY:
                    case GL.UNSIGNED_INT_SAMPLER_2D_ARRAY:
                    case GL.SAMPLER_2D_ARRAY_SHADOW:
                    case GL.SAMPLER_CUBE:
                    case GL.INT_SAMPLER_CUBE:
                    case GL.UNSIGNED_INT_SAMPLER_CUBE:
                    case GL.SAMPLER_CUBE_SHADOW:
                    case GL.SAMPLER_3D:
                    case GL.INT_SAMPLER_3D:
                    case GL.UNSIGNED_INT_SAMPLER_3D:
                        textureUnit = this.samplerCount++;
                        this.samplers[uniformInfo.name] = textureUnit;
                        this.gl.uniform1i(uniformHandle, textureUnit);
                        break;
                    case GL.INT:
                    case GL.UNSIGNED_INT:
                    case GL.FLOAT:
                        UniformClass = numElements > 1 ? MultiNumericUniform : SingleComponentUniform;
                        break;
                    case GL.BOOL:
                        UniformClass = numElements > 1 ? MultiBoolUniform : SingleComponentUniform;
                        break;
                    case GL.FLOAT_VEC2:
                    case GL.INT_VEC2:
                    case GL.UNSIGNED_INT_VEC2:
                    case GL.FLOAT_VEC3:
                    case GL.INT_VEC3:
                    case GL.UNSIGNED_INT_VEC3:
                    case GL.FLOAT_VEC4:
                    case GL.INT_VEC4:
                    case GL.UNSIGNED_INT_VEC4:
                        UniformClass = MultiNumericUniform;
                        break;
                    case GL.BOOL_VEC2:
                    case GL.BOOL_VEC3:
                    case GL.BOOL_VEC4:
                        UniformClass = MultiBoolUniform;
                        break;
                    case GL.FLOAT_MAT2:
                    case GL.FLOAT_MAT3:
                    case GL.FLOAT_MAT4:
                    case GL.FLOAT_MAT2x3:
                    case GL.FLOAT_MAT2x4:
                    case GL.FLOAT_MAT3x2:
                    case GL.FLOAT_MAT3x4:
                    case GL.FLOAT_MAT4x2:
                    case GL.FLOAT_MAT4x3:
                        UniformClass = MatrixUniform;
                        break;
                    default:
                        console.error("Unrecognized type for uniform ", uniformInfo.name);
                        break;
                }

                if (UniformClass) {
                    this.uniforms[uniformInfo.name] = new UniformClass(this.gl, uniformHandle, type, numElements);
                }
            }

            let numUniformBlocks = this.gl.getProgramParameter(this.program, GL.ACTIVE_UNIFORM_BLOCKS);

            for (let i = 0; i < numUniformBlocks; ++i) {
                let blockName = this.gl.getActiveUniformBlockName(this.program, i);
                let blockIndex = this.gl.getUniformBlockIndex(this.program, blockName);

                let uniformBlockBase = this.uniformBlockCount++;
                this.gl.uniformBlockBinding(this.program, blockIndex, uniformBlockBase);
                this.uniformBlocks[blockName] = uniformBlockBase;
            }
        }

        // Set the value of a uniform.
        uniform(name, value) {
            // some uniforms are optimized out
            if (this.uniforms[name]) {
                this.uniforms[name].set(value);
            }

            return this;
        }

        // Use this program.
        bind() {
            if (this.appState.program !== this) {
                this.gl.useProgram(this.program);
                this.appState.program = this;
            }

            return this;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        Generic query object.

        @class Query
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLQuery} query Query object.
        @prop {GLenum} target The type of information being queried.
        @prop {boolean} active Whether or not a query is currently in progress.
        @prop {Any} result The result of the query (only available after a call to ready() returns true).
    */
    class Query {

        constructor(gl, target) {
            this.gl = gl;
            this.query = null;
            this.target = target;
            this.active = false;
            this.result = null;

            this.restore();
        }

        /**
            Restore query after context loss.

            @method
            @return {Query} The Query object.
        */
        restore() {
            this.query = this.gl.createQuery();
            this.active = false;
            this.result = null;

            return this;
        }

        /**
            Begin a query.

            @method
            @return {Query} The Query object.
        */
        begin() {
            if (!this.active) {
                this.gl.beginQuery(this.target, this.query);
                this.result = null;
            }

            return this;
        }

        /**
            End a query.

            @method
            @return {Query} The Query object.
        */
        end() {
            if (!this.active) {
                this.gl.endQuery(this.target);
                this.active = true;
            }

            return this;
        }

        /**
            Check if query result is available.

            @method
            @return {boolean} If results are available.
        */
        ready() {
            if (this.active && this.gl.getQueryParameter(this.query, GL.QUERY_RESULT_AVAILABLE)) {
                this.active = false;
                // Note(Tarek): Casting because FF incorrectly returns booleans.
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1422714
                this.result = Number(this.gl.getQueryParameter(this.query, GL.QUERY_RESULT));
                return true;
            }

            return false;
        }

        /**
            Delete this query.

            @method
            @return {Query} The Query object.
        */
        delete() {
            if (this.query) {
                this.gl.deleteQuery(this.query);
                this.query = null;
            }

            return this;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        Rendering timer.

        @class Timer
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {Object} cpuTimer Timer for CPU. Will be window.performance, if available, or window.Date.
        @prop {WebGLQuery} gpuTimerQuery Timer query object for GPU (if gpu timing is supported).
        @prop {boolean} gpuTimerQueryInProgress Whether a gpu timer query is currently in progress.
        @prop {number} cpuStartTime When the last CPU timing started.
        @prop {number} cpuTime Time spent on CPU during last timing. Only valid if ready() returns true.
        @prop {number} gpuTime Time spent on GPU during last timing. Only valid if ready() returns true.
                Will remain 0 if extension EXT_disjoint_timer_query_webgl2 is unavailable.
    */
    class Timer {

        constructor(gl) {
            this.gl = gl;
            this.cpuTimer = window.performance || window.Date;

            this.gpuTimerQuery = null;

            this.cpuStartTime = 0;
            this.cpuTime = 0;
            this.gpuTime = 0;

            this.restore();
        }

        /**
            Restore timer after context loss.

            @method
            @return {Timer} The Timer object.
        */
        restore() {
            if (WEBGL_INFO.GPU_TIMER) {
                if (this.gpuTimerQuery) {
                    this.gpuTimerQuery.restore();
                } else {
                    this.gpuTimerQuery = new Query(this.gl, GL.TIME_ELAPSED_EXT);
                }
            }

            this.cpuStartTime = 0;
            this.cpuTime = 0;
            this.gpuTime = 0;

            return this;
        }


        /**
            Start timing.

            @method
            @return {Timer} The Timer object.
        */
        start() {
            if (WEBGL_INFO.GPU_TIMER) {
                if (!this.gpuTimerQuery.active) {
                    this.gpuTimerQuery.begin();
                    this.cpuStartTime = this.cpuTimer.now();
                }
            } else {
                this.cpuStartTime = this.cpuTimer.now();
            }

            return this;
        }


        /**
            Stop timing.

            @method
            @return {Timer} The Timer object.
        */
        end() {
            if (WEBGL_INFO.GPU_TIMER) {
                if (!this.gpuTimerQuery.active) {
                    this.gpuTimerQuery.end();
                    this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
                }
            } else {
                this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
            }

            return this;
        }

        /**
            Check if timing results are available. If
            this method returns true, the cpuTime and
            gpuTime properties will be set to valid
            values.

            @method
            @return {boolean} If results are available.
        */
        ready() {
            if (WEBGL_INFO.GPU_TIMER) {
                if (!this.gpuTimerQuery.active) {
                    return false;
                }

                var gpuTimerAvailable = this.gpuTimerQuery.ready();
                var gpuTimerDisjoint = this.gl.getParameter(GL.GPU_DISJOINT_EXT);

                if (gpuTimerAvailable && !gpuTimerDisjoint) {
                    this.gpuTime = this.gpuTimerQuery.result  / 1000000;
                    return true;
                } else {
                    return false;
                }
            } else {
                return Boolean(this.cpuStartTime);
            }
        }

        /**
            Delete this timer.

            @method
            @return {Timer} The Timer object.
        */
        delete() {
            if (this.gpuTimerQuery) {
                this.gpuTimerQuery.delete();
                this.gpuTimerQuery = null;
            }

            return this;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        Tranform feedback object.

        @class TransformFeedback
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLTransformFeedback} transformFeedback Transform feedback object.
        @prop {Object} appState Tracked GL state.
    */
    class TransformFeedback {

        constructor(gl, appState) {
            this.gl = gl;
            this.appState = appState;
            this.transformFeedback = null;

            this.restore();
        }

        /**
            Restore transform feedback after context loss.

            @method
            @return {TransformFeedback} The TransformFeedback object.
        */
        restore() {
            if (this.appState.transformFeedback === this) {
                this.appState.transformFeedback = null;
            }

            this.transformFeedback = this.gl.createTransformFeedback();

            return this;
        }

        /**
            Bind a feedback buffer to capture transform output.

            @method
            @param {number} index Index of transform feedback varying to capture.
            @param {VertexBuffer} buffer Buffer to record output into.
            @return {TransformFeedback} The TransformFeedback object.
        */
        feedbackBuffer(index, buffer) {
            this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.transformFeedback);
            this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, index, buffer.buffer);

            // TODO(Tarek): Firefox doesn't properly unbind TRANSFORM_FEEDBACK_BUFFER
            // bindings when TRANSFORM_FEEDBACK is unbound.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1541396
            this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
            this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, index, null);

            return this;
        }

        /**
            Delete this transform feedback.

            @method
            @return {TransformFeedback} The TransformFeedback object.
        */
        delete() {
            if (this.transformFeedback) {
                this.gl.deleteTransformFeedback(this.transformFeedback);
                this.transformFeedback = null;

                if (this.appState.transformFeedback === this) {
                    this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
                    this.appState.transformFeedback = null;
                }
            }

            return this;
        }

        /**
            Bind this transform feedback.

            @method
            @ignore
            @return {TransformFeedback} The TransformFeedback object.
        */
        bind() {
            if (this.appState.transformFeedback !== this) {
                this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.transformFeedback);
                this.appState.transformFeedback = this;
            }

            return this;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        Storage for uniform data. Data is stored in std140 layout.

        @class UniformBuffer
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLBuffer} buffer Allocated buffer storage.
        @prop {Float32Array} data Buffer data.
        @prop {Object} dataViews Map of base data types to matching ArrayBufferViews of the buffer data.
        @prop {Array} offsets Offsets into the array for each item in the buffer.
        @prop {Array} sizes Size of the item at the given offset.
        @prop {Array} types The base type of the item at the given offset (FLOAT, INT or UNSIGNED_INT).
        @prop {number} size The size of the buffer (in 4-byte items).
        @prop {GLenum} usage Usage pattern of the buffer.
    */
    class UniformBuffer {

        constructor(gl, appState, layout, usage = gl.DYNAMIC_DRAW) {
            this.gl = gl;
            this.buffer = null;
            this.dataViews = {};
            this.offsets = new Array(layout.length);
            this.sizes = new Array(layout.length);
            this.types = new Array(layout.length);
            this.size = 0;
            this.usage = usage;
            this.appState = appState;

            // -1 indicates unbound
            this.currentBase = -1;

            for (let i = 0, len = layout.length; i < len; ++i) {
                let type = layout[i];
                switch(type) {
                    case GL.FLOAT:
                    case GL.INT:
                    case GL.UNSIGNED_INT:
                    case GL.BOOL:
                        this.offsets[i] = this.size;
                        this.sizes[i] = 1;

                        if (type === GL.INT) {
                            this.types[i] = GL.INT;
                        } else if (type === GL.UNSIGNED_INT) {
                            this.types[i] = GL.UNSIGNED_INT;
                        } else {
                            this.types[i] = GL.FLOAT;
                        }

                        this.size++;
                        break;
                    case GL.FLOAT_VEC2:
                    case GL.INT_VEC2:
                    case GL.UNSIGNED_INT_VEC2:
                    case GL.BOOL_VEC2:
                        this.size += this.size % 2;
                        this.offsets[i] = this.size;
                        this.sizes[i] = 2;

                        if (type === GL.INT_VEC2) {
                            this.types[i] = GL.INT;
                        } else if (type === GL.UNSIGNED_INT_VEC2) {
                            this.types[i] = GL.UNSIGNED_INT;
                        } else {
                            this.types[i] = GL.FLOAT;
                        }

                        this.size += 2;
                        break;
                    case GL.FLOAT_VEC3:
                    case GL.INT_VEC3:
                    case GL.UNSIGNED_INT_VEC3:
                    case GL.BOOL_VEC3:
                    case GL.FLOAT_VEC4:
                    case GL.INT_VEC4:
                    case GL.UNSIGNED_INT_VEC4:
                    case GL.BOOL_VEC4:
                        this.size += (4 - this.size % 4) % 4;
                        this.offsets[i] = this.size;
                        this.sizes[i] = 4;

                        if (type === GL.INT_VEC4 || type === GL.INT_VEC3) {
                            this.types[i] = GL.INT;
                        } else if (type === GL.UNSIGNED_INT_VEC4 || type === GL.UNSIGNED_INT_VEC3) {
                            this.types[i] = GL.UNSIGNED_INT;
                        } else {
                            this.types[i] = GL.FLOAT;
                        }

                        this.size += 4;
                        break;
                    case GL.FLOAT_MAT2:
                    case GL.FLOAT_MAT2x3:
                    case GL.FLOAT_MAT2x4:
                        this.size += (4 - this.size % 4) % 4;
                        this.offsets[i] = this.size;
                        this.sizes[i] = 8;
                        this.types[i] = GL.FLOAT;

                        this.size += 8;
                        break;
                    case GL.FLOAT_MAT3:
                    case GL.FLOAT_MAT3x2:
                    case GL.FLOAT_MAT3x4:
                        this.size += (4 - this.size % 4) % 4;
                        this.offsets[i] = this.size;
                        this.sizes[i] = 12;
                        this.types[i] = GL.FLOAT;

                        this.size += 12;
                        break;
                    case GL.FLOAT_MAT4:
                    case GL.FLOAT_MAT4x2:
                    case GL.FLOAT_MAT4x3:
                        this.size += (4 - this.size % 4) % 4;
                        this.offsets[i] = this.size;
                        this.sizes[i] = 16;
                        this.types[i] = GL.FLOAT;

                        this.size += 16;
                        break;
                    default:
                        console.error("Unsupported type for uniform buffer.");
                }
            }

            this.size += (4 - this.size % 4) % 4;

            this.data = new Float32Array(this.size);
            this.dataViews[GL.FLOAT] = this.data;
            this.dataViews[GL.INT] = new Int32Array(this.data.buffer);
            this.dataViews[GL.UNSIGNED_INT] = new Uint32Array(this.data.buffer);

            this.dirtyStart = this.size;
            this.dirtyEnd = 0;

            this.restore();
        }

        /**
            Restore uniform buffer after context loss.

            @method
            @return {UniformBuffer} The UniformBuffer object.
        */
        restore() {
            if (this.currentBase !== -1 && this.appState.uniformBuffers[this.currentBase] === this) {
                this.appState.uniformBuffers[this.currentBase] = null;
            }

            this.buffer = this.gl.createBuffer();
            this.gl.bindBuffer(GL.UNIFORM_BUFFER, this.buffer);
            this.gl.bufferData(GL.UNIFORM_BUFFER, this.size * 4, this.usage);
            this.gl.bindBuffer(GL.UNIFORM_BUFFER, null);

            return this;
        }

        /**
            Update data for a given item in the buffer. NOTE: Data is not
            sent the the GPU until the update() method is called!

            @method
            @param {number} index Index in the layout of item to set.
            @param {ArrayBufferView} value Value to store at the layout location.
            @return {UniformBuffer} The UniformBuffer object.
        */
        set(index, value) {
            let view = this.dataViews[this.types[index]];
            let offset = this.offsets[index];
            let size = this.sizes[index];

            if (this.sizes[index] === 1)  {
                view[offset] = value;
            } else {
                view.set(value, offset);
            }

            if (offset < this.dirtyStart) {
                this.dirtyStart = offset;
            }

            if (this.dirtyEnd < offset + size) {
                this.dirtyEnd = offset + size;
            }

            return this;
        }

        /**
            Send stored buffer data to the GPU.

            @method
            @return {UniformBuffer} The UniformBuffer object.
        */
        update() {
            if (this.dirtyStart >= this.dirtyEnd) {
                return this;
            }

            let data = this.data.subarray(this.dirtyStart, this.dirtyEnd);
            let offset = this.dirtyStart * 4;

            this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, this.buffer);
            this.gl.bufferSubData(this.gl.UNIFORM_BUFFER, offset, data);
            this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, null);

            this.dirtyStart = this.size;
            this.dirtyEnd = 0;

            return this;
        }

        /**
            Delete this uniform buffer.

            @method
            @return {UniformBuffer} The UniformBuffer object.
        */
        delete() {
            if (this.buffer) {
                this.gl.deleteBuffer(this.buffer);
                this.buffer = null;

                if (this.currentBase !== -1 && this.appState.uniformBuffers[this.currentBase] === this) {
                    this.appState.uniformBuffers[this.currentBase] = null;
                }

                this.currentBase = -1;
            }

            return this;
        }

        /**
            Bind this uniform buffer to the given base.

            @method
            @ignore
            @return {UniformBuffer} The UniformBuffer object.
        */
        bind(base) {
            let currentBuffer = this.appState.uniformBuffers[base];

            if (currentBuffer !== this) {

                if (currentBuffer) {
                    currentBuffer.currentBase = -1;
                }

                if (this.currentBase !== -1) {
                    this.appState.uniformBuffers[this.currentBase] = null;
                }

                this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, base, this.buffer);

                this.appState.uniformBuffers[base] = this;
                this.currentBase = base;
            }

            return this;
        }

    }

    // Copyright (c) 2017 Tarek Sherif

    /**
        Organizes vertex buffer and attribute state.

        @class VertexArray
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLVertexArrayObject} vertexArray Vertex array object.
        @prop {number} numElements Number of elements in the vertex array.
        @prop {boolean} indexed Whether this vertex array is set up for indexed drawing.
        @prop {GLenum} indexType Data type of the indices.
        @prop {number} numInstances Number of instances to draw with this vertex array.
        @prop {Object} appState Tracked GL state.
    */
    class VertexArray {

        constructor(gl, appState) {
            this.gl = gl;
            this.appState = appState;
            this.vertexArray = null;
            this.indexType = null;
            this.indexed = false;
            this.numElements = 0;
            this.numInstances = 1;
            this.offsets = 0;
            this.numDraws = 1;
        }

        /**
            Restore vertex array after context loss.

            @method
            @return {VertexArray} The VertexArray object.
        */
        restore() {
            if (this.appState.vertexArray === this) {
                this.appState.vertexArray = null;
            }

            // re-allocate at gl level, if necessary
            if (this.vertexArray !== null) {
                this.vertexArray = this.gl.createVertexArray();
            }

            return this;
        }


        /**
            Bind an per-vertex attribute buffer to this vertex array.

            @method
            @param {number} attributeIndex The attribute location to bind to.
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @param {Object} [options] Attribute pointer options. These will override those provided in the
                VertexBuffer.
            @param {GLenum} [options.type] Type of data stored in the buffer.
            @param {GLenum} [options.size] Number of components per vertex.
            @param {GLenum} [options.stride] Number of bytes between the start of data for each vertex.
            @param {GLenum} [options.offset] Number of bytes before the start of data for the first vertex.
            @param {boolean} [options.normalized] Data is integer data that should be normalized to a float.
            @param {GLenum} [options.integer] Pass data as integers.
            @return {VertexArray} The VertexArray object.
        */
        vertexAttributeBuffer(attributeIndex, vertexBuffer, options = DUMMY_OBJECT) {
            this.attributeBuffer(attributeIndex, vertexBuffer, options, false);

            return this;
        }

        /**
            Bind an per-instance attribute buffer to this vertex array.

            @method
            @param {number} attributeIndex The attribute location to bind to.
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @param {Object} [options] Attribute pointer options. These will override those provided in the
                VertexBuffer.
            @param {GLenum} [options.type] Type of data stored in the buffer.
            @param {GLenum} [options.size] Number of components per vertex.
            @param {GLenum} [options.stride] Number of bytes between the start of data for each vertex.
            @param {GLenum} [options.offset] Number of bytes before the start of data for the first vertex.
            @param {GLenum} [options.normalized] Data is integer data that should be normalized to a float.
            @param {GLenum} [options.integer] Pass data as integers.
            @return {VertexArray} The VertexArray object.
        */
        instanceAttributeBuffer(attributeIndex, vertexBuffer, options = DUMMY_OBJECT) {
            this.attributeBuffer(attributeIndex, vertexBuffer, options, true);

            return this;
        }

        /**
            Bind an index buffer to this vertex array.

            @method
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @return {VertexArray} The VertexArray object.
        */
        indexBuffer(vertexBuffer) {
            // allocate at gl level, if necessary
            if (this.vertexArray === null) {
                this.vertexArray = this.gl.createVertexArray();
            }

            this.bind();
            this.gl.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, vertexBuffer.buffer);

            this.numElements = vertexBuffer.numItems * 3;
            this.indexType = vertexBuffer.type;
            this.indexed = true;

            return this;
        }

        /**
            Delete this vertex array.

            @method
            @return {VertexArray} The VertexArray object.
        */
        delete() {
            if (this.vertexArray) {
                this.gl.deleteVertexArray(this.vertexArray);
                this.vertexArray = null;

                if (this.appState.vertexArray === this) {
                    this.gl.bindVertexArray(null);
                    this.appState.vertexArray = null;
                }
            }

            return this;
        }

        // Bind this vertex array.
        bind() {
            if (this.appState.vertexArray !== this) {
                this.gl.bindVertexArray(this.vertexArray);
                this.appState.vertexArray = this;
            }

            return this;
        }

        // Generic attribute buffer attachment
        attributeBuffer(attributeIndex, vertexBuffer, options = {}, instanced) {
            // allocate at gl level, if necessary
            if (this.vertexArray === null) {
                this.vertexArray = this.gl.createVertexArray();
            }

            this.bind();
            this.gl.bindBuffer(GL.ARRAY_BUFFER, vertexBuffer.buffer);

            let {
                type = vertexBuffer.type,
                size = vertexBuffer.itemSize,
                stride = 0,
                offset = 0,
                normalized = false,
                integer = Boolean(vertexBuffer.integer && !normalized)
            } = options;

            let numColumns = vertexBuffer.numColumns;

            if (stride === 0) {
                // Set explicitly for matrix buffers
                stride = numColumns * size * TYPE_SIZE[type];
            }

            let numItems = Math.ceil((vertexBuffer.byteLength - offset) / stride);

            for (let i = 0; i < numColumns; ++i) {
                if (integer) {
                    this.gl.vertexAttribIPointer(
                        attributeIndex + i,
                        size,
                        type,
                        stride,
                        offset + i * size * TYPE_SIZE[type]);
                } else {
                    this.gl.vertexAttribPointer(
                        attributeIndex + i,
                        size,
                        type,
                        normalized,
                        stride,
                        offset + i * size * TYPE_SIZE[type]);
                }

                if (instanced) {
                    this.gl.vertexAttribDivisor(attributeIndex + i, 1);
                }

                this.gl.enableVertexAttribArray(attributeIndex + i);
            }

            if (this.numDraws === 1) {
                if (instanced) {
                    this.numInstances = numItems;
                } else if (!this.indexed) {
                    this.numElements = numItems;
                }
            }

            this.gl.bindBuffer(GL.ARRAY_BUFFER, null);

            return this;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////

    const INTEGER_TYPES = {
        [GL.BYTE]: true,
        [GL.UNSIGNED_BYTE]: true,
        [GL.SHORT]: true,
        [GL.UNSIGNED_SHORT]: true,
        [GL.INT]: true,
        [GL.UNSIGNED_INT]: true
    };

    /**
        Storage for vertex data.

        @class VertexBuffer
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {WebGLBuffer} buffer Allocated buffer storage.
        @prop {GLenum} type The type of data stored in the buffer.
        @prop {number} itemSize Number of array elements per vertex.
        @prop {number} numItems Number of vertices represented.
        @prop {GLenum} usage The usage pattern of the buffer.
        @prop {boolean} indexArray Whether this is an index array.
        @prop {GLenum} binding GL binding point (ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER).
        @prop {Object} appState Tracked GL state.
    */
    class VertexBuffer {

        constructor(gl, appState, type, itemSize, data, usage = gl.STATIC_DRAW, indexArray) {
            let numColumns;
            switch(type) {
                case GL.FLOAT_MAT4:
                case GL.FLOAT_MAT4x2:
                case GL.FLOAT_MAT4x3:
                    numColumns = 4;
                    break;
                case GL.FLOAT_MAT3:
                case GL.FLOAT_MAT3x2:
                case GL.FLOAT_MAT3x4:
                    numColumns = 3;
                    break;
                case GL.FLOAT_MAT2:
                case GL.FLOAT_MAT2x3:
                case GL.FLOAT_MAT2x4:
                    numColumns = 2;
                    break;
                default:
                    numColumns = 1;
            }

            switch(type) {
                case GL.FLOAT_MAT4:
                case GL.FLOAT_MAT3x4:
                case GL.FLOAT_MAT2x4:
                    itemSize = 4;
                    type = GL.FLOAT;
                    break;
                case GL.FLOAT_MAT3:
                case GL.FLOAT_MAT4x3:
                case GL.FLOAT_MAT2x3:
                    itemSize = 3;
                    type = GL.FLOAT;
                    break;
                case GL.FLOAT_MAT2:
                case GL.FLOAT_MAT3x2:
                case GL.FLOAT_MAT4x2:
                    itemSize = 2;
                    type = GL.FLOAT;
                    break;
            }

            let dataLength;
            let byteLength;
            if (typeof data === "number") {
                dataLength = data;
                if (type) {
                    data *= TYPE_SIZE[type];
                }
                byteLength = data;
            } else {
                dataLength = data.length;
                byteLength = data.byteLength;
            }

            this.gl = gl;
            this.buffer = null;
            this.appState = appState;
            this.type = type;
            this.itemSize = itemSize;  // In bytes for interleaved arrays.
            this.numItems = type ? dataLength / (itemSize * numColumns) : byteLength / itemSize;
            this.numColumns = numColumns;
            this.byteLength = byteLength;
            this.usage = usage;
            this.indexArray = Boolean(indexArray);
            this.integer = Boolean(INTEGER_TYPES[this.type]);
            this.binding = this.indexArray ? GL.ELEMENT_ARRAY_BUFFER : GL.ARRAY_BUFFER;

            this.restore(data);
        }

        /**
            Restore vertex buffer after context loss.

            @method
            @param {ArrayBufferView|number} data Buffer data itself or the total
                number of elements to be allocated.
            @return {VertexBuffer} The VertexBuffer object.
        */
        restore(data) {
            if (!data) {
                data = this.byteLength;
            }

            // Don't want to update vertex array bindings
            if (this.appState.vertexArray) {
                this.gl.bindVertexArray(null);
                this.appState.vertexArray = null;
            }

            this.buffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.binding, this.buffer);
            this.gl.bufferData(this.binding, data, this.usage);
            this.gl.bindBuffer(this.binding, null);

            return this;
        }

        /**
            Update data in this buffer. NOTE: the data must fit
            the originally-allocated buffer!

            @method
            @param {ArrayBufferView} data Data to store in the buffer.
            @param {number} [offset=0] Byte offset into the buffer at which to start writing.
            @return {VertexBuffer} The VertexBuffer object.
        */
        data(data, offset = 0) {
            // Don't want to update vertex array bindings
            if (this.appState.vertexArray) {
                this.gl.bindVertexArray(null);
                this.appState.vertexArray = null;
            }

            this.gl.bindBuffer(this.binding, this.buffer);
            this.gl.bufferSubData(this.binding, offset, data);
            this.gl.bindBuffer(this.binding, null);

            return this;
        }

        /**
            Delete this array buffer.

            @method
            @return {VertexBuffer} The VertexBuffer object.
        */
        delete() {
            if (this.buffer) {
                this.gl.deleteBuffer(this.buffer);
                this.buffer = null;
            }

            return this;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    /**
        Primary entry point to PicoGL. An app will store all parts of the WebGL
        state.

        @class App
        @param {WebGLRenderingContext} gl
        @prop {HTMLElement} canvas The canvas on which this app drawing.
        @prop {WebGLRenderingContext} gl The WebGL context.
        @prop {number} width The width of the drawing surface.
        @prop {number} height The height of the drawing surface.
        @prop {Object} state Tracked GL state.
        @prop {Object} state.drawFramebufferBinding=GL.DRAW_FRAMEBUFFER Binding point to bind framebuffers to for draw. Should be set before any binding occurs. Should only have values GL.DRAW_FRAMEBUFFER or GL.FRAMEBUFFER (the latter with state.readFramebufferBinding set to the same).
        @prop {Object} state.readFramebufferBinding=GL.READ_FRAMEBUFFER  Binding point to bind framebuffers to for read. Should be set before any binding occurs. Should only have values GL.READ_FRAMEBUFFER or GL.FRAMEBUFFER (the latter with state.drawFramebufferBinding set to the same).
        @prop {GLenum} clearBits Current clear mask to use with clear().
    */
    class App {

        constructor(gl) {
            this.gl = gl;
            this.canvas = gl.canvas;
            this.width = this.gl.drawingBufferWidth;
            this.height = this.gl.drawingBufferHeight;
            this.viewportX = 0;
            this.viewportY = 0;
            this.viewportWidth = 0;
            this.viewportHeight = 0;
            this.currentDrawCalls = null;
            this.emptyFragmentShader = null;

            this.state = {
                program: null,
                vertexArray: null,
                transformFeedback: null,
                activeTexture: -1,
                textures: new Array(WEBGL_INFO.MAX_TEXTURE_UNITS),
                uniformBuffers: new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS),
                freeUniformBufferBases: [],
                framebuffers: {},
                drawFramebufferBinding: GL.DRAW_FRAMEBUFFER,
                readFramebufferBinding: GL.READ_FRAMEBUFFER,
                extensions: {}
            };

            this.clearBits = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT| this.gl.STENCIL_BUFFER_BIT;

            this.cpuTime = 0;
            this.gpuTime = 0;

            this.viewport(0, 0, this.width, this.height);

            this.contextLostExt = null;
            this.contextLostListener = null;
            this.contextRestoredListener = null;
            this.contextRestoredHandler = null;

            this.initExtensions();
        }

        /**
            Simulate context loss.

            @method
            @return {App} The App object.
        */
        loseContext() {
            if (this.contextLostExt) {
                this.contextLostExt.loseContext();
            }

            return this;
        }

        /**
            Simulate context restoration.

            @method
            @return {App} The App object.
        */
        restoreContext() {
            if (this.contextLostExt) {
                this.contextLostExt.restoreContext();
            }

            return this;
        }

        /**
            Set function to handle context restoration after loss.

            @method
            @param {function} fn Context restored handler.
            @return {App} The App object.
        */
        onContextRestored(fn) {
            this.contextRestoredHandler = fn;

            this.initContextListeners();

            return this;
        }

        /**
            Enable WebGL capability (e.g. depth testing, blending, etc.).

            @method
            @param {GLenum} cap Capability to enable.
            @return {App} The App object.
        */
        enable(cap) {
            this.gl.enable(cap);

            return this;
        }

        /**
            Disable WebGL capability (e.g. depth testing, blending, etc.).

            @method
            @param {GLenum} cap Capability to disable.
            @return {App} The App object.
        */
        disable(cap) {
            this.gl.disable(cap);

            return this;
        }

        /**
            Set the color mask to selectively enable or disable particular
            color channels while rendering.

            @method
            @param {boolean} r Red channel.
            @param {boolean} g Green channel.
            @param {boolean} b Blue channel.
            @param {boolean} a Alpha channel.
            @return {App} The App object.
        */
        colorMask(r, g, b, a) {
            this.gl.colorMask(r, g, b, a);

            return this;
        }

        /**
            Set the clear color.

            @method
            @param {number} r Red channel.
            @param {number} g Green channel.
            @param {number} b Blue channel.
            @param {number} a Alpha channel.
            @return {App} The App object.
        */
        clearColor(r, g, b, a) {
            this.gl.clearColor(r, g, b, a);

            return this;
        }

        /**
            Set the clear mask bits to use when calling clear().
            E.g. app.clearMask(PicoGL.COLOR_BUFFER_BIT).

            @method
            @param {GLenum} mask Bit mask of buffers to clear.
            @return {App} The App object.
        */
        clearMask(mask) {
            this.clearBits = mask;

            return this;
        }

        /**
            Clear the canvas

            @method
            @return {App} The App object.
        */
        clear() {
            this.gl.clear(this.clearBits);

            return this;
        }

        /**
            Bind a draw framebuffer to the WebGL context.

            @method
            @param {Framebuffer} framebuffer The Framebuffer object to bind.
            @see Framebuffer
            @return {App} The App object.
        */
        drawFramebuffer(framebuffer) {
            framebuffer.bindForDraw();

            return this;
        }

        /**
            Bind a read framebuffer to the WebGL context.

            @method
            @param {Framebuffer} framebuffer The Framebuffer object to bind.
            @see Framebuffer
            @return {App} The App object.
        */
        readFramebuffer(framebuffer) {
            framebuffer.bindForRead();

            return this;
        }

        /**
            Switch back to the default framebuffer for drawing (i.e. draw to the screen).
            Note that this method resets the viewport to match the default framebuffer.

            @method
            @return {App} The App object.
        */
        defaultDrawFramebuffer() {
            let binding = this.state.drawFramebufferBinding;
            if (this.state.framebuffers[binding] !== null) {
                this.gl.bindFramebuffer(binding, null);
                this.state.framebuffers[binding] = null;
            }

            return this;
        }

        /**
            Switch back to the default framebuffer for reading (i.e. read from the screen).

            @method
            @return {App} The App object.
        */
        defaultReadFramebuffer() {
            let binding = this.state.readFramebufferBinding;
            if (this.state.framebuffers[binding] !== null) {
                this.gl.bindFramebuffer(binding, null);
                this.state.framebuffers[binding] = null;
            }

            return this;
        }

        /**
            Copy data from framebuffer attached to READ_FRAMEBUFFER to framebuffer attached to DRAW_FRAMEBUFFER.

            @method
            @param {GLenum} mask Write mask (e.g. PicoGL.COLOR_BUFFER_BIT).
            @param {Object} [options] Blit options.
            @param {number} [options.srcStartX=0] Source start x coordinate.
            @param {number} [options.srcStartY=0] Source start y coordinate.
            @param {number} [options.srcEndX=Width of the read framebuffer] Source end x coordinate.
            @param {number} [options.srcEndY=Height of the read framebuffer] Source end y coordinate.
            @param {number} [options.dstStartX=0] Destination start x coordinate.
            @param {number} [options.dstStartY=0] Destination start y coordinate.
            @param {number} [options.dstEndX=Width of the draw framebuffer] Destination end x coordinate.
            @param {number} [options.dstEndY=Height of the draw framebuffer] Destination end y coordinate.
            @param {number} [options.filter=NEAREST] Sampling filter.
            @return {App} The App object.
        */
        blitFramebuffer(mask, options = DUMMY_OBJECT) {
            let readBinding = this.state.readFramebufferBinding;
            let drawBinding = this.state.drawFramebufferBinding;
            let readFramebuffer = this.state.framebuffers[readBinding];
            let drawFramebuffer = this.state.framebuffers[drawBinding];
            let defaultReadWidth = readFramebuffer ? readFramebuffer.width : this.width;
            let defaultReadHeight = readFramebuffer ? readFramebuffer.height : this.height;
            let defaultDrawWidth = drawFramebuffer ? drawFramebuffer.width : this.width;
            let defaultDrawHeight = drawFramebuffer ? drawFramebuffer.height : this.height;

            let {
                srcStartX = 0,
                srcStartY = 0,
                srcEndX = defaultReadWidth,
                srcEndY = defaultReadHeight,
                dstStartX = 0,
                dstStartY = 0,
                dstEndX = defaultDrawWidth,
                dstEndY = defaultDrawHeight,
                filter = GL.NEAREST
            } = options;

            this.gl.blitFramebuffer(srcStartX, srcStartY, srcEndX, srcEndY, dstStartX, dstStartY, dstEndX, dstEndY, mask, filter);

            return this;
        }

        /**
            Set the depth range.

            @method
            @param {number} near Minimum depth value.
            @param {number} far Maximum depth value.
            @return {App} The App object.
        */
        depthRange(near, far) {
            this.gl.depthRange(near, far);

            return this;
        }

        /**
            Enable or disable writing to the depth buffer.

            @method
            @param {Boolean} mask The depth mask.
            @return {App} The App object.
        */
        depthMask(mask) {
            this.gl.depthMask(mask);

            return this;
        }

        /**
            Set the depth test function. E.g. app.depthFunc(PicoGL.LEQUAL).

            @method
            @param {GLenum} func The depth testing function to use.
            @return {App} The App object.
        */
        depthFunc(func) {
            this.gl.depthFunc(func);

            return this;
        }

        /**
            Set the blend function. E.g. app.blendFunc(PicoGL.ONE, PicoGL.ONE_MINUS_SRC_ALPHA).

            @method
            @param {GLenum} src The source blending weight.
            @param {GLenum} dest The destination blending weight.
            @return {App} The App object.
        */
        blendFunc(src, dest) {
            this.gl.blendFunc(src, dest);

            return this;
        }

        /**
            Set the blend function, with separate weighting for color and alpha channels.
            E.g. app.blendFuncSeparate(PicoGL.ONE, PicoGL.ONE_MINUS_SRC_ALPHA, PicoGL.ONE, PicoGL.ONE).

            @method
            @param {GLenum} csrc The source blending weight for the RGB channels.
            @param {GLenum} cdest The destination blending weight for the RGB channels.
            @param {GLenum} asrc The source blending weight for the alpha channel.
            @param {GLenum} adest The destination blending weight for the alpha channel.
            @return {App} The App object.
        */
        blendFuncSeparate(csrc, cdest, asrc, adest) {
            this.gl.blendFuncSeparate(csrc, cdest, asrc, adest);

            return this;
        }

        /**
            Set the blend equation. E.g. app.blendEquation(PicoGL.MIN).

            @method
            @param {GLenum} mode The operation to use in combining source and destination channels.
            @return {App} The App object.
        */
        blendEquation(mode) {
            this.gl.blendEquation(mode);

            return this;
        }

        /**
            Set the bitmask to use for tested stencil values.
            E.g. app.stencilMask(0xFF).
            NOTE: Only works if { stencil: true } passed as a
            context attribute when creating the App!

            @method
            @param {number} mask The mask value.
            @return {App} The App object.

        */
        stencilMask(mask) {
            this.gl.stencilMask(mask);

            return this;
        }

        /**
            Set the bitmask to use for tested stencil values for a particular face orientation.
            E.g. app.stencilMaskSeparate(PicoGL.FRONT, 0xFF).
            NOTE: Only works if { stencil: true } passed as a
            context attribute when creating the App!

            @method
            @param {GLenum} face The face orientation to apply the mask to.
            @param {number} mask The mask value.
            @return {App} The App object.
        */
        stencilMaskSeparate(face, mask) {
            this.gl.stencilMaskSeparate(face, mask);

            return this;
        }

        /**
            Set the stencil function and reference value.
            E.g. app.stencilFunc(PicoGL.EQUAL, 1, 0xFF).
            NOTE: Only works if { stencil: true } passed as a
            context attribute when creating the App!

            @method
            @param {GLenum} func The testing function.
            @param {number} ref The reference value.
            @param {GLenum} mask The bitmask to use against tested values before applying
                the stencil function.
            @return {App} The App object.
        */
        stencilFunc(func, ref, mask) {
            this.gl.stencilFunc(func, ref, mask);

            return this;
        }

        /**
            Set the stencil function and reference value for a particular face orientation.
            E.g. app.stencilFuncSeparate(PicoGL.FRONT, PicoGL.EQUAL, 1, 0xFF).
            NOTE: Only works if { stencil: true } passed as a
            context attribute when creating the App!

            @method
            @param {GLenum} face The face orientation to apply the function to.
            @param {GLenum} func The testing function.
            @param {number} ref The reference value.
            @param {GLenum} mask The bitmask to use against tested values before applying
                the stencil function.
            @return {App} The App object.
        */
        stencilFuncSeparate(face, func, ref, mask) {
            this.gl.stencilFuncSeparate(face, func, ref, mask);

            return this;
        }

        /**
            Set the operations for updating stencil buffer values.
            E.g. app.stencilOp(PicoGL.KEEP, PicoGL.KEEP, PicoGL.REPLACE).
            NOTE: Only works if { stencil: true } passed as a
            context attribute when creating the App!

            @method
            @param {GLenum} stencilFail Operation to apply if the stencil test fails.
            @param {GLenum} depthFail Operation to apply if the depth test fails.
            @param {GLenum} pass Operation to apply if the both the depth and stencil tests pass.
            @return {App} The App object.
        */
        stencilOp(stencilFail, depthFail, pass) {
            this.gl.stencilOp(stencilFail, depthFail, pass);

            return this;
        }

        /**
            Set the operations for updating stencil buffer values for a particular face orientation.
            E.g. app.stencilOpSeparate(PicoGL.FRONT, PicoGL.KEEP, PicoGL.KEEP, PicoGL.REPLACE).
            NOTE: Only works if { stencil: true } passed as a
            context attribute when creating the App!

            @method
            @param {GLenum} face The face orientation to apply the operations to.
            @param {GLenum} stencilFail Operation to apply if the stencil test fails.
            @param {GLenum} depthFail Operation to apply if the depth test fails.
            @param {GLenum} pass Operation to apply if the both the depth and stencil tests pass.
            @return {App} The App object.
        */
        stencilOpSeparate(face, stencilFail, depthFail, pass) {
            this.gl.stencilOpSeparate(face, stencilFail, depthFail, pass);

            return this;
        }

        /**
            Define the scissor box.

            @method
            @param {Number} x Horizontal position of the scissor box.
            @param {Number} y Vertical position of the scissor box.
            @param {Number} width Width of the scissor box.
            @param {Number} height Height of the scissor box.
            @return {App} The App object.
        */
        scissor(x, y, width, height) {
            this.gl.scissor(x, y, width, height);

            return this;
        }

        /**
            Set the scale and units used.

            @method
            @param {Number} factor Scale factor used to create a variable depth offset for each polygon.
            @param {Number} units Constant depth offset.
            @return {App} The App object.
        */
        polygonOffset(factor, units) {
            this.gl.polygonOffset(factor, units);

            return this;
        }

        /**
            Read a pixel's color value from the currently-bound framebuffer.

            @method
            @param {number} x The x coordinate of the pixel.
            @param {number} y The y coordinate of the pixel.
            @param {ArrayBufferView} outColor Typed array to store the pixel's color.
            @param {object} [options] Options.
            @param {GLenum} [options.type=UNSIGNED_BYTE] Type of data stored in the read framebuffer.
            @param {GLenum} [options.format=RGBA] Read framebuffer data format.
            @return {App} The App object.
        */
        readPixel(x, y, outColor, options = DUMMY_OBJECT) {
            let {
                format = GL.RGBA,
                type = GL.UNSIGNED_BYTE
            } = options;

            this.gl.readPixels(x, y, 1, 1, format, type, outColor);

            return this;
        }

        /**
            Set the viewport.

            @method
            @param {number} x Left bound of the viewport rectangle.
            @param {number} y Lower bound of the viewport rectangle.
            @param {number} width Width of the viewport rectangle.
            @param {number} height Height of the viewport rectangle.
            @return {App} The App object.
        */
        viewport(x, y, width, height) {

            if (this.viewportWidth !== width || this.viewportHeight !== height ||
                    this.viewportX !== x || this.viewportY !== y) {
                this.viewportX = x;
                this.viewportY = y;
                this.viewportWidth = width;
                this.viewportHeight = height;
                this.gl.viewport(x, y, this.viewportWidth, this.viewportHeight);
            }

            return this;
        }

        /**
            Set the viewport to the full canvas.

            @method
            @return {App} The App object.
        */
        defaultViewport() {
            this.viewport(0, 0, this.width, this.height);

            return this;
        }

        /**
            Resize the drawing surface.

            @method
            @param {number} width The new canvas width.
            @param {number} height The new canvas height.
            @return {App} The App object.
        */
        resize(width, height) {
            this.canvas.width = width;
            this.canvas.height = height;

            this.width = this.gl.drawingBufferWidth;
            this.height = this.gl.drawingBufferHeight;
            this.viewport(0, 0, this.width, this.height);

            return this;
        }

        /**
            Create a program synchronously. It is highly recommended to use <b>createPrograms</b> instead as
                that method will compile shaders in parallel where possible.
            @method
            @param {Shader|string} vertexShader Vertex shader object or source code.
            @param {Shader|string} fragmentShader Fragment shader object or source code.
            @param {Object} [options] Texture options.
            @param {Object} [options.attributeLocations] Map of attribute names to locations (useful when using GLSL 1).
            @param {Array} [options.transformFeedbackVaryings] Array of varying names used for transform feedback output.
            @param {GLenum} [options.transformFeedbackMode] Capture mode of the transform feedback. (Default: PicoGL.SEPARATE_ATTRIBS).
            @return {Program} New Program object.
        */
        createProgram(vsSource, fsSource, opts = {}) {
            let {transformFeedbackVaryings, attributeLocations, transformFeedbackMode} = opts;

            return new Program(this.gl, this.state, vsSource, fsSource, transformFeedbackVaryings, attributeLocations, transformFeedbackMode)
                .link()
                .checkLinkage();
        }

        /**
            Create several programs. Preferred method for program creation as it will compile shaders
            in parallel where possible.

            @method
            @param {...Array} sources Variable number of 2 or 3 element arrays, each containing:
                <ul>
                    <li> (Shader|string) Vertex shader object or source code.
                    <li> (Shader|string) Fragment shader object or source code.
                    <li> (Object - optional) Optional program parameters.
                    <ul>
                        <li>(Object - optional) <strong><code>attributeLocations</code></strong> Map of attribute names to locations (useful when using GLSL 1).
                        <li>(Array - optional) <strong><code>transformFeedbackVaryings</code></strong> Array of varying names used for transform feedback output.
                        <li>(GLenum - optional) <strong><code>transformFeedbackMode</code></strong> Capture mode of the transform feedback. (Default: PicoGL.SEPARATE_ATTRIBS).
                    </ul>
                    </ul>
                </ul>
            @return {Promise<Program[]>} Promise that will resolve to an array of Programs when compilation and
                linking are complete for all programs.
        */
        createPrograms(...sources) {
            return new Promise((resolve, reject) => {
                let numPrograms = sources.length;
                let programs = new Array(numPrograms);
                let pendingPrograms = new Array(numPrograms);
                let numPending = numPrograms;

                for (let i = 0; i < numPrograms; ++i) {
                    let source = sources[i];
                    let vsSource = source[0];
                    let fsSource = source[1];
                    let opts = source[2] || {};
                    let {transformFeedbackVaryings, attributeLocations, transformFeedbackMode} = opts;
                    programs[i] = new Program(this.gl, this.state, vsSource, fsSource, transformFeedbackVaryings, attributeLocations, transformFeedbackMode);
                    pendingPrograms[i] = programs[i];
                }

                for (let i = 0; i < numPrograms; ++i) {
                    programs[i].link();
                }

                let poll = () => {
                    let linked = 0;
                    for (let i = 0; i < numPending; ++i) {
                        if (pendingPrograms[i].checkCompletion()) {
                            pendingPrograms[i].checkLinkage();
                            if (pendingPrograms[i].linked) {
                                ++linked;
                            } else {
                                reject(new Error("Program linkage failed"));
                                return;
                            }
                        } else {
                            pendingPrograms[i - linked] = pendingPrograms[i];
                        }
                    }

                    numPending -= linked;

                    if (numPending === 0) {
                        resolve(programs);
                    } else {
                        requestAnimationFrame(poll);
                    }
                };

                poll();
            });
        }

        /**
            Restore several programs after a context loss. Will do so in parallel where available.

            @method
            @param {...Program} sources Variable number of programs to restore.

            @return {Promise<void>} Promise that will resolve once all programs have been restored.
        */
        restorePrograms(...programs) {
            return new Promise((resolve, reject) => {
                let numPrograms = programs.length;
                let pendingPrograms = programs.slice();
                let numPending = numPrograms;

                for (let i = 0; i < numPrograms; ++i) {
                    programs[i].initialize();
                }

                for (let i = 0; i < numPrograms; ++i) {
                    programs[i].link();
                }

                for (let i = 0; i < numPrograms; ++i) {
                    programs[i].checkCompletion();
                }

                let poll = () => {
                    let linked = 0;
                    for (let i = 0; i < numPending; ++i) {
                        if (pendingPrograms[i].checkCompletion()) {
                            pendingPrograms[i].checkLinkage();
                            if (pendingPrograms[i].linked) {
                                ++linked;
                            } else {
                                reject(new Error("Program linkage failed"));
                                return;
                            }
                        } else {
                            pendingPrograms[i - linked] = pendingPrograms[i];
                        }
                    }

                    numPending -= linked;

                    if (numPending === 0) {
                        resolve();
                    } else {
                        requestAnimationFrame(poll);
                    }
                };

                poll();
            });
        }

        /**
            Create a shader. Creating a shader separately from a program allows for
            shader reuse.

            @method
            @param {GLenum} type Shader type.
            @param {string} source Shader source.
            @return {Shader} New Shader object.
        */
        createShader(type, source) {
            return new Shader(this.gl, this.state, type, source);
        }

        /**
            Create a vertex array.

            @method
            @return {VertexArray} New VertexArray object.
        */
        createVertexArray() {
            return new VertexArray(this.gl, this.state);
        }

        /**
            Create a transform feedback object.

            @method
            @return {TransformFeedback} New TransformFeedback object.
        */
        createTransformFeedback() {
            return new TransformFeedback(this.gl, this.state);
        }

        /**
            Create a vertex buffer.

            @method
            @param {GLenum} type The data type stored in the vertex buffer.
            @param {number} itemSize Number of elements per vertex.
            @param {ArrayBufferView|number} data Buffer data itself or the total
                number of elements to be allocated.
            @param {GLenum} [usage=STATIC_DRAW] Buffer usage.
            @return {VertexBuffer} New VertexBuffer object.
        */
        createVertexBuffer(type, itemSize, data, usage) {
            return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage);
        }

        /**
            Create a per-vertex matrix buffer. Matrix buffers ensure that columns
            are correctly split across attribute locations.

            @method
            @param {GLenum} type The data type stored in the matrix buffer. Valid types
            are FLOAT_MAT4, FLOAT_MAT4x2, FLOAT_MAT4x3, FLOAT_MAT3, FLOAT_MAT3x2,
            FLOAT_MAT3x4, FLOAT_MAT2, FLOAT_MAT2x3, FLOAT_MAT2x4.
            @param {ArrayBufferView} data Matrix buffer data.
            @param {GLenum} [usage=STATIC_DRAW] Buffer usage.
            @return {VertexBuffer} New VertexBuffer object.
        */
        createMatrixBuffer(type, data, usage) {
            return new VertexBuffer(this.gl, this.state, type, 0, data, usage);
        }

        /**
            Create an buffer without any structure information. Structure
            must be fully specified when binding to a VertexArray.

            @method
            @param {number} bytesPerVertex Number of bytes per vertex.
            @param {ArrayBufferView|number} data Buffer data itself or the total
                number of bytes to be allocated.
            @param {GLenum} [usage=STATIC_DRAW] Buffer usage.
            @return {VertexBuffer} New VertexBuffer object.
        */
        createInterleavedBuffer(bytesPerVertex, data, usage) {
            return new VertexBuffer(this.gl, this.state, null, bytesPerVertex, data, usage);
        }

        /**
            Create an index buffer. If the `itemSize` is not specified, it defaults to 3

            @method
            @variation 1
            @param {GLenum} type The data type stored in the index buffer.
            @param {ArrayBufferView} data Index buffer data.
            @param {GLenum} [usage=STATIC_DRAW] Buffer usage.
            @return {VertexBuffer} New VertexBuffer object.
        *//**
            Create an index buffer.

            @method
            @variation 2
            @param {GLenum} type The data type stored in the index buffer.
            @param {number} itemSize Number of elements per primitive.
            @param {ArrayBufferView} data Index buffer data.
            @param {GLenum} [usage=STATIC_DRAW] Buffer usage.
            @return {VertexBuffer} New VertexBuffer object.
        */
        createIndexBuffer(type, itemSize, data, usage) {
            if (ArrayBuffer.isView(itemSize)) {
                usage = data;
                data = itemSize;
                itemSize = 3;
            }
            return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage, true);
        }

        /**
            Create a uniform buffer in std140 layout. NOTE: FLOAT_MAT2, FLOAT_MAT3x2, FLOAT_MAT4x2,
            FLOAT_MAT3, FLOAT_MAT2x3, FLOAT_MAT4x3 are supported, but must be manually padded to
            4-float column alignment by the application!

            @method
            @param {Array} layout Array indicating the order and types of items to
                            be stored in the buffer.
            @param {GLenum} [usage=DYNAMIC_DRAW] Buffer usage.
            @return {UniformBuffer} New UniformBuffer object.
        */
        createUniformBuffer(layout, usage) {
            return new UniformBuffer(this.gl, this.state, layout, usage);
        }

        /**
            Create empty 2D texture.
            @method
            @variation 1
            @param {number} width - Texture width. Required for array or empty data.
            @param {number} height - Texture height. Required for array or empty data.
            @param {Object} [options] Texture options.
            @param {GLenum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
            @param {GLenum} [options.type] Type of data stored in the texture. Default based on
                <b>internalFormat</b>.
            @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture.
            @param {boolean} [options.premultiplyAlpha=false] Whether the alpha channel should be pre-multiplied when unpacking the texture.
            @param {GLenum} [options.minFilter] Minification filter. Defaults to
                LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.magFilter] Magnification filter. Defaults to LINEAR
                if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.wrapS=REPEAT] Horizontal wrap mode.
            @param {GLenum} [options.wrapT=REPEAT] Vertical wrap mode.
            @param {GLenum} [options.compareMode=NONE] Comparison mode.
            @param {GLenum} [options.compareFunc=LEQUAL] Comparison function.
            @param {GLenum} [options.baseLevel] Base mipmap level.
            @param {GLenum} [options.maxLevel] Maximum mipmap level.
            @param {GLenum} [options.minLOD] Mimimum level of detail.
            @param {GLenum} [options.maxLOD] Maximum level of detail.
            @param {GLenum} [options.maxAnisotropy] Maximum anisotropy in filtering.
            @return {Texture} New Texture object.
        *//**
            Create a 2D texture from a DOM image element.
            @method
            @variation 2
            @param {HTMLImageElement|HTMLImageElement[]} image - Image data. An array can be passed to manually set all levels
                of the mipmap chain. If a single level is passed and mipmap filtering is being used,
                generateMipmap() will be called to produce the remaining levels.
            @param {Object} [options] Texture options.
            @param {GLenum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
            @param {GLenum} [options.type] Type of data stored in the texture. Default based on
                <b>intrnalFormat</b>.
            @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture.
            @param {boolean} [options.premultiplyAlpha=false] Whether the alpha channel should be pre-multiplied when unpacking the texture.
            @param {GLenum} [options.minFilter] Minification filter. Defaults to
                LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.magFilter] Magnification filter. Defaults to LINEAR
                if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.wrapS=REPEAT] Horizontal wrap mode.
            @param {GLenum} [options.wrapT=REPEAT] Vertical wrap mode.
            @param {GLenum} [options.compareMode=NONE] Comparison mode.
            @param {GLenum} [options.compareFunc=LEQUAL] Comparison function.
            @param {GLenum} [options.baseLevel] Base mipmap level.
            @param {GLenum} [options.maxLevel] Maximum mipmap level.
            @param {GLenum} [options.minLOD] Mimimum level of detail.
            @param {GLenum} [options.maxLOD] Maximum level of detail.
            @param {GLenum} [options.maxAnisotropy] Maximum anisotropy in filtering.
            @return {Texture} New Texture object.
        *//**
            Create 2D texture from a typed array.
            @method
            @variation 3
            @param {ArrayBufferView|ArrayBufferView[]} image - Image data. An array can be passed to manually set all levels
                of the mipmap chain. If a single level is passed and mipmap filtering is being used,
                generateMipmap() will be called to produce the remaining levels.
            @param {number} width - Texture width. Required for array or empty data.
            @param {number} height - Texture height. Required for array or empty data.
            @param {Object} [options] Texture options.
            @param {GLenum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
            @param {GLenum} [options.type] Type of data stored in the texture. Default based on
                <b>internalFormat</b>.
            @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture.
            @param {boolean} [options.premultiplyAlpha=false] Whether the alpha channel should be pre-multiplied when unpacking the texture.
            @param {GLenum} [options.minFilter] Minification filter. Defaults to
                LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.magFilter] Magnification filter. Defaults to LINEAR
                if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.wrapS=REPEAT] Horizontal wrap mode.
            @param {GLenum} [options.wrapT=REPEAT] Vertical wrap mode.
            @param {GLenum} [options.compareMode=NONE] Comparison mode.
            @param {GLenum} [options.compareFunc=LEQUAL] Comparison function.
            @param {GLenum} [options.baseLevel] Base mipmap level.
            @param {GLenum} [options.maxLevel] Maximum mipmap level.
            @param {GLenum} [options.minLOD] Mimimum level of detail.
            @param {GLenum} [options.maxLOD] Maximum level of detail.
            @param {GLenum} [options.maxAnisotropy] Maximum anisotropy in filtering.
            @return {Texture} New Texture object.
        */
        createTexture2D(image, width, height, options) {
            if (typeof image === "number") {
                // Create empty texture just give width/height.
                options = height;
                height = width;
                width = image;
                image = null;
            } else if (height === undefined) {
                // Passing in a DOM element. Height/width not required.
                options = width;
                width = image.width;
                height = image.height;
            }

            return new Texture(this.gl, this.state, this.gl.TEXTURE_2D, image, width, height, undefined, false, options);
        }

        /**
            Create a 2D texture array.

            @method
            @param {ArrayBufferView|Array} image Pixel data. An array can be passed to manually set all levels
                of the mipmap chain. If a single level is passed and mipmap filtering is being used,
                generateMipmap() will be called to produce the remaining levels.
            @param {number} width Texture width.
            @param {number} height Texture height.
            @param {number} size Number of images in the array.
            @param {Object} [options] Texture options.
            @param {GLenum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
            @param {GLenum} [options.type] Type of data stored in the texture. Default based on
                <b>internalFormat</b>.
            @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture.
            @param {GLenum} [options.minFilter] Minification filter. Defaults to
                LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.magFilter] Magnification filter. Defaults to LINEAR
                if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.wrapS=REPEAT] Horizontal wrap mode.
            @param {GLenum} [options.wrapT=REPEAT] Vertical wrap mode.
            @param {GLenum} [options.wrapR=REPEAT] Depth wrap mode.
            @param {GLenum} [options.compareMode=NONE] Comparison mode.
            @param {GLenum} [options.compareFunc=LEQUAL] Comparison function.
            @param {GLenum} [options.baseLevel] Base mipmap level.
            @param {GLenum} [options.maxLevel] Maximum mipmap level.
            @param {GLenum} [options.minLOD] Mimimum level of detail.
            @param {GLenum} [options.maxLOD] Maximum level of detail.
            @param {GLenum} [options.maxAnisotropy] Maximum anisotropy in filtering.
            @return {Texture} New Texture object.
        */
        createTextureArray(image, width, height, depth, options) {
            if (typeof image === "number") {
                // Create empty texture just give width/height/depth.
                options = depth;
                depth = height;
                height = width;
                width = image;
                image = null;
            }
            return new Texture(this.gl, this.state, this.gl.TEXTURE_2D_ARRAY, image, width, height, depth, true, options);
        }

        /**
            Create a 3D texture.

            @method
            @param {ArrayBufferView|Array} image Pixel data. An array can be passed to manually set all levels
                of the mipmap chain. If a single level is passed and mipmap filtering is being used,
                generateMipmap() will be called to produce the remaining levels.
            @param {number} width Texture width.
            @param {number} height Texture height.
            @param {number} depth Texture depth.
            @param {Object} [options] Texture options.
            @param {GLenum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
            @param {GLenum} [options.type] Type of data stored in the texture. Default based on
                <b>internalFormat</b>.
            @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture.
            @param {GLenum} [options.minFilter] Minification filter. Defaults to
                LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.magFilter] Magnification filter. Defaults to LINEAR
                if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.wrapS=REPEAT] Horizontal wrap mode.
            @param {GLenum} [options.wrapT=REPEAT] Vertical wrap mode.
            @param {GLenum} [options.wrapR=REPEAT] Depth wrap mode.
            @param {GLenum} [options.compareMode=NONE] Comparison mode.
            @param {GLenum} [options.compareFunc=LEQUAL] Comparison function.
            @param {GLenum} [options.baseLevel] Base mipmap level.
            @param {GLenum} [options.maxLevel] Maximum mipmap level.
            @param {GLenum} [options.minLOD] Mimimum level of detail.
            @param {GLenum} [options.maxLOD] Maximum level of detail.
            @param {GLenum} [options.maxAnisotropy] Maximum anisotropy in filtering.
            @return {Texture} New Texture object.
        */
        createTexture3D(image, width, height, depth, options) {
            if (typeof image === "number") {
                // Create empty texture just give width/height/depth.
                options = depth;
                depth = height;
                height = width;
                width = image;
                image = null;
            }
            return new Texture(this.gl, this.state, this.gl.TEXTURE_3D, image, width, height, depth, true, options);
        }

        /**
            Create a cubemap.

            @method
            @param {Object} options Texture options.
            @param {HTMLElement|ArrayBufferView} [options.negX] The image data for the negative X direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.posX] The image data for the positive X direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.negY] The image data for the negative Y direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.posY] The image data for the positive Y direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.negZ] The image data for the negative Z direction.
                    Can be any format that would be accepted by texImage2D.
            @param {HTMLElement|ArrayBufferView} [options.posZ] The image data for the positive Z direction.
                    Can be any format that would be accepted by texImage2D.
            @param {number} [options.width] Cubemap side width. Defaults to the width of negX if negX is an image.
            @param {number} [options.height] Cubemap side height. Defaults to the height of negX if negX is an image.
            @param {GLenum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
            @param {GLenum} [options.type] Type of data stored in the texture. Default based on
                <b>internalFormat</b>.
            @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the image.
            @param {boolean} [options.premultiplyAlpha=false] Whether the alpha channel should be pre-multiplied when unpacking the image.
            @param {GLenum} [options.minFilter] Minification filter. Defaults to
                LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.magFilter] Magnification filter. Defaults to LINEAR
                if image data is provided, NEAREST otherwise.
            @param {GLenum} [options.wrapS=REPEAT] Horizontal wrap mode.
            @param {GLenum} [options.wrapT=REPEAT] Vertical wrap mode.
            @param {GLenum} [options.compareMode=NONE] Comparison mode.
            @param {GLenum} [options.compareFunc=LEQUAL] Comparison function.
            @param {GLenum} [options.baseLevel] Base mipmap level.
            @param {GLenum} [options.maxLevel] Maximum mipmap level.
            @param {GLenum} [options.minLOD] Mimimum level of detail.
            @param {GLenum} [options.maxLOD] Maximum level of detail.
            @param {GLenum} [options.maxAnisotropy] Maximum anisotropy in filtering.
            @return {Cubemap} New Cubemap object.
        */
        createCubemap(options) {
            return new Cubemap(this.gl, this.state, options);
        }

        /**
            Create a renderbuffer.

            @method
            @param {number} width Renderbuffer width.
            @param {number} height Renderbuffer height.
            @param {GLenum} internalFormat Internal arrangement of the renderbuffer data.
            @param {number} [samples=0] Number of MSAA samples.
            @return {Renderbuffer} New Renderbuffer object.
        */
        createRenderbuffer(width, height, internalFormat, samples = 0) {
            return new Renderbuffer(this.gl, width, height, internalFormat, samples);
        }

        /**
            Create a framebuffer.

            @method
            @return {Framebuffer} New Framebuffer object.
        */
        createFramebuffer() {
            return new Framebuffer(this.gl, this.state);
        }

        /**
            Create a query.

            @method
            @param {GLenum} target Information to query.
            @return {Query} New Query object.
        */
        createQuery(target) {
            return new Query(this.gl, target);
        }

        /**
            Create a timer.

            @method
            @return {Timer} New Timer object.
        */
        createTimer() {
            return new Timer(this.gl);
        }

        /**
            Create a DrawCall. A DrawCall manages the state associated with
            a WebGL draw call including a program and associated vertex data, textures,
            uniforms and uniform blocks.

            @method
            @param {Program} program The program to use for this DrawCall.
            @param {VertexArray} [vertexArray=null] Vertex data to use for drawing.
            @return {DrawCall} New DrawCall object.
        */
        createDrawCall(program, vertexArray, primitive) {
            return new DrawCall(this.gl, this.state, program, vertexArray, primitive);
        }

        // Enable extensions
        initExtensions() {
            this.gl.getExtension("EXT_color_buffer_float");
            this.gl.getExtension("OES_texture_float_linear");
            this.gl.getExtension("WEBGL_compressed_texture_s3tc");
            this.gl.getExtension("WEBGL_compressed_texture_s3tc_srgb");
            this.gl.getExtension("WEBGL_compressed_texture_etc");
            this.gl.getExtension("WEBGL_compressed_texture_astc");
            this.gl.getExtension("WEBGL_compressed_texture_pvrtc");
            this.gl.getExtension("EXT_disjoint_timer_query_webgl2");
            this.gl.getExtension("EXT_disjoint_timer_query");
            this.gl.getExtension("EXT_texture_filter_anisotropic");

            this.state.extensions.debugShaders = this.gl.getExtension("WEBGL_debug_shaders");
            this.contextLostExt = this.gl.getExtension("WEBGL_lose_context");

            // Draft extensions
            this.gl.getExtension("KHR_parallel_shader_compile");
            this.state.extensions.multiDrawInstanced = this.gl.getExtension("WEBGL_multi_draw_instanced");
        }

        initContextListeners() {
            if (this.contextRestoredHandler) {
                this.contextLostListener = (e) => {
                    e.preventDefault();
                };
                this.contextRestoredListener = () => {
                    this.initExtensions();
                    this.contextRestoredHandler();
                };
                this.canvas.addEventListener("webglcontextlost", this.contextLostListener);
                this.canvas.addEventListener("webglcontextrestored", this.contextRestoredListener);
            } else {
                this.canvas.removeEventListener("webglcontextlost", this.contextLostListener);
                this.canvas.removeEventListener("webglcontextrestored", this.contextRestoredListener);
                this.contextLostListener = null;
                this.contextRestoredListener = null;
            }
        }

        // DEPRECATED

        depthTest() {
            console.warn("App.depthTest is deprecated. Use App.enable(PicoGL.DEPTH_TEST) instead.");
            this.enable(GL.DEPTH_TEST);

            return this;
        }

        noDepthTest() {
            console.warn("App.noDepthTest is deprecated. Use App.disable(PicoGL.DEPTH_TEST) instead.");
            this.disable(GL.DEPTH_TEST);

            return this;
        }

        blend() {
            console.warn("App.blend is deprecated. Use App.enable(PicoGL.BLEND) instead.");
            this.enable(GL.BLEND);

            return this;
        }

        noBlend() {
            console.warn("App.noBlend is deprecated. Use App.disable(PicoGL.BLEND) instead.");
            this.disable(GL.BLEND);

            return this;
        }

        stencilTest() {
            console.warn("App.stencilTest is deprecated. Use App.enable(PicoGL.STENCIL_TEST) instead.");
            this.enable(GL.STENCIL_TEST);

            return this;
        }

        noStencilTest() {
            console.warn("App.noStencilTest is deprecated. Use App.disable(PicoGL.STENCIL_TEST) instead.");
            this.disable(GL.STENCIL_TEST);

            return this;
        }

        scissorTest() {
            console.warn("App.scissorTest is deprecated. Use App.enable(PicoGL.SCISSOR_TEST) instead.");
            this.enable(GL.SCISSOR_TEST);

            return this;
        }

        noScissorTest() {
            console.warn("App.noScissorTest is deprecated. Use App.disable(PicoGL.SCISSOR_TEST) instead.");
            this.disable(GL.SCISSOR_TEST);

            return this;
        }

        rasterize() {
            console.warn("App.noRasterize is deprecated. Use App.disable(PicoGL.RASTERIZER_DISCARD) instead.");
            this.disable(GL.RASTERIZER_DISCARD);

            return this;
        }

        noRasterize() {
            console.warn("App.rasterize is deprecated. Use App.enable(PicoGL.RASTERIZER_DISCARD) instead.");
            this.enable(GL.RASTERIZER_DISCARD);

            return this;
        }

        cullBackfaces() {
            console.warn("App.cullBackfaces is deprecated. Use App.enable(PicoGL.CULL_FACE) instead.");
            this.enable(GL.CULL_FACE);

            return this;
        }

        drawBackfaces() {
            console.warn("App.drawBackfaces is deprecated. Use App.disable(PicoGL.CULL_FACE) instead.");
            this.disable(GL.CULL_FACE);

            return this;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////////

    let webglInfoInitialized = false;

    /**
        Global PicoGL module. For convenience, all WebGL enums are stored
        as properties of PicoGL (e.g. PicoGL.FLOAT, PicoGL.ONE_MINUS_SRC_ALPHA).

        @namespace PicoGL
    */
    const PicoGL = Object.assign({
        /**
            The version of PicoGL

            @type {string}
            @name PicoGL.version
            @private
         */
        version: "0.17.9",

        /**
            WebGL information about the current system

            @type {Object.<string, *>}
            @name PicoGL.WEBGL_INFO
            @private
         */
        WEBGL_INFO,

        /**
            Create a PicoGL app. The app is the primary entry point to PicoGL. It stores
            the canvas, the WebGL context and all WebGL state.

            @function PicoGL.createApp
            @param {HTMLElement} canvas The canvas on which to create the WebGL context.
            @param {Object} [contextAttributes] Context attributes to pass when calling getContext().
            @return {App} New App object.
        */
        createApp(gl, contextAttributes) {

            // Support providing a canvas and getting a WebGL 2 context
            if (gl.tagName === "CANVAS") {
                gl = gl.getContext("webgl2", contextAttributes);
            }

            if (!webglInfoInitialized) {
                WEBGL_INFO.MAX_TEXTURE_UNITS = gl.getParameter(GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
                WEBGL_INFO.MAX_UNIFORM_BUFFERS = gl.getParameter(GL.MAX_UNIFORM_BUFFER_BINDINGS);
                WEBGL_INFO.MAX_UNIFORMS = Math.min(
                    gl.getParameter(GL.MAX_VERTEX_UNIFORM_VECTORS),
                    gl.getParameter(GL.MAX_FRAGMENT_UNIFORM_VECTORS)
                );
                WEBGL_INFO.SAMPLES = gl.getParameter(GL.SAMPLES);
                WEBGL_INFO.VENDOR = "(Unknown)";
                WEBGL_INFO.RENDERER = "(Unknown)";

                // Extensions
                WEBGL_INFO.FLOAT_RENDER_TARGETS = Boolean(gl.getExtension("EXT_color_buffer_float"));
                WEBGL_INFO.LINEAR_FLOAT_TEXTURES = Boolean(gl.getExtension("OES_texture_float_linear"));
                WEBGL_INFO.S3TC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_s3tc"));
                WEBGL_INFO.S3TC_SRGB_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"));
                WEBGL_INFO.ETC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_etc"));
                WEBGL_INFO.ASTC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_astc"));
                WEBGL_INFO.PVRTC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_pvrtc"));
                WEBGL_INFO.LOSE_CONTEXT = Boolean(gl.getExtension("WEBGL_lose_context"));
                WEBGL_INFO.DEBUG_SHADERS = Boolean(gl.getExtension("WEBGL_debug_shaders"));
                WEBGL_INFO.GPU_TIMER = Boolean(gl.getExtension("EXT_disjoint_timer_query_webgl2") || gl.getExtension("EXT_disjoint_timer_query"));

                WEBGL_INFO.TEXTURE_ANISOTROPY = Boolean(gl.getExtension("EXT_texture_filter_anisotropic"));
                WEBGL_INFO.MAX_TEXTURE_ANISOTROPY = WEBGL_INFO.TEXTURE_ANISOTROPY ? gl.getParameter(GL.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1;

                WEBGL_INFO.DEBUG_RENDERER_INFO = Boolean(gl.getExtension("WEBGL_debug_renderer_info"));
                if (WEBGL_INFO.DEBUG_RENDERER_INFO) {
                    WEBGL_INFO.VENDOR = gl.getParameter(GL.UNMASKED_VENDOR_WEBGL);
                    WEBGL_INFO.RENDERER = gl.getParameter(GL.UNMASKED_RENDERER_WEBGL);
                }

                // Draft extensions
                WEBGL_INFO.PARALLEL_SHADER_COMPILE = Boolean(gl.getExtension("KHR_parallel_shader_compile"));
                WEBGL_INFO.MULTI_DRAW_INSTANCED = Boolean(gl.getExtension("WEBGL_multi_draw_instanced"));

                webglInfoInitialized = true;
            }
            return new App(gl);
        }
    }, GL);

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
            console.log(app.layerCollection.webglCanvas);
            let destCtx = app.layerCollection.webglCTX; // get the context for WebGL output us
            console.log("RAN WBGLE DRAW");
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
            }else {
              app.needsRender = false; // reset back to false
              app.renderAccepted = false; // prevent WebGL filter update
            }


            // if the render was accepted by the above logic
            // call the WebGL filter to be animated
            if( app.renderAccepted ){
              //let position = layer.position; // get layers position object
              console.log(app.texture.width, app.texture.height);
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
              };

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


            }else {
              // else there is nothing to be rendered
              // so cancel the animation

              // Set app render states back to their default states of false
              app.needsRender = false; // set to "false" so that another render is not triggered
              app.renderAccepted = false; // set to "false" so that the app can check to see if a render is needed
              cancelAnimationFrame( animate ); // stop the stop asking for draw commands

              }

            },
          };

    // update CSS styles
    let windowStyle = document.createElement('style');
    ( () => {

      document.head.appendChild(windowStyle);

      windowStyle.sheet.insertRule(` body {
    display: block;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;

    background-repeat: no-repeat;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    min-width: 1200px !important; /* set the min width or the window */

    background-color: rgba( 235, 235, 235, 1.0 ); /* grey */
  } `);
      /* prevent user from being able to select the webpage text with mouse moves across is */
      windowStyle.sheet.insertRule(` div {
    user-select: none;
  } `);
      /* prevent highlighting of dropdowns */
      windowStyle.sheet.insertRule(` select {
    user-select: none;
    outline: none;
  } `);

      windowStyle.sheet.insertRule(` button {
    outline: none;
  } `);

      windowStyle.sheet.insertRule(` .background-Color2 {
    background-color: rgba( 235, 25, 235, 1.0 );
  } `);
      windowStyle.sheet.insertRule(` .hold-image {
    display: inline-block;
    vertical-align: middle;
    width: 36px;
    height: 36px;
  } `);
      windowStyle.sheet.insertRule(` .image-alignment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
  } `);
      windowStyle.sheet.insertRule(` .image-alignment:hover {
    display: inline-block;
    text-align: left;
  } `);
      windowStyle.sheet.insertRule(` .image-alignment:hover img {
    float: left;
    display: block;
    position: absolute;
    max-width: none;
    max-height: none;
    width: 400px;
    height: auto;
    z-index: ${ app.initial.zIndex.menu };
    text-align: left;
  } `);
      windowStyle.sheet.insertRule(` img {
    max-width: 36px;
    max-height: 36px;
  } `);




      windowStyle.sheet.insertRule(` .Container{
    display: grid;
    grid-template-rows: auto auto auto;
    /*justify-content: center;*/
    grid-gap: 15px;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;
  } `);
      windowStyle.sheet.insertRule(` .Container > *{
    /*background-color: rgba(20, 250, 230, 0.2);*/
  } `);


      /*   SPACER   */


      windowStyle.sheet.insertRule(` .Menu-Container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    margin: 4px 10px;

    min-height: 120px;

    align-items: center;
    /*margin-bottom: 15px;
    height: 100%;*/
    /*background-color: rgba(20, 230, 230, 0.3);*/
  } `);
      windowStyle.sheet.insertRule(` .Menu-Container > * {
    /*background-color: rgba(230, 20, 230, 0.1);*/
  } `);
      windowStyle.sheet.insertRule(` .group {
    /*margin-top: 15px;*/
    margin: 15px 4px 0 4px;

    padding: 0px 12px;
    /*background-color: rgba(230, 20, 230, 0.2);*/
  } `);
      windowStyle.sheet.insertRule(` .menuBar {
    background-color: rgba(240, 240, 240, 1.0);
    border-radius: 10px;
    display: inline-block;
    cursor: pointer;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;

    font-size: 12px;
    font-weight: 500;
    padding: 6px 11px;
    margin: 0 4px;
    text-decoration: none;
    border: none;
    filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
  } `);
      windowStyle.sheet.insertRule(` .menuBar:hover {
    background-color: rgba(220, 220, 220, 1.0);
  } `);
      windowStyle.sheet.insertRule(` .menuBar:active {
    position:relative;
    top:1px;
  } `);
      windowStyle.sheet.insertRule(` .menuBar:focus {
    outline: none;
    box-shadow: none;
  } `);
      windowStyle.sheet.insertRule(` .menuBar.notActive {
    /*display: none;*/
  } `);
      windowStyle.sheet.insertRule(` #selectRecipeDropdown{
    /*display: none;*/
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    max-width: 200px;
  } `);
      windowStyle.sheet.insertRule(` .menubar-checkbox{
    padding: 0 8px;
    display: inline-block;
  } `);
      windowStyle.sheet.insertRule(` .checkbox-title{
    display: block;
    font-size: 10px;
    text-align: center;
    padding-bottom: 2px;
  } `);
      windowStyle.sheet.insertRule(` .switch {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 14px;
  } `);
      windowStyle.sheet.insertRule(` .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  } `);
      windowStyle.sheet.insertRule(` .switch .Switch-Help{
    font-size: 10px;
    position: absolute;
    width: 240px;
    top: 110%;
    left: 110%;
    background-color: rgba(255, 255, 255, 0.9);
    color:  rgba(0, 0, 0, 1.0);
    text-align: left;
    border-radius: 6px;
    padding: 10px 15px;
    filter: drop-shadow( 0px 4px 5px rgba( 120, 120, 120, 0.8 ) );
    z-index: ${ app.initial.zIndex.help };
    visibility: hidden;
    transition-property: visibility;
    transition-delay: 0.7s;
    opacity: 0.0;
  } `);
      windowStyle.sheet.insertRule(` .switch:hover .Switch-Help.active{
    visibility: visible;
    opacity: 1.0;
  } `);
      windowStyle.sheet.insertRule(` .switchAction {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba( 150, 150, 150, 1.0 ); /* "red-ish" color */
    -webkit-transition: .4s;
    transition: .4s;
  } `);
      windowStyle.sheet.insertRule(` .switchAction.active {
    color: rgba( 150, 150, 150, 1.0 );
  } `);
      windowStyle.sheet.insertRule(` .switchAction:before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  } `);

      windowStyle.sheet.insertRule(` input:checked + .switchAction {
    background-color: rgba( 150, 150, 150, 1.0 ); /* "green-ish" color */
  } `);
      windowStyle.sheet.insertRule(` input:checked + .switchAction.active {
    background-color: rgba( 70, 70, 70, 1.0 ); /* "green-ish" color */
  } `);
      windowStyle.sheet.insertRule(` input:focus + .switchAction {
    box-shadow: 0 0 1px #21f37c;
  } `);
      windowStyle.sheet.insertRule(` input:checked + .switchAction:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  } `);
      windowStyle.sheet.insertRule(` .switchAction.round {
    border-radius: 10px;
  } `);
      windowStyle.sheet.insertRule(` .switchAction.round:before {
    border-radius: 50%;
  } `);


      /*   SPACER   */


      windowStyle.sheet.insertRule(` .Sequencer-Menu {
    display: flex;
    margin: 0 auto;
    filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
    align-items: center;
  } `);
      windowStyle.sheet.insertRule(` .Sequencer-Menu > * {
    vertical-align: middle;
  } `);
      windowStyle.sheet.insertRule(` .Sequencer-Settings {
    display: inline-block;
    vertical-align: top;
  } `);
      windowStyle.sheet.insertRule(` .Sequencer-Settings > * {
    display: inline-block;
    vertical-align: middle;
  } `);
      windowStyle.sheet.insertRule(` .sequencer-Menu-group > * {
    display: block;
    margin: 4px 10px;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: 500;

  } `);

      windowStyle.sheet.insertRule(` .sequencer-Menu-Button, .sequencer-Menu-input{
    font-size: 10px;
    font-weight: 500;
    padding: 2px 7px;
    border: none;
    border-radius: 3px;
    background-color: rgba(240, 240, 240, 1.0);
    filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
  } `);
      windowStyle.sheet.insertRule(` .sequencer-Menu-Button:hover {
    background-color: rgba(210, 210, 210, 1.0);
  } `);
      windowStyle.sheet.insertRule(` .sequencer-Menu-input::-webkit-outer-spin-button,
    .sequencer-Menu-input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    } `);
        windowStyle.sheet.insertRule(` #measureCounter, #TimeSignatureA, #TimeSignatureB {
      margin: 0 10px;
    } `);
        windowStyle.sheet.insertRule(` .sequencer-switch{
      padding: 0 8px;
      display: inline-block;
    } `);
        windowStyle.sheet.insertRule(` .sequencer-title{
      display: block;
      font-size: 8px;
      text-align: center;
      padding-bottom: 2px;
    } `);
        windowStyle.sheet.insertRule(` .Sequencer-Start-Stop {
      display: inline-block;
    } `);
        windowStyle.sheet.insertRule(` .Sequencer-Help {
      display: inline-block;
    } `);
        windowStyle.sheet.insertRule(` .sequencer {
      background-color: rgba(246, 246, 246, 1.0);
      border-radius: 5px;
      display: block;
      cursor: pointer;
      color: #000000;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 10px;
      font-weight: 500;
      padding: 4px 12px;
      margin: 0 4px;
      text-decoration: none;
      border: none;
      filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
    } `);
        windowStyle.sheet.insertRule(` .sequencer:hover {
    } `);
        windowStyle.sheet.insertRule(` .sequencer.active {
      background-color: rgba(215, 215, 215, 1.0);
    } `);
        windowStyle.sheet.insertRule(` .sequencer:focus {
      outline: none;
      box-shadow: none;
    } `);


        /*   SPACER   */


        windowStyle.sheet.insertRule(` .play-container {
      margin: auto 1em ;
      display: grid;
      grid-auto-flow: column;
      justify-content: start;
      gap: .3em;
    } `);
        windowStyle.sheet.insertRule(` .btn {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: .5em .5em .5em .5em;
      align-content: center;
      justify-items: center;
      width: 2em;
      height: 2em;
      cursor: pointer;
      border: none;
      border-radius: 3px;
      background-color: rgba(240, 240, 240, 1.0);
      filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
    } `);
        windowStyle.sheet.insertRule(` .btn:hover {
      background-color: rgba(210, 210, 210, 1.0);
    } `);
        windowStyle.sheet.insertRule(` .btn:active {
      transform: scale(0.95, 0.95);
    } `);
        windowStyle.sheet.insertRule(` .btn:focus {
      transform: scale(0.95, 0.95);
    } `);
        windowStyle.sheet.insertRule(` .btn > div {
      position: relative;
      border-style: solid;
      opacity: .6;
    } `);
        windowStyle.sheet.insertRule(` .btn:hover > div {
      opacity: 1;
    } `);
        windowStyle.sheet.insertRule(` .step-forward-step {
      grid-column: 2;
      border-width: .35em 0 .35em .6em;
      border-color: transparent transparent transparent #000;
    } `);
        windowStyle.sheet.insertRule(` .step-forward-to {
      grid-column: 3;
      border-width: .35em 0 .35em .6em;
      border-color: transparent transparent transparent #000;
    } `);
        windowStyle.sheet.insertRule(` .step-backward-to {
      grid-column: 2;
      border-width: .35em .6em .35em 0;
      border-color: transparent #000 transparent transparent;
    } `);
        windowStyle.sheet.insertRule(` .step-backward-step {
      grid-column: 3;
      border-width: .35em .6em .35em 0;
      border-color: transparent #000 transparent transparent;
    } `);
        windowStyle.sheet.insertRule(` .previous-measure-to {
      grid-column: 2;
      border-width: 0 .22em 0 0;
      border-color: #000 #000 #000 transparent;
    } `);
        windowStyle.sheet.insertRule(` .previous-measure-step {
      grid-column: 3;
      border-width: .35em .6em .35em 0;
      border-color: transparent #000 transparent transparent;
    } `);
        windowStyle.sheet.insertRule(` .next-measure-step {
      grid-column: 2;
      border-width: .35em 0 .35em .6em;
      border-color: transparent transparent transparent #000;
    } `);
        windowStyle.sheet.insertRule(` .next-measure-to {
      grid-column: 3;
      border-width: 0 .22em .0 0;
      border-color: #000 #000 #000 transparent;
    } `);
        windowStyle.sheet.insertRule(` .play-left{
      grid-column: 2 / 4;
      border-width: .5em 0 .5em .9em;
      border-color: transparent transparent transparent #000;
    } `);
        windowStyle.sheet.insertRule(` .play-right{
      visibility: hidden;
    } `);
        windowStyle.sheet.insertRule(` .play-left.active{
      opacity: 1;
      border-color: transparent transparent transparent #008000;
    } `);
        windowStyle.sheet.insertRule(` .btn:hover .play-left.active{
      grid-column: 2;
      width: 0;
      height: .9em;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #FFF;
    } `);
        windowStyle.sheet.insertRule(` .btn:hover .play-right.active{
      visibility: visible;
      grid-column: 3;
      width: 0;
      height: .9em;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #FFF;
    } `);
        windowStyle.sheet.insertRule(` .play-left.active-pause{
      grid-column: 2;
      width: 0;
      height: .9em;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #000;
      opacity: 1;
    } `);
        windowStyle.sheet.insertRule(` .play-right.active-pause{
      visibility: visible;
      grid-column: 3;
      width: 0;
      height: .9em;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #000;
      opacity: 1;
    } `);
        windowStyle.sheet.insertRule(` .btn:hover .play-left.active-pause{
      grid-column: 2 / 4;
      width: 0;
      height: 0;
      border-width: .5em 0 .5em .9em;
      border-color: transparent transparent transparent #000;
      opacity: 1;
    } `);
        windowStyle.sheet.insertRule(` .btn:hover .play-right.active-pause{
      visibility: hidden;
      grid-column: 0;
      width: 0;
      height: 0;
      border-width: 0 0 0 .3em;
      border-color: transparent transparent transparent #000;
    } `);
        windowStyle.sheet.insertRule(` .stop-left {
      grid-column: 2 / 4;
      height: .9em;
      border-width: 0 0 0 .9em;
      border-color: transparent transparent transparent #000;
    } `);
        windowStyle.sheet.insertRule(` .stop-right{
      visibility: hidden;
    } `);
        windowStyle.sheet.insertRule(` .stop-left.active{
      opacity: 1;
      border-color: transparent transparent transparent rgba( 0, 0, 0, 1.0 );
    } `);
        windowStyle.sheet.insertRule(` .record{
      grid-column: 2 / 4;
      height: 1em;
      border-width: 0 0 0 1em;
      border-color: transparent transparent transparent #000;
      border-radius: .5em;
    } `);
        windowStyle.sheet.insertRule(` .record.active{
      border-color: transparent transparent transparent #FF0000;
    } `);


        /*   SPACER   */

        windowStyle.sheet.insertRule(` .Sequencer-Container {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      padding-top:20px;
      min-height: 40px;

      min-width: 1200px; /* set the min width or the window */

      /*background-color: rgba(246, 26, 26, 0.2);*/ /* for testing */

      overflow: auto;
    } `);

        windowStyle.sheet.insertRule(` .Measure-Container{
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: fit-content;
      block-size: fit-content;

      padding: 2px 6px;
      border-radius: 5px;
      background-color: rgba(246, 246, 246, 1.0);


      margin: 0 3px;
      /*margin-bottom: 15px;*/
    } `);
        windowStyle.sheet.insertRule(` .Measure-Container.active{
      background-color: rgba(215, 215, 215, 1.0);
    } `);
        windowStyle.sheet.insertRule(` .Measure-Title{
      margin: 0 auto;
    } `);
        windowStyle.sheet.insertRule(` .Measure-Title-Lable{
      display: block;
      font-size: 10px;
      text-align: center;
      padding-bottom: 0px;
    } `);
        windowStyle.sheet.insertRule(` .Measure {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;

      justify-content: center;
      align-items: center;
      width: 100%;


      border-radius: 5px;
      padding-bottom: 2px;
    } `);
        windowStyle.sheet.insertRule(` .Measure-Start-Stop{
      display: inline-flex;
      border-radius: 2px;
      background-color: rgba(100, 100, 100, 1.0);
      width: 100%;
      min-width: 10px;
      max-width: 15px;

      height: 20px;
      margin: 0 2px;
    } `);
        windowStyle.sheet.insertRule(` .Measure-Start-Stop.update{
      background-color: rgba(232, 186, 77, 1.0); /* light orange */
    } `);
        windowStyle.sheet.insertRule(` .Measure-steps-container{
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: center;
      width: 100%;
    } `);
        windowStyle.sheet.insertRule(` .Beat {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: center;

      border-radius: 2px;
      /*background-color: rgba(255, 255, 255, 1.0);*/ /* for testing */
      width: 100%;

      height: 20px;
      margin: 0 1px;
    } `);
        windowStyle.sheet.insertRule(` .Step {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: center;

      border-radius: 2px;
      background-color: rgba(235, 235, 235, 1.0); /* light grey */

      width: 100%;
      min-width: 8px;
      max-width: 10px;

      border-radius: 2px;
      margin: 1px 1px;
      margin-top: 4px;
    } `);
        windowStyle.sheet.insertRule(` .Step.active {
      background-color: rgba(140, 140, 140, 1.0); /* grey */
    } `);
        windowStyle.sheet.insertRule(` .Step.play {
      background-color: rgba(77, 232, 170, 1.0); /* light green */
    } `);
        windowStyle.sheet.insertRule(` .Start-help-tip {
      visibility: hidden;
      width: 280px;
      position: absolute;
      margin-top: 30px;


      background-color: rgba(255, 255, 255, 0.7);
      color: rgba(0, 0, 0, 1.0);
      text-align: center;
      border-radius: 6px;
      padding: 5px;


      opacity: 0;
      filter: drop-shadow( 0px 4px 5px rgba( 120, 120, 120, 0.8 ) );
      transition: opacity 0.3s;
    } `);
        windowStyle.sheet.insertRule(` .Measure-Start-Stop .Start-help-tip::after {
      content: "";
      position: absolute;

      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent transparent rgba(255, 255, 255, 0.7);
    } `);
        windowStyle.sheet.insertRule(` .Measure-Start-Stop:hover .Start-help-tip.active{
      visibility: visible;
      opacity: 1;
    } `);
        windowStyle.sheet.insertRule(` .Stop-help-tip {
      visibility: hidden;
      width: 280px;
      position: absolute;
      margin-top: 30px;



      background-color: rgba(255, 255, 255, 0.7);
      color:  rgba(0, 0, 0, 1.0);
      text-align: center;
      border-radius: 6px;
      padding: 5px;


      opacity: 0;
      filter: drop-shadow( 0px 4px 5px rgba( 120, 120, 120, 0.8 ) );
      transition: opacity 0.3s;
    } `);
        windowStyle.sheet.insertRule(` .Measure-Start-Stop .Stop-help-tip::after {
      content: "";
      position: absolute;

      border-width: 5px;
      border-style: solid;
      border-color: transparent rgba(255, 255, 255, 0.7) transparent transparent;
    } `);
        windowStyle.sheet.insertRule(` .Measure-Start-Stop:hover .Stop-help-tip.active{
      visibility: visible;
      opacity: 1;
    } `);




        /*   SPACER   */

        windowStyle.sheet.insertRule(` .Filter-UI-Container {
      display: grid;
      /*grid-gap: 0.52%;*/
      grid-template-columns: auto;
      /*grid-template-columns: minmax(154px, 240px) minmax(530px, 840px) minmax(505px, 800px);*/
      justify-content: center;
      /*align-items: start;*/
      align-items: center;
      width: 100%;
      height: 100%;
    } `);
        windowStyle.sheet.insertRule(` .Filter-UI-Container > *{
      /*background-color: rgba(10, 120, 250, 0.2);*/
    } `);

        windowStyle.sheet.insertRule(` .Layer-Container{
      aspect-ratio: 1 / 1;
      display: grid;
      grid-row: 1;
      grid-column: 1;

      max-width: 240px;
      max-height: 860px;

      /* background-color: rgba(120, 120, 250, 0.2); */
    } `);

        windowStyle.sheet.insertRule(` .Layer-Window {
      display: grid;
      grid-gap: 0px;
      grid-template-rows: 30px auto 30px;

      align-items: center;
      justify-content: stretch;
    } `);
        windowStyle.sheet.insertRule(` .Layer-Window > * {
      /* background-color: rgba(250, 20, 20, 0.2); */
    } `);
        windowStyle.sheet.insertRule(` .LAYERS::-webkit-scrollbar {
      display: none;
    } `);
        windowStyle.sheet.insertRule(` .LAYERS {
      aspect-ratio: 1 / 3.33;
      overflow-y: scroll;
      display: grid;
      position: relative;
      max-height: 860px;
      max-width: 240px;

      background-color: rgba(250, 250, 250, 1.0);
      box-shadow: inset 0px 2px 4px rgba( 40, 40, 40, 0.8 );
    } `);
        windowStyle.sheet.insertRule(` #layer-container{

      /*background-color: rgba(120, 120, 250, 0.4);*/
    } `);
        windowStyle.sheet.insertRule(` .Layer-Buttons{
      display: grid;
      grid-gap: 8%;

      grid-template-columns: auto auto auto;
      grid-template-rows: auto;

      align-items: center;
      justify-content: center;
    } `);
        windowStyle.sheet.insertRule(` .Layer-Buttons > *{
      /* background-color: rgba(80, 180, 250, 0.9); */
    } `);
        windowStyle.sheet.insertRule(` .Add-Remove-Button{
      width: 2.2em;
      height: 1.2em;

      font-weight: normal;
      text-align: center;
      line-height: 1em;
      /*padding: 2px 5px;*/
      /*margin: auto 20px;*/
      border: none;
      border-radius: 5px;
      /* background-color: rgba(240, 240, 240, 1.0); */
      filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
    } `);
        windowStyle.sheet.insertRule(` .Add-Remove-Button:hover {
      /* background-color: rgba(210, 210, 210, 1.0); */
    } `);

        windowStyle.sheet.insertRule(` .Background-Picker{
      display: grid;
      grid-gap: 5px;
      grid-template-columns: 58px auto;
      /*grid-template-columns: 58px 68%;*/
      align-items: center;
      justify-items: start;
    } `);
        windowStyle.sheet.insertRule(` .Background-Picker > *{
      /* background-color: rgba(0, 250, 250, 0.2); */
    } `);
        windowStyle.sheet.insertRule(` .Background-Picker-block{
      padding-left: 5px;
      font-size: 10px;
      white-space: wrap;
    } `);

        windowStyle.sheet.insertRule(` .radio-button-container{
      display: grid;
      grid-column: 2;
      place-self: stretch;
      align-items: center;

    } `);
        windowStyle.sheet.insertRule(` .radio-button-collection{
      display: grid;
      grid-gap: 4px;
      grid-template-columns: repeat(6, 12%);
      align-items: center;
      justify-content: end;
      padding-right: 5px;
      /*justify-content: center;*/
    } `);

        windowStyle.sheet.insertRule(` .radio-button{
      display: grid;
      /*justify-items: center;*/
      /*align-items: center;*/

      max-width: 18px;
      max-height: 18px;
      /*aspect-ratio: 1 / 1;*/
      /* background-color: rgba( 30, 130, 270, 0.5 ); */
    } `);
        windowStyle.sheet.insertRule(` .radio-button input {
      -webkit-appearance: none;
      appearance: none;
      display: none;
    } `);
        windowStyle.sheet.insertRule(` .checkmark {
      aspect-ratio: 1 / 1;
      /*max-width: 15px;
      max-height: 15px;*/
      cursor: pointer;
      border-radius: 50%;
      filter: drop-shadow( 0px 2px 1px rgba( 100, 100, 100, 0.0 ) );
    } `);
        windowStyle.sheet.insertRule(` .radio-button input:checked ~ .checkmark {
      filter: drop-shadow( 0px 2px 1px rgba( 100, 100, 100, 1.0 ) );
    } `);
        windowStyle.sheet.insertRule(` .checkmark:after {
      content: "";
      position: absolute;
      display: none;
      /*visibility: hidden;*/
    } `);


    /*   SPACER   */


    windowStyle.sheet.insertRule(` .Frequency-Container {
  aspect-ratio: 1 / 1;
  display: grid;
  grid-row: 1;
  grid-column: 2;
  align-items: center;
  justify-items: center;
  max-width: 860px;
  /*max-width: 840px;*/
  /*max-width: 832px;*/
  max-height: 860px;

  /*background-color: rgba(250, 0, 0, 0.2);*/
} `);
    windowStyle.sheet.insertRule(` .Frequency-Window {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 30px auto 30px;
  /*grid-template-columns: 20px auto 20px;*/
  /*grid-template-columns: 16px auto 16px;*/
  grid-template-rows: 30px auto 30px;
  align-items: center; 
  width: 100%;
  height: 100%;
  /*justify-items: center;*/
} `);
    windowStyle.sheet.insertRule(` .Frequency-Window > * {
  display: grid;
  justify-items: center;
  /*background-color: rgba(0, 250, 0, 0.2);*/
} `);

    windowStyle.sheet.insertRule(` .UI {
  aspect-ratio: 1 / 1;
  display: grid;
  align-items: center;
  justify-items: center;

  grid-column: 2;
  grid-row: 2;

  grid-template-columns: 100%;
  grid-template-rows: 100%;

  max-width: 800px;
  max-height: 800px;
  background-color: rgba( 248, 248, 248, 1.0 );
  /*filter: drop-shadow( 0px 4px 3px rgba( 160, 160, 160, 0.6 ) );*/
} `);
    windowStyle.sheet.insertRule(` .UI > * {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
} `);
    windowStyle.sheet.insertRule(` #f-mod-canvas-trasnparentWindow {
  background-color: rgba( 248, 248, 248, 0.8 );
  z-index: ${ app.initial.zIndex.canvasUITrasnparent };
} `);


    windowStyle.sheet.insertRule(` .rotate0Counter {
  content: "";
  white-space: nowrap;
  transform: rotate(0deg);
} `);
    windowStyle.sheet.insertRule(` .rotate90Counter {
  content: "";
  white-space: nowrap;
  transform: rotate(-90deg);
} `);

    windowStyle.sheet.insertRule(` .f-top{
  padding-top: 5px;
} `);
    windowStyle.sheet.insertRule(` .f-bottom{
  padding-bottom: 5px;
} `);
    windowStyle.sheet.insertRule(` .f-left{
  padding-top: 5px;
} `);
    windowStyle.sheet.insertRule(` .f-right{
  padding-bottom: 5px;
  zoom: 0.99; /* to make the text crisp */
} `);

    /*   SPACER   */

    windowStyle.sheet.insertRule(` .Image-Out-Container {
  aspect-ratio: 1 / 1;
  display: grid;
  grid-row: 1;
  grid-column: 3;
  align-items: center;
  justify-items: center;
  

  max-width: 800px;
  max-height: 860px;

  /* background-color: rgba(250, 120, 10, 0.2); */
} `);
    windowStyle.sheet.insertRule(` .Image-Window {
  display: grid;
  grid-gap: 0px;
  width: 100%;
  height: 100%;
  grid-template-rows: 30px auto 30px;
  align-items: center;
} `);
    windowStyle.sheet.insertRule(` .Image-Window > * {
  /* background-color: rgba(250, 20, 20, 0.2); */
} `);
    windowStyle.sheet.insertRule(` .IMAGE {
  aspect-ratio: 1 / 1;
  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-columns: 100%;
  grid-template-rows: 100%;

  max-width: 800px;
  max-height: 800px;

  z-index: ${ app.initial.zIndex.canvasWebGL };

  background-color: rgba( 248, 248, 248, 1.0 );
  filter: drop-shadow( 0px 4px 3px rgba( 160, 160, 160, 0.6 ) );
} `);

    windowStyle.sheet.insertRule(` .IMAGE > * {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
} `);


    windowStyle.sheet.insertRule(` .center-webgl-row {
  font-size: .85em;
  font-style: regular;
  text-align: left;
  margin: auto 0;
  padding-left: 10px;
  /*padding-top: 26px;*/
  padding-top: 8px;
} `);

    windowStyle.sheet.insertRule(` #webglMouseInfo{
  display: none;

} `);
    windowStyle.sheet.insertRule(` .imageMouseInteractions{
  margin-top: 3px;
} `);
    windowStyle.sheet.insertRule(` .keyComands{
  font-weight: bold;
} `);


    /*   SPACER   */


    windowStyle.sheet.insertRule(` #picker-Pre-Size{
  /*visibility: hidden;*/
  background-color: rgba(0, 250, 0, 0.2);
} `);
    windowStyle.sheet.insertRule(` #picker-Container{
  /*display: none;
  background-color: rgba(245, 245, 245, 0.95);*/
} `);

    /*
    windowStyle.sheet.insertRule(` .ui-picker-container{
      display: grid;

      align-items: center;
      justify-items: center;

      background-color: rgba( 248, 248, 248, 0.9 );
      z-index: 100;
    } `);

    windowStyle.sheet.insertRule(` .ui-picker-collection {
      display: grid;

      grid-gap: 2%;
      grid-template-rows: 90% auto;



      width: 90%;
      height: 90%;
      background-color: rgba( 248, 28, 28, 0.9 );
      z-index: 101;
    } `);
    */

    windowStyle.sheet.insertRule(` .botton-item{
  /*display: grid;
  justify-items: center;*/
} `);
    windowStyle.sheet.insertRule(` #button-container{
  filter: drop-shadow( 0px 4px 3px rgba( 160, 160, 160, 0.6 ) );
} `);
    windowStyle.sheet.insertRule(` .button-container{
  display: grid;

  grid-column: 1;
  grid-row: 3;

  grid-gap: 2%;

  align-items: center;
  justify-content: center;
  grid-template-columns: 20% 10% 20%;
} `);
    windowStyle.sheet.insertRule(` .button-container > * {

  display: grid;
  align-items: center;
  /*background-color: rgba(25, 110, 110, 0.4);*/
} `);
    windowStyle.sheet.insertRule(` .color-picker-button{
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 1.0);
  white-space: nowrap;

  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1.0);
  border: none;
  padding: 3% 10%;

} `);

    /*windowStyle.sheet.insertRule(` #myModal{
      display: none;
    } `);*/
    windowStyle.sheet.insertRule(` #picker-Container-Outer{
  display: none;
} `);
    windowStyle.sheet.insertRule(` #webgl-canvas{
width:800px;
height:800px;
  max-width: 800px;
  max-height: 800px;
  visibility: hidden;
  z-index: 1;

  /*background-color: rgba(255, 25, 255, 1.0); */
} `);

    windowStyle.sheet.insertRule(` .modal {
  display: none;
  position: fixed; /* Stay in place */
  z-index: ${ app.initial.zIndex.dialog };
  padding-top: 300px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(245, 245, 245, 0.8);
} `);
    windowStyle.sheet.insertRule(` .modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px 40px 20px 40px;
  border: 0px solid #888;
  width: 25%;
  min-height: 100px;
  border-radius: 10px;
  filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
} `);
    windowStyle.sheet.insertRule(` .close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: normal;
} `);
    windowStyle.sheet.insertRule(` .renameTitle{
  border-radius: 5px;
  border: none;
  padding: 3px 8px;
  background-color: rgba( 248, 248, 248, 0.8 );
  filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
} `);
    windowStyle.sheet.insertRule(` .renameButton{
  float: right;
  font-weight: normal;
  margin-left: 10px;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 2px 10px 3px 10px;

  border: none;
  border-radius: 5px;
  background-color: rgba(240, 240, 240, 1.0);
  filter: drop-shadow( 0px 1px 1px rgba( 180, 180, 180, 0.6 ) );
} `);
    windowStyle.sheet.insertRule(` .close:hover,.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
} `);


    windowStyle.sheet.insertRule(` .TEST-Background-COlor{
  /*background-color: rgba(0, 250, 0, 0.2);*/
} `);




    /*    SPACE    */
    windowStyle.sheet.insertRule(` .total-Mask{
  position: fixed; /* Stay in place */
  z-index: ${ app.initial.zIndex.modal };
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(248, 248, 248, 0.9);
} `);
    windowStyle.sheet.insertRule(` .picker-container{
  z-index: ${ app.initial.zIndex.colorPicker };
  /*display: grid;*/
  grid-column: 2;
  grid-row: 2;

  align-items: center;
  justify-items: center;

  width: 100%;
  height: 100%;
  /*background-color: rgba(248, 248, 248, 0.9);*/
} `);
    windowStyle.sheet.insertRule(` .picker-container > *{
  width: 100%;
  height: 100%;
  /*background-color: rgba(245, 245, 25, 0.3);*/
} `);
    windowStyle.sheet.insertRule(` .picker-window{
  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-rows: 100%;

  z-index: ${ app.initial.zIndex.colorPicker };

  width: 100%;
  height: 100%;
} `);
    windowStyle.sheet.insertRule(` .picker-window > *{
  width: 100%;
  height: 100%;
  /*background-color: rgba(245, 25, 245, 0.3);*/
} `);
    windowStyle.sheet.insertRule(` .picker-area{
  z-index: ${ app.initial.zIndex.colorPicker };
  display: grid;
  align-items: center;
  justify-items: center;
} `);
    windowStyle.sheet.insertRule(` .picker-area > *{
  z-index: ${ app.initial.zIndex.colorPicker };
  grid-column: 1;
  grid-row: 1;
  /*background-color: rgba(245, 25, 25, 0.3);*/
} `);
    windowStyle.sheet.insertRule(` #pickerBackground{
  visibility: hidden;
} `);
    windowStyle.sheet.insertRule(` #pickerLayer{
  visibility: hidden;
} `);





      windowStyle.sheet.insertRule(` input[type=range] {
    width: 100%;
    margin: 4px 0;
    background-color: transparent;
    -webkit-appearance: none;
  } `);
      windowStyle.sheet.insertRule(` input[type=range]:focus {
    outline: none;
  } `);
      windowStyle.sheet.insertRule(` input[type=range]::-webkit-slider-runnable-track {
    background-color: rgba( 100, 100, 100, 1.0 ); /* "red-ish" color */
    border: 0;
    width: 100%;
    height: 4px;
    cursor: pointer;
  } `);
      windowStyle.sheet.insertRule(` input[type=range]::-webkit-slider-thumb {
    margin-top: -4px;
    width: 12px;
    height: 12px;
    background-color: rgba( 100, 100, 100, 1.0 ); /* "red-ish" color */
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  } `);
      windowStyle.sheet.insertRule(` input[type=range]:focus::-webkit-slider-runnable-track {
    background-color: rgba( 80, 80, 80, 1.0 ); /* "green-ish" color */
  } `);
      windowStyle.sheet.insertRule(` input[type=range]:disabled::-webkit-slider-runnable-track {
    background-color: rgba( 180, 180, 180, 0.5 ); /* "red-ish" color */
  } `);
      windowStyle.sheet.insertRule(` input[type=range]:disabled::-webkit-slider-thumb {
    background-color: rgba( 180, 180, 180, 0.9 ); /* "red-ish" color */
  } `);
    document.getElementById( 'body' ).style = null; // remove the style from the html body element

    })();




    //loadWindowStyleCSS();

    // update CSS styles
    let layer_webGL_Style = document.createElement('style');
    async function loadwebGLCSS(){
      document.head.appendChild( layer_webGL_Style );

    }
    loadwebGLCSS();

    ///////////////////////////////////////////////////////////////////////////////////
    // The MIT License (MIT)
    //
    // Copyright (c) 2017 Tarek Sherif
    //
    // Permission is hereby granted, free of charge, to any person obtaining a copy of
    // this software and associated documentation files (the "Software"), to deal in
    // the Software without restriction, including without limitation the rights to
    // use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    // the Software, and to permit persons to whom the Software is furnished to do so,
    // subject to the following conditions:
    //
    // The above copyright notice and this permission notice shall be included in all
    // copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    // FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    // COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    // IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    // CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    ///////////////////////////////////////////////////////////////////////////////////

    let translateMat;
    let rotateXMat;
    let rotateYMat;
    let rotateZMat;
    let scaleMat;

    if (window.mat4) {
        translateMat = mat4.create();
        rotateXMat = mat4.create();
        rotateYMat = mat4.create();
        rotateZMat = mat4.create();
        scaleMat = mat4.create();
    }

    let zeros = [0, 0, 0];
    let ones = [1, 1, 1];

    const NUM_TIMING_SAMPLES = 10;

    let cpuTimeSum = 0;
    let gpuTimeSum = 0;
    let timeSampleCount = NUM_TIMING_SAMPLES - 1;

    let randS = 1;
    let randC = 1;

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    function pvrtc2bppSize(width, height) {
        width = Math.max(width, 16);
        height = Math.max(height, 8);

        return width * height / 4;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    function pvrtc4bppSize(width, height) {
        width = Math.max(width, 8);
        height = Math.max(height, 8);

        return width * height / 2;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
    // Size for:
    // COMPRESSED_RGB_S3TC_DXT1_EXT
    // COMPRESSED_R11_EAC
    // COMPRESSED_SIGNED_R11_EAC
    // COMPRESSED_RGB8_ETC2
    // COMPRESSED_SRGB8_ETC2
    // COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2
    // COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2
    function dxtEtcSmallSize(width, height) {
        return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 8;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    // Size for:
    // COMPRESSED_RGBA_S3TC_DXT3_EXT
    // COMPRESSED_RGBA_S3TC_DXT5_EXT
    // COMPRESSED_RG11_EAC
    // COMPRESSED_SIGNED_RG11_EAC
    // COMPRESSED_RGBA8_ETC2_EAC
    // COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
    // COMPRESSED_RGBA_ASTC_4x4_KHR
    function dxtEtcAstcBigSize(width, height) {
        return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc5x4Size(width, height) {
        return Math.floor((width + 4) / 5) * Math.floor((height + 3) / 4) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc5x5Size(width, height) {
        return Math.floor((width + 4) / 5) * Math.floor((height + 4) / 5) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc6x5Size(width, height) {
        return Math.floor((width + 5) / 6) * Math.floor((height + 4) / 5) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc6x6Size(width, height) {
        return Math.floor((width + 5) / 6) * Math.floor((height + 5) / 6) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc8x5Size(width, height) {
        return Math.floor((width + 7) / 8) * Math.floor((height + 4) / 5) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc8x6Size(width, height) {
        return Math.floor((width + 7) / 8) * Math.floor((height + 5) / 6) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc8x8Size(width, height) {
        return Math.floor((width + 7) / 8) * Math.floor((height + 7) / 8) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc10x5Size(width, height) {
        return Math.floor((width + 9) / 10) * Math.floor((height + 4) / 5) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc10x6Size(width, height) {
        return Math.floor((width + 9) / 10) * Math.floor((height + 5) / 6) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc10x8Size(width, height) {
        return Math.floor((width + 9) / 10) * Math.floor((height + 7) / 8) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc10x10Size(width, height) {
        return Math.floor((width + 9) / 10) * Math.floor((height + 9) / 10) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc12x10Size(width, height) {
        return Math.floor((width + 11) / 12) * Math.floor((height + 9) / 10) * 16;
    }

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    function atc12x12Size(width, height) {
        return Math.floor((width + 11) / 12) * Math.floor((height + 11) / 12) * 16;
    }

    const PVR_CONSTANTS = {
        MAGIC_NUMBER: 0x03525650,
        HEADER_LENGTH: 13,
        HEADER_SIZE: 52,
        MAGIC_NUMBER_INDEX: 0,
        PIXEL_FORMAT_INDEX: 2,
        HEIGHT_INDEX: 6,
        WIDTH_INDEX: 7,
        MIPMAPCOUNT_INDEX: 11,
        METADATA_SIZE_INDEX: 12,
        FORMATS: {
            0: "COMPRESSED_RGB_PVRTC_2BPPV1_IMG",
            1: "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",
            2: "COMPRESSED_RGB_PVRTC_4BPPV1_IMG",
            3: "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",
            6: "COMPRESSED_RGB8_ETC2",
            7: "COMPRESSED_RGB_S3TC_DXT1_EXT",
            9: "COMPRESSED_RGBA_S3TC_DXT3_EXT",
            11: "COMPRESSED_RGBA_S3TC_DXT5_EXT",
            22: "COMPRESSED_RGB8_ETC2",
            23: "COMPRESSED_RGBA8_ETC2_EAC",
            24: "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",
            25: "COMPRESSED_R11_EAC",
            26: "COMPRESSED_RG11_EAC",
            27: "COMPRESSED_RGBA_ASTC_4x4_KHR",
            28: "COMPRESSED_RGBA_ASTC_5x4_KHR",
            29: "COMPRESSED_RGBA_ASTC_5x5_KHR",
            30: "COMPRESSED_RGBA_ASTC_6x5_KHR",
            31: "COMPRESSED_RGBA_ASTC_6x6_KHR",
            32: "COMPRESSED_RGBA_ASTC_8x5_KHR",
            33: "COMPRESSED_RGBA_ASTC_8x6_KHR",
            34: "COMPRESSED_RGBA_ASTC_8x8_KHR",
            35: "COMPRESSED_RGBA_ASTC_10x5_KHR",
            36: "COMPRESSED_RGBA_ASTC_10x6_KHR",
            37: "COMPRESSED_RGBA_ASTC_10x8_KHR",
            38: "COMPRESSED_RGBA_ASTC_10x10_KHR",
            39: "COMPRESSED_RGBA_ASTC_12x10_KHR",
            40: "COMPRESSED_RGBA_ASTC_12x12_KHR"
        },
        SIZE_FUNCTIONS: {
            0: pvrtc2bppSize,
            1: pvrtc2bppSize,
            2: pvrtc4bppSize,
            3: pvrtc4bppSize,
            6: dxtEtcSmallSize,
            7: dxtEtcSmallSize,
            9: dxtEtcAstcBigSize,
            11: dxtEtcAstcBigSize,
            22: dxtEtcSmallSize,
            23: dxtEtcAstcBigSize,
            24: dxtEtcSmallSize,
            25: dxtEtcSmallSize,
            26: dxtEtcAstcBigSize,
            27: dxtEtcAstcBigSize,
            28: atc5x4Size,
            29: atc5x5Size,
            30: atc6x5Size,
            31: atc6x6Size,
            32: atc8x5Size,
            33: atc8x6Size,
            34: atc8x8Size,
            35: atc10x5Size,
            36: atc10x6Size,
            37: atc10x8Size,
            38: atc10x10Size,
            39: atc12x10Size,
            40: atc12x12Size
        }
    };

    const utils = {
        random() {
            randS = Math.sin(randC * 18.42);
            randC = Math.cos(randS * 984.21);
            let n = Math.abs(randS * randC) * 4532.3454;
            return n - Math.floor(n);
        },
        instrumentAnimationFrame(numFrames = 1) {
            if (window.glcheck_setRAFCount) {
                window.glcheck_setRAFCount(numFrames);
            }
        },
        xformMatrix(xform, translate, rotate, scale) {
            translate = translate || zeros;
            rotate = rotate || zeros;
            scale = scale || ones;

            mat4.fromTranslation(translateMat, translate);
            mat4.fromXRotation(rotateXMat, rotate[0]);
            mat4.fromYRotation(rotateYMat, rotate[1]);
            mat4.fromZRotation(rotateZMat, rotate[2]);
            mat4.fromScaling(scaleMat, scale);

            mat4.multiply(xform, rotateXMat, scaleMat);
            mat4.multiply(xform, rotateYMat, xform);
            mat4.multiply(xform, rotateZMat, xform);
            mat4.multiply(xform, translateMat, xform);
        },

        loadImages(urls) {
            return new Promise((resolve) => {
                let numImages = urls.length;

                let images = new Array(numImages);

                function onload() {
                    if (--numImages === 0) {
                        resolve(images);
                    }
                }

                for (let i = 0; i < numImages; ++i) {
                    images[i] = new Image();
                    images[i].onload = onload;
                    images[i].src = urls[i];
                }
            });
        },

        loadImageArray(urls) {
            return this.loadImages(urls).then((images) => {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                let width = images[0].width;
                let height = images[0].height;
                canvas.width = width;
                canvas.height = height * images.length;

                for (let i = 0, len = images.length; i < len; ++i) {
                    ctx.drawImage(images[i], 0, i * height);
                }

                return new Promise((resolve) => {
                    let image = new Image();
                    image.onload = () => {
                        resolve({
                            data: image,
                            width: width,
                            height: height,
                            length: images.length
                        });
                    };
                    image.src = canvas.toDataURL();
                });
            });
        },

        createBox(options) {
            options = options || {};

            let dimensions = options.dimensions || [1, 1, 1];
            let position = options.position || [-dimensions[0] / 2, -dimensions[1] / 2, -dimensions[2] / 2];
            let x = position[0];
            let y = position[1];
            let z = position[2];
            let width = dimensions[0];
            let height = dimensions[1];
            let depth = dimensions[2];

            let fbl = {x: x,         y: y,          z: z + depth};
            let fbr = {x: x + width, y: y,          z: z + depth};
            let ftl = {x: x,         y: y + height, z: z + depth};
            let ftr = {x: x + width, y: y + height, z: z + depth};
            let bbl = {x: x,         y: y,          z: z };
            let bbr = {x: x + width, y: y,          z: z };
            let btl = {x: x,         y: y + height, z: z };
            let btr = {x: x + width, y: y + height, z: z };

            let positions = new Float32Array([
                //front
                fbl.x, fbl.y, fbl.z,
                fbr.x, fbr.y, fbr.z,
                ftl.x, ftl.y, ftl.z,
                ftl.x, ftl.y, ftl.z,
                fbr.x, fbr.y, fbr.z,
                ftr.x, ftr.y, ftr.z,

                //right
                fbr.x, fbr.y, fbr.z,
                bbr.x, bbr.y, bbr.z,
                ftr.x, ftr.y, ftr.z,
                ftr.x, ftr.y, ftr.z,
                bbr.x, bbr.y, bbr.z,
                btr.x, btr.y, btr.z,

                //back
                fbr.x, bbr.y, bbr.z,
                bbl.x, bbl.y, bbl.z,
                btr.x, btr.y, btr.z,
                btr.x, btr.y, btr.z,
                bbl.x, bbl.y, bbl.z,
                btl.x, btl.y, btl.z,

                //left
                bbl.x, bbl.y, bbl.z,
                fbl.x, fbl.y, fbl.z,
                btl.x, btl.y, btl.z,
                btl.x, btl.y, btl.z,
                fbl.x, fbl.y, fbl.z,
                ftl.x, ftl.y, ftl.z,

                //top
                ftl.x, ftl.y, ftl.z,
                ftr.x, ftr.y, ftr.z,
                btl.x, btl.y, btl.z,
                btl.x, btl.y, btl.z,
                ftr.x, ftr.y, ftr.z,
                btr.x, btr.y, btr.z,

                //bottom
                bbl.x, bbl.y, bbl.z,
                bbr.x, bbr.y, bbr.z,
                fbl.x, fbl.y, fbl.z,
                fbl.x, fbl.y, fbl.z,
                bbr.x, bbr.y, bbr.z,
                fbr.x, fbr.y, fbr.z
            ]);

            let uvs = new Float32Array([
                //front
                0, 0,
                1, 0,
                0, 1,
                0, 1,
                1, 0,
                1, 1,

                //right
                0, 0,
                1, 0,
                0, 1,
                0, 1,
                1, 0,
                1, 1,

                //back
                0, 0,
                1, 0,
                0, 1,
                0, 1,
                1, 0,
                1, 1,

                //left
                0, 0,
                1, 0,
                0, 1,
                0, 1,
                1, 0,
                1, 1,

                //top
                0, 0,
                1, 0,
                0, 1,
                0, 1,
                1, 0,
                1, 1,

                //bottom
                0, 0,
                1, 0,
                0, 1,
                0, 1,
                1, 0,
                1, 1
            ]);

            let normals = new Float32Array([
                // front
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,

                // right
                1, 0, 0,
                1, 0, 0,
                1, 0, 0,
                1, 0, 0,
                1, 0, 0,
                1, 0, 0,

                // back
                0, 0, -1,
                0, 0, -1,
                0, 0, -1,
                0, 0, -1,
                0, 0, -1,
                0, 0, -1,

                // left
                -1, 0, 0,
                -1, 0, 0,
                -1, 0, 0,
                -1, 0, 0,
                -1, 0, 0,
                -1, 0, 0,

                // top
                0, 1, 0,
                0, 1, 0,
                0, 1, 0,
                0, 1, 0,
                0, 1, 0,
                0, 1, 0,

                // bottom
                0, -1, 0,
                0, -1, 0,
                0, -1, 0,
                0, -1, 0,
                0, -1, 0,
                0, -1, 0
            ]);

            return {
                positions: positions,
                normals: normals,
                uvs: uvs
            };

        },

        createSphere(options) {
            options = options || {};

            let longBands = options.longBands || 32;
            let latBands = options.latBands || 32;
            let radius = options.radius || 1;
            let lat_step = Math.PI / latBands;
            let long_step = 2 * Math.PI / longBands;
            let num_positions = longBands * latBands * 4;
            let num_indices = longBands * latBands * 6;
            let lat_angle, long_angle;
            let positions = new Float32Array(num_positions * 3);
            let normals = new Float32Array(num_positions * 3);
            let uvs = new Float32Array(num_positions * 2);
            let indices = new Uint16Array(num_indices);
            let x1, x2, x3, x4,
                y1, y2,
                z1, z2, z3, z4,
                u1, u2,
                v1, v2;
            let i, j;
            let k = 0, l = 0;
            let vi, ti;

            for (i = 0; i < latBands; i++) {
                lat_angle = i * lat_step;
                y1 = Math.cos(lat_angle);
                y2 = Math.cos(lat_angle + lat_step);
                for (j = 0; j < longBands; j++) {
                    long_angle = j * long_step;
                    x1 = Math.sin(lat_angle) * Math.cos(long_angle);
                    x2 = Math.sin(lat_angle) * Math.cos(long_angle + long_step);
                    x3 = Math.sin(lat_angle + lat_step) * Math.cos(long_angle);
                    x4 = Math.sin(lat_angle + lat_step) * Math.cos(long_angle + long_step);
                    z1 = Math.sin(lat_angle) * Math.sin(long_angle);
                    z2 = Math.sin(lat_angle) * Math.sin(long_angle + long_step);
                    z3 = Math.sin(lat_angle + lat_step) * Math.sin(long_angle);
                    z4 = Math.sin(lat_angle + lat_step) * Math.sin(long_angle + long_step);
                    u1 = 1 - j / longBands;
                    u2 = 1 - (j + 1) / longBands;
                    v1 = 1 - i / latBands;
                    v2 = 1 - (i + 1) / latBands;
                    vi = k * 3;
                    ti = k * 2;

                    positions[vi] = x1 * radius;
                    positions[vi+1] = y1 * radius;
                    positions[vi+2] = z1 * radius; //v0

                    positions[vi+3] = x2 * radius;
                    positions[vi+4] = y1 * radius;
                    positions[vi+5] = z2 * radius; //v1

                    positions[vi+6] = x3 * radius;
                    positions[vi+7] = y2 * radius;
                    positions[vi+8] = z3 * radius; // v2


                    positions[vi+9] = x4 * radius;
                    positions[vi+10] = y2 * radius;
                    positions[vi+11] = z4 * radius; // v3

                    normals[vi] = x1;
                    normals[vi+1] = y1;
                    normals[vi+2] = z1;

                    normals[vi+3] = x2;
                    normals[vi+4] = y1;
                    normals[vi+5] = z2;

                    normals[vi+6] = x3;
                    normals[vi+7] = y2;
                    normals[vi+8] = z3;

                    normals[vi+9] = x4;
                    normals[vi+10] = y2;
                    normals[vi+11] = z4;

                    uvs[ti] = u1;
                    uvs[ti+1] = v1;

                    uvs[ti+2] = u2;
                    uvs[ti+3] = v1;

                    uvs[ti+4] = u1;
                    uvs[ti+5] = v2;

                    uvs[ti+6] = u2;
                    uvs[ti+7] = v2;

                    indices[l    ] = k;
                    indices[l + 1] = k + 1;
                    indices[l + 2] = k + 2;
                    indices[l + 3] = k + 2;
                    indices[l + 4] = k + 1;
                    indices[l + 5] = k + 3;

                    k += 4;
                    l += 6;
                }
            }

            return {
                positions: positions,
                normals: normals,
                uvs: uvs,
                indices: indices
            };
        },

        computeBoundingBox(position, options) {
            options = options || {};
            let buildGeometry = options.buildGeometry || false;

            let boundary = {
                min: vec3.create(),
                max: vec3.create()
            };
            vec3.set(boundary.min, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
            vec3.set(boundary.max, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
            for (let i = 0, len = position.length; i < len; i += 3) {
                boundary.min[0] = Math.min(position[i], boundary.min[0]);
                boundary.max[0] = Math.max(position[i], boundary.max[0]);
                boundary.min[1] = Math.min(position[i + 1], boundary.min[1]);
                boundary.max[1] = Math.max(position[i + 1], boundary.max[1]);
                boundary.min[2] = Math.min(position[i + 2], boundary.min[2]);
                boundary.max[2] = Math.max(position[i + 2], boundary.max[2]);
            }

            if (buildGeometry) {
                let size = vec3.create();
                vec3.subtract(size, boundary.max, boundary.min);
                boundary.geometry = utils.createBox({
                    position: boundary.min,
                    dimensions: size
                });
            }

            return boundary;
        },

        addTimerElement() {
            this.timerDiv = document.createElement("div");
            this.timerDiv.id = "timer";
            this.cpuTimeElement = document.createElement("div");
            this.gpuTimeElement = document.createElement("div");
            this.timerDiv.appendChild(this.cpuTimeElement);
            this.timerDiv.appendChild(this.gpuTimeElement);
            document.body.appendChild(this.timerDiv);
        },

        updateTimerElement(cpuTime, gpuTime) {
            cpuTimeSum += cpuTime;
            gpuTimeSum += gpuTime;
            ++timeSampleCount;

            if (timeSampleCount === NUM_TIMING_SAMPLES) {
                let cpuTimeAve = cpuTimeSum / NUM_TIMING_SAMPLES;
                let gpuTimeAve = gpuTimeSum / NUM_TIMING_SAMPLES;
                this.cpuTimeElement.innerText = "CPU time: " + cpuTimeAve.toFixed(3) + "ms";
                if (gpuTimeAve > 0) {
                    this.gpuTimeElement.innerText = "GPU time: " + gpuTimeAve.toFixed(3) + "ms";
                } else {
                    this.gpuTimeElement.innerText = "GPU time: (Unavailable)";
                }

                cpuTimeSum = 0;
                gpuTimeSum = 0;
                timeSampleCount = 0;
            }
        },

        loadBinary(url) {
            return new Promise((resolve) => {
                let xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.responseType = "arraybuffer";

                xhr.onload = function() {
                    resolve(xhr.response);
                };

                xhr.send(null);
            });
        },

        loadBinaries(urls) {
            return Promise.all(urls.map(url => this.loadBinary(url)));
        },

        // http://cdn.imgtec.com/sdk-documentation/PVR+File+Format.Specification.pdf
        parsePVR(data) {
            let header = new Uint32Array(data, 0, PVR_CONSTANTS.HEADER_LENGTH);

            let pvrFormat = header[PVR_CONSTANTS.PIXEL_FORMAT_INDEX];

            let formatEnum = PVR_CONSTANTS.FORMATS[pvrFormat];
            let sizeFunction = PVR_CONSTANTS.SIZE_FUNCTIONS[pvrFormat];

            let mipMapLevels = header[PVR_CONSTANTS.MIPMAPCOUNT_INDEX];

            let width = header[PVR_CONSTANTS.WIDTH_INDEX];
            let height = header[PVR_CONSTANTS.HEIGHT_INDEX];

            let dataOffset = PVR_CONSTANTS.HEADER_SIZE + header[PVR_CONSTANTS.METADATA_SIZE_INDEX];

            let image = new Uint8Array(data, dataOffset);

            let levels = new Array(mipMapLevels);
            let levelWidth = width;
            let levelHeight = height;
            let offset = 0;

            for (let i = 0; i < mipMapLevels; ++i) {
                let levelSize = sizeFunction(levelWidth, levelHeight);
                levels[i] = new Uint8Array(image.buffer, image.byteOffset + offset, levelSize);

                levelWidth = Math.max(1, levelWidth >> 1);
                levelHeight = Math.max(1, levelHeight >> 1);

                offset += levelSize;
            }

            return {
                data: levels,
                width: width,
                height: height,
                format: formatEnum
            }
        }
    };

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

    var vertexShaderSource = "#version 300 es\n\nlayout(std140, column_major) uniform;\n\nlayout(location=0) in vec4 position; // xy: position, zw: uv\n\nout vec2 vUV;\n\nvoid main() {\n  vUV = position.zw;\n  gl_Position = vec4( position.xy, 0.0, 1.0 );\n}\n";

    var fragmentShaderGaussianHorizontalAlpha = "#version 300 es\nprecision highp float;\n\nlayout(std140, column_major) uniform;\n\nuniform sampler2D tex;\n\nuniform FilterParams {\n  vec4 step;\n  float alphaRadius;\n  float betaRadius;\n  float ratio;\n  float gaussianWindowSize;\n};\n\nin vec2 vUV;\n\nlayout(location=0) out vec4 alphaSeparable;\n\n\n\n\nvoid main() {\n  // scale the blur radius based weather or not the UI is active\n  // if not the ratio is 1.0 so no blur scaling is applied\n  float scaleRadius = ratio * alphaRadius;\n\n  float N = min( pow( 2.0, ceil( log2( 3.0 * scaleRadius ) ) ), ratio * gaussianWindowSize );\n  // Find closet square pixel\n  // Do this by taking the scaled radius and multiplying it by 3\n  // Then multiply that by 0.25 to derive 1/4 of the radius\n  // Floor that value to get the closest integer\n  // Then multiply that value by 4 to get the closest square pixel\n  // if that value is below 2.0, 2.0 will be the minimum value provided\n\n  // Then get the gaussian windows size and multiply it by the ratio to get the correct scale\n  // Assign the smallest of this value to N\n  //float N = min( max( floor( (3.0 * scaleRadius) * 0.25 ) * 4.0, 2.0 ), ratio * gaussianWindowSize );\n\n\n  float scaler = -1.0 / ( 2.0 * scaleRadius * scaleRadius );\n\n  vec4 baseColor_A = texture( tex, vUV ).rgba;\n  baseColor_A.rgb *= baseColor_A.a;\n  vec4 totalColor_A = baseColor_A;\n  float totalWeight_A = 1.0;\n  vec2 delta = vec2( step.x, step.y );\n\n\n\nfor ( float s = 1.0; s <= N; s += 2.0 ) {\n    // Sample from left and right at same time to re-use weight\n    vec2 p = vec2( s, s + 1.0 );\n\n    vec2 weights_A = exp( p * p * scaler );\n    float weight_A = dot( vec2( 1.0 ), weights_A) ;\n    float offset_A = dot( p, weights_A) / weight_A;\n\n    // baseColor_A = texture( tex, vUV + delta * offset_A ).rgba;\n    baseColor_A = texture( tex, vUV + delta * offset_A );\n    baseColor_A.rgb *= baseColor_A.a;\n    totalColor_A += baseColor_A * weight_A;\n\n    // baseColor_A = texture( tex, vUV - delta * offset_A ).rgba;\n    baseColor_A = texture( tex, vUV - delta * offset_A );\n    baseColor_A.rgb *= baseColor_A.a;\n    totalColor_A += baseColor_A * weight_A;\n\n    totalWeight_A += 2.0 * weight_A;\n\n  }\n\n  alphaSeparable = vec4( totalColor_A / totalWeight_A );\n\n}\n";

    var fragmentShaderGaussianVerticalAlpha = "#version 300 es\nprecision highp float;\n\nlayout(std140, column_major) uniform;\n\nuniform sampler2D alphaSeparableBuffer;\n\nuniform FilterParams {\n  vec4 step;\n  float alphaRadius;\n  float betaRadius;\n  float ratio;\n  float gaussianWindowSize;\n};\n\nin vec2 vUV;\n\nlayout(location=0) out vec4 alpha;\n\n\nvoid main() {\n  // scale the blur radius based weather or not the UI is active\n  // if not the ratio is 1.0 so no blur scaling is applied\n  float scaleRadius = ratio * alphaRadius;\n\n  float N = min( pow( 2.0, ceil( log2( 3.0 * scaleRadius ) ) ), ratio * gaussianWindowSize );\n  // Find closet square pixel\n  // Do this by taking the scaled radius and multiplying it by 3\n  // Then multiply that by 0.25 to derive 1/4 of the radius\n  // Floor that value to get the closest integer\n  // Then multiply that value by 4 to get the closest square pixel\n  // if that value is below 2.0, 2.0 will be the minimum value provided\n\n  // Then get the gaussian windows size and multiply it by the ratio to get the correct scale\n  // Assign the smallest of this value to N\n  //float N = min( max( floor( (3.0 * scaleRadius) * 0.25 ) * 4.0, 2.0 ), ratio * gaussianWindowSize );\n\n  float scaler = -1.0 / ( 2.0 * scaleRadius * scaleRadius );\n\n  vec4 baseColor_A = texture( alphaSeparableBuffer, vUV ).rgba;\n  baseColor_A.rgb *= baseColor_A.a;\n  vec4 totalColor_A = baseColor_A;\n  float totalWeight_A = 1.0;\n  vec2 delta = vec2( step.z, step.w );\n\n\n  for ( float s = 1.0; s <= N; s += 2.0 ) {\n    // Sample from left and right at same time to re-use weight\n    vec2 p = vec2( s, s + 1.0 );\n\n    vec2 weights_A = exp( p * p * scaler );\n    float weight_A = dot( vec2( 1.0 ), weights_A) ;\n    float offset_A = dot( p, weights_A) / weight_A;\n\n    // baseColor_A = texture( alphaSeparableBuffer, vUV + delta * offset_A ).rgba;\n    baseColor_A = texture( alphaSeparableBuffer, vUV + delta * offset_A );\n    baseColor_A.rgb *= baseColor_A.a;\n    totalColor_A += weight_A * baseColor_A;\n\n    // baseColor_A = texture( alphaSeparableBuffer, vUV - delta * offset_A ).rgba;\n    baseColor_A = texture( alphaSeparableBuffer, vUV - delta * offset_A );\n    baseColor_A.rgb *= baseColor_A.a;\n    totalColor_A += weight_A * baseColor_A;\n\n    totalWeight_A += 2.0 * weight_A;\n\n  }\n\n  vec4 finalColor = clamp( totalColor_A / totalWeight_A, 0.0, 1.0 );\n  alpha = vec4( finalColor );\n\n}\n";

    var fragmentShaderImageThroughput = "#version 300 es\nprecision highp float;\n\nlayout(std140, column_major) uniform;\n\nuniform sampler2D throughputBuffer;\n\nin vec2 vUV;\n\nlayout(location=0) out vec4 outColor;\n\n\nvoid main() {\n\nvec4 base = texture( throughputBuffer, vUV ).rgba;\n\noutColor = base;\n\n}\n";

    const filter$1 = {
      name: 'Test Electron 4 bit - 16 bit', drawCall: null
    };

    const shaders = [
      [ vertexShaderSource, fragmentShaderGaussianHorizontalAlpha ],
      [ vertexShaderSource, fragmentShaderGaussianVerticalAlpha ],
      [ vertexShaderSource, fragmentShaderImageThroughput ],
    ];

    app.createPrograms( ...shaders ).then( ( programs ) => {

      let drawCall_GaussianHorizontalAlpha = app.createDrawCall( programs[ 0 ], vertexArray );
      drawCall_GaussianHorizontalAlpha.uniformBlock( 'FilterParams', app.filterParams.Gaussian );

      let drawCall_GaussianVerticalAlpha = app.createDrawCall( programs[ 1 ], vertexArray );
      drawCall_GaussianVerticalAlpha.uniformBlock( 'FilterParams', app.filterParams.Gaussian );

      let drawCall_ImageThroughPut = app.createDrawCall( programs[ 2 ], vertexArray );

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
            );
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
          );
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

        filter$1.drawCall = {
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


            for( let j = 0; j < files.length; j++ ){
              await new Promise( async ( resolve ) => {
                let file = files[j];

                await getBlobFromPath(file, async (blob) => {

                  let imageUrl = window.URL.createObjectURL(blob);
                  let imageName = file.replace(/^.*[\\\/]/, '');

                  let imageObject = {
                    index: app.imageArray.length,
                    type: 'Image',
                    url: imageUrl,
                    name: imageName,
                  };

                  await app.function.menuBar.loadImage.append(imageObject);

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
                        );
                      }

                      resolve(app.textureArray.push(textures)); // push bit depths to the texture array

                    });

                  });

                  img.src = file;
                  img.style.display = "inline-block";

                  app.texture = app.textureArray[imageDropdown.selectedIndex][bitdepth.selectedIndex];

                  let name = `Image ${ j }`;
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

                  resolve();
                });
              });
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
    ];
    app.function.menuBar.main.loadImageMenuBar( imageFiles );


    let formatValue = ( x ) => x.toFixed( 2 );
    let setupSlider = ( name, uniformIndex ) => {
      let slider = document.getElementById( `${name}Slider` );
      let label = document.getElementById( `${name}Amount` );

      slider.oninput = async () => {
        let v = slider.value / 1000.0;
        if( v === 0 ){
          v = 0.0;
        }else {
          v = Math.pow( 2.0, ( v * 12.0 ) ) * 0.25;
        }
        label.innerHTML = formatValue( v );
        //app.filterParams.set( uniformIndex, v ).update();
        app.filterParams.Gaussian.set( uniformIndex, v ).update(); // alpha radius
        app.needsRender = true;
        await app.function.webGL.draw(); // DRAW  - draw the image on the canvas //
      };
      slider.oninput();
    };
    setupSlider( 'Gaussian', 1 );


    ///////////////////// FILTER DROPDOWN //////////////////////////
    let filter = { name: "Test Electron 4 bit - 16 bit", filter: filter$1 };
    let filterArray = [ filter ];
    app.activeFilter = filterArray[ 0 ].filter;
    ///////////////////// END FILTER DROPDOWN //////////////////////////


    // create dropdown for bit-depth selection //
    let bitdepth = document.getElementById( 'bitDepthDropdown' );
    bitdepth.oninput = app.function.menuBar.dropdown.bitdepth;

    // "app.initial.bitDepths" object that contains the
    // bitdepth dropdown paramiters
    // for each item populate the bitdepth dropdown
    // with their paramiters
    app.initial.bitDepths.forEach( depth => {
      let option = document.createElement( 'option' );
      option.innerHTML = depth.name;
      bitdepth.append( option );
    });

    //const depthIndex = 1;
    //bitdepth.selectedIndex = depthIndex;
    bitdepth.selectedIndex = app.layerCollection.menuBar.dropdownIndex.bitDepth;
    // End color bit depth dropdown //

}));
//# sourceMappingURL=bundle.js.map
