var express = require('express');
var router = express.Router();

var AdminController = require('../controllers/admin')
var StudentController = require('../controllers/student')
var TeacherController = require('../controllers/teacher')

router.post('/create', AdminController.createAdmin)
router.post('/delete', AdminController.deleteAdmin)
router.post('/activate', AdminController.activateAdmin)
router.post('/update', AdminController.updateAdmin)
router.post('/getall', AdminController.getAllAdmins)
router.post('/getbyemail', AdminController.getAdminByEmail)
router.post('/changepwd', AdminController.changePasswordAdmin)
router.post('/create/Student', StudentController.createStudent)
router.post('/delete/Student', StudentController.deleteStudent)
router.post('/getbyemail/Student', StudentController.getStudentByEmail)
router.post('/getall/Student', StudentController.getAllStudents)
router.post('/changepwd/Student', StudentController.changePassword)
router.post('/getall/Teacher', TeacherController.getAllTeachers)
router.post('/getbyemail/Teacher', TeacherController.getTeacherByEmail)
router.post('/create/Teacher', TeacherController.createTeacher)
router.post('/delete/Teacher', TeacherController.deleteTeacher)


module.exports = router;