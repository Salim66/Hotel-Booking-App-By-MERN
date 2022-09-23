import express from "express";
import { login, register } from "../controllers/AuthController.js";

// config routes
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// exporft default
export default router;