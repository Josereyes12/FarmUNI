exports.allAccess = (req, res) => {
    res.status(200).send("");
};

exports.userBoard = (req, res) => {
    res.status(200).send("Usuario Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Administrador Content.");
};

exports.clienteBoard = (req, res) => {
    res.status(200).send("Buscar producto");
};