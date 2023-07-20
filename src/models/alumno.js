const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlumnoSchema = new Schema({
  cedula: String,
  nombre: String,
  apellido: String,
  edad: Number,
  estatura: Number,
  fechaNacimiento: Date,
  direccion: { calle: String, numero: String, interseccion: String },
  telefono: [{ _id: false, numero: String, descripcion: String }],
})

const AlumnoModel = mongoose.model('Alumno', AlumnoSchema)

module.exports = AlumnoModel
