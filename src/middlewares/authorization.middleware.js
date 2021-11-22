const { verifyAcessJWT } = require("../helpers/jwt.helper")

const userAuthorization = async (req, res, next) => {

    if (req.originalUrl === '/global' || req.originalUrl === '/' || req.originalUrl === '/login' || req.originalUrl === '/signup') {
        return next();
    }

    //console.log(req.headers)

    let token = await req.headers.accessjwt;

    // console.log("here")
    // console.log(token)
    console.log(req.originalUrl, token)

    if(token) {
        try {
            const verify = verifyAcessJWT(token);
            console.log(verify.user);
        } catch (error){
            console.log(error)
            return res.status(403).send("token is expired");
        }
        console.log("token found")
    }
    return next();
}

module.exports = {
    userAuthorization
};