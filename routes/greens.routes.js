const greens = require("../controllers/greens.controller");

module.exports = app => {

    const router = require("express").Router();


    router.get("/",greens.fetchAll);
    router.get("/:id", greens.fetchOne);

    app.use("/food/greens", router);


}