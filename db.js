import mongoose from "mongoose";

export class Database{
    constructor(uri){
        this.uri=uri;
    }
    async connect(){
        try{
            mongoose.set("strictQuery",true);
            await mongoose.connect(this.uri);
            console.log("MongoDB conectado!")
        }
        catch(err){
            console.log("Error en MongoDB: "+err.message);
        }
    }
    async disconnect(){
        try{
            mongoose.set("strictQuery",true);
            await mongoose.disconnect(this.uri);
            console.log("MongoDB conectado!")
        }
        catch(err){
            console.log("Error en MongoDB: "+err.message);
        }
    }
}
