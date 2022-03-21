const mongoose = require('mongoose');

require('dotenv').config({ path: 'config.env' });

const conn_DB = async() => {

  try {
    await mongoose.connect( process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } )
    console.log('Data Base Connected');
  } catch ( error ) {
    console.log( error );
    process.exit();
  }

}


module.exports = conn_DB;
