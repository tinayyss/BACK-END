const express = require('express');
const { getAllDept, getDeptById, createDept, updateDept, deleteDept} = require('../controllers/deptController');
const authenticateToken = require('../middlewares/authMiddlewares');

const router =  express.Router();

router.get('/', authenticateToken, getAllDept);
router.get('/:dept_id', authenticateToken, getDeptById);
router.post('/', authenticateToken, createDept);
router.put('/:dept_id', authenticateToken, updateDept);
router.delete('/:dept_id', authenticateToken, deleteDept);

module.exports = router;