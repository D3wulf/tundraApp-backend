/*
  Ruta:   api/mensajes
*/
const { Router } = require('express');
const { check } = require('express-validator');

//---------------CREAMOS EL CONTROLADOR PARA LIMPIEZA DE CODIGO-----------------------//
const { getMensajes, crearMensaje, borrarMensaje } = require('../controllers/mensajeController');

//---------------- VALIDACION DE CAMPOS- MIDDLEWARE ------------//
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

//Las rutas, lo primero que haremos tras llamar al express
// Ruta : api/empresas

router.get('/', getMensajes);

//Creacion empresas para tundra
router.post('/', [
    check('nombre', 'El nombre del curso es obligatorio').not().isEmpty(),
    check('email', 'Email obligatorio').not().isEmpty(),
    check('categoria', 'A que seccion lo envias?').not().isEmpty(),
    check('mensaje', 'mensaje obligatorio').not().isEmpty(),
    validarCampos
], crearMensaje);




router.delete('/:id', borrarMensaje);



module.exports = router;