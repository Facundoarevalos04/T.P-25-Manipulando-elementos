const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

let body = qs("body");

let fondo = prompt("desea cambiar el color de fondo?");

if (fondo) {
  body.classList.add("fondoMoviesList");
  body.style.backgroundColor = "#7f7f7f";
}

let titulo = qs("h1");

titulo.innerHTML = "LISTADO DE PELICULAS";
titulo.style.color = "white";
titulo.style.backgroundColor = 'teal'
titulo.style.padding = '20px'
titulo.style.borderRadius = '10px'


/* const respuesta = prompt('Desea modo oscuro?') */
