import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/RoomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// config routes
const router = express.Router();

router.post('/:hotelid', verifyAdmin, createRoom);
router.put('/:id', verifyAdmin, updateRoom);
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
router.get('/:id', getRoom);
router.get('/', getAllRoom);

// exporft default
export default router;