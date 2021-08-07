const { response } = require('express');

const mensajeTundra = require('../models/mensajeTundra');

const getMensajes = async(req, res = response) => {

    const mensajes = await mensajeTundra.find();

    res.json({

        mensajes

    });
}

const crearMensaje = async(req, res = response) => {

    const mensaje = new mensajeTundra(req.body);

    try {

        const mensajeDB = await mensaje.save();

        res.json({
            ok: true,
            msg: 'Todo correcto al enviar mensaje',
            mensajeDB

        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al enviar mensaje'
        })

    }

}

const borrarMensaje = async(req, res = response) => {

    const uid = req.params.id;

    try {

        const mensajeDB = await mensajeTundra.findById(uid);

        if (!mensajeDB) {

            return res.status(404).json({
                ok: false,
                msg: ' No existe mensaje con ese ID'
            })
        }

        //mete en una constante lo que mandamos como id, los campos del body y que nos devuelva lo nuevo
        await mensajeTundra.findByIdAndDelete(uid);

        res.json({
            ok: true,
            msg: 'mensaje borrado!',
            uid
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({

            msg: 'Error en borrar mensaje'
        });

    }

}



module.exports = { getMensajes, crearMensaje, borrarMensaje };