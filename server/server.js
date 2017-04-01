var mongoose = require('mongoose');

// we willen geen callbacks gebruiken, maar promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// // model
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minLength: 1,
//
//     //removes any leading or trailing whitespace (begin en eind spaties)
//     // zorgt ervoor dat ge dus niet gwn ' ' kunt ingeven bij minlength
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number, // unix timestamp
//     default: null
//   }
// });
//
// // todo
// var taak = new Todo({
//   text: "l2program",
//   completed: true,
//   completedAt: 233421
// });
//
// // met promise!
// taak.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
//   // { __v: 0, text: 'Cook diner', _id: 58a72880f6b4dcc23d861fff }
// }, (err) => {
//   console.log('Woops something went wrong!', err);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: false,
    minLength: 1,
    trim: true
  }
});

var gebruiker = new User({
  email: 'driescroons@gmail.com'
});

gebruiker.save().then((user) => {
  console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
  console.log('error');
});
