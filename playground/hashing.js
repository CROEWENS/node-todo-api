const {SHA256} = require('crypto-js');

var message = "some string";
var hash = SHA256(message).toString();

console.log(`Message: ${message}, hash: ${hash}`);

var data =  {
    id: 4
};

var token = {
    data,
    // something secret = hash.
    hash: SHA256(JSON.stringify(data) + 'something secret').toString()
};

// salting hash -> adding something to the hashed variable so that it's completely random and the data can't just be hashed.

var resultHash = SHA256(JSON.stringify(token.data) + 'something secret').toString();

if (token.hash === resultHash) {
    console.log('data was not changed');
} else {
    console.log('data was changed!!!');
}