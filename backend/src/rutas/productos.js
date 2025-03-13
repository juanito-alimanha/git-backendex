import express from "express"

const ruta = express.Router()

// CRUD
ruta.post('/', (solicitud, respuesta) =>{respuesta.send('crea...')});
ruta.get('/', (solicitud, respuesta) =>{respuesta.send('lee...')});
ruta.get('/:id', (solicitud, respuesta) =>{respuesta.send('lee1...')});
ruta.put('/:id', (solicitud, respuesta) =>{respuesta.send('actualiza...')});
ruta.delete('/:id', (solicitud, respuesta) =>{respuesta.send('elimina...')});

export default ruta;