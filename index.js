const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route/index.router')

var ocrController= require('./controller/ocr-controller') 

app.listen(3000, ()=> console.log('Server Started at Port: 3000'));