import { Router } from 'express';
import { validateToken } from "../config/auth.js"
import localStorage from "localstorage"

const appIndex = Router()

appIndex.get('/',validateToken,(req,res) => {
    
    if(localStorage.getItem('token')){
        console.log(`${req.url}`)
        console.log(`${req.method}`)
        res.render('index', {
            title:"Agregue un mensaje",
        })
    } else {
        res.redirect("/login")
    }
})

export default appIndex
