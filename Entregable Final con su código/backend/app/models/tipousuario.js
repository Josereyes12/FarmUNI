// MODEL FOR TIPO
const mongoose = require("mongoose");

const TipoUsuarioSchema = new mongoose.Schema({
    // idTipoUsuario: Number,
    nombreTipo: String,
}, { collection: 'tipousuarios' });

module.exports = mongoose.model("TipoUsuario", TipoUsuarioSchema);