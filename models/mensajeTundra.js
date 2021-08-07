const { Schema, model } = require('mongoose')

const mensajetundraSchema = Schema({

        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        mensaje: {
            type: String,
            required: true
        },



    },

);





module.exports = model('Mensajetundra', mensajetundraSchema);