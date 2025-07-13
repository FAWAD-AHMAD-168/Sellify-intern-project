// controllers/authController.js
import User from "../models/userModal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import SellerStatus from "../models/sellerStatusModal.js";
dotenv.config();

export const registerUser = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;

        if (!["user", "seller"].includes(role)) {
            return res.status(400).json({ message: "Invalid role for registration" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
            role,
        });

        if (role === "seller") {
            await SellerStatus.create({
                seller: newUser._id,
                isApproved: false,
                rejectionReason: ""
            });
        }

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.log("registerUser error", error);
        res.status(500).json({ message: "Server error" }); // Use 500 for internal error
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ Handle admin login separately
        if (email === process.env.ADMIN_EMAIL) {
            if (password !== process.env.ADMIN_PASSWORD) {
                return res.status(401).json({ message: "Invalid admin credentials" });
            }

            const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "7d" });

            return res.status(200).json({
                message: "This is admin dashboard",
                token,
                role: "admin",
            });
        }

        // ✅ Handle user/seller login
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User does not exist!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        let message = user.role === "seller" ? "This is seller dashboard" : "This is user dashboard";

        res.status(200).json({
            message,
            token,
            role: user.role,
            user,
        });
    } catch (error) {
        console.log("loginUser error", error);
        res.status(500).json({ message: "Server error" }); // Use 500 for internal error
    }
};
