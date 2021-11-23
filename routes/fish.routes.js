const fish = require("../controllers/fish.controller");

module.exports = app => {

    const router = require("express").Router();


    router.get("/",fish.fetchAll);

    router.get("/:id", fish.fetchOne);


    app.use("/food/fish", router);


}