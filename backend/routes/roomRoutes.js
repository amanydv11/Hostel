import express from 'express'
import { addRoom, getRooms } from '../controller/addRoomController.js'
import { verifyToken } from '../utils/verifyUser.js'
const router = express.Router()

router.post('/add-room',verifyToken,addRoom)
router.get('/get-rooms',verifyToken,getRooms)
export default router
