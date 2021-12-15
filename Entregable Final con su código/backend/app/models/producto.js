const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
    // idProducto: String,
    descripcion: String,
    nombreProducto: String,
    stock: Number,
    etiquetas: String,
    precio: Number,
    tipoProducto: String,
    requiereReceta: Boolean,
    imagen: String,
    valoracion: Number,

    idCategoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria"
    },
}, { collection: 'productos' });

module.exports = mongoose.model("Producto", ProductoSchema);;