const xlsx = require('node-xlsx');
const { resolve } = require('path');

const knex = require('../database/connection');
const filePath = resolve(__dirname, '..', '..', 'tmp', 'uploads', 'Data.xlsx');

class FileController {
    async store(req, res) {

        const plan = xlsx.parse(filePath)

        const keys = plan[0].data[0];
        const arrayData = [];

        for(var y = 1; y <= plan[0].data.length - 1; y++) {
            var values = plan[0].data[y];
            var result = new Object();

           keys.forEach((key, i) => result[key] = values[i]);
           arrayData.push(result);
        };
        
        await knex.batchInsert('data', arrayData, 100);
    
 
        return res.json("Success");
    }
}

module.exports = new FileController();