import MongoClass from "../../contenedores/MongoClass.js";
import { mensajesSchema } from "../../models/mensajesSchema.js";

export class MongoDBMensajes extends MongoClass {
    constructor() {
        super("mensajes", mensajesSchema);
    }
}