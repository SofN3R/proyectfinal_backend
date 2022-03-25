const mongoose = require('mongoose');
const userSchema = mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  lastname:{
    type: String,
    require: true,
  },
  email:{
    type: String,
    require : true,
    unique: true
  },
  telephone:{
    type : Number,
    require : true,

  },
  password:{
    type:String,
    require: true

  },
  role:{
    type : String,
    require : true,

  },

  
  // age: {
  //   type: Number,
  //   require: true
  // },

  date_cre:{
    type: Date,
    default: Date.now()

  }
  // private_trips: [tripSchema],

});


module.exports = mongoose.model('user', userSchema);
