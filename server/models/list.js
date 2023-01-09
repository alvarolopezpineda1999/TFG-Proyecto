const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
  name: String,
  userId: Number,
  createdAt: Date,
});

module.exports = mongoose.model('List', ListSchema);
