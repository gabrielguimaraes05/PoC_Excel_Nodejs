const { Router } = require('express');
const multer = require('multer');


const fileController  = require('./controllers/fileController');
const multerConfig = require('./config/multer');


const routes = new Router();
const file = multer(multerConfig);

routes.get('/', (req, res) => {
    res.json({ response: 'UP' });
  });

  routes.post('/files', file.single('file'), fileController.store);

  module.exports = routes;