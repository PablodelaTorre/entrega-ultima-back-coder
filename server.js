import express from "express"
import multer from 'multer'
import routesMaster from './src/routes/routesMaster.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { connectMongoDB } from "./src/config/configMongoDB.js";

const app = express()

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const DB_NAME = process.env.DB_NAME;

app.use(multer({
    dest:__dirname+"/public/files",

}).single("photo"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))

app.use('/',routesMaster)



connectMongoDB();

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})