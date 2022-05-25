module.exports = (objRep) => {
    const { myModel, db } = objRep;
    return (req, res, next) => {

        const deletedTodo = res.locals.todo;
        //console.log(deletedTodo);
        myModel.remove(deletedTodo);

        return db.saveDatabase(err => {
            if(err){
                throw err;
            }
            return res.json({
                status: 'Törlés',
                id: deletedTodo.id,
                todo: deletedTodo.todo
            });

        })
    }
}
