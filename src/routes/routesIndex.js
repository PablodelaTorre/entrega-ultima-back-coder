import { Router } from 'express';

const appIndex = Router()

appIndex.get('/',(req,res) => {
    if(req.session.nombre) {
        logConsole.info(`${req.url}`)
        logConsole.info(`${req.method}`)
        res.render('index', {
            title:"Agregue un mensaje",
            nombre: req.session.nombre
        })
    } else {
        res.redirect("/login");
    }
})

// appIndex.get('/',(req,res) => {
    
//     console.log(`${req.url}`)
//     console.log(`${req.method}`)
//     res.render('index', {
//         title:"Agregue un producto",
//         nombre:"Pablo"
//     })
// })

export default appIndex
