var express = require('express');
var router = express.Router();

var CourseController = require('../controllers/course')

/**
 * @swagger
 * /course/create:
 *   post:
 *     summary: creates course
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters: 
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Course'
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/create', CourseController.createCourse)

/**
 * @swagger
 * /course/delete:
 *   post:
 *     summary: deletes course
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: delete course
 *         description: deletes the course having the specified code
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
router.post('/delete', CourseController.deleteCourse)

/**
 * @swagger
 * /course/update:
 *   post:
 *     summary: updates course
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters: 
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Course'
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/update', CourseController.updateCourse)
//router.post('/getall', CourseController.getAllCourses)

/**
 * @swagger
 * /course/getbycode:
 *   post:
 *     summary: gets course by code
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: get course
 *         description: gets course by code
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
router.post('/getbycode', CourseController.getCourseByCode)

module.exports = router;