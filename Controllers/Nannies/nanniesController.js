const Nannies = require('../../Models/Nannies.js')

exports.showNannies = async(req, res) => {
  
    try {
        const dataNannies = await Nannies.find();
        res.json(dataNannies);
        
    } catch (error) {
     console.log(error);
     res.status(500).send('Hay un error, comuníquese con soporte'); 
    }
}

exports.showNanniesById = async(req, res) =>{
    try {
        const dataNanniesId = await Nannies.findById(req.params.id);
        res.json(dataNanniesId);

    } catch (error) {
        console.log(error);
     res.status(500).send('Hay un error, comuníquese con soporte');
    }
}