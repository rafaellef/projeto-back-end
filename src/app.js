"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb+srv://rafael:<password>@cluster0.wpnekdw.mongodb.net/?retryWrites=true&w=majority');

// Carrega as Rotas
const indexRoute = require("./routes/index-route");
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
