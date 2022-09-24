import express from "express";
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/HotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// config routes
const router = express.Router();

router.post('/', verifyAdmin, createHotel);
router.put('/find/:id', verifyAdmin, updateHotel);
router.delete('/find/:id', verifyAdmin, deleteHotel);
router.get('/find/:id', getHotel);
router.get('/', getAllHotel);
router.get('/countByCity', countByCity);
router.get('/countByType', getAllHotel);

// exporft default
export default router;