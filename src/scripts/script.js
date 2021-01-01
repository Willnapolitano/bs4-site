let isScrollingDark = false
let cont = 0
const navbar = document.querySelector(".navbar")
const navbar_toggler =  document.querySelector(".navbar-toggler")
const nav_collapse = document.querySelector("#navbarSupportedContent")
const jumbotron = document.querySelector("#img-jumbotron")


navbar_toggler.addEventListener("click", () => {
    navbar.classList.add("bg-dark")
    if(cont <= 2 && isScrollingDark){
        navbar.classList.add("bg-dark")
        cont++
    }
    else if(cont >= 2 && !isScrollingDark){
        navbar.classList.remove("bg-dark")
        cont = 0
    }
})

function classAlwaysExist(variavel , classe) {
    if(variavel.classList.contains(`${classe}`)){
        return true
    }
}


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 0.0){
        navbar.classList.add("bg-dark")
        isScrollingDark = true
    }
    else if(window.pageYOffset === 0.0 && classAlwaysExist(nav_collapse, "show")){
        navbar.classList.add("bg-dark")
        isScrollingDark = true
    }
    else{
        navbar.classList.remove("bg-dark")
        isScrollingDark = false
    }
})

