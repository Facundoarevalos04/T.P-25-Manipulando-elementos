const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);


const article = qs('article')
article.classList.add('fondoTransparente')

const h1 = qs('h1')
h1.innerHTML = 'AGREGAR PELICULAS'
h1.classList.add('titulo') 

const section = qs('section')
section.classList.add('fondoCRUD')

