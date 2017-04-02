const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect( 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://stephenmgould:Piper123@ds147920.mlab.com:47920/tododatabase');
module.exports = {mongoose};
