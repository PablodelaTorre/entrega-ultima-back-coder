// import { Router } from "express";
// import { destruirSesion } from "../controllers/logout.js";

// const router = Router();

// router.get("/",async (req, res) => {
//     console.log(`${req.url}`)
//     console.log(`${req.method}`)
//     //const nombre = req.session.nombre;
//     res.render("./partials/logout", { });
//     await destruirSesion(req)
// });

// // router.get("/",async (req, res) => {
// //     console.log(`${req.url}`)
// //     console.log(`${req.method}`)
// //     //const nombre = req.session.nombre;
// //     res.render("./partials/logout", { nombre });
// //     await destruirSesion(req)
// // });


// export default router;
import { Router } from "express";
import passport from "passport";
const router = Router();

router.get("/", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send({ message: "Error al cerrar sesión" });
        }
    res.status(200).send({ message: "Sesión cerrada" });
    });
});

// router.post('/', passport.authenticate('login', {
//     successRedirect: '/info',
//     failureRedirect: '/login',
// }));

export default router;