const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

// object destruturing
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.port | 3000;

// middleware 
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((result) => {
    res.send(result);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    
    res.send({
      //by sending object back instead of array, better for future.
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
      res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }

    res.send({todo});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.delete('/todos/:id', (req, res) => {
  // get the _id
  var id = req.params.id;

  // validate the id -> not valid? return 404
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  // remove todo by id
    // success
      // if no doc, send 404
      // if doc, send 200
    // error 
      // 400 with empty body

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }

    // res.send({todo: todo})
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  // get the _id
  var id = req.params.id;

  // picks properties off of object so that we don't get the full object given as a param.
  // we do not want user to update anything they want. That's why we cherry pick text & completed.
  var body = _.pick(req.body, ['text','completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    // remove value from db? set to null.
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    return res.send({todo});
  }).catch((e) => res.status(400).send());

});

app.post('/users' , (req, res) => {
  // users cannot access the tokens array
  var body = _.pick(req.body, ['email', 'password']);
  // creating user.
  var user = new User(body);

  // we can save user to database
  user.save().then(() => {
    // door dit te returnen kunnen we dat in volgende .then gebruiken
    
    // var token = user.generateAuthToken();
    // console.log(token);
    return user.generateAuthToken();
    // res.send(user);
  }).then((token) => {
    // x- staat voor custom header.
    res.header('x-auth', token).send(user);
  }).catch((e) => res.status(400).send(e));
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

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



// var gebruiker = new User({
//   email: 'driescroons@gmail.com'
// });

// gebruiker.save().then((user) => {
//   console.log(JSON.stringify(user, undefined, 2));
// }, (err) => {
//   console.log('error');
// });

module.exports = {app};