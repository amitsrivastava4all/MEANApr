window.addEventListener("load",function(){
	setup();
	setInterval(draw,50);
});

		
		function rect(x,y,w,h){
			canvasContext.fillRect(x,y,w,h);
		}
		function fill(color){
			canvasContext.fillStyle = color;
		}
var canvas ;
var canvasContext;
var WIDTH ;
var HEIGHT;
function createCanvas(width,height){
	WIDTH = width;
	HEIGHT = height;
			 canvas = document.createElement("canvas");
		canvasContext = canvas.getContext("2d");
			canvas.width = width;
			canvas.height = height ;
			
			document.body.appendChild(canvas);
			
		}
		function background(color){
			canvasContext.clearRect(0, 0, 500, 500);
			canvas.style.backgroundColor=color;
		}
		