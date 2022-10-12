import express from "express"
import multer from 'multer'
import routesMaster from './src/routes/routesMaster.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { connectMongoDB } from "./src/config/configMongoDB.js";

const app = express()

app.use(multer({
    dest:__dirname+"/public/files",

}).single("photo"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))

app.use('/',routesMaster)
app.set('views','./src/views')
app.set('view engine','ejs')

connectMongoDB();

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})