const nuts = require("../controllers/nuts.controller");
const secure = require("../controllers/api.controller").authenticateDeveloper;
module.exports = app => {

    const router = require("express").Router();


    router.get("/",secure,nuts.fetchAll);

    router.get("/:id",secure,nuts.fetchOne);


    app.use("/food/nuts", router);


}