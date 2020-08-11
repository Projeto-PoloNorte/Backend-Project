const knex = require("../../database");

const tableName = "equipments";


const getAll = () => knex(tableName);


const getById = (id) => {
   return knex(tableName)
        .where({id: id})
        .then(([equipment]) => equipment);
};


module.exports = {
    getAll,
    getById, 
};