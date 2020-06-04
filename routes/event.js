var express = require('express');
var router = express.Router();

var EventController = require('../controllers/event')

/**
 * @swagger
 * /event/create:
 *   post:
 *     summary: creates event
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters: 
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Event'
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/create', EventController.createEvent)
//router.post('/getAll', EventController.getAllEvents)

/**
 * @swagger
 * /event/update:
 *   post:
 *     summary: creates event
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters: 
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Event'
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/update', EventController.updateEvent)

/**
 * @swagger
 * /event/delete:
 *   post:
 *     summary: deletes event
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: delete event
 *         description: deletes the event having the specified code
 *         schema:
 *           type: object
 *           required:
 *             - code
 *           properties:
 *             code:
 *               type: number
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/delete', EventController.deleteEvent)

/**
 * @swagger
 * /event/getbycode:
 *   post:
 *     summary: gets event by code
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: get event
 *         description: gets event by code
 *         schema:
 *           type: object
 *           required:
 *             - code
 *           properties:
 *             code:
 *               type: number
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/getbycode', EventController.getEventByCode)


module.exports = router;