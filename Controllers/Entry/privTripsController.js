const Trips = require('../../Models/privTrips');
const User = require('../../Models/User');

// GET TRIPS
exports.consultPrivTrips = async(req, res) => {
  try {

    const data_trip = await Trips.find();

    res.json( data_trip );

  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}

exports.newPrivTrip = async(req, res) => {
  try {

    let exa = req.body;
    // {"_id": 4}
    User.find( (err, lib) => {


      // let data_newTrip = new Trips(req.body);
      // await data_newTrip.save();
      Trips.populate(exa, { path: 'user' }, (err, libros) => {
        console.log("Creando API");
        res.status(200).send(libros);
      });



    } );



  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}



