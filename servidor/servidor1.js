const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('appName', 'firts-Server');  // nombre del servidor
app.set('views', __dirname + '/views'); // aqui se enlaza conla capeta views
app.set('views engine', 'ejs');

// aqui va el contenido de la aplicacion
var nombres = ("este es un ejemplo");

//Middlewares
    app.use(morgan('dev')); //para saber el status de la peticion por consola

// RUTAS
        //  /api es la ruta donde se manda la notificacion
    app.get('/api', (req,res) =>{
        res.json({
            primeraPrueba: nombres //aqui se manda a llamar 
        });
    });

    app.get('/', (req, res) =>{ // ruta
        
        res.render('index.ejs');
});

    app.get('/number2', (req, res) =>{  // ruta
         res.render('number2.ejs');
});
        //  se usa '*'  cuando una ruta  no existe 
    app.get('*', (req, res) =>{
        res.end("La ruta no existe");
});


app.listen(3000, () =>{  
    console.log("servidor encendido en: http://localhost:3000");
    console.log("Name App: ", app.get('appName')); // nombre del servidor
});
