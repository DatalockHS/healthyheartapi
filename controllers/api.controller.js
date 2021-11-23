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

function authenticateDeveloper(req,res){
    let token = req.params.token
    firebase.signInWithCustomToken(firebase.getAuth(),token)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log("yes")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("no");
            // ...
        });

}

module.exports = {addDeveloper, authenticateDeveloper}