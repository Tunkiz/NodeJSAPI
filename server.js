var express = require('express');
var cors = require('cors');
var app = express();
//CORS stands for Cross
var corOptions = {
    origin: "http:/localhost:8081"
}
console.log('Our project is running');
