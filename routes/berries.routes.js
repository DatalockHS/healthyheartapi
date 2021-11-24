const berries = require("../controllers/berries.controller");
const secure = require("../controllers/api.controller").authenticateDeveloper;

module.exports = app => {

    const router = require("express").Router();


    router.get("/",secure,berries.fetchAll);

    router.get("/:id",secure,berries.fetchOne);


    app.use("/food/berries",router);
}