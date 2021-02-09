'use strict'


const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// Conecta com o banco de dados para
mongoose.connect('String de conexão')

const app = express();
const router = express.Router();

// Carrega as rotas
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;