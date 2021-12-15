const mongoose = require("mongoose");

const SugerenciaSchema = new mongoose.Schema(
  {
    fecha: Date,
    mensaje: String,
  },
  { collection: "sugerencia" }
);

module.exports = mongoose.model("Sugerencia", SugerenciaSchema);
