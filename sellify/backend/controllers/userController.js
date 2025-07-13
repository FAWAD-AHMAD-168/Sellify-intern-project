import SellerStatus from "../models/sellerStatusModal.js";

export const getSellerStatus = async (req, res) => {
  try {
    const sellerRecord = await SellerStatus.findOne({ seller: req.user._id});

    if (!sellerRecord) {
      return res.status(404).json({ message: "No record found" });
    }

    res.json({
      isApproved: sellerRecord.isApproved,
      rejectionReason: sellerRecord.rejectionReason || "",
    });
  } catch (err) {
    console.log("getSellerStatus Error:", err);
    res.status(500).json({ message: "Server error while checking seller status" });
  }
};

