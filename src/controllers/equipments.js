const service = require("../services/equipments");
const Equipment = require("../models/equipments");
const handleError = require("./handleError");

const getAll = async (req, res) => {
    try {
        const equipments = await service.getAll();
        res.json(equipments);
    } catch (error) {
        handleError(res, error);
    }
};

const getById = (req, res) => {
    service
     .getById(req.params.id)
     .then((equipment) => res.json(equipment))
     .catch((error) => handleError(res, error));
 };
 

module.exports = {
    getAll,
    getById,  
};