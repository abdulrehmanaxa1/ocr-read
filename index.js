const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route/index.router')

var ocrController= require('./controller/ocr-controller') 
var app= express();

app.listen(3000, '127.0.0.1',()=> console.log('Server Started at Port: 3000'));