const fs = require('fs');

const User = require('../Models/User')

const updateImage = async ( idus, idtrip , fileName )=> {

   try {

      update = {

         $set: {

            "privatetrips.$.img": fileName,


         }
      }

      const userus = await User.findById( idus);

      for(let i in userus.privatetrips){
         if(userus.privatetrips[i]._id == idtrip){

            const pathOld = `./uploads/tripimg/${ userus.privatetrips[i].img }`;
            console.log(userus.privatetrips[i].img);
            if ( fs.existsSync( pathOld ) ){
               console.log('enter here');
               // Delete img if exists
               fs.unlinkSync( pathOld )
            }


         }
      }


      const user = await User.updateOne( { "._id": idus , "privatetrips._id": idtrip }, update);



   } catch (error) {
      console.log(error);
      // res.status(500).send("Oops! Error");
   }

}


module.exports = {
   updateImage
}
