require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const app = express();
//create server
const server = require('http').Server(app);
const port = process.env.PORT || 3000;
//create socket server
const io = require('socket.io')(server);

//connect to DB
require('./utils/connectDB.js')();



//require routes
const usersAuthRoutes = require('./routes/usersAuth.js');

//middleware
//app.use(cors);

app.use(usersAuthRoutes);






//invalid route handling
app.use((req, res, next)=>{
    res.status(404).send({message:"Bad request: Route Not Found"});
  });

//requiering and executing sockets
//require('./utils/sockets')(io);

server.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });
