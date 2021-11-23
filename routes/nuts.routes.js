const nuts = require("../controllers/nuts.controller");

module.exports = app => {

    const router = require("express").Router();


    router.get("/",nuts.fetchAll);

    router.get("/:id", nuts.fetchOne);


    app.use("/food/nuts", router);


}