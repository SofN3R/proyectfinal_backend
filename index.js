const express = require('express'); // Use express library
const connect_DB = require('./config/db'); // Call file connect



const app = express(); // Const 4 use express
const cors = require('cors');
connect_DB(); // Function connection db


app.use(cors());

app.use(express.json());

app.use( '/api/entry', require('./Routes/Entry/getPrivateTrips') );
app.use('/api/plan', require('./Routes/TourismPlan'));
app.use('/api/newuser', require('./Routes/Users'));


app.use('/api/nannies', require('./Routes/nannies/nannies'));


app.listen(3000, () => {
  console.log("App running in: http://127.0.0.1:3000")
});
