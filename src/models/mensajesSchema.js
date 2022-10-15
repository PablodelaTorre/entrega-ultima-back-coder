import mongoose from "mongoose";

export const mensajesSchema = new mongoose.Schema({
    mensaje: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    autores: {
        type: mongoose.Schema.Types.ObjectId,
    }
});