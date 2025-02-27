import express from 'express'
import { addRoom, getRooms, getRoomById, searchRoom } from '../controller/addRoomController.js'
import { verifyToken } from '../utils/verifyUser.js'
const router = express.Router()
router.post('/add-room',verifyToken,addRoom)
router.get('/',getRooms)
router.get('/:propertyId',getRoomById)
router.get('/search/:search',searchRoom)
export default router
