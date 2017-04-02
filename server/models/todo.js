var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,

    //removes any leading or trailing whitespace (begin en eind spaties)
    // zorgt ervoor dat ge dus niet gwn ' ' kunt ingeven bij minlength
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number, // unix timestamp
    default: null
  }
});

module.exports = {Todo};