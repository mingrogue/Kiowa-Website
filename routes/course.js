var express = require('express');
var router = express.Router();

var CourseController = require('../controllers/course')

router.post('/create', CourseController.createCourse)
router.post('/delete', CourseController.deleteCourse)
router.post('/update', CourseController.updateCourse)
//router.post('/getall', CourseController.getAllCourses)
router.post('/getbycode', CourseController.getCourseByCode)

module.exports = router;