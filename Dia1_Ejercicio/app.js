// Importacion de Express y otros
const express = require('express');
const app = express();
const prompt = require('prompt-sync')();
app.use(express.json());

// Configura la respuesta JSON para que sea más legible
app.set("json spaces", 2);

// Se define puerto que se encuentra en archivo .env
require('dotenv').config();
const PORT = process.env.PORT;

// texto Bienvenida
console.log("Bienvenido a Campuslands!!");

// Importacion de rutas
const campersApartados = require('./apartados/campers');
const trainersApartados = require('./apartados/trainer');
const coordinadorApartados = require('./apartados/coordinador');

// Importacion de express en variable app

app.use('/campers', campersApartados);
app.use('/trainer', trainersApartados);
app.use('/coordinador', coordinadorApartados);
// Cuando alguien entre al servidor, devolvemos lo que escribió en terminal
app.get('/', (req, res) => {
  res.send(`Texto escrito en terminal: ${opcion}`);
});

app.listen(PORT,()=>{
    console.log("servidor iniciado!")
});