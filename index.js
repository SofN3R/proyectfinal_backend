const express = require('express'); // Use express library

const connect_DB = require('./config/db'); // Call file connect

const cors = require('cors');

const app = express(); // Const 4 use express
connect_DB(); // Function connection db

app.use(cors()); 

app.use(express.json());

app.use( '/api/entry', require('./Routes/Entry/getPrivateTrips') );

app.use('/api/nannies', require('./Routes/nannies/nannies'));


app.listen(3000, () => {
  console.log("App running in: http://127.0.0.0:3000")
});
