
const User = require('../../Models/User');
// GET TRIPS
exports.consultPrivTrips = async(req, res) => {
  try {

    const data_trip = await User.findById( '623c7d958b2e998c352c29c9' );
    res.json( data_trip.privatetrips );

  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}

exports.getTripById = async(req, res) => {

  try {

    const data_trip = await User.findById( '623c7d958b2e998c352c29c9' );

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


// POST
exports.newPrivTrip = async(req, res) => {
  try {

    let id_user = {
      _id: '623c7d958b2e998c352c29c9' // falta traer id del usuario que inicia sesión
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

    res.status(201).send('Created successfully');

  } catch (error) {
    console.log( error );
    res.status(500).send("Oops! Error");
  }
}


// PUT
exports.updatePrivTrips = async(req, res) => {
  try{

    let wish = req.body.wishlist.split(/\n/);

    const data_trip = await User.updateOne( { "._id": '6238e18b52496abe55025a40', "privatetrips._id": '623c7e8ae9fc12d770cb36a0' },
      {

        $set: {

          "privatetrips.$.name": req.body.name,
          "privatetrips.$.origin": req.body.origin,
          "privatetrips.$.destiny": req.body.destiny,
          "privatetrips.$.date": req.body.date,
          "privatetrips.$.passengers": req.body.passengers,
          "privatetrips.$.budget": req.body.budget,
          "privatetrips.$.wishlist": req.body.wish,
          "privatetrips.$.nannies": req.body.nannies,

        }


      }

    );

    res.status(200).send('Update Successfully');




  } catch (error) {
    console.log(error);
  }
}



