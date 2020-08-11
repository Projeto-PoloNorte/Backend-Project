const service = require("../services/equipments");
const Order = require("../models/equipments");
const handleError = require("./handleError");

const getAll = async (req, res) => {
    try {
        const equipments = await service.getAll();
        res.json(equipments);
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = {
    getAll,
   
};