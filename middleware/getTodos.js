//tesztelve
module.exports = (objRep) => {
    const {myModel} = objRep;

    return (req,res, next) => {
      const allTodos = myModel.find();
      res.locals.todos = allTodos;
    
      return res.json(allTodos);
    }
    
}

