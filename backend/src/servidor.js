import express from 'express';
import morgan from 'morgan';
import rutasEjemploApi from './rutas/EjemploApi.js';

const servidor = express();

servidor.use(morgan('dev'));
servidor.use('/EjemploApi', rutasEjemploApi);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.send('raíz funciona!');
});

export default servidor;