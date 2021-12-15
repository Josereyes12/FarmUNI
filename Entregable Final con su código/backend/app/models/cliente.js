const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
    dni: String,
    nombreCliente: String,
    apellidoCliente: String,
    direccion: String,
    telefono: String,
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }
}, { collection: 'cliente' });
module.exports = mongoose.model("Cliente", ClienteSchema);