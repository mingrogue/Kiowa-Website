var express = require('express');
var router = express.Router();

var TeacherController = require('../controllers/teacher')

router.post('/update', TeacherController.updateTeacher)
router.post('/changepwd', TeacherController.changePassword)

module.exports = router;