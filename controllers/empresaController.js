const { response } = require('express');

const Enterprise = require('../models/enterprise');

const getEmpresas = async(req, res = response) => {

    const empresas = await Enterprise.find();


    res.json({

        empresas

    });
}

const crearEmpresa = async(req, res = response) => {

    const empresa = new Enterprise(req.body);





    try {

        const empresaDB = await empresa.save();


        res.json({
            ok: true,
            msg: 'Todo correcto al añadir empresa',
            empresaDB


        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al añadir empresa'
        })

    }

}

const borrarEmpresa = async(req, res = response) => {

    const uid = req.params.id;

    try {

        const empresaDB = await Enterprise.findById(uid);

        if (!empresaDB) {

            return res.status(404).json({
                ok: false,
                msg: ' No existe empresa con ese ID'
            })
        }

        //mete en una constante lo que mandamos como id, los campos del body y que nos devuelva lo nuevo
        await Enterprise.findByIdAndDelete(uid);

        res.json({
            ok: true,
            msg: 'empresa borrada!',
            uid
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({

            msg: 'Error en borrar empresa'
        });

    }

}



module.exports = { getEmpresas, crearEmpresa, borrarEmpresa };