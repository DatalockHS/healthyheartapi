const firebase = require("../config/firebase.config");

const developerKeyGenerator = require("random-key");

function addDeveloper(req,res){
    const uid = 'some-uid';

    firebase.admin.auth()
        .createCustomToken(uid)
        .then((customToken) => {
            res.send(customToken);
        })
        .catch((error) => {
            console.log('Error creating custom token:', error);
        });
}

function authenticateDeveloper(req,res,next){
    let token = req.query.token
    firebase.signInWithCustomToken(firebase.getAuth(),token)
        .then((userCredential) => {
            let user = userCredential.user;
            return next()
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            res.redirect("/home")
            // ...
        });

}

module.exports = {addDeveloper, authenticateDeveloper}