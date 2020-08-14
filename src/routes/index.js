const {Router} = require("express");
const equipments = require("./equipments");
const maintenances = require("./maintenances");
const users = require("./users");

const router = new Router();

router.use(equipments);
router.use(maintenances);
router.use(users);



router.use((req, res, next) => {
    const erro = new Error ("Não foi encontrado por agora");
    erro.status = 404;
    next(erro)
});

module.exports = router;