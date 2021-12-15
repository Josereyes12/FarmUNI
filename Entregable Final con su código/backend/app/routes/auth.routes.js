const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/clienteController");
var producto_controller = require('../controllers/productoController');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/cliente/registro",
    [verifySignUp.checkDuplicateUsernameOrEmail],
    controller.registroCliente
  );

  // Clientes
  app.post("/api/cliente/login", controller.loginCliente);

  // Categorias
  app.get('/categoria/listar', producto_controller.listarCategorias);
  app.get('/producto/buscarPorCategoria/:id', producto_controller.buscarProductoPorCategorias);

  // Productos
  app.get('/producto/listar', producto_controller.listarProductos);
  app.get('/cliente/producto/ver/:id', producto_controller.verProducto);
  app.post('/producto/buscar', producto_controller.buscarProducto);
  app.post('/producto/nuevo', producto_controller.nuevoProducto);
  app.post('/producto/:id/actualizar', producto_controller.actualizarProducto);
  app.get('/producto/:id/eliminar', producto_controller.eliminarProducto);

};