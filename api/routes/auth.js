import express from "express";
import { register } from "../controllers/UserController.js";

// config routes
const router = express.Router();

router.post('/register', register);

// exporft default
export default router;