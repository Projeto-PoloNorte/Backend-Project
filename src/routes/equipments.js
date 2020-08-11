const { Router } = require('express');
const router = new Router();
const controller = require("../controllers/equipments");

const routeName = '/equipments';

router.get(routeName, controller.getAll);