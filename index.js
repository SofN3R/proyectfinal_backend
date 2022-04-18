const express = require('express'); // Use express library
const connect_DB = require('./config/db'); // Call file connect



const app = express(); // Const 4 use express
const cors = require('cors');
connect_DB(); // Function connection db


// directorio público
app.use(express.static('public'));

app.use(cors()); // config cors

app.use(express.json()); // read json body


// URL API
app.use( '/api/entry', require('./Routes/Entry/getPrivateTrips') ); // get user's private trips
app.use( '/api/public', require('./Routes/Entry/publicTrip') ); // public trips
app.use('/api/plan', require('./Routes/TourismPlan')); // get tourists plan
app.use('/api/newuser', require('./Routes/Users')); // create new user, visualizer
app.use('/api/log', require('./Routes/login/userLogin')); //login / login with google
app.use('/api/nannies', require('./Routes/nannies/nannies')); // get nannies
app.use('/api/consult', require('./Routes/consult-places/getPopPlaces')); // consult places
app.use('/api/upload', require('./Routes/upload/uploads')); // Upload images


app.listen(3000, () => {
   console.log("App running in: http://127.0.0.1:3000")
});
