const AlumnoService = require('../services/alumno.services')

const healtChecker = async (req, res) => {
  const healthCheckerMessage = AlumnoService.healtChecker()
  res.send({ status: 'OK', data: healthCheckerMessage })
}

const getAllStudends = async (req, res) => {
  const allStudents = await AlumnoService.getAllStudends()
  res.status(200).send({ status: 'OK', data: allStudents })
}

const getAllByCI = async (req, res) => {
  const oneStudent = await AlumnoService.getAllByCI(req.params.ci)
  res.status(200).send({ status: 'OK', data: oneStudent })
}

const getAllPhonesByDNI = async (req, res) => {
  const phones = await AlumnoService.getAllPhonesByDNI(req.params.ci)
  res.status(200).send({ status: 'OK', data: phones })
}

const deleteStudentByDNI = async (req, res) => {
  const studentDeleted = await AlumnoService.deleteStudentByDNI(req.params.ci)
  res.status(200).send({ status: 'OK', data: studentDeleted })
}

const deleteStudentByID = async (req, res) => {
  const studentDeleted = await AlumnoService.deleteStudentByID(req.params.id)
  res.status(200).send({ status: 'OK', data: studentDeleted })
}

const postCreateStudent = async (req, res) => {
  const newStudent = new Alumno(req.body)
  const studentCreated = await AlumnoService.postCreateStudent(newStudent)
  res.status(200).send({ status: 'OK', data: studentCreated })
}

const putUpdateStudentByDNI = async (req, res) => {
  const updateStudent = await AlumnoService.putUpdateStudentByDNI(
    req.params.ci,
    req.body.edad
  )
  res.status(200).send({ status: 'OK', data: updateStudent })
}

const putUpdateDirectionByDNI = async (req, res) => {
  const directionUpdated = await AlumnoService.putUpdateDirectionByDNI(
    req.params.ci,
    req.body.direccion
  )
  res.status(200).send({ status: 'OK', data: directionUpdated })
}

const putUpdatePhoneByDNI = async (req, res) => {
  const phoneUpdated = await AlumnoService.putUpdatePhoneByDNI(
    req.params.ci,
    req.body.telefono
  )
  res.status(200).send({ status: 'OK', data: phoneUpdated })
}

const deletePhoneByDNI = async (res, req) => {
  const phoneDeleted = await AlumnoService.deletePhoneByDNI(
    req.params.ci,
    req.body.telefono
  )
  res.status(200).send({ status: 'OK', data: phoneDeleted })
}

module.exports = {
  healtChecker,
  getAllStudends,
  getAllByCI,
  getAllPhonesByDNI,
  deleteStudentByDNI,
  deleteStudentByID,
  postCreateStudent,
  putUpdateStudentByDNI,
  putUpdateDirectionByDNI,
  putUpdatePhoneByDNI,
  deletePhoneByDNI,
}
