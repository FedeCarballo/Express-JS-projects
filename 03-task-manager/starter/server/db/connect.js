const mongoose = require('mongoose');

//Hacemos esto de esta manera ya que en app.js utilizaremos una funcion asincrona para inicializar el servidor luego de que la conexion con la base de datos fue exitosa 
const connectDB = (url) => {
   return mongoose
    .connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology:true}).then(console.log('conected succesfully'));
}
module.exports = connectDB;
