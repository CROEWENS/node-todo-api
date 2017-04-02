const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// var id = '68e114f445235c2e906945eb11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     //mongoose doe dit zelf, omzetten vna string naar objectid
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     // 1 result
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//     console.log('Found by id', todo);
// })

User.findById('58e0fd45886abc0cf47ee47e').then((user) => {
    if (!user) {
        return console.log('User not found');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});