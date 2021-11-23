const oils = require("../controllers/oils.controller");

module.exports = app => {

    const router = require("express").Router();


    router.get("/",oils.fetchAll);

    router.get("/:id", oils.fetchOne);


    app.use("/food/oils", router);


}