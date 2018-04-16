/**
 * All global variables 
 */

 //canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
//prevents canvas from 'smoothing' (blurring) image edges
context.imageSmoothingEnabled = false;
context.textBaseline = 'top';

//dat.GUI

const gui = new dat.GUI({
    autoPlace: false,
});
document.getElementById('controls').appendChild(gui.domElement);

const pubFolder = gui.addFolder('publicity');
const resFolder = gui.addFolder('resources');
const trainFolder = gui.addFolder('training');
//const workFolder = gui.addFolder('employees');

//videos
const idleImage = document.getElementById('idle');
const backImage = document.getElementById('back');
const dirImage = document.getElementById('dir');
const startImage = document.getElementById('start');
const altImage = document.getElementById('alt');
const succVideo = document.getElementById('success');
const boomVideo = document.getElementById('boom');
const coastVideo = document.getElementById('coast');
const overpopVideo = document.getElementById('overpop');

//random
function genRandom(minInc, maxExc) {
    return Math.floor(Math.random() * (maxExc - minInc)) + minInc;
}