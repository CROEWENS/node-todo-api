const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  // return console.log works fine and just stops.. js... hehe
  if (err) return console.log('Woops, something went wrong connecting to the database server!');

  console.log('major tom to ground mongodb');

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("58a71b5767e2b6c5a692017b")
  // }, {
  //   // UPDATE OPERATORS https://docs.mongodb.com/manual/reference/operator/update/
  //   $set: {
  //     cool_guy: true
  //   }
  // }, {
  //   // zorgen ervoor dat we het updated object terugkrijgen ipv het oude.
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  //   /*
  //   { lastErrorObject: { updatedExisting: true, n: 1 },
  //   value:
  //    { _id: 58a71b5767e2b6c5a692017b,
  //      name: 'Dries',
  //      age: 22,
  //      completed: true },
  //   ok: 1 }
  //   */
  // });

  db.collection('Users').findOneAndUpdate({
    //find filter
    _id: new ObjectID("58a71b5767e2b6c5a692017b")
  }, {
    //update with
    $set : {
      name: 'Sofie'
    },
    $inc : {
      age: 1
    }
  }, {
    // options
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();
});
