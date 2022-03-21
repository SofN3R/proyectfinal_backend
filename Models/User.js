const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
  // private_trips: [tripSchema],

});


module.exports = mongoose.model('user', userSchema);
