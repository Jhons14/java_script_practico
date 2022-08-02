const h1 = document.querySelector('h1');
const input1 = document.querySelector('#cadena1');
const input2 = document.querySelector('#cadena2');
const btn = document.querySelector('#btnConcatenar');
const pResult = document.querySelector('#result');
const change = document.querySelector('#change')
const pChange = document.querySelector('#pChange')
const form = document.querySelector('#form')

h1.addEventListener('mouseover',btnOnClick);//El ultimo boton de un form siempre sera de tipo submit a no ser que se esecifique lo contrario en el html


function btnOnClick(event) {
event.preventDefault(); //Evita que el objeto cumpla su funcion natural: en este caso el boton al ser submit evita que envie la informacion
alert('virus');
}


function btnOnChange(){
  pChange.innerText = 'Esto es lo que hay escrito arriba: ' + change.value; //Inner inyecta dentro del HTML lo que se le especifique
}