// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const task = require('./api/models/model.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// Replace the following with your Atlas connection string                                                                                                                                        
const connectionUrl = process.env.MONGODB_URI;
mongoose.connect(connectionUrl, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }); 

//import routes
const routes = require('./api/routes/routes.js'); 

//register the route
routes(app);

app.listen(port, ()=> {
  console.log(`RESTful API server running on ${port}`);
});
