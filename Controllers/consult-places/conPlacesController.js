
const { response } = require('express');
const Tourism_plan = require('../../Models/Tourism_plan');
const User = require('../../Models/User');




const getPlaces = async (req, res= response) => {

   // Agregar VIAJES PÚBLICOS
   const search = req.params.buscar;

   const regex = new RegExp( search, 'i' );

   const [ plan , user ] = await  Promise.all([
      Tourism_plan.find({ Place_name: regex }),
      User.find({ name: regex })
   ]);

   try {

      res.status(200).json({
         ok: true,
         plan,
         user
      });


   } catch (error) {

      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Algo falló...'
      });
   }

}


module.exports = {

   getPlaces

}
