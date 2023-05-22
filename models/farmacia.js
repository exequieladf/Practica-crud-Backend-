const {Schema, model} = require('mongoose');

const schema = new Schema ({
    producto:{
        type:String,
        required: true
    },
    id:{
        type:Number,
        required: true
    },
    precio:{
        type:Number,
        required: true
    },
    utilidad:{
        type:String,
        required: true
    },
    ventaLibre:{
        type:Boolean,
        required: true
    },
    retiro: {
        type:String,
        required: true,
        emun: ['envio', 'presencial']
    }
})

const Farmaciaa = model('Farmacia', schema);
module.exports = { Farmaciaa }