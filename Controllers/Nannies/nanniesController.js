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

exports.showNanniesbyCountry = async(req, res) => {
      try {
         const count = req.params.country.toLowerCase();
         console.log(count);
         const dataNanniesId = await Nannies.find({ country: count, available: true });
         res.json(dataNanniesId);

      } catch (error) {
      console.log(error);
      res.status(500).send('Hay un error, comuníquese con soporte');
      }

}



exports.showNanniesByID = async ( req, res ) => {

   const idNana = req.params.idnana;

   try {

      const dataNana = await Nannies.findById( idNana );

      res.json(dataNana);



   } catch (error) {

   }

}
