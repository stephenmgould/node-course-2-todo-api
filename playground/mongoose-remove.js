const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
  console.log(result);
});

// Todo.findByIdAndRemove('58e009044b8c35245c749dd6').then((todo)=>{
//   console.log(todo);
// });
