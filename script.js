const nav = document.querySelector("nav");
const menu = document.getElementById("menu")
const cross = document.getElementById("cross");


const open = () => {
    nav.style.animation = "open 0.1s linear forwards"
}

const close = () => {
    nav.style.animation = "close 0.1s linear forwards"
}

nav.addEventListener("mouseover", open);
nav.addEventListener("mouseout", close);
menu.addEventListener("click", open);
cross.addEventListener("click", close);