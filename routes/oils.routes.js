const oils = require("../controllers/oils.controller");
const secure = require("../controllers/api.controller").authenticateDeveloper;
module.exports = app => {

    const router = require("express").Router();


    router.get("/",secure,oils.fetchAll);

    router.get("/:id",secure,oils.fetchOne);


    app.use("/food/oils", router);


}