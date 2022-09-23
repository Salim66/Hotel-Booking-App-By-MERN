import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/HotelController.js";

// config routes
const router = express.Router();

router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);
router.get('/:id', getHotel);
router.get('/', getAllHotel);

// exporft default
export default router;