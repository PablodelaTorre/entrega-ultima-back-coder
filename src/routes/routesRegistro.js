import { Router } from "express";
import { usuariosDao as api } from '../daos/index.js';
import { encryptPassword } from '../config/bcrypt.js'

const router = Router();

export const usuarios = []

router.get("/",async (req, res) => {
    console.log(`${req.url}`)
    console.log(`${req.method}`)
    res.render("./partials/registro");
});

router.post("/",async (req, res) => {
    const {nombre, email, password, edad, telefono} = req.body
    const userBD = await api.findOne({email})
    const hashPassword = await encryptPassword(password)
    const usuario = {nombre,email,hashPassword,edad,telefono}
    try{
        if(userBD){
            return res.render("./partials/errorRegistro")
        }
        else {
            const nuevoUsuario = await api.create(usuario);
            res.render("./partials/login")
        }
    }catch (err){
        res.status(500).json({message: err.message});
    }
});

export default router;
