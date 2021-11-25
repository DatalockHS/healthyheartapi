const firebase = require("../config/firebase.config");

const developerKeyGenerator = require("random-key");

function addDeveloper(req,res){
    if(req.session.site==true) {
        let developerKey = developerKeyGenerator.generate()
        let name = req.body.name;
        let email = req.body.email;
        const db = firebase.getDatabase(firebase.firebaseApp);
        firebase.set(firebase.ref(db, 'users/' + developerKey), {
            email: email,
            name: name,
        });
        res.render("developer", {key: developerKey})
    }else{
        res.redirect("/")
    }
}

function authenticateDeveloper(req,res,next){
    const db = firebase.getDatabase(firebase.firebaseApp)
    const referenceCount = firebase.ref(db);
    firebase.get(firebase.child(referenceCount, '/users/'+req.query.token)).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            return next();
        } else {
            res.redirect('/');
        }
    }).catch((error) => {

        res.redirect('/');
    });

}

module.exports = {addDeveloper, authenticateDeveloper}