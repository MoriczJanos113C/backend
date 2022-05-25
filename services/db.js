const loki = require('lokijs');
const db = new loki('todos.db');


function initDb(callback) {
    db.loadDatabase({}, err => {
        if(err){
            return callback(err, null);
        }
        let myModel = db.getCollection("todos");
        if (myModel === null) {
            myModel = db.addCollection("todos");
        }
        //console.log(myModel);
        db.saveDatabase(err => {
            console.log("Mentés sikerült");
        })
        return callback ( null, {db, myModel});
    })
}

module.exports.initDatabase = initDb;
