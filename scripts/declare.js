/**
 * All global variables 
 */

 //canvas
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
//prevents canvas from 'smoothing' (blurring) image edges
context.imageSmoothingEnabled = false;
context.textBaseline = 'top';

//dat.GUI

var gui = new dat.GUI({
    autoPlace: false,
});
document.getElementById('controls').appendChild(gui.domElement);

var pubFolder = gui.addFolder('publicity');
var resFolder = gui.addFolder('resources');
var trainFolder = gui.addFolder('training');
//var workFolder = gui.addFolder('employees');

//videos
var idleImage = document.getElementById('idle');
var backImage = document.getElementById('back');
var dirImage = document.getElementById('dir');
var startImage = document.getElementById('start');
var altImage = document.getElementById('alt');
var succVideo = document.getElementById('success');
var boomVideo = document.getElementById('boom');
var coastVideo = document.getElementById('coast');
var overpopVideo = document.getElementById('overpop');

//random
function genRandom(minInc, maxExc) {
    return Math.floor(Math.random() * (maxExc - minInc)) + minInc;
}