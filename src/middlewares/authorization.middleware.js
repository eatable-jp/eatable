const { verifyAcessJWT } = require("../helpers/jwt.helper");

const userAuthorization = async (req, res, next) => {
  if (
    req.originalUrl === "/global" ||
    req.originalUrl === "/" ||
    req.originalUrl === "/login" ||
    req.originalUrl === "/signup"
  ) {
    return next();
  }

  const token = await req.headers.accessjwt;

  if (token) {
    try {
      const verify = verifyAcessJWT(token);
      res.locals.user = verify.id;
    } catch (error) {
      console.log(error);
      return res.status(403).send("token is expired");
    }
  }
  return next();
};

module.exports = {
  userAuthorization,
};
