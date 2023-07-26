const Alumno = require('../models/alumno')

const healtChecker = () => {
  return '💥 Goodbye world'
}
const getAllStudends = async () => {
  return await Alumno.find()
}
const getAllByCI = async (_cedula) => {
  return await Alumno.find({ cedula: _cedula })
}
const getAllPhonesByDNI = async (_cedula) => {
  return await Alumno.find({ cedula: _cedula }).select('telefono').exec()
}
const deleteStudentByDNI = async (_cedula) => {
  return await Alumno.deleteOne({ cedula: _cedula }, function (err) {
    if (err) return err
  })
}
const deleteStudentByID = async (_id) => {
  return await Alumno.deleteOne({ _id: _id }, function (err) {
    if (err) return err
  })
}
const postCreateStudent = async (alumno) => {
  return await alumno.save(function (err) {
    if (err) return err
  })
}
const putUpdateStudentByDNI = async (_cedula, _edad) => {
  return await Alumno.updateOne(
    { cedula: _cedula },
    { edad: _edad },
    function (err) {
      if (err) return err
    }
  )
}
const putUpdateDirectionByDNI = async (_cedula, _direccion) => {
  return await Alumno.updateOne(
    { cedula: _cedula },
    { direccion: _direccion },
    function (err) {
      if (err) return err
    }
  )
}
const putUpdatePhoneByDNI = async (_cedula, _telefono) => {
  return await Alumno.findOneAndUpdate(
    { cedula: _cedula },
    { $push: { telefono: _telefono } },
    { safe: true, upsert: true },
    function (err, telefono) {
      if (err) return err
    }
  )
}
const deletePhoneByDNI = async (_cedula, _telefono) => {
  return await Alumno.findOneAndUpdate(
    { cedula: _cedula },
    { $pull: { telefono: { numero: _telefono } } },
    { safe: true, upsert: true },
    function (err) {
      if (err) return err
    }
  )
}

module.exports = {
  healtChecker,
  getAllStudends,
  postCreateStudent,
  getAllByCI,
  getAllPhonesByDNI,
  putUpdateStudentByDNI,
  deleteStudentByDNI,
  deleteStudentByID,
  putUpdateDirectionByDNI,
  putUpdatePhoneByDNI,
  deletePhoneByDNI,
}
