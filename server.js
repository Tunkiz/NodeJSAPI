const express =  require('express');
var cors = require('cors');
const res = require('express/lib/response')
var app = express();


var corsOption = {
    origin: 'http://localhost:8081'
}
console.log("is our server running");
app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//simple route

app.get('/', (req, res)=>{
    res.json({
        message : 'Welcome to the World of Node JS'
    });
});

require("./app/routes/tutorials.routes.js");
const PORT = process.env.PORT || 8081;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
    console.log('http://localhost:8081');
});

//  Create DataBass NodeJSAPI
//  Create MySQL table tutorials
//  Create Table if not exists tutorials (
//  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//  tittle varchar(225) NOT NULL
//  description varchar(2225),
//  published BOOLESN DEFAULT false,    
//) 

//Configure & connect our application to MySQL database
require('./app/models/db');