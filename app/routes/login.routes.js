module.exports = app => {
    const login = require("../controller/login.controller");

    var router = require("express").Router();

    // Create
    router.post("/", login.create);

    // Retrieve all data    
    router.get("/", login.findAll);

    // Retrieve a data by id
    router.get("/:id", login.findOne);

    app.use('/api/v1/login', router);
};