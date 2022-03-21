const Trips = require('../../Models/privTrips');
const User = require('../../Models/User');
// GET TRIPS
exports.consultPrivTrips = async(req, res) => {
  try {

    const data_trip = await User.findById( '6238750c52496abe55025a3f' );
    res.json( data_trip.privatetrips );

  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}

exports.newPrivTrip = async(req, res) => {
  try {

    let id_user = {
      _id: '6238750c52496abe55025a3f' // falta traer id del usuario que inicia sesión
    }

    let options = {
      strict: false
    }

    let update = {

      $push: {
        privatetrips: {
          name: req.body.name,
          origin: req.body.origen,
          destiny: req.body.destino,
          date: req.body.fecha,
          passengers: req.body.num_pasajeros,
          budget: req.body.presupuesto,
          wishlist: req.body.lista_deseos,
          nannies: req.body.niñeras
        }
      }
    }


    await User.findOneAndUpdate( id_user, update, options );

    res.status(200).send('Updated successfully');

  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}



