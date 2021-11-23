const api= require("../controllers/api.controller")
module.exports = app => {
    const router = require("express").Router();


    router.get("/",function (req,res){
        res.redirect('/home')
    });
    router.get("/home",function (req,res){
        res.render('index',{})
    });

    router.post('/developer',api.addDeveloper)

    app.use("/", router);
}