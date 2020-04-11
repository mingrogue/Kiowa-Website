var express = require('express');
var router = express.Router();

var StudentController = require('../controllers/student')

router.post('/create', StudentController.createStudent)
router.post('/update', StudentController.updateStudent)
router.post('/changepwd', StudentController.changePassword)

module.exports = router;