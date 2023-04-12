const mongoose = require('mongoose')

//Creamos el esquema que enviaremos a la base de datos: 
const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'debes dar un nombre'],
        trim:true,
        maxlength:[60, 'El nombre no debe tener mas de 20 caracteres']
    },
    completed: {
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)
//Creamos la collection Task para enviar la data 