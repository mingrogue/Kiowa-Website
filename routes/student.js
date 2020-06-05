var express = require('express');
var router = express.Router();

var StudentController = require('../controllers/student')

/**
 * @swagger
 * /student/update:
 *   post:
 *     summary: updates student
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Student'
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/update', StudentController.updateStudent)

/**
 * @swagger
 * /student/changepwd:
 *   post:
 *     summary: changes the password of student
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: changes the password of student
 *         description: changes the password of student
 *         schema:
 *           type: object
 *           required:
 *             - password
 *             - newpassword
 *           properties:
 *             password:
 *               type: string
 *               description: this is the old password
 *             newpassword:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/changepwd', StudentController.changePassword)

module.exports = router;