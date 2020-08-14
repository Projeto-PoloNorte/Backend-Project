const knex = require('../../database');
const User = require('../models/users');
const moment = require("moment");

const tableName = "users";


const getOne = async (params) => {
    const [user] = await knex(tableName).where(params);
    return new User(user);
};

const getById = (id) => {
    return knex(tableName)
         .where({id: id})
         .then(([user]) => user);
 };

 const update = (id, user) => {
    user.updated_at = moment().utc().format();
    return knex(tableName).where({id: id}).update(user);
}

module.exports = {
    getOne,
    getById,
    update,
};