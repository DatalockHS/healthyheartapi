const express = require('express');
const session = require('express-session');
const cors = require("cors");
const app = express();
require("dotenv").config()

app.use(session({
    secret: process.env.SECRET,cookie:{},resave:false,saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let corsOptions = {
    origin: 'https://healthyheart.dennisiscool.club/',
}

app.use(cors(corsOptions));

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