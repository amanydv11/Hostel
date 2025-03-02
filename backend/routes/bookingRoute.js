import express from 'express';
import { cancelBooking, createBooking} from '../controller/bookingController.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();
router.post('/create',verifyToken,createBooking);
router.patch('/:bookingId/cancel',verifyToken,cancelBooking)
export default router;
