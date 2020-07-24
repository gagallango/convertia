function mostrarMensaje() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

let cerrar = document.querySelectorAll(".close")[0]
let abrir = document.querySelectorAll(".navbar-brand")[0]
let cosa = document.querySelectorAll(".cosa")[0]
let cosaC = document.querySelectorAll(".cosa-container")[0]

abrir.addEventListener("click", function (e) {
    e.preventDefault()
    cosaC.style.opacity = "1"
    cosaC.style.visibility = "visible"
    cosa.classList.toggle("cosa-close")
})

cerrar.addEventListener("click", function () {
    cosa.classList.toggle("cosa-close")
    setTimeout(function () {
        cosaC.style.opacity = "0"
        cosaC.style.visibility = "hidden"
    }, 600)
})

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == cosaC) {
        cosa.classList.toggle("cosa-close")
        setTimeout(function () {
            cosaC.style.opacity = "0"
            cosaC.style.visibility = "hidden"
        }, 1000)
    }
})
