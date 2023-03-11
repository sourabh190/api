import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';

// ROute Level Middleware - To Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was successfully register
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * 
 *  
 */

router.post('/register', UserController.userRegistration)


/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User Login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was successfully login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * 
 *  
 */

router.post('/login', UserController.userLogin)

/**
 * @swagger
 * /api/user/send-reset-password-email:
 *   post:
 *     summary: Send Reset Password Email
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was successfully login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * 
 *  
 */
router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)

/**
 * @swagger
 * /api/user/send-reset-password-email/:id/:token:
 *   post:
 *     summary: Send Reset Password Email
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was successfully login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * 
 *  
 */
router.post('/reset-password/:id/:token', UserController.userPasswordReset)

// Protected Routes


/**
 * @swagger
 *  /api/user/changepassword:
 *   post:
 *     parameters: [{ name: "Authorization", in: "header", type: "string", description: "auth token" }]
 *     summary: change Password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was successfully change Password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * 
 *  
 */



router.post('/changepassword', UserController.changeUserPassword)


/**
 * @swagger
 *  /api/user/loggeduser:
 *   get:
 *     parameters: [{ name: "Authorization", in: "header", type: "string", description: "auth token" }]
 *     summary: logged User Details
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: logged Users Details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * 
 *  
 */

router.get('/loggeduser', UserController.loggedUser)


export default router