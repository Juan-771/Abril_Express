//Importacion de express en variable app
const express = require('express');
const app = express();
//Definir Puerto

require('dotenv').config();

const PORT = process.env.PORT;
//ruta Principal
app.get('/',(req,res)=>{
    res.send('Holisss Bienvendios a express');
});

app.get('/mensaje1',(req,res)=>{
    res.send('Este es otro endpoint');
});

app.get('/mensaje2',(req,res)=>{
    res.json({
        "Mensaje":"Holiii"
    })
});

app.post('/mensaje1',(req,res)=>{
    res.send('Este es otro endpoint');
});

//Ruta con parametro
app.get('/mensajePersonalizado/:nombre',(req,res)=>{
    const nombre = req.params.nombre;
    res.send(`Holaa ${nombre}`);
})

//Ruta POST
app.post('/mensajeJSON',(req,res)=>{
    const menJson=req.body;
    res.send(`Holaa $(menJson["nombre]), el cual tiene ${menJson["edad"]} año/s!!`);
})

//Iniciar el servidor
app.listen(PORT,()=>{
    console.log("servidor iniciado!")
});
