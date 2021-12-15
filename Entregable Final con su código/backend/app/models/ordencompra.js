const mongoose = require("mongoose");

const OrdenCompraSchema = new mongoose.Schema({
    // idOrdenCompra: String,
    fechaCompra: Date,
    montoTotal: Number,
    idCliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente"
    },
}, { collection: 'ordencompras' });

module.exports = mongoose.model("OrdenCompra", OrdenCompraSchema);;