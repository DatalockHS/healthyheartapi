const firebase = require("../config/firebase.config");

function fetchAll(req,res){
    const db = firebase.getDatabase(firebase.firebaseApp)
    const referenceCount = firebase.ref(db);
    firebase.get(firebase.child(referenceCount, '/food/greens')).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            res.status(200).send({greens:data})
        } else {
            res.status(403).send({});
        }
    }).catch((error) => {
        console.error(error);
    });
}

function  fetchOne(req,res){
    const db = firebase.getDatabase(firebase.firebaseApp)
    const referenceCount = firebase.ref(db);
    firebase.get(firebase.child(referenceCount, '/food/greens')).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            res.status(200).send({green:data[req.params.id]})
        } else {
            res.status(403).send({});
        }
    }).catch((error) => {
        console.error(error);
    });
}



module.exports= {fetchAll, fetchOne}