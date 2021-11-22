require("dotenv").config();
const jwt = require('jsonwebtoken');

const createJWT = async (payload) => {
    const accessJWT = await jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'})

    return Promise.resolve(accessJWT)
}


const createRefreshJWT = async (payload) => {
    const refreshJWT = await jwt.sign({ payload }, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

    return Promise.resolve(refreshJWT)
}

const verifyAcessJWT = userJWT => {
    try {
        return Promise.resolve (jwt.verify(userJWT, process.env.JWT_ACCESS_SECRET));
    } catch (error) {
        return Promise.resolve(error)
    }
}

module.exports = {
    createJWT,
    createRefreshJWT,
    verifyAcessJWT,
}