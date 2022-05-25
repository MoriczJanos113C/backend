module.exports = (objRep) => {
    const { myModel, db } = objRep;
    return (req, res, next) => {

        const editTodo = res.locals.todo;
        myModel.update(editTodo);

        return db.saveDatabase(err => {
            if(err){
                throw err;
            }
            return res.json({
                status: 'Szerkesztve',
                id: editTodo.id,
                todo: editTodo.todo
            });

        })
    }
}
