const nav = document.querySelector("nav");
const menu = document.getElementById("menu")
const cross = document.getElementById("cross");
const search = document.getElementById("search");
const searchField = document.querySelector(".søg-felt")
const ordblind = document.getElementById("ordblind")
const text = document.querySelectorAll("p, h1, h2, a, input, span")

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

const updatefontFamily = (fontFamily) => {
    text.forEach(el => {
        el.style.fontFamily = fontFamily;
    });
};

const ordblindmode = () => {
    if (ordblind.innerHTML === "Fra") {
        ordblind.innerHTML = "Til";
        localStorage.setItem("fontFamily", "Lexend, Inter, serif");
        updatefontFamily("Lexend, Inter, serif");
    } else {
        ordblind.innerHTML = "Fra";
        localStorage.setItem("fontFamily", "Inter, serif");
        updatefontFamily("Inter, serif");
    }
};

const storageUpdate = () => {
    const savedfontFamily = localStorage.getItem("fontFamily");
    if (savedfontFamily) {
        updatefontFamily(savedfontFamily)
        if (savedfontFamily.includes("Lexend")) {
            ordblind.innerHTML = "Til"
        }
        else {
            ordblind.innerHTML = "Fra"
        }
    }
}


ordblind.addEventListener("click", ordblindmode);
document.addEventListener("DOMContentLoaded", storageUpdate)
nav.addEventListener("mouseover", open);
nav.addEventListener("mouseout", close);
menu.addEventListener("click", open);
cross.addEventListener("click", close);
search.addEventListener("click", searchInout);
ordblind.addEventListener("click", ordblindmode)