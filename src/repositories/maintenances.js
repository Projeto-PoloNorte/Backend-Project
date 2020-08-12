const knex = require("../../database");
const Maintenance = require("../models/maintenances");


const tableName = "maintenances";

const getById = (id) => {
  return knex(tableName)
       .where({id: id})
       .then(([maintenance]) => maintenance);
};

const create = (maintenance) => {
  return knex(tableName)
  .returning('id')
  .insert(maintenance)
  .then(([inserted]) => inserted);

};

  module.exports = {
    create,
    getById,
};