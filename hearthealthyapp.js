const express = require('express');
const session = require('express-session');
const cors = require("cors");
const app = express();


app.use(session({
    secret: 'blackstudentunion',cookie:{},resave:false,saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//const corsOption = {
//    origin:""
//}

if(app.get("env") === "production"){
    session.cookie.secure = true;
}

const PORT = process.env.PORT|| 3000

app.set('view engine', 'ejs')
app.use(express.static('public'));

require('./routes/app.routes')(app);
require('./routes/berries.routes')(app);
require('./routes/fish.routes')(app);
require('./routes/nuts.routes')(app);
require('./routes/greens.routes')(app);
require('./routes/oils.routes')(app);
require('./routes/seeds.routes')(app);
require('./routes/food.routes')(app);


app.listen(PORT,()=>{
    console.log("sever listening...");
})