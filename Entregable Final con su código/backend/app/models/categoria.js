const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
    // idCategoria: String,
    nombreCategoria: String,
}, { collection: 'categorias' });

module.exports = mongoose.model("Categoria", CategoriaSchema);