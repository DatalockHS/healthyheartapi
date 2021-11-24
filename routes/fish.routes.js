const fish = require("../controllers/fish.controller");
const secure = require("../controllers/api.controller").authenticateDeveloper;
module.exports = app => {

    const router = require("express").Router();


    router.get("/",secure,fish.fetchAll);

    router.get("/:id",secure, fish.fetchOne);


    app.use("/food/fish", router);


}