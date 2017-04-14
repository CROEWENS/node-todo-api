const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");

var data = {
    id: 10
}


var secret = "123abc";

//signing the token
var token = jwt.sign(data, secret); 

console.log(token);

// jwt.verify //verifies if token is valid
var decoded = jwt.verify(token, secret);
console.log(decoded);
