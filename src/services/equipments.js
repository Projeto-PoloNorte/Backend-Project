const repository = require("../repositories/equipments");

const getAll = () => repository.getAll();

const getById = async (id) => {
    const product = await repository.getById(id);
    if (!product) {
        throw {status: 404, message : "Not found"};
    }
    return product;
};
module.exports = {
    getAll,
    getById,
};