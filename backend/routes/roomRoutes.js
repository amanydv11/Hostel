import express from 'express'
import { addRoom, getRooms, getRoomById, searchRoom } from '../controller/addRoomController.js'
import { verifyToken } from '../utils/verifyUser.js'
const router = express.Router()
router.post('/add-room',verifyToken,addRoom)
router.get('/',verifyToken,getRooms)
router.get('/:propertyId',verifyToken,getRoomById)
router.get('/search/:search',verifyToken,searchRoom)
export default router
