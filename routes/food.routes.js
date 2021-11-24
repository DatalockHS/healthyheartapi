const food = require("../controllers/food.controller");
const secure = require("../controllers/api.controller").authenticateDeveloper;
module.exports = app => {

    const router = require("express").Router();

    router.get("/",secure,food.fetchAll);


    app.use("/food", router);
}