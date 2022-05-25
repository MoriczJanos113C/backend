//tesztelve
module.exports = (objRep) => {
    const {myModel} = objRep;
    return (req, res, next) => {
        
        const oneTodo = myModel.findOne({id: req.params.tid}) // a kérés params objektje
        if( !oneTodo ){
            return res.status(404).json({Error: 'Nincs ilyen esemény'})
        }
        res.locals.todo = oneTodo; // globális változó amibe minden belekerülhet
        return res.json(oneTodo); // az utolsó dolgot mindig return-el hívjuk meg, ha return-el visszaküldjük akkor befejeztük a response-t
    }
}