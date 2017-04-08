var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

// object destruturing
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
var port = process.env.port | 3000;

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

  Todo.findByIdAndRemove(id).then((result) => {
    if (!result) {
      res.status(404).send();
    }

    res.send(result);
  }).catch((e) => {
    res.status(400).send();
  });
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