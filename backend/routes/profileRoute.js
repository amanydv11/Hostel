import express from 'express'
import { updateProfile, updateProfilePicture } from '../controller/profileController'
const router = express.Router()


router.post('/update-profile',updateProfile)
router.post('/update-image',updateProfilePicture)