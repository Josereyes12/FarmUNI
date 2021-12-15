const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Usuario = db.usuario;
const TipoUsuario = db.tipousuario;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No se proporcionó el token!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Sin autorización!" });
        }
        req.userId = decoded.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    Usuario.findById(req.userId).exec((err, usuario) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        TipoUsuario.find(
            {
                _id: { $in: usuario.idTipoUsuario }
            },
            (err, tipos) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < tipos.length; i++) {
                    if (tipos[i].nombreTipo === "administrador") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require tipo Admininstrador!" });
                return;
            }
        );
    });
};

isCliente = (req, res, next) => {
    Usuario.findById(req.userId).exec((err, usuario) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } 
        TipoUsuario.find(
            {
                _id: { $in: usuario.idTipoUsuario }
            },
            (err, tipos) => {  
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < tipos.length; i++) {
                    if (tipos[i].nombreTipo === "cliente") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require tipo Cliente!" });
                return;
            }
        );
    });
};




const authJwt = {
    verifyToken,
    isAdmin,
    isCliente,
};
module.exports = authJwt;