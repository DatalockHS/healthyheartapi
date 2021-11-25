const firebase = require("../config/firebase.config");

const developerKeyGenerator = require("random-key");

function addDeveloper(req,res){
    const uid = {
        name:"Mason Worthen",
        email:"Mason.Worthen@msj.edu"
    }
    firebase.admin.auth()
        .createCustomToken(JSON.stringify((uid)))
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

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            // ...
        });

}

module.exports = {addDeveloper, authenticateDeveloper}