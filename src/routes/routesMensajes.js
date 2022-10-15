import { Router } from 'express';
import { mensajesDao as api } from '../daos/index.js';
const mensajesRouter = Router();


mensajesRouter.get('/', async (req, res) => {
    try{
        const mensajes = await api.getAll();
        mensajes? res.status(200).json(mensajes) : res.status(404).json({message: 'No hay mensajes disponibles'});
    }catch (err){
        res.status(500).json({message: err.message});
    }
});

mensajesRouter.post('/', async (req, res) => {
    try{
        const nuevoMensaje = await api.create(req.body);
        res.status(201).json({
            message: 'mensaje agregado con éxito',
            mensaje: nuevoMensaje});
    }catch (err){
        res.status(500).json({message: err.message});
    }
});

export default mensajesRouter