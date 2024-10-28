var x = document.getElementById("navigation");
var y = document.getElementsByClassName("navli");
var l = document.getElementById("img")
var elements = document.getElementsByClassName("navp");
var q = document.getElementById("Hamburger");
var k = document.getElementById("cross")

x.addEventListener("mouseover", open);
x.addEventListener("mouseout", close);
q.addEventListener("click", open)
k.addEventListener("click", close)


function open() {
    
    l.style.display = "block";
    x.style.animation = "open 0.1s linear forwards";

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block"
    }

    for (var n = 0; n < y.length; n++) {
        y[n].style.justifyContent = "space-between"
    }

}

function close() {

    l.style.display = "none"
    x.style.animation="close 0.1s linear forwards";

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none"  
    }

    for (var n = 0; n < y.length; n++) {
        y[n].style.justifyContent = "center"
    }

}