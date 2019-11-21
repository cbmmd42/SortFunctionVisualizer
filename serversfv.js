#!/usr/bin/env nodejs
var express = require('express');
var app = express();


app.use('/sortvisualizer', express.static('./build'));


app.listen(8085,'localhost');

