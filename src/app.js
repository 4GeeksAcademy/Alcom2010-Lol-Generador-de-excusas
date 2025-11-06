import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


// Arrays de palabras
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Función para elegir elemento aleatorio
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const excuse = `${randomFrom(who)} ${randomFrom(action)} ${randomFrom(what)} ${randomFrom(when)}.`;
  document.getElementById('excuse').textContent = excuse;
});
