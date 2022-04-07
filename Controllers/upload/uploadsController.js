const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
const { updateImage } = require('../../helpers/updateImg');
const User = require('../../Models/User');



const putImg = async( req, res = response ) => {




   const idus = req.params.idus;
   const idtrip = req.params.idtrip;


   // validate if file exists
   if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
         ok:false,
         msg:'No files were uploaded.'
      });
   }

   // process image
   const file = req.files.image;

   const separateName = file.name.split('.');
   const extFile = separateName[ separateName.length - 1 ];

   // validate extensions
   const validExt = ['png', 'jpg', 'jpeg', 'gif'];
   if ( !validExt.includes( extFile ) ) {
      return res.status( 400 ).json({
         ok: false,
         msg: 'Invalid Extension'
      });
   }

   // generate file name
   const fileName = `${ uuidv4()}.${ extFile }`;

   // Path 4 save img
   const pathIMG = `./uploads/tripimg/${ fileName }`;

   // Move image
   file.mv(pathIMG, (err) => {
      if (err) {
         console.log(err);
         return res.status(500).json({
            ok: false,
            msg: 'Error!'
         });

      }

      // update img
      updateImage( idus, idtrip, fileName );

      res.json({
         ok: true,
         msg: 'File Uploaded!',
         fileName
      })
   });




}


module.exports = {
   putImg
}
