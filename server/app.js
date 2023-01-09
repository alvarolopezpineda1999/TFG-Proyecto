const express = require('express');
const { API_VERSION } = require('./constants');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//import routings
const authRoutes = require('./router/auth');
const userRoutes = require('./router/user');
const commentRoutes = require('./router/comment');
const listRoutes = require('./router/list');

//configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configure static folders
app.use(express.static('uploads'));

//configure Header HTTP-CORS
app.use(cors());

//configure routings
app.use(`/TFG_api/${API_VERSION}`, authRoutes);
app.use(`/TFG_api/${API_VERSION}`, userRoutes);
app.use(`/TFG_api/${API_VERSION}`, commentRoutes);
app.use(`/TFG_api/${API_VERSION}`, listRoutes);

module.exports = app;
