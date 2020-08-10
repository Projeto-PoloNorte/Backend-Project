const handleError = (res, error) => {
    res.status(error.status || 500).json({...error, message: error.message});
    console.log(error,"deu error")
};
module.exports = handleError;