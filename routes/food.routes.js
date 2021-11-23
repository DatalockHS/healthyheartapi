const food = require("../controllers/food.controller");

module.exports = app => {

    const router = require("express").Router();

    router.get("/",food.fetchAll);


    app.use("/food", router);
}