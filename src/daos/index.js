import dotenv from "dotenv";
dotenv.config();
let productosDao;
let carritosDao;
let usuariosDao;
let mensajesDao;

switch (process.env.DB_CONNECTION) {
    case "mongoDB":
        import("./productos/MongoDBProductos.js").then(({ MongoDBProductos }) => {
            productosDao = new MongoDBProductos();
        });
        import("./carritos/MongoDBCarritos.js").then(({ MongoDBCarritos }) => {
            carritosDao = new MongoDBCarritos();
        });
        import("./mensajes/MongoDBMensajes.js").then(({ MongoDBMensajes }) => {
            mensajesDao = new MongoDBMensajes();
        });
        import("./usuarios/MongoDBUsuarios.js").then(({ MongoDBUsuarios }) => {
            usuariosDao = new MongoDBUsuarios();
        });
        break;
    default:
        throw new Error("No se ha definido una conexión a la base de datos");
    break;
}

export { productosDao, carritosDao, usuariosDao, mensajesDao };