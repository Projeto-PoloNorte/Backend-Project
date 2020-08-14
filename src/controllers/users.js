const service = require("../services/users");
const handleError = require("./handleError");
const User = require

const login = async (req, res) => {
    try {
        if (!req.body.cpf || !req.body.password) {
            throw { status: 400, message: "invalid data"};
        }
        const data = await  service.login(req.body);
        res.json(data)

    }catch (error) {
        handleError(res, error)
    };
};

const changePassword = async (req, res) => {
    try {
        if (!req.body.password || !req.body.newpassword) {
            throw { status: 400, message: "invalid data"};    
        };

        const data = await service.changePassword(req.body, req.user.id);
        res.json(data)

    }catch (error) {
        handleError(res, error)
    }  
};

module.exports = {
    login,
    changePassword,
};