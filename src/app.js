const express = require('express');
const { resolve } =  require('path');
const routes = require('./routes');


class AppController {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use('/files', express.static(resolve(__dirname, '..', 'tmp', 'uploads')));
    }
    routes() {
        this.server.use(routes);
    }
}

module.exports = new AppController().server;