const berries = require("../controllers/berries.controller");

module.exports = app => {

    const router = require("express").Router();


    router.get("/",berries.fetchAll);

    router.get("/:id", berries.fetchOne);


    app.use("/food/berries", router);
}