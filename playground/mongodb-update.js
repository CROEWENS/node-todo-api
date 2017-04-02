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


  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("58dfde97dfde050dd0fb4903")
  }, {
    $set : {
      name: "Dries2"
    },
    $inc: {
      age: 5
    }
  }, {
    returnOriginal: false
  }).then((docs) => {
    console.log(JSON.stringify(docs.value, undefined, 2));
  });

  /* MongoDB actually uses a pool of connections behind the scenes. It automatically opens and closes individual connections as needed. You should only close the pool with db.close when you're completely done with it. The cost of reopening it is greater than the cost of leaving it open. You'll notice we never close the connection inside of the Todo API project.*/
  // db.close();
});
