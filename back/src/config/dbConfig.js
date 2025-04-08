import mongoose from "mongoose";
import { Mongo_DB_URL } from "./serverConfig.js";

export default async function connectDB() {
    try{
       // console.log("trying to connect to db");
        await mongoose.connect(Mongo_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4 
          }); 
          console.log("Connected to DB");
    }
    catch(e){
        console.log(e);
    }  
} 