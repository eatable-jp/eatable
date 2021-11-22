require("dotenv").config();
const jwt = require('jsonwebtoken');

const createJWT = async (payload) => {
    const accessJWT =  jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'})
    return accessJWT
}


const verifyAcessJWT = userJWT => {
    return jwt.verify(userJWT, process.env.JWT_ACCESS_SECRET)
}

module.exports = {
    createJWT,
    verifyAcessJWT,
}