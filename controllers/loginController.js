const { response } = require('express');

const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

const login = async(req, res = response) => {

    //cogemos lo que queremos
    const { email, password } = req.body;

    try {
        // Verificar email
        const usuarioDB = await Usuario.findOne({ email });

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        //verificar contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        res.json({
            ok: true,
            msg: 'Login correcto',
            //menu: getMenuFront(usuarioDB.role),

        })


    } catch (error) {
        console.log(error);
        console.log("Error en el auth-catch");
        res.status(500).json({
            ok: false,
            msg: 'Fallo en el logincontroller-por-descubrir',
            msg2: error
        })
    }
}


module.exports = { login }