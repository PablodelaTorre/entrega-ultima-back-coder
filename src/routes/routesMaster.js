import { Router } from "express";
import productosRouter from "./routesProductos.js";
import carritosRouter from "./routesCarritos.js";
import appIndex from "./routesIndex.js";
import registroRouter from "./routesRegistro.js"
import loginRouter from "./routesLogin.js"
import logoutRouter from "./routesLogout.js"
import mensajesRouter from "./routesMensajes.js";

const appRouter = Router()

appRouter.use('/',appIndex)
appRouter.use('/productos', productosRouter)
appRouter.use('/carritos',carritosRouter)
appRouter.use('/login',loginRouter)
appRouter.use('/logout',logoutRouter)
appRouter.use('/mensajes',mensajesRouter)
appRouter.use('/registro',registroRouter)

appRouter.get('*', (req,res)=>{
    res.send(`URL inexistente -- ${req.url}`)
})

export default appRouter