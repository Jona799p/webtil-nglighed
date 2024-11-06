const nav = document.querySelector("nav");
const menu = document.getElementById("menu")
const cross = document.getElementById("cross");
const search = document.getElementById("search");
const searchField = document.querySelector(".søg-felt")

const open = () => {
    nav.style.animation = "open 0.1s linear forwards"
}

const close = () => {
    nav.style.animation = "close 0.1s linear forwards"
}

const searchInout = () => {
    if (searchField.style.top === "-65px") {
        searchField.style.top = "15vh"
    }
    else {
        searchField.style.top = "-65px"
    }
}

nav.addEventListener("mouseover", open);
nav.addEventListener("mouseout", close);
menu.addEventListener("click", open);
cross.addEventListener("click", close);
search.addEventListener("click", searchInout)