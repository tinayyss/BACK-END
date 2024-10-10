const express = require('express');
const { getAllStudent, getStudentById, createStudent, updateStudent, deleteStudent} = require('../controllers/studentController');
const authenticateToken = require('../middlewares/authMiddlewares');

const router =  express.Router();

router.get('/', authenticateToken, getAllStudent);
router.get('/:student_id', authenticateToken, getStudentById);
router.post('/', authenticateToken, createStudent);
router.put('/:student_id', authenticateToken, updateStudent);
router.delete('/:student_id', authenticateToken, deleteStudent);

module.exports = router;