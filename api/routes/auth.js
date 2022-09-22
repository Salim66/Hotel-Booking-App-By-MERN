import express from "express";

// config routes
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Request back to auth route');    
})

// exporft default
export default router;