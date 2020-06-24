const multer = require('multer');
const { resolve } = require('path');
 
require('dotenv/config');

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      file.key = file.originalname;
      cb(null, file.key);
    }
  }),
};

module.exports = {
  dest: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes['local'],
};