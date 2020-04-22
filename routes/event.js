var express = require('express');
var router = express.Router();

var EventController = require('../controllers/event')

router.post('/create', EventController.createEvent)
//router.post('/getAll', EventController.getAllEvents)
router.post('/update', EventController.updateEvent)
router.post('/delete', EventController.deleteEvent)
router.post('/getbycode', EventController.getEventByCode)


module.exports = router;