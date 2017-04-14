//JWT gets this done for us.

const {SHA256} = require('crypto-js');

var message = "some string";
var hash = SHA256(message).toString();

console.log(`Message: ${message}, hash: ${hash}`);

var data =  {
    id: 4
};


// token geven we mee om na te gaan of deze van server komt (authentication)

// als hash(data) == hash -> weten we dat data niet is aangepast.
var token = {
    data,
    // something secret = hash.
    hash: SHA256(JSON.stringify(data) + 'something secret').toString()
};


// man in the middle

token.data.id = 5;
token.hash = SHA256(JSON.stringify(token)).toString();

// IT FAILS CUZ WE DONT KNOW THE SALT.


// salting hash -> adding something to the hashed variable so that it's completely random and the data can't just be hashed.

var resultHash = SHA256(JSON.stringify(token.data) + 'something secret').toString();

if (token.hash === resultHash) {
    console.log('data was not changed');
} else {
    console.log('data was changed!!!');
}


// this gets done with JWT (JSON WEB TOKEN) for us