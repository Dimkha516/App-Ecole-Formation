module.exports.signInError = (err) => {
  let errors = {
    email: "",
    password: "",
  };

  if (err.message.includes("email")) {
    errors.email = "L'email est invalide";
  }

  if (err.message.includes("password")) {
    errors.password = "Le mot de passe est incorrect";
  }

  return errors;
};

module.exports.registerError = (err) => {
  let errors = {};
  if (err.errors) {
    if (err.errors.prenom) errors.prenom = err.errors.prenom.message;
    if (err.errors.nom) errors.nom = err.errors.nom.message;
    if (err.errors.email) errors.email = err.errors.email.message;
    if (err.errors.password) errors.password = err.errors.password.message;
    if (err.errors.confirmPassword)
      errors.confirmPassword = err.errors.confirmPassword.message;
    if (err.errors.profil) errors.profil = err.errors.profil.message;
    if (err.errors.status) errors.status = err.errors.status.message;
  }

  return errors;
};
