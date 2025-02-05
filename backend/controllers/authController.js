const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const { signInError, registerError } = require("../utils/errors.utils");

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: maxAge,
  });
};
 
module.exports.singIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).json({ user: user._id, token: token });
  } catch (err) {
    console.log(err);
    const errors = signInError(err);
    res.status(401).json({ errors });
  }
};

module.exports.singUp = async (req, res) => {
  const { prenom, nom, email, password, profil } = req.body;

  try {
    const newUser = await UserModel.create({
      prenom,
      nom,
      email,
      password,
      profil,
    });
    res.status(201).json({ createdUser: newUser });
  } catch (err) {
    const errors = registerError(err);
    res.status(401).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ message: "deconexion réussie" });
};
