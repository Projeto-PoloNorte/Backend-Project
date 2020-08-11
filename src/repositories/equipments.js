const knex = require("../../database");
const moment = require("moment");

const tableName = "equipments";


const getAll = () => knex(tableName);


const getById = (id) => {
   return knex(tableName)
        .where({id: id})
        .then(([product]) => product);
};


module.exports = {
    getAll,
    getById, 
};