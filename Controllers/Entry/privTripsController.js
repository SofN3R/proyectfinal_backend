
const User = require('../../Models/User');
// GET TRIPS
exports.consultPrivTrips = async(req, res) => {
  try {

    const data_trip = await User.findById( '6238e18b52496abe55025a40' );
    res.json( data_trip.privatetrips );

  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}

exports.newPrivTrip = async(req, res) => {
  try {

    let id_user = {
      _id: '6238e18b52496abe55025a40' // falta traer id del usuario que inicia sesión
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
          date: req.body.date,
          passengers: req.body.passengers,
          budget: req.body.budget,
          wishlist: wish,
          nannies: req.body.nannies
        }
      }
    }


    await User.findOneAndUpdate( id_user, update, options );

    res.status(200).send('Created successfully');

  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}


exports.updatePrivTrips = async(req, res) => {
  try{

    const data_trip = await User.updateOne( { "._id": '6238e18b52496abe55025a40', "privatetrips._id": '623ad401e754ce1a0ee94a09' },
      {

        $set: {

          "privatetrips.$.name": req.body.name,
          "privatetrips.$.origin": req.body.origin,
          "privatetrips.$.destiny": req.body.destiny,
          "privatetrips.$.date": req.body.date,
          "privatetrips.$.passengers": req.body.passengers,
          "privatetrips.$.budget": req.body.budget,
          "privatetrips.$.wishlist": req.body.wishlist,
          "privatetrips.$.nannies": req.body.nannies,

        }


      }

    );

    res.json(data_trip);




  } catch (error) {
    console.log(error);
  }
}



