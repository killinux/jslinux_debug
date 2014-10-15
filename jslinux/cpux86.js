/* 
   PC Emulator wrapper

   Copyright (c) 2012 Fabrice Bellard

   Redistribution or commercial use is prohibited without the author's
   permission.
*/
"use strict";

function test_typed_arrays()
{
    return (window.Uint8Array &&
            window.Uint16Array &&
            window.Int32Array &&
            window.ArrayBuffer);
}

if (test_typed_arrays()) {
	console.log("cpux86-ta.js");
    include("cpux86-ta.js");
} else {
	console.log("cpux86-std.js");
    include("cpux86-std.js");
    document.write('<canvas id="dummy_canvas" width="1" height="1"></canvas>');
}
