import { Router } from 'express';

const appIndex = Router()

appIndex.get('/',(req,res) => {
    
    console.log(`${req.url}`)
    console.log(`${req.method}`)
    res.render('index', {
        title:"Agregue un producto",
        nombre:"Pablo"
    })
})

export default appIndex
