const moment = require("moment");
const now = moment().utc().toDate();
async function seedTable(knex, table, data) {
  await knex(table).del();
  const [id] = await knex(table).returning("id").insert(data);
  return id;
}
exports.seed = async function (knex) {
  const customerId = await seedTable(knex, "customers", {
    name: "Dummy Customer",
    document_number: "21321321312",
    created_at: now,
    updated_at: now,
  });
  const storeId = await seedTable(knex, "stores", {
    name: "Dummy Store",
    customer_id: customerId,
    created_at: now,
    updated_at: now,
  });
  return seedTable(knex, "equipments", [
    {
      year: 2020,
      model: "top",
      brand: "new",
      store_id: storeId,
      created_at: now,
      updated_at: now,
    },
    {
      year: 2020,
      model: "top",
      brand: "old",
      store_id: storeId,
      created_at: now,
      updated_at: now,
    },
    {
      year: 2019,
      model: "down",
      brand: "old",
      store_id: storeId,
      created_at: now,
      updated_at: now,
    },
  ]);
};
