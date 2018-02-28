var svg = document.getElementById("svjesus");

var b1 = document.getElementById("clear");

var clear = function(){
    clear = document.createElementNS("http://www.w3.org/2000/sg", "rect");
    clear.setAttribute(x, 0);
    clear.setAttribute(y, 0);
    clear.setAttribute(width, 500);
    clear.setAttribute(height, 500);
    clear.setAttribute(fill, "white");
    svg.appendChild(clear);
};

var make_circle = function(e){
    circle = document.createElementNS("http://www.w3.org/2000/sg", "circle");

};


var make_shape = function(e){
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    make_circle(e)
};


b1.addEventListener("click", clear);
c.addEventListener("click", make_shape);
