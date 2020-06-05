var express = require('express');
var router = express.Router();

var AdminController = require('../controllers/admin')
var StudentController = require('../controllers/student')
var TeacherController = require('../controllers/teacher')

/**
 * @swagger
 * /admin/create:
 *   post:
 *     summary: creates admin
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters: 
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Admin'
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/create', AdminController.createAdmin)

/**
 * @swagger
 * /admin/delete:
 *   post:
 *     summary: deletes admin
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: delete admin
 *         description: deletes the admin having the specified email id
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/delete', AdminController.deleteAdmin)

/**
 * @swagger
 * /admin/activate:
 *   post:
 *     summary: activates admin
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: activate admin
 *         description: activates the admin having the specified email id
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/activate', AdminController.activateAdmin)

/**
 * @swagger
 * /admin/update:
 *   post:
 *     summary: updates admin
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters: 
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Admin'
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/update', AdminController.updateAdmin)

/**
 * @swagger
 * /admin/getall:
 *   get:
 *     summary: gets all admins
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.get('/getall', AdminController.getAllAdmins)

/**
 * @swagger
 * /admin/getbyemail:
 *   post:
 *     summary: get admin by email
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: gets admin by email
 *         description: gets the admin having the specified email id
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/getbyemail', AdminController.getAdminByEmail)

/**
 * @swagger
 * /admin/changepwd:
 *   post:
 *     summary: changes the password of admin
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: changes the password of admin
 *         description: changes the password of admin
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
router.post('/changepwd', AdminController.changePasswordAdmin)

/**
 * @swagger
 * /admin/create/student:
 *   post:
 *     summary: creates student
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
router.post('/create/student', StudentController.createStudent)

/**
 * @swagger
 * /admin/delete/student:
 *   post:
 *     summary: deletes student
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: delete student
 *         description: deletes the student having the specified email id
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/delete/student', StudentController.deleteStudent)

/**
 * @swagger
 * /admin/getbyemail/student:
 *   post:
 *     summary: get student by email
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: gets studnet by email
 *         description: gets the student having the specified email id
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/getbyemail/student', StudentController.getStudentByEmail)

/**
 * @swagger
 * /admin/getall/student:
 *   get:
 *     summary: gets all students
 *     security:
 *       - APIKeyHeader: []
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/getall/student', StudentController.getAllStudents)

/**
 * @swagger
 * /admin/changepwd/student:
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
 *             newpassword:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/changepwd/student', StudentController.changePassword)

/**
 * @swagger
 * /admin/getall/teacher:
 *   get:
 *     summary: gets all teachers
 *     security:
 *       - APIKeyHeader: []
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/getall/teacher', TeacherController.getAllTeachers)

/**
 * @swagger
 * /admin/getbyemail/teacher:
 *   post:
 *     summary: get teacher by email
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: gets studnet by email
 *         description: gets the teacher having the specified email id
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/getbyemail/teacher', TeacherController.getTeacherByEmail)

/**
 * @swagger
 * /admin/create/teacher:
 *   post:
 *     summary: creates teacher
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
router.post('/create/teacher', TeacherController.createTeacher)

/**
 * @swagger
 * /admin/delete/teacher:
 *   post:
 *     summary: deletes teacher
 *     consumes:
 *       - application/json
 *     security:
 *       - APIKeyHeader: []
 *     parameters:
 *       - in: body
 *         name: delete teacher
 *         description: deletes the teacher having the specified email id
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       '200':
 *         description: success
 *       '500':
 *         description: internal server error
 *     
 */
router.post('/delete/teacher', TeacherController.deleteTeacher)


module.exports = router;