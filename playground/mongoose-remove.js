const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// removing everything from collection
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({text: 'ene voor te proberen'}).then((result) => {
    console.log(result);
});

// Todo.findByIdAndRemove('58e8bbaffb28f18b578c51a2').then((result) => {
//     console.log(result);
// });