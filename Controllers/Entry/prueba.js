const User = require('../../Models/PruebaModel');

exports.newPrivTrip = async(req, res) => {
  try {

    // const data_trip = await User.findById( '6237968208d84b54ed2aeab2' );

    // res.json( data_trip );
    author.update(
      { _id: autorId },
      { $push: { publicaciones: nuevaPublicacion } },
      (err, res) => {
          // verificar si hay error
          // manejar la respuesta
          res.send("todo OK");
      }
    );

  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}







