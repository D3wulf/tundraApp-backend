/*
  Ruta:   api/empresas     empresas
*/
const { Router } = require('express');
const { check } = require('express-validator');

//---------------CREAMOS EL CONTROLADOR PARA LIMPIEZA DE CODIGO-----------------------//
const { getEmpresas, crearEmpresa, borrarEmpresa } = require('../controllers/empresaController');

//---------------- VALIDACION DE CAMPOS- MIDDLEWARE ------------//
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

//Las rutas, lo primero que haremos tras llamar al express
// Ruta : api/empresas

router.get('/', getEmpresas);

//Creacion empresas para tundra
router.post('/', [
    check('nombre', 'El nombre del curso es obligatorio').not().isEmpty(),
    check('descripcion', 'Pon descripcion del curso, melon').not().isEmpty(),
    check('url', 'No dejes la titulitis fuera').not().isEmpty(),
    validarCampos
], crearEmpresa);




router.delete('/:id', borrarEmpresa);



module.exports = router;