import express from 'express'
import { updateUser,deleteUser, signout,getUsers, getUser,addWishList,getTripList,propertyList,reservationList } from '../controller/userController.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();
router.put('/update/:userId',verifyToken,updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);
router.post('/signout',signout)
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);
router.patch('/:userId/:propertyId',addWishList);
router.get('/:userId/trips',verifyToken,getTripList);
router.get('/:userId/properties',verifyToken,propertyList);
router.get('/:userId/reservations',verifyToken,reservationList);
export default router;