const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    // idUsuario: String,
    nombreUsuario: String,
    clave: String,
    correo: String,
    idTipoUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TipoUsuario"
    }

}, { collection: 'usuarios' });

module.exports = mongoose.model("Usuario", UsuarioSchema);   //uso Usuario.db