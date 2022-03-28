
const { response } = require('express');

const User = require('../../Models/User');


const postTrip = async(req, res = response ) => {

   try{

      const data_trip = await User.updateOne( { "._id": req.params.idus, "privatetrips._id": req.params.idpub },
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


// Get public trips
const getAllPublic = async(req, res= response ) => {

   try {

      const allPublic = await User.find( { "privatetrips.public": "true" } );
      let arry = [];
      for(let i in allPublic){
         for( let j in allPublic[i].privatetrips ){
            if( allPublic[i].privatetrips[j].public === "true" ){
               arry.push(allPublic[i].privatetrips[j]);

            }
         }
      }
      // console.log(arry);
      res.send(arry);



   } catch (error) {

      return res.status(500).json({
         ok: false,
         msg: 'Ha ocurrido algo inesperado...'
      });


   }

}



module.exports = {

   postTrip,
   getAllPublic
}
