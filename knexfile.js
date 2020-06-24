const path  = require('path');

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: "./mydb.sqlite"
    }, 
    useNullAsDefault: true,
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
};