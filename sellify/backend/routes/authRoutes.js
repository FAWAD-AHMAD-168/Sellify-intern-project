import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
const router = express.Router();

//register route for user or seller
router.post("/register", registerUser);

// login route for (user, seller, admin)
router.post("/login", loginUser);


export default router;
