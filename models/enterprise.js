const { Schema, model } = require('mongoose')

const EnterpriseSchema = Schema({

        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        url: {

            type: String,
            required: true,

        }

    },

);





module.exports = model('Enterprise', EnterpriseSchema);