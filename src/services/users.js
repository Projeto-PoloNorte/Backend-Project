
const {encryptPassword} = require('./utils/encrypt')
const repository = require("../repositories/users");
const { createToken } =require("./utils/jwt")


const login = async loginData => {
    const user = await repository.getOne({cpf: loginData.cpf});
    if(!user){
        throw {status: 401, message: "Not authorized"};
    }
    const {encryptedPassword} = encryptPassword(loginData.password, user.salt);
    if(encryptedPassword !== user.password) {
        throw { status: 401, message: "Not authorized"};
    };

    const token = createToken(user.id);
    return {
      user: user.view(),
      token,
  };
};

const changePassword = async passwordData => {
    const user = await repository.getById( passwordData.id);
    if(!user){
        throw {status: 401, message: "Not authorized"};
    }
    const {encryptedPassword} = encryptPassword(passwordData.password, user.salt);
    if(encryptedPassword !== user.password) {
        throw { status: 409, message: "Precondition Failed"};
    };
    const {encryptedPassword: encrypPass} = encryptPassword(passwordData.newpassword, user.salt)
    
    
    await repository.update(user.id, {password: encrypPass })
  
  };

const getById = async (id) => {
    const user = await repository.getOne({ id: id});
    if (!user.id) {
        throw { status: 404, message: "Not found"};
    }
    return user;
};



module.exports = {
    login,
    getById,
    changePassword,
};