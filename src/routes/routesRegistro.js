import { Router } from "express";
import 'dotenv/config'


const router = Router();

export const usuarios = []

router.get("/",async (req, res) => {
    console.log(`${req.url}`)
    console.log(`${req.method}`)
    res.render("./partials/registro");
});

router.post("/",async (req, res) => {

    if (usuarios.some(usuario=>usuario.nombre===req.body.nombre)){
        return res.render("./partials/errorRegistro")
    }
    try {
        usuarios.push(req.body)
        res.render("./partials/login")
    } catch (error) {
        res.status(500)
    }
});

export default router;