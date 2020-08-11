const repository = require("../repositories/equipments");

const getAll = () => repository.getAll();

const getById = async (id) => {
    const equipment = await repository.getById(id);
    if (!equipment) {
        throw {status: 404, message : "Not found"};
    }
    return equipment;
};
module.exports = {
    getAll,
    getById,
};