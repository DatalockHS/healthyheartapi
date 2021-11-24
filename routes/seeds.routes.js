const seeds = require("../controllers/seeds.controller");
const secure = require("../controllers/api.controller").authenticateDeveloper;
module.exports = app => {

    const router = require("express").Router();


    router.get("/",secure,seeds.fetchAll);

    router.get("/:id",secure,seeds.fetchOne);


    app.use("/food/seeds", router);


}