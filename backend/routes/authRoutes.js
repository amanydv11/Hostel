import express from 'express'
import { signup,signin,google,forgotpassword, resetPassword, facebook, sendVerifyOtp } from '../controller/authController.js';
const router = express.Router();

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/google',google)
router.post('/facebook',facebook)
router.post('/send-verify-otp',sendVerifyOtp)
router.post('/forgot-password',forgotpassword)
router.post('/reset-password/:token',resetPassword)
export default router;