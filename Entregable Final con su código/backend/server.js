const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./app/config/db.config");
const cors = require("cors");
const app = express();

var corsOption = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOption));

// convierte el pedido content-type-application/json
app.use(bodyParser.json())

// convierte el pedido a content-type-application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const TipoUsuario = db.tipousuario;

db.mongoose
    .connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.CLUSTER}.8vmym.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Se conectó exitosamente a la base de datos MongoDB Atlas.");
        initial();
    })
    .catch(err => {
        console.error("Error de conexión", err);
        process.exit();
    });

// ruta raiz
app.get("/", (req, res) => {
    res.json({ message: "farmUni" });
})

// rutas
require("./app/routes/auth.routes")(app);
require("./app/routes/usuario.routes")(app);

// asignando el puerto 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`El servidor escucha en el puerto ${PORT}.`);
});

// llena los datos si estan vacios 
function initial() {
    TipoUsuario.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new TipoUsuario({
                idTipoUsuario: 0,
                nombreTipo: "administrador"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("'Administrador' agregado a la colección");
            });

            new TipoUsuario({
                idTipoUsuario: 1,
                nombreTipo: "cliente"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("'Cliente' agregado a la colección");
            });
        }
    });
}