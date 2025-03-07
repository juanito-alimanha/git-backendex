import express from "express"
import EjemploApiController from '../controladores/EjemploApi.js';

const ruta = express.Router()

//CRUD
ruta.post('/', EjemploApiController.crear);
ruta.get('/', EjemploApiController.leerTodos);
ruta.get('/:id', EjemploApiController.leerUno);
ruta.put('/:id', EjemploApiController.actualizar);
ruta.delete('/:id', EjemploApiController.eliminar);

export default ruta;