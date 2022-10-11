import { Router } from "express";
import productosRouter from "./routesProductos.js";

const appRouter = Router()


appRouter.use('/productos', productosRouter)
appRouter.get('/',(req,res)=>{
    res.send("funcionando")
})

export default appRouter