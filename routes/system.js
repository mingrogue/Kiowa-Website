var express = require('express');
var router = express.Router();

var SystemController = require('../controllers/system')

router.post('/login', SystemController.login)
router.post('/logout', SystemController.logout)
router.post('/logout', SystemController.logout)
router.post('/logout', SystemController.logout)
module.exports = router;