var clear = document.getElementById("clear");

var isClear = true; 

var lastX;
var lastY; 

var pic = document.getElementById("vimage"); 

var change = function(e) {
    e.preventDefault();
    this.setAttribute( "fill", "green" );
};

var drawDot = function(x, y) {
    //If it's the first time running this function
    if (isClear) {
	lastX = x;
	lastY = y;
    }
    
    isClear = false;    
    
    var cl = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );

    var line = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"line"
    );
    
    //Creating a circle based off of mouse positions (x, y coordinates) 
    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", "30"); 
    change;

    //Setting up line from pervious to current circles 
    line.setAttribute("x1", x);
    line.setAttribute("y1", y);
    line.setAttribute("x2", lastX);
    line.setAttribute("y2", lastY);
    line.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2"); 

    lastX = x;
    lastY = y;
    
    pic.appendChild(cl);
    pic.appendChild(line);
    

};

//Draws dots when SVG is clicked
var clicked = function(e) {
    if (e.toElement == this) {
	console.log(e.offsetX);
	console.log(e.offsetY);
	console.log(e.toElement);
	drawDot( e.offsetX, e.offsetY );
    }
};

//Clear Function: 
var clear_svg = function() {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    isClear = true;
};


//Tells SVG drawing space to listen to mouse clicks. Will trigger function clicked upon a mouse click. 
pic.addEventListener("click", clicked);

//Clears all SVG elements 
clear.addEventListener("click", clear_svg); 
