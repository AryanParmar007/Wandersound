import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
import { createBooking, getAllBooking,getBooking} from '../controllers/bookingcontroller.js'

const router = express.Router()

router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getBooking)
router.post('/',verifyAdmin,getAllBooking)

export default router
