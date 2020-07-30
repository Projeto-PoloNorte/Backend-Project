const {Router} = require("express");
const costumers = require("./costumers");
const equipments = require("./equipments");
const maintenances = require("./maintenances");
const stores = require("./stores");
const users = require("./users");

const router = new Router();

router.use(costumers);
router.use(equipments);
router.use(maintenances);
router.use(stores);
router.use(users);

router.use((req, res, next) => {
    const erro = new Error ("Não encontrado");
    erro.status = 404;
    next(erro)
});

module.exports = router;