const mongoose = require("mongoose");

const AdministradorSchema = new mongoose.Schema({
    dni: String,
    nombreAdministrador: String,
    apellidoAdministrador: String,
    direccion: String,
    telefono: String,
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }
}, { collection: 'administradores' });
module.exports = mongoose.model("Administrador", AdministradorSchema);