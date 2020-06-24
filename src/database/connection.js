const knex = require('knex');

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: "./mydb.sqlite"
    },
    useNullAsDefault: true
});

module.exports = connection;