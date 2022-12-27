const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  userId: Number,
  body: String,
  parentId: Number,
  createdAt: Date,
});

module.exports = mongoose.model('Comment', CommentSchema);
