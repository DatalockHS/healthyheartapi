const firebase = require("../config/firebase.config");

function fetchAll(req,res){
    const db = firebase.getDatabase(firebase.firebaseApp)
    const referenceCount = firebase.ref(db);
    firebase.get(firebase.child(referenceCount, '/greens')).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            res.send({greens:data})
            res.end();
        } else {
            res.end();
        }
    }).catch((error) => {
        console.error(error);
    });
}


function  fetchOne(req,res){
    const db = firebase.getDatabase(firebase.firebaseApp)
    const referenceCount = firebase.ref(db);
    firebase.get(firebase.child(referenceCount, '/greens')).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            res.send({green:data[req.params.id]})
            res.end();
        } else {
            res.end();
        }
    }).catch((error) => {
        console.error(error);
    });
}



module.exports= {fetchAll, fetchOne}