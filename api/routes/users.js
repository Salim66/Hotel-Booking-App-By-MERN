import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/UserController.js";

// config routes
const router = express.Router();

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);
router.get('/', getAllUser);

// exporft default
export default router;