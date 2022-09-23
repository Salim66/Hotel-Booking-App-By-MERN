import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/HotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// config routes
const router = express.Router();

router.post('/', verifyAdmin, createHotel);
router.put('/:id', verifyAdmin, updateHotel);
router.delete('/:id', verifyAdmin, deleteHotel);
router.get('/:id', getHotel);
router.get('/', getAllHotel);

// exporft default
export default router;