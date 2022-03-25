const mongoose = require('mongoose');




const userSchema = mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  privatetrips: [
      {
      name: String,
      origin: String,
      destiny: String,
      startDate: Date,
      endDate: Date,
      passengers: Number,
      budget: Number,
      wishlist: Array,
      // nannies: Object
    }
  ]

});



// module.exports = mongoose.model('user', tripSchema);
module.exports = mongoose.model('user', userSchema);


