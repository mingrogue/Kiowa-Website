var express = require('express');
var router = express.Router();

var TeacherController = require('../controllers/teacher')

/**
 * @swagger
 * /teacher/update:
 *   post:
 *     summary: updates teacher
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters: 
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Teacher'
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/update', TeacherController.updateTeacher)

/**
 * @swagger
 * /teacher/changepwd:
 *   post:
 *     summary: changes the password of teacher
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: changes the password of teacher
 *         description: changes the password of teacher
 *         schema:
 *           type: object
 *           required:
 *             - password
 *             - newpassword
 *           properties:
 *             password:
 *               type: string
 *             newpassword:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/changepwd', TeacherController.changePassword)

module.exports = router;