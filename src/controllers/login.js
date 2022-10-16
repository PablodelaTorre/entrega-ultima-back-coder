import { comparePassword } from "../config/bcrypt.js"
import { usuariosDao as api } from "../daos/index.js"
import { generateAccesToken } from "../config/auth.js"
import localStorage from "localstorage"

export async function loginUsuario(req,res) {

    const usuarios = await api.getAll()
    const {email, password} = req.body
    const userBD = await api.findOne({email})
    
        if(userBD){
            const compPassword = await comparePassword(password, userBD.hashPassword)
            if(compPassword){
                console.log("Usuario aceptado")
                const accesToken = generateAccesToken(userBD)
                localStorage.setItem('token',accesToken)
                res.redirect('/')
            }
            else {
                res.render('./partials/errorLogin')
            }
        }
        else {
            res.render('./partials/errorLogin')
        }
}