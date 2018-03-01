var svg = document.getElementById("svjesus");

var b1 = document.getElementById("clear");

var x = -1;
var y = -1;

var clear_screen = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var make_circle = function(e){
    circle = document.createElementNS("http://www.w3.org/2000/sg", "circle");
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", "30");
    svg.appendChild(circle);
};


var make_shape = function(e){
    if (x != -1 && y != -1){
    	line = document.createElementNS("http://www.w3.org/2000/sg", "line");
    	line.setAttribute("x1", x);
    	line.setAttribute("y1", y);
	line.setAttribute("x2", e.offsetX);
	line.setAttribute("y2", e.offsetY);
    }
    x = e.offsetX;
    y = e.offsetY;
    make_circle(e)
};


b1.addEventListener("click", clear_screen);
svg.addEventListener("click", make_shape);
