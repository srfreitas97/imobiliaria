const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('../routes/imoveisRoutes');

app.use(bodyParser.json());
app.use('/imobiliaria',routes);

module.exports = app;