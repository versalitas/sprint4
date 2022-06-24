require('dotenv').config();
const express = require('express');
const createDB = require('./utils/connectmysqlDB.js');

//requiering routes
const allRoutes = require('./routes/players.js');

const app = express();

const port = process.env.API_PORT || 3001;

createDB();
// Config
app.use(express.json());

// Middlewares


// Routes
app.use('/api', allRoutes);

//invalid route handling
app.use((req, res, next)=>{
  res.status(404).send({message:"Route Not Found"});
});

// Starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });