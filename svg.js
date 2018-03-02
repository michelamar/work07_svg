var svg = document.getElementById("svjesus");

var b1 = document.getElementById("clear");

var prevx = null;
var prevy = null;

var clear_screen = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var make_circle = function(e){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", "30");
    circle.setAttribute("fill", "black");
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
};


var make_shape = function(e){
    if (prevy){
    	line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    	line.setAttribute("x1", prevx);
    	line.setAttribute("y1", prevy);
	line.setAttribute("x2", e.offsetX);
	line.setAttribute("y2", e.offsetY);
	line.setAttribute("stroke", "blue");
	svg.appendChild(line);
    }
    prevx = e.offsetX;
    prevy = e.offsetY;
    make_circle(e)
};


b1.addEventListener("click", clear_screen);
svg.addEventListener("click", make_shape);
