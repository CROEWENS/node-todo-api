const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var todo = new Todo({
    text: 'ene voor te proberen'
});

todo.save().then((result) => {
    console.log(result);
})