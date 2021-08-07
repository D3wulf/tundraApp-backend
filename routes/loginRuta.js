/*
  Ruta:   api/login     login
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/loginController');

//---------------- VALIDACION DE CAMPOS- MIDDLEWARE ------------//
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

//Las rutas, lo primero que haremos tras llamar al express



router.post('/', [

    check('email', 'El mail es obligatorio').isEmail(),
    check('password', "El password es obligatorio").isLength({ min: 6 }),
    //ULTIMO PORQUE COGERA LOS CHECKS
    validarCampos

], login);


module.exports = router;