const mongoose = require('mongoose');


// const tripSchema = mongoose.Schema({

//   name:{
//     type: String,
//     require: true
//   },
//   origin: {
//     type: String,
//     require: true
//   },
//   destino: {
//     type: String,
//     require: true
//   },
//   fecha: {
//     type: Date,
//     require: true
//   },
//   num_pasajeros: {
//     type: Number,
//     require: true
//   },
//   presupuesto: {
//     type: Number,
//     require: true,
//   },
//   lista_deseos: {
//     type: Array,
//     require: false
//   },
//   niñeras: {
//     type: Object,
//     require: false
//   },

//   fecha_cre: {
//     type: Date,
//     default: Date.now()
//   }

// });


const userSchema = mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  privatetrips: [
      {
      name: String,
      origin: String,
      destiny: String,
      date: Date,
      passengers: Number,
      budget: Number,
      wishlist: Array,
      nannies: Object
    }
  ]

});



// module.exports = mongoose.model('user', tripSchema);
module.exports = mongoose.model('user', userSchema);


