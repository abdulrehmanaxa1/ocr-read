const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ocr = require('./module/ocr/ocr-controller');
// var ocrController= require('./controller/ocr-controller') 
var app= express();
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.text({ limit: '200mb' }));yg
app.use(cors());
app.use('/ocr', ocr)

app.listen(3000, '127.0.0.1',()=> console.log('Server Started at Port: 3000'));