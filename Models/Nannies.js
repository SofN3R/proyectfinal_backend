const mongoose = require('mongoose');


const nanniesSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    bornCountry: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    price: {
        type: Number,
        require: true
    },
    experience: {
        type: Number,
        require: true
    },
    criminalRecord: {
        type: Boolean,
        require: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    available: {
      type: Boolean,
      require: true
    }
});


module.exports = mongoose.model('nannie', nanniesSchema)
