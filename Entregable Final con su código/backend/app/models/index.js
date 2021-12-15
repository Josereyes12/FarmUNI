const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.administrador = require("./administrador");
db.categoria = require("./categoria");
db.cliente = require("./cliente");
db.detallecompra = require("./detallecompra");
db.ordencompra = require("./ordencompra");
db.producto = require("./producto");
db.sugerencia = require("./sugerencia");
db.tipousuario = require("./tipousuario");
db.usuario = require("./usuario");

db.TIPOS = ["administrador", "usuario"];

module.exports = db;