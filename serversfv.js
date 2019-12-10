#!/usr/bin/env nodejs
var express = require('express');
var app = express();


app.use('/sort-function-visualizer', express.static('./build'));


app.listen(8085,'localhost');

