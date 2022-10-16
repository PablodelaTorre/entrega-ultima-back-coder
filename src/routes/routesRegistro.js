// import { Router } from "express";
// import 'dotenv/config'


// const router = Router();

// export const usuarios = []

// router.get("/",async (req, res) => {
//     console.log(`${req.url}`)
//     console.log(`${req.method}`)
//     res.render("./partials/registro");
// });

// router.post("/",async (req, res) => {

//     if (usuarios.some(usuario=>usuario.nombre===req.body.nombre)){
//         return res.render("./partials/errorRegistro")
//     }
//     try {
//         usuarios.push(req.body)
//         res.render("./partials/login")
//     } catch (error) {
//         res.status(500)
//     }
// });

// export default router;
import { Router } from "express";
import passport from "passport";
import { usuariosDao as api } from "../daos/index.js";
import "../config/passport-local.js";
const router = Router();

router.get("/", (req, res) => {
    res.status(500).json({ message: "error en registro" });
});

router.post(
    "/",
    // autenticar con passport y enviar respuestas al client
    passport.authenticate("registro", {
        failureRedirect: "/registro",
    }),
    (req, res) => {
        res.status(201).json({
            message: "Usuario registrado con éxito",
            id: req.user._id,
            email: req.user.email,
        });
    }
);

export default router;