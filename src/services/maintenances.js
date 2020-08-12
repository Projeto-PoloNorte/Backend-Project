const repository = require("../repositories/maintenances");
const Maintenance = require("../models/maintenances");
const moment = require("moment");


const create = async (maintenance) => {
    const id = await repository.create(maintenance);
    const created = await repository.getById(id);
   return created;
};

    module.exports = {
        create,
    };