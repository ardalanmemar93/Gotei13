const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },
  character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
