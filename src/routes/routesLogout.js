import { Router } from "express";
import { destruirSesion } from "../controllers/logout.js";

const router = Router();

router.get("/",async (req, res) => {
    console.log(`${req.url}`)
    console.log(`${req.method}`)
    res.render("./partials/logout", { });
});

export default router;