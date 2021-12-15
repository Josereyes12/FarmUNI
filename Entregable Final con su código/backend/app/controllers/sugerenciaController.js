const config = require("../config/auth.config");
const db = require("../models");
const Sugerencia = db.sugerencia;

exports.enviaSugerencia = (req, res) => {
  console.log(`re`, req)
  // Datos
  const sugerencia = new Sugerencia({
    fecha: req.body.fecha,
    mensaje: req.body.mensaje,
  });

  // Procesos
  sugerencia.save((err, usuario) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });

  // Respuesta
  res.status(200).send("¡Sugerencia aceptada!");
};
