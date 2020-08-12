const service = require("../services/equipments");
const handleError = require("./handleError");

const getById = (req, res) => {
    service
     .getById(req.params.id)
     .then((equipment) => res.json(equipment))
     .catch((error) => handleError(res, error));
 };
 

module.exports = {
    getById,  
};