const express = require('express');
const multiparty = require('connect-multiparty');
const listController = require('../controllers/list');
const md_auth = require('../middlewares/autenticated');
const list = require('../models/list');

const api = express.Router();

api.get('/lists', [md_auth.asureAuth], listController.getLists);
api.get('/lists/:id', [md_auth.asureAuth], listController.getUserLists);

api.post('/list', [md_auth.asureAuth], listController.createList);
api.patch('/list/:id', [md_auth.asureAuth], listController.updateList);
api.delete('/list/:id', [md_auth.asureAuth], listController.deleteList);

module.exports = api;
