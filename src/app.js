import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


// Arrays de palabras
let who = ['Mi gato', 'Mi perro', 'Mi abuela', 'El cartero', 'Mi profesor', 'Mi vecino', 'Un extraterrestre', 'El fantasma del baño', 'Mi hermano pequeño', 'Un payaso en bicicleta', 'Mi jefe', 'El repartidor de pizza', 'Una paloma gigante', 'Mi pez dorado', 'Mi mejor amigo'];
let action = ['se comió', 'rompió', 'escondió', 'robó', 'quemó', 'tiró por la ventana', 'mojó', 'bailó sobre', 'pintó', 'se durmió encima de', 'gritó a', 'pegó con cinta adhesiva', 'confundió con comida', 'olvidó', 'transformó en confeti'];
let what = ['mi tarea', 'mi teléfono', 'mi ordenador', 'mi coche', 'mi almuerzo', 'mi cuaderno', 'mi mochila', 'mi cama', 'mi libro favorito', 'mi proyecto final', 'mi guitarra', 'mi zapato', 'mi diploma', 'mi control remoto', 'mi uniforme'];
let when = ['antes de venir a clase', 'cuando me estaba duchando', 'mientras dormía', 'cuando estaba cocinando', 'durante la tormenta', 'cuando iba de camino al trabajo', 'mientras veía la tele', 'cuando estaba rezando', 'justo antes de salir de casa', 'cuando estaba haciendo ejercicio', 'durante la siesta', 'mientras jugaba con mi perro', 'cuando se fue la luz', 'cuando estaba estudiando', 'mientras lavaba los platos'];


// Función para elegir elemento aleatorio
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const excuse = `${randomFrom(who)} ${randomFrom(action)} ${randomFrom(what)} ${randomFrom(when)}.`;
  document.getElementById('excuse').textContent = excuse;
});