import mongoose from "mongoose";

class conexionMongodb{
    constructor (){
        this.conexion();
    }

    async conexion(){
    try {
        
        const stringDeConexion = process.env.MONGODB_ATLAS;
        await mongoose.connect(stringDeConexion);
        console.log("conectado a la base de datos");
    } catch (error) {
        console.log('Error al conectar\nError: ${error}');
    }    
    }
}

export default new conexionMongodb();