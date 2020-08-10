const moment = require("moment");
const now = moment().toDate();
const tableName = "users";
const { encryptPassword } = require("../src/services/utils/encrypt");


exports.seed = async function (knex) {

  const { salt, encryptedPassword } = encryptPassword("1234");
  //const pass2 = encryptPassword("4321");
  //const pass3 = encryptPassword("4444");
 // const pass4 = encryptPassword("5555");


  await knex(tableName).del();
  return knex(tableName).insert([{
    name: "Indira Singh",
    email: "lucindhy@gmail.com",
    cpf: "23777432857",
    password: encryptedPassword,
    salt: salt,
    created_at: now,
    updated_at: now,
  },
  {
    name: "Vinicius Dias",
    email: "vinicius.3991@gmail.com",
    cpf: "41394273886",
    password: salt,
    salt: encryptPassword,
    created_at: now,
    updated_at: now,
  },
  ])
};