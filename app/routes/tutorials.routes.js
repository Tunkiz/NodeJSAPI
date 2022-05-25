module.exports = app =>{
    const tutorials = require("../controllers/toturial.controller.js");
    var router = require("express").Router();

    //Create a new Tutorial reord into mysql
    router.post("/",tutorials.create);
    //Retrieve all Tutorials from database
    router.get("/", tutorials.findAll);
    app.use('/api/tutorials', router);
}