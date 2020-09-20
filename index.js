const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// crear el servidor
const app = express();

//Habilitar Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar Cors
app.use(cors());

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


// habilitar routing
app.use('/', routes())


// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})