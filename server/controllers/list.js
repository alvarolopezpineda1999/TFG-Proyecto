const bcrypt = require('bcryptjs');
const image = require('../utils/image');
const { response } = require('../app');
const List = require('../models/list');

async function getUserLists(req, res) {
  const { id } = req.params;

  let response = await List.find({ userId: id });

  res.status(200).send(response);
}

async function getLists(req, res) {
  let response = await List.find();

  res.status(200).send(response);
}

async function createList(req, res) {
  const list = new List(req.body);
  list.createdAt = new Date();

  list.save((error, listStored) => {
    if (error) {
      res.status(400).send({ msg: 'Error en la creacion de la lista' });
    } else {
      res.status(201).send(listStored);
    }
  });
}

async function updateList(req, res) {
  const { id } = req.params;
  const listData = req.body;

  List.findByIdAndUpdate({ _id: id }, listData, (error) => {
    if (error) {
      res.status(400).send({ msg: 'Error al actualizar la lista' });
    } else {
      res.status(200).send({ msg: 'Actualización correcta' });
    }
  });
}

async function deleteList(req, res) {
  const { id } = req.params;
  List.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: 'Error al eliminar la lista' });
    } else {
      res.status(200).send({ msg: 'Lista eliminada' });
    }
  });
}

module.exports = {
  getLists,
  getUserLists,
  updateList,
  deleteList,
  createList,
};
