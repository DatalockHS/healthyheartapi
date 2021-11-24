const greens = require("../controllers/greens.controller");
const secure = require("../controllers/api.controller").authenticateDeveloper;
module.exports = app => {

    const router = require("express").Router();


    router.get("/",secure,greens.fetchAll);

    router.get("/:id",secure,greens.fetchOne);

    app.use("/food/greens", router);


}