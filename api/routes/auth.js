import express from "express";
import { register, login } from "../controllers/UserController.js";

// config routes
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// exporft default
export default router;