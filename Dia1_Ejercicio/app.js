// Importacion de Express
const express = require('express');
const app = express();

const prompt = require('prompt-sync')();
// Se define puerto que se encuentra en archivo .env

require('dotenv').config();
const PORT = process.env.PORT;

// Pedir entrada al usuario SOLO UNA VEZ
console.log("Bienvenido a Campuslands!!");
const opcion = prompt(
  "Por favor, selecciona tu rol:\n" +
  "1. Camper\n" +
  "2. Trainer\n" +
  "3. Coordinador\n"
);

let menu = "";

switch (opcion) {
  case "1":
    menu = "Menú Camper";
    break;
  case "2":
    menu = "Menú Trainer";
    break;
  case "3":
    menu = "Menú Coordinador";
    break;
  default:
    menu = "Opción inválida";
    break;
}
// Cuando alguien entre al servidor, devolvemos lo que escribió en terminal
app.get('/', (req, res) => {
  res.send(`Texto escrito en terminal: ${opcion}`);
});

app.listen(PORT,()=>{
    console.log("servidor iniciado!")
});