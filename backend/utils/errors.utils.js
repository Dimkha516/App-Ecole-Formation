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

const extractErrorMessages = (err, fields) => {
  let errors = {};

  // Cas des erreurs de validation Mongoose
  if (err.errors) {
    fields.forEach(field => {
      if (err.errors[field]) {
        errors[field] = err.errors[field].message;
      }
    });
  } 

  // Cas des erreurs de duplication (email unique)
  if (err.code === 11000) {
    if (err.keyPattern && err.keyValue) {
      Object.keys(err.keyPattern).forEach(key => {
        errors[key] = `${key} existe déjà`;
      });
    }
  }

  return errors;
};

module.exports.registerError = (err) => {
  return extractErrorMessages(err, [
    'prenom', 'nom', 'email', 'password', 'profil', 'status', 'createdBy'
  ]);
};

