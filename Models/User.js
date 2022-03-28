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
   google: {
      type: Boolean,
      default: false
   },

   active: {
      type: Boolean,
      default: true
   },



   date_cre:{
      type: Date,
      default: Date.now()

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
         public: {type: String, default: "false"}
         // nannies: Object
      }

   ]



});




module.exports = mongoose.model('user', userSchema);


