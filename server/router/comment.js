const express = require('express');
const multiparty = require('connect-multiparty');
const commentController = require('../controllers/comment');
const md_auth = require('../middlewares/autenticated');

const api = express.Router();

api.get('/comments', [md_auth.asureAuth], commentController.getComments);
api.post('/comment', [md_auth.asureAuth], commentController.createComment);
api.patch('/comment/:id', [md_auth.asureAuth], commentController.updateComment);
api.delete(
  '/comment/:id',
  [md_auth.asureAuth],
  commentController.deleteComment
);

module.exports = api;
