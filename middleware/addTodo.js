// tesztelve
module.exports = (objRep) => {
    const {myModel, db, uuid} = objRep;
    return (req, res, next) => {
        if( typeof req.body.todo == 'undefined'){
            return res.status(404).json({Error: "Hiányzó tevékenység"});
        }
        const newTodo = { 
            id : uuid.v4(),
            todo : req.body.todo
        }
        
        myModel.insert(newTodo);
        return db.saveDatabase(err => {
            if(err){
                return next(err);
            }
            return res.json({
                id: newTodo.id,
                todo: newTodo.todo
            });

        })

        
    }
}