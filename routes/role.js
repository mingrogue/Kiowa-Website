var express = require('express');
var router = express.Router();

var RoleController = require('../controllers/role')

router.get('/roles', RoleController.getAllRoles)
router.post('/update', RoleController.updateRole)

module.exports = router;
