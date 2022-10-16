import express from "express"
import multer from 'multer'
import 'dotenv/config'
import { Server } from 'socket.io'
import http from 'http'
import routesMaster from './src/routes/routesMaster.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import "./src/config/passport-local.js";
import { connectMongoDB } from "./src/config/configMongoDB.js";

export const app = express()

const httpServer = http.createServer(app)
const io = new Server(httpServer)

app.use(multer({
    dest:__dirname+"/public/files",

}).single("photo"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))

app.use('/',routesMaster)
app.set('views','./src/views')
app.set('view engine','ejs')

//-------------------------------------------------- Socket io -----------------------------------------------
export const mensajes = []

io.on('connection',(socket)=>{
    console.log('nuevo cliente conectado', socket.id)
    socket.emit('mensajes', mensajes)

    socket.on('newMessage', mensaje => {
        mensajes.push(mensaje)
        io.sockets.emit('mensajes',mensajes)
    })
})

connectMongoDB();

const PORT = process.env.PORT || 8080

const server = httpServer.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})