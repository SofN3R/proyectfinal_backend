
const { json } = require('express');
const User = require('../../Models/User');
// GET TRIPS
exports.consultPrivTrips = async(req, res) => {
   try {

      const data_trip = await User.findById( req.params.id );

      res.json( data_trip.privatetrips );

   } catch (error) {
      console.log( error );
      res.status(500).send("Oops! Error");
   }
}

exports.getTripById = async(req, res) => {

   try {

      const data_trip = await User.findById( '6240c38d67570762672267b2' );

      for(let i in data_trip.privatetrips){
         if(data_trip.privatetrips[i]._id == req.params.id){
         res.json(data_trip.privatetrips[i]);
         }
      }


   } catch (error) {
      console.log(error);
      res.status(500).send("Oops! Error");
   }

}


// POST new trip
exports.newPrivTrip = async(req, res) => {
   try {

      let id_user = {
         _id: req.params.id // falta traer id del usuario que inicia sesión
      }

      let options = {
         strict: false
      }

      let wish = req.body.wishlist.split(/\n/);



      let update = {

         $push: {
         privatetrips: {
            name: req.body.name,
            origin: req.body.origin,
            destiny: req.body.destiny,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            passengers: req.body.passengers,
            budget: req.body.budget,
            wishlist: wish
            // nannies: req.body.nannies
         }
         }
      }


      const newT = await User.findOneAndUpdate( id_user, update, options );

      res.status(201).json(newT);

   } catch (error) {
      console.log( error );
      res.status(500).send("Oops! Error");
   }
}


// PUT
exports.updatePrivTrips = async(req, res) => {
   try{

      console.log(req.params);
      // let wish = req.body.wishlist.split(/\n/);

      const data_trip = await User.updateOne( { "._id": req.params.idus , "privatetrips._id": req.params.idtrip },
         {

         $set: {

            "privatetrips.$.name": req.body.name,
            "privatetrips.$.origin": req.body.origin,
            "privatetrips.$.destiny": req.body.destiny,
            "privatetrips.$.startDate": req.body.startDate,
            "privatetrips.$.endDate": req.body.endDate,
            "privatetrips.$.passengers": req.body.passengers,
            "privatetrips.$.budget": req.body.budget,
            "privatetrips.$.wishlist": req.body.wishlist,
            // "privatetrips.$.nannies": req.body.nannies,

         }


         }

      );

      res.status(200).json(data_trip);




   } catch (error) {
      console.log(error);
   }
}



