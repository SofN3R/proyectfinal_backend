const mongoose = require("mongoose");

const modelTourism_plan = mongoose.Schema ({

Country: {
   type: String,
   require: true
},

Place_name:{
    type : String,
    require : true
},
Hosting_name:{
    type:String,
    require : true
},
Flight:{
    type:String,
    require : true
},
Arrival:{
    type: Date,
    require : true
},
Departure:{
    type: Date,
    require : true
},
Total_Price:{
    type: Number,
    require : true,
},
Details:{
    type:String,
    require : true
},

Date_cre:{
    type: Date,
    default: Date.now()
},
Active:{
    type: Number,
    require : true,
}



})

module.exports = mongoose.model('plan', modelTourism_plan);
