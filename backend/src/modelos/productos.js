import mongoose from "mongoose";
import productoSchema from '../schemas/productos.js';

class ProductosModel {
    async create(producto){
        return await productoSchema.create(producto)
    }

    async getAll() {
        return await productoSchema.find();
    }

    async getOne(id) {
        return await productoSchema.findById(id);
    }
    
    async update(id, producto) {
        return await productoSchema.findOneAndUpdate(
          { _id: new mongoose.Types.ObjectId(id) },
          producto
        );
    }
    
    async delete(id) {
        return await productoSchema.findOneAndDelete({
          _id: new mongoose.Types.ObjectId(id),
        });
    }
    }
    
    export default new ProductosModel();