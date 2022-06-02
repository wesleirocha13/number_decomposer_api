const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const compression = require('compression');

const routes = require('./routes');

const app = express();

app.use(compression());
app.use(cors());

app.use(bodyParser.json({ extended: true, limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(routes);

module.exports = app;
