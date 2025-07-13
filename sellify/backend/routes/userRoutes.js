    import express from "express";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";
import { getSellerStatus } from "../controllers/userController.js";


const router = express.Router();

router.get("/profile", protect, (req, res) => {
    res.json({ message: "Welcome" + req.user.role });
});

router.get("/admin/dashboard", protect, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin" });
});



export default router;