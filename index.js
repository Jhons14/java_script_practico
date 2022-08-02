const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1, 
  p,
   parrafito,
   pid, 
   input,
});

h1.innerHTML = 'DOM  <br> Manipulation';
h2.innerText = 'DOM <br> Manipulation';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');

h1.classList.add('verde');
h1.classList.remove('rojo')

input.value= 'Hello, world';

const img = document.createElement('img');
img.setAttribute('src' , 'https://i.pinimg.com/236x/1b/2e/79/1b2e79947cbe3457ce221d79160de767--google-search.jpg');
console.log(img);
pid.append(img);
pid.replaceWith(img);

