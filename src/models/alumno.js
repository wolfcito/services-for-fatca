var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Alumno = new Schema({
    cedula: String,
    nombre: String,
    apellido: String,
    edad: Number,
    estatura: Number,
    fechaNacimiento: Date,
    direccion: { calle: String, numero: String, interseccion:String },
    telefono:[{_id: false, numero:String, descripcion:String}]
});

module.exports = mongoose.model('Alumno', Alumno);

