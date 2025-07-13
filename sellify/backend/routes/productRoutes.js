import express from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Public - View all products
router.get("/", getAllProducts);

// ✅ Public - View a single product by ID
router.get("/:id", getProductById);

// ✅ Seller only - Create product
router.post("/create", protect, authorizeRoles("seller"), createProduct);

// ✅ Seller only - Update their product
router.put("/:id", protect, authorizeRoles("seller"), updateProduct);

// ✅ Seller only - Delete their product
router.delete("/:id", protect, authorizeRoles("seller"), deleteProduct);

export default router;
