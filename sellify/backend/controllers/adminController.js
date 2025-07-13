import User from "../models/userModal.js";
import SellerStatus from "../models/sellerStatusModal.js";

// ✅ Get all users
export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({}, "fullname email role createdAt");
        res.status(200).json({ message: "Users exist", allUsers });
    } catch (error) {
        console.log("getAllUsers Error:", error);
        res.status(500).json({ message: "Error fetching users" });
    }
};

// 🕓 Get pending sellers
export const getPendingSellers = async (req, res) => {
    try {
        const pendingSellers = await SellerStatus.find({ isApproved: false,rejectionReason: { $in: [null, ""]} })
            .populate("seller", "fullname email");
        res.status(200).json({ message: "Pending sellers", pendingSellers });
    } catch (error) {
        console.log("getPendingSellers Error:", error);
        res.status(500).json({ message: "Error fetching sellers" });
    }
};

// ✅ Approve seller
export const approveSeller = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);
        if (!user || user.role !== "seller") {
            return res.status(400).json({ message: "Only seller accounts can be approved" });
        }

        let status = await SellerStatus.findOne({ seller: id });
        if (!status) {
            status = new SellerStatus({ seller: id, isApproved: true });
        } else {
            status.isApproved = true;
            status.rejectionReason = undefined;
        }

        await status.save();
        console.log("Seller approved:", status);
        res.status(200).json({ message: "Seller approved successfully" });
    } catch (error) {
        console.log("Seller approval error:", error);
        res.status(500).json({ message: "Error approving seller" });
    }
};

// ❌ Reject seller
export const rejectSeller = async (req, res) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;

        const user = await User.findById(id);
        if (!user || user.role !== "seller") {
            return res.status(400).json({ message: "Only seller accounts can be rejected" });
        }

        let status = await SellerStatus.findOne({ seller: id });

        if (!status) {
            status = new SellerStatus({
                seller: id,
                isApproved: false,
                rejectionReason: reason,
            });
        } else {
            status.isApproved = false;
            status.rejectionReason = reason;
        }

        await status.save();
        res.status(200).json({ message: "Seller rejected successfully", reason });
    } catch (error) {
        console.log("Seller rejection error:", error);
        res.status(500).json({ message: "Error rejecting seller" });
    }
};
