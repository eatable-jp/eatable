const { verifyAcessJWT } = require("../helpers/jwt.helper")

const userAuthorization = (req, res, next) => {

    if (req.originalUrl === '/global' || req.originalUrl === '/' || req.originalUrl === '/login') {
        return next();
    }
    const { authorization } = req.headers;
    console.log(authorization)

    // verify if jwt is valid
    // const decoded = verifyAcessJWT(authorization);

    //if(decoded.email)

    // check if jwt exists in storage

    // extract user id

    //res.json(authorization)

    res.status(403).json({message: "Forbidden"})
    next();
}

module.exports = {
    userAuthorization
};