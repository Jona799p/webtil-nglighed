const nav = document.querySelector("nav");
const menu = document.getElementById("menu")
const cross = document.getElementById("cross");
const search = document.querySelector(".søg-felt");
const searchField = document.querySelector(".søg-felt")

const open = () => {
    nav.style.animation = "open 0.1s linear forwards"
}

const close = () => {
    nav.style.animation = "close 0.1s linear forwards"
}

const søg = () => {
    search.style.border ="2px solid black"
}


nav.addEventListener("mouseover", open);
nav.addEventListener("mouseout", close);
menu.addEventListener("click", open);
cross.addEventListener("click", close);
searchField.addEventListener("active", søg);