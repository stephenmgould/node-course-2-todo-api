const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to db');
  }
  console.log('Connected to MongoDb');

  // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch Todos', err);
  // })

  db.collection('Users').find({name: 'Piper'}).count().then((count)=>{
    console.log(`Piper count: ${count}`);
  }, (err)=>{
    console.log('Unable to fetch Todos', err);
  })

  //db.close();
});
