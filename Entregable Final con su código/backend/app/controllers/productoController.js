const Producto = require('../models/producto');
const db = require("../models");
const Categoria = db.categoria;

// Muestra todos los productos
exports.listarProductos = (req, res, next) => {
    Producto.find().limit(10)
        .sort([['precio', 'ascending']])
        .exec((err, list_products) => {
            res.status(200).send(list_products);
        })
};

// Muestra todos las categorias
exports.listarCategorias = (req, res, next) => {
    Categoria.find().sort([['nombreCategoria', 'ascending']])
        .exec((err, list_cat) => {
            res.status(200).send(list_cat);
        })
};


// buscar productos
exports.buscarProducto = (req, res, next) => {
    Producto.find({ etiquetas: { $regex: `.*${req.body.etiquetas}.*` } }).limit(10)
        .sort([['precio', 'ascending']])
        .exec((err, list_products) => {
            res.status(200).send(list_products);
        })
};

// buscar productos
exports.buscarProductoPorCategorias = (req, res, next) => {
    Producto.find({ idCategoria: req.params.id }).limit(10)
        .sort([['precio', 'ascending']])
        .exec((err, list_products) => {
            res.status(200).send(list_products);
        })
};

// ver producto detalle
exports.verProducto = (req, res, next) => {
    Producto.findById(req.params.id).exec((err, product) => {
        res.status(200).send(product);
    });
};

// crear nuevo producto 
exports.nuevoProducto = (req, res) => {
    const producto = new Producto({
        descripcion: req.body.descripcion,
        nombreProducto: req.body.nombreProducto,
        stock: req.body.stock,
        etiquetas: req.body.etiquetas,
        precio: req.body.precio,
        tipoProducto: req.body.tipoProducto,
        requiereReceta: req.body.requiereReceta,
        idCategoria: req.body.idCategoria
    });

    producto.save((err, producto) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            res.send({ message: "Producto actualizado" })
        }
    });
};

exports.actualizarProducto = (req, res, next) => {
    const producto = {
        "descripcion": req.body.descripcion,
        "nombreProducto": req.body.nombreProducto,
        "stock": req.body.stock,
        "etiquetas": req.body.etiquetas,
        "precio": req.body.precio,
        "tipoProducto": req.body.tipoProducto,
        "requiereReceta": req.body.requiereReceta,
        "idCategoria": req.body.idCategoria
    };
    Producto.findByIdAndUpdate(req.params.id, producto, { new: true, useFindAndModify: false }, function (err, result) {
        if (err) {
            res.send("Ocurrio un error")
        } else {
            res.send({ message: "Producto actualizado" })
        }
    })
}

exports.eliminarProducto = (req, res, next) => {
    Producto.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) {
            res.send("Ocurrio un error")
        }
        else {
            res.send({ message: "Producto eliminado" })
        }
    })
}