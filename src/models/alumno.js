var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Alumno = new Schema({
    cedula: String,
    nombre: String,
    apellido: String,
    edad: Number,
    estatura: Number,
    fechaNacimiento: Date,
    direccion: { calle1: String, calle2: String },
    telefono:[String]
});

module.exports = mongoose.model('Alumno', Alumno);

