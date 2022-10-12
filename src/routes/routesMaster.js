import { Router } from "express";
import productosRouter from "./routesProductos.js";
import carritosRouter from "./routesCarritos.js";

const appRouter = Router()


appRouter.use('/productos', productosRouter)
appRouter.use('/carritos',carritosRouter)
appRouter.get('/',(req,res)=>{
    res.send("funcionando")
})

export default appRouter