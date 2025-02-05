const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        console.log("No connected user");
        res.locals.user = null;
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(401).json({ message: "Token invalid." });
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token not provided." });
    console.log("No Token");
  }
};

module.exports.isAuthenticated = (req, res, next) => {
  if (!res.locals.user) {
    return res.status(401).json({
      message: "From isAuthenticate: Veuillez vous connecter d'abord",
    });
  }
  next();
};
