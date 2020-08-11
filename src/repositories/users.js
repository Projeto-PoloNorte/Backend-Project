const knex = require('../../database');
const User = require('../models/users');

const tableName = "users";

//INSERT INTO users (name, email, password, created_at, updated_at) values (?,?,?,?)

const getOne = async (params) => {
    const [user] = await knex(tableName).where(params);
    return new User(user);
};


module.exports = {
    getOne,
};