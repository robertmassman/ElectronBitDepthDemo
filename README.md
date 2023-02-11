{\rtf1\ansi\ansicpg1252\cocoartf2707
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # ElectronBitDepthDemo\
This is a small demo for the electron team that hopefully allows them to look into why \
after Electron version "17.4.11" 4-bit GPU filtered images look like 8-bit images after a gaussian filter is applied.\
\
After installing dependencies and devDependencies \
To load the demo use the below.\
npm run start\
\
If you make changes to the code use the below to compile and then load the demo use the below.\
npm run compile && npm run start\
\
You can now use the dropdown to switch between image resolutions. The second image in the dropdown has a resolution of 512 x 512.  \
\
Two Notes \
1. When switching to Electron \'9322.2.0\'94 the image does not generate a preview automatically. Just move the gaussian blur slider to get a filtered image to appear. \
2. In the file located at ElectronBitDepthDemo/src/filters/gaussianFilter.js. I noticed, when using Electron \'9317.4.11\'94, if I do not use the "drawCall_ImageThroughPut" filter fragment and output the image to the screen immediately after blurring it I get similar image results. similar to when updating Electron to \'9322.2.0\'94 with the "drawCall_ImageThroughPut" fragment filter enabled.\
}