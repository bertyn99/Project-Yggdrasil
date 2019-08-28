var express = require('express');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var app = express();


var server =app.listen  (3000, () =>{
    console.log("listening on port 8080")

})