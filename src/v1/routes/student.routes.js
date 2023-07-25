const express = require('express')

const {
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
} = require('../../controllers/service.controller')

const router = express.Router()

router
  .get('/', healtChecker)
  .get('/students', getAllStudends)
  .get('/student/:ci', getAllByCI)
  .get('/phones/:ci', getAllPhonesByDNI)
  .put('/update/student/:ci', putUpdateStudentByDNI)
  .put('/update/address/:ci', putUpdateDirectionByDNI)
  .put('/update/phone/:ci', putUpdatePhoneByDNI)
  .post('/create', postCreateStudent)
  .delete('/delete/phone/:ci', deletePhoneByDNI)
  .delete('/delete/dni/:ci', deleteStudentByDNI)
  .delete('/delete/id/:id', deleteStudentByID)

module.exports = router
