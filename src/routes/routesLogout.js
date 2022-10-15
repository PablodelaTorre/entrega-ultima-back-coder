import { Router } from "express";
import { destruirSesion } from "../controllers/logout.js";

const router = Router();

router.get("/",async (req, res) => {
    console.log(`${req.url}`)
    console.log(`${req.method}`)
    //const nombre = req.session.nombre;
    res.render("./partials/logout", { });
    await destruirSesion(req)
});

// router.get("/",async (req, res) => {
//     console.log(`${req.url}`)
//     console.log(`${req.method}`)
//     //const nombre = req.session.nombre;
//     res.render("./partials/logout", { nombre });
//     await destruirSesion(req)
// });


export default router;