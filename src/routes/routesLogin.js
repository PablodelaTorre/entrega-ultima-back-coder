import { Router } from "express";
import { loginUsuario } from "../controllers/login.js";

const router = Router();

router.get("/", (req, res) => {
    console.log(`${req.url}`)
    console.log(`${req.method}`)
    res.render("./partials/login");
});

router.post("/",async (req, res) => {
    await loginUsuario(req,res)
});


export default router;