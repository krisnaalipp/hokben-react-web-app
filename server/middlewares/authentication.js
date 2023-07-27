const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");
async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: "Not Login" };
    const verify = verifyToken(access_token);
    if (!verify) {
      throw { name: "Not Login" };
    }
    const findUser = await User.findOne({
      where: {
        email: verify.email,
      },
    });
    if (!findUser) {
      throw { name: "Not Login" };
    }
    req.user = {
      id: findUser.id,
      email: findUser.email,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
