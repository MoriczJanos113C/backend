// Komoróczy Tamás
/*
- GET /todo - események lekérdezése 
    -> null
    <- Az események JSON formátumban
- GET /todo/:tid - egy esemény lekérdezése
    -> egy esemény azonosítója
    <- egy esemény JSON fromátumban
- PUT /todo - egy új esemény felvitele
    -> Egy esemény (csak szöveg)
    <- A felvett esemény JSOn formátumban
- DELETE /todo/:tid - egy esemény törlése
    -> A törölni kívánt esemény azonosítója
    <- A törölt esemény JSON formátumban
*/

const express = require('express');
const port = 4405;

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const {initDatabase} = require('./services/db');

const addRoutes = require('./route');

initDatabase( (err, {db, myModel}) =>{
    if(err){
        return console.err(err);
    }
    addRoutes(app, db, myModel)
    app.listen(port, () =>{
        console.log(`Figyelek a ${port} porton!`);
    });
})

