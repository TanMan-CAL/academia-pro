const express = require('express')
const router = express.Router()
const {getStudents, setStudent, updateStudent, deleteStudent} = require('../controllers/studentController')

const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getStudents) //routing each http request to the corresponding function and putting it thruogh the authorization middleware before the function

router.post('/', protect, setStudent)

router.put('/:id', protect, updateStudent)

router.delete('/:id', protect, deleteStudent)


module.exports = router

// CRUD