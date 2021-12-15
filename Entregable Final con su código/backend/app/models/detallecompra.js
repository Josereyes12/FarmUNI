const mongoose = require("mongoose");

const DetalleCompraSchema = new mongoose.Schema({
    // idDetalleCompra: String,
    precioUnitario: Number,
    cantidad: Number,
    idOrdenCompra: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrdenCompra"
    }, 
    idProducto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto"
    }, 
}, { collection: 'detallecompras' });

module.exports = mongoose.model("DetalleCompra", DetalleCompraSchema);