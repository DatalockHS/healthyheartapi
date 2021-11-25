const api= require("../controllers/api.controller")
module.exports = app => {
    const router = require("express").Router();


    router.get("/",function (req,res){
        res.render('index',{})

    });
    router.get("/home",function (req,res){
        res.redirect('/')
    });
    router.get("/developer",function (req,res){
        req.session.site = true
        res.render('developer',{key:"***"})
    });

    router.post('/developer',api.addDeveloper)

    app.use("/", router);
}