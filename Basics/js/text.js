/*global document*/
var myCanvas = document.getElementById('c'),
    myContext = myCanvas.getContext('2d'),
    myCanvasWidth = myCanvas.Width,
    myCanvasHeight = myCanvas.height;
    

myContext.fillStyle = '#00F';
myContext.fillRect(0, 0, 500, 500);