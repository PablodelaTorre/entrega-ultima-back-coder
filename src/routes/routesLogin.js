// import { Router } from "express";
// import { loginUsuario } from "../controllers/login.js";

// const router = Router();

// router.get("/", (req, res) => {
//     console.log(`${req.url}`)
//     console.log(`${req.method}`)
//     res.render("./partials/login");
// });

// router.post("/",async (req, res) => {
//     await loginUsuario(req,res)
// });


// export default router;
import { Router } from "express";
import passport from "passport";
import { usuariosDao as api } from "../daos/index.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(401).json({ message: "error en login" });
});
router.post(
    "/",
    passport.authenticate("login", {
    failureRedirect: "/login",
    }),
    (req, res) => {
    res.status(200).json({
        message: "Usuario logueado con éxito",
        id: req.user._id,
        email: req.user.email,
    });
}
);

export default router;