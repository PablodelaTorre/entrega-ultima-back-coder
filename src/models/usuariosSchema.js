import mongoose from "mongoose";

export const usuariosSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    email: {
        type: String,
        default: "",
    },
    hashPassword: {
        type: String,
        default: "",
    },
    edad: {
        type: Number,
        default: "",
    },
    telefono: {
        type: Number,
        default: "",
    }
});