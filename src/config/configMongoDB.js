import mongoose from "mongoose";
import 'dotenv/config'

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const DB_NAME = process.env.DB_NAME;

const config = {
    mongoDB:{
        URL:`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.krjoq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
}

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(config.mongoDB.URL, config.mongoDB.options);
        console.log("Connected Mongo DB");
    } catch (error) {
        console.log("Error en la conexión a mongoDB", error);
    }
};