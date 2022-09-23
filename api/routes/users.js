import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/UserController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// config routes
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyAdmin, deleteUser);
router.get('/:id', verifyUser, getUser);
router.get('/', verifyAdmin,  getAllUser);

// exporft default
export default router;