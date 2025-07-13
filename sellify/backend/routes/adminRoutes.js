import express from "express";
import {
    getAllUsers,
    getPendingSellers,
    approveSeller,
    rejectSeller
} from "../controllers/adminController.js";

import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Admin-only routes
router.get("/users", protect, authorizeRoles("admin"), getAllUsers);
router.get("/pending-sellers", protect, authorizeRoles("admin"), getPendingSellers);
router.put("/approve-seller/:id", protect, authorizeRoles("admin"), approveSeller);
router.put("/reject-seller/:id", protect, authorizeRoles("admin"), rejectSeller);

export default router;
