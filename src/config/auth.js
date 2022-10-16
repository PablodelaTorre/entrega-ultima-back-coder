import jwt from 'jsonwebtoken'
import 'dotenv/config'
import localStorage from "localstorage"

const JWT = process.env.JWT

export function generateAccesToken(user){
    return jwt.sign({user},JWT,{expiresIn:'600m'})
}

export function validateToken(req,res,next){
    const accesToken = localStorage.getItem("token")
    if(!accesToken){
        res.render('./partials/errorLogin')
    } else {
        jwt.verify(accesToken,JWT,(err,user)=>{
            if(err){
                res.render('./partials/errorLogin')
            } else {
                next()
            }
        })

    }
}