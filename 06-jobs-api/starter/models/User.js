const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'por favor ingrese un nombre valido'],
        minlength: 3,
        maxlength: 15,
    },
    email: {
        type: String,
        required :[true, 'por favor ingrese un email valido'],
        minlength: 3,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Por favor ingrese un Email valido'
        ],
        unique: true,
    },
    password: {
        type: String,
        required:[true, 'por favor ingrese una contraseña valida'],
        minlength: 6,
    },
})

module.exports = mongoose.model('User', userSchema)