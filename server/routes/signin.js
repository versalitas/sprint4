const express = require('express');
const api = express.Router();

const signin = require('../controllers/signin');
//const auth = require('./middleware/authenticate.js');

api.post('/signin', //auth,
             signin);

module.exports = api;