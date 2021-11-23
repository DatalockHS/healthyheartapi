const { initializeApp } = require('firebase/app');
const  { getDatabase, ref , set, get ,child } = require('firebase/database');
const { getAuth, signInWithEmailAndPassword , signOut, signInWithCustomToken} =require("firebase/auth");
const fs = require("fs");
require("dotenv").config()
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId:process.env.APPID,
    measurementId: process.env.MEASUREMENTID
};

const firebaseApp = initializeApp(firebaseConfig);


let admin = require("firebase-admin");

let serviceAccount = require("../heart-healthy-api-firebase-adminsdk-kybtd-fa9197af68.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://heart-healthy-api-default-rtdb.firebaseio.com"
});


module.exports ={getDatabase,firebaseApp,getAuth,signInWithEmailAndPassword,ref,set,get,child,signOut,admin,serviceAccount,signInWithCustomToken}