import mongoose from "mongoose";

const sellerStatusSchema = mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    rejectionReason: {
        type: String,
    }
},{timestamps: true});

const SellerStatus = mongoose.model("SellerStatus", sellerStatusSchema);

export default SellerStatus;