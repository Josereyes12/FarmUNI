const db = require("../models");
const TIPOS = db.TIPOS;
const Usuario = db.usuario;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Usuario
  Usuario.findOne({
    //nombreUsuario: req.body.username
    nombreUsuario: req.body.nombreUsuario
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Error! El nombre de usuario ya existe!" });
      return;
    }

    // Correo
    Usuario.findOne({
      correo: req.body.correo
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Error! El correo ya está en uso!" });
        return;
      }
      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;