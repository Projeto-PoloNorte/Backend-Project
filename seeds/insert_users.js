const moment = require("moment");
const now = moment().toDate();
const tableName = "users";
const { encryptPassword } = require("../src/services/utils/encrypt");


exports.seed = async function (knex) {

  const { salt, encryptedPassword } = encryptPassword("1234");

  await knex(tableName).del();
  return knex(tableName).insert({
    name: "Indira Singh",
    email: "lucindhy@gmail.com",
    cpf: "23777432857",
    password: encryptedPassword,
    salt: salt,
    created_at: now,
    updated_at: now,
  });
};