import express from 'express'
import {deleteUser,updateUser,getAllUser,getSingleUser} from '../controllers/usercontroller.js'
const router = express.Router()

import {verifyUser,verifyAdmin} from "../utils/verifyToken.js"


// updateUser
router.put("/:id",verifyUser, updateUser)

// deleteeUser
router.delete("/:id",verifyUser,deleteUser)

// get singleeUser
router.get("/:id", verifyUser,getSingleUser)

// getAlleUser
router.get("/", verifyAdmin,getAllUser)

export default router