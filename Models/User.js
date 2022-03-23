const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

  Name: {
    type: String,
    require: true
  },
  Lastname:{
    type: String,
    require: true,
  },
  Email:{
    type: String,
    require : true,
  },
  Telephone:{
    type : Number,
    require : true,

  },
  Password:{
    type:String,
    require: true

  },
  Role:{
    type : Date,
    require : true,

  },

  
  // age: {
  //   type: Number,
  //   require: true
  // },

  Date_cre:{
    type: Date,
    default: Date.now()

  }
  // private_trips: [tripSchema],

});


module.exports = mongoose.model('user', userSchema);
