var mongoose = require('mongoose');

// we willen geen callbacks gebruiken, maar promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    // mongoose: mongoose ES6
    mongoose
};