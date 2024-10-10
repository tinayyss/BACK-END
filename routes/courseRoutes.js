const express = require('express');
const { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourse} = require('../controllers/courseController');
const authenticateToken = require('../middlewares/authMiddlewares');

const router =  express.Router();

router.get('/', authenticateToken, getAllCourse);
router.get('/:course_id', authenticateToken, getCourseById);
router.post('/', authenticateToken, createCourse);
router.put('/:course_id', authenticateToken, updateCourse);
router.delete('/:course_id', authenticateToken, deleteCourse);

module.exports = router;