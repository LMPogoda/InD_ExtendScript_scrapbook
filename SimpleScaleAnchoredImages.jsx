﻿// A very simple script to scale all the anchored images in selected story
// Based on code snippets by Laubender and Manan Joshi found here:
// https://community.adobe.com/t5/InDesign/Resizing-images-and-adding-an-object-style-Script/td-p/9988872
//
// Copyright (c) 2019 LMPogoda
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


// Create an array of all the graphics in the selected story
// No sanity check if this is valid selection nor if there’s any selection
var allGraphics = app.selection[0].parentStory.allGraphics;

for(var n = 0; n < allGraphics.length; n++)
    {
        if ( allGraphics[n].parent.hasOwnProperty('anchoredObjectSettings') ) {
            // Scale every object in the array
            myScaleFactor = 0.94, // Provide percentage in decimal form
            myScaleMatrix = app.transformationMatrices.add({horizontalScaleFactor:myScaleFactor,verticalScaleFactor:myScaleFactor});
            allGraphics[n].parent.transform(
                        CoordinateSpaces.INNER_COORDINATES,
                        AnchorPoint.CENTER_ANCHOR,
                        myScaleMatrix );
        };
        
    };
