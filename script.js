let options = document.getElementById("options")
let iconeBarras= document.getElementById("iconeBars")
let iconeX = document.getElementById("iconeX")

function AbrirFecharMenu() {

    if (options.classList.contains("menu_fechado")) {

        options.classList.remove("menu_fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"
    } else {
        options.classList.add("menu_fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }
}