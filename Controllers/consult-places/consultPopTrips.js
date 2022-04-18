const { response } = require('express');
const { Result } = require('express-validator');
const Tourism_plan = require('../../Models/Tourism_plan');
const User = require('../../Models/User');

const getPopPlaces = async (req, res= response) => {

   // // Agregar VIAJES PÚBLICOS
   // const search = req.params.buscar;


   try {


      const [ plan , user ] = await  Promise.all([
         Tourism_plan.find(),
         User.find()
      ]);

      const userPop = await User.find();
      const tourismPop = await Tourism_plan.find();

      // console.log(tourismPop[0].Country);

      let dest = [];
      userPop.forEach( (e) => {
         e.privatetrips.forEach( (i) => {
            dest.push(i.destiny);
         } );
      } );


      // Searching in plans
      let country = [];
      tourismPop.forEach( (e) => {
         country.push(e.Country);
      } );

      let resultado = {}
      for (let el of dest) resultado[el] = resultado[el] + 1 || 1
      for (let el of country) resultado[el] = resultado[el] + 1 || 1

      // console.log(resultado.sort((a, b) => a - b ))


      res.status(200).json( resultado );


   } catch (error) {

      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Algo falló...'
      });
   }

}


module.exports = {

   getPopPlaces

}
