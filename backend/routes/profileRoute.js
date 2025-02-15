import express from 'express'
import { updateProfile, updateProfilePicture,getProfile } from '../controller/profileController.js'
import { verifyToken } from '../utils/verifyUser.js'
const router = express.Router()
router.post('/update-profile',verifyToken,updateProfile)
router.put('/update-image' ,verifyToken ,updateProfilePicture)
router.get('/get-profile',verifyToken,getProfile)
export default router;