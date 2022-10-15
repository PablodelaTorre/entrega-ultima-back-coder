import { Router } from "express";
import productosRouter from "./routesProductos.js";
import carritosRouter from "./routesCarritos.js";
import appIndex from "./routesIndex.js";
import registroRouter from "./routesRegistro.js"
import loginRouter from "./routesLogin.js"
import logoutRouter from "./routesLogout.js"

const appRouter = Router()

appRouter.use('/',appIndex)
appRouter.use('/productos', productosRouter)
appRouter.use('/carritos',carritosRouter)
appRouter.use('/login',loginRouter)
appRouter.use('/logout',logoutRouter)
appRouter.use('/registro',registroRouter)

// appRouter.get('/',(req,res)=>{
//     res.send("funcionando")
// })

// appRouter.get('/',(req,res) => {
//     if(req.session.nombre) {
//         logConsole.info(`${req.url}`)
//         logConsole.info(`${req.method}`)
//         res.render('index', {
//             title:"Agregue un producto",
//             nombre: req.session.nombre
//         })
//     } else {
//         res.redirect("/login");
//     }
// })

appRouter.get('*', (req,res)=>{
    res.send(`URL inexistente -- ${req.url}`)
})

export default appRouter