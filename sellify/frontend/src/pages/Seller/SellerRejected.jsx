import { useLocation } from "react-router-dom";

const SellerRejected = () => {
  const { state } = useLocation();
  const reason = state?.reason || "No reason provided";

  return (
    <div className="min-h-screen flex items-center justify-center text-black">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">Seller Request Rejected</h1>
        <p className="mt-4 text-lg">Reason: {reason}</p>
      </div>
    </div>
  );
};

export default SellerRejected;
