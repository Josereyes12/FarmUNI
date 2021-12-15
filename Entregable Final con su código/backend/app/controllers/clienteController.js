const config = require("../config/auth.config");
const db = require("../models");
const Usuario = db.usuario;
const TipoUsuario = db.tipousuario;
const Cliente = db.cliente;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.registroCliente = (req, res) => {
    console.log(req);
    const usuario = new Usuario({
        nombreUsuario: req.body.nombreUsuario,
        clave: bcrypt.hashSync(req.body.clave, 8),
        correo: req.body.correo,
    });
    usuario.save((err, usuario) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        TipoUsuario.findOne({ nombreTipo: "cliente" },
            (err, tipo) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                usuario.idTipoUsuario = tipo._id;
                usuario.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                });
            }
        )
        const cliente = new Cliente({
            dni: req.body.dni,
            nombreCliente: req.body.nombre,
            apellidoCliente: req.body.apellido,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            idUsuario: usuario.id
        });
        cliente.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.send({ message: "El usuario fue registrado con éxito!" });
        })
    });
};

exports.loginCliente = (req, res) => {
    Usuario.findOne({
        nombreUsuario: req.body.nombreUsuario
    })
        .populate("idTipoUsuario", "-__v")
        .exec((err, usuario) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!usuario) {
                return res.status(404).send({ message: "Usuario no encontrado." });
            }

            var passwordIsValid = bcrypt.compareSync(req.body.clave, usuario.clave);

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Contraseña inválida!"
                });
            }

            var token = jwt.sign({ id: usuario.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = [];

            authorities.push("TIPO_" + usuario.idTipoUsuario.nombreTipo.toUpperCase());

            res.status(200).send({
                id: usuario._id,
                usuario: usuario.nombreUsuario,
                correo: usuario.correo,
                tipo: authorities,
                accessToken: token
            });
        });
};