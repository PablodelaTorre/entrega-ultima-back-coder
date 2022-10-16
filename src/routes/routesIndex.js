import { Router } from 'express';
import { validateToken } from "../config/auth.js"

const appIndex = Router()

// appIndex.get('/',(req,res) => {
//     if(req.session.nombre) {
//         console.log(`${req.url}`)
//         console.log(`${req.method}`)
//         res.render('index', {
//             title:"Agregue un mensaje",
//             //nombre: req.session.nombre
//         })
//     } else {
//         res.redirect("/login");
//     }
// })

appIndex.get('/',validateToken,(req,res) => {
    
    console.log(`${req.url}`)
    console.log(`${req.method}`)
    res.render('index', {
        title:"Agregue un mensaje",
    })
})

export default appIndex
