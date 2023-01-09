const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element)
const $ = (element) => document.getElementById(element)



const main = $('main-container')
const subtitulo = qs('.subtitulo')
const parrafos = qsa('p')
const listado = qs('h2 a')

let nombre = prompt('Cual es tu nombre?')

subtitulo.textContent += nombre ? nombre : "invitado"


subtitulo.style.textTransform = "uppercase"

listado.style.color = "#E51B3E"

main.style.display = "block"

const respuesta = confirm('Queres cambiar el de pantalla?')


if (respuesta) {
    qs('body').classList.add('fondo')
}

parrafos.forEach((parrafos, i) => {
    if (i%2 === 0) {
        parrafos.classList.add('destacadoImpar')
    } else {
        parrafos.classList.add('destacadoPar')
    }
})