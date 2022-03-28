
const { response } = require('express');

const User = require('../../Models/User');


const postTrip = async(req, res = response ) => {

   try{

      console.log(req.body);
      const data_trip = await User.updateOne( { "._id": '623f6667f797241658a16188', "privatetrips._id": req.params.id },
         {
            $set: {
               "privatetrips.$.public": req.body.resp,

            }

         }

      );

      res.status(200).json(data_trip);




   } catch (error) {
      console.log(error);
   }


}


module.exports = {

   postTrip
}
