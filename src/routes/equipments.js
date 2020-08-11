const { Router } = require('express');
const router = new Router();
const controller = require("../controllers/equipments");
const authenticate = require('./middlewares/authenticate')

const routeName = '/equipments';

router.get(routeName, controller.getAll);

router.get(`${routeName}/:id`, controller.getById);

module.exports = router;