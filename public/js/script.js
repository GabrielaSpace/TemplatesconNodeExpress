const imgMain = document.querySelector('.imgMain');
const botonMostrar = document.createElement('input');
imgMain.appendChild(botonMostrar)
botonMostrar.setAttribute('type','button')
botonMostrar.value='Mensaje sorpresa'

botonMostrar.addEventListener('click', ()=> alert('Hello world')) 
