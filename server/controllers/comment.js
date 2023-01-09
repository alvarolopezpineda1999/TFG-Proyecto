const bcrypt = require('bcryptjs');
const image = require('../utils/image');
const { response } = require('../app');
const Comment = require('../models/comment');

async function getUserComments(req, res) {
  const { id } = req.params;

  let response = await Comment.find({ userId: id });

  res.status(200).send(response);
}

async function getComments(req, res) {
  let response = await Comment.find();

  res.status(200).send(response);
}

async function createComment(req, res) {
  const comment = new Comment(req.body);
  comment.createdAt = new Date();

  comment.save((error, commentStored) => {
    if (error) {
      res.status(400).send({ msg: 'Error en la creacion del comentario' });
    } else {
      res.status(201).send(commentStored);
    }
  });
}

async function updateComment(req, res) {
  const { id } = req.params;
  const commentData = req.body;

  Comment.findByIdAndUpdate({ _id: id }, commentData, (error) => {
    if (error) {
      res.status(400).send({ msg: 'Error al actualizar el comentario' });
    } else {
      res.status(200).send({ msg: 'Actualización correcta' });
    }
  });
}

async function deleteComment(req, res) {
  const { id } = req.params;
  Comment.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: 'Error al eliminar comentario' });
    } else {
      res.status(200).send({ msg: 'Comentario eliminado' });
    }
  });
}

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
  getUserComments,
};
