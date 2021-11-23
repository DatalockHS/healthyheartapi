const seeds = require("../controllers/seeds.controller");

module.exports = app => {

    const router = require("express").Router();


    router.get("/",seeds.fetchAll);

    router.get("/:id", seeds.fetchOne);


    app.use("/food/seeds", router);


}