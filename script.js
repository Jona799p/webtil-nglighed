var x = document.getElementById("navigation");
const elements = document.getElementsByClassName("navp");


x.addEventListener("mouseover", open);
x.addEventListener("mouseout", close);

function open() {
    
    x.style.animation="open 0.1s linear forwards";

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block"
    }
}

function close() {

    x.style.animation="close 0.1s linear forwards";

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none"  
    }
}