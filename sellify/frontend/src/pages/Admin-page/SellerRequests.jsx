import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminNavbar from "./AdminNav";
import { toast } from 'react-toastify';

const SellerRequests = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const res = await api.get("/admin/pending-sellers");
    setSellers(res.data.pendingSellers);
  };

  const handleApprove = async (id) => {
    await api.put(`/admin/approve-seller/${id}`);
        toast.success("Seller approved successfully! 🎉");

    fetchRequests();
  };

  const handleReject = async (id) => {
    const reason = prompt("Enter rejection reason:");
    if (!reason) return;
    await api.put(`/admin/reject-seller/${id}`, { reason });
    toast.error(`Seller rejected: ${reason} ❌`);
    fetchRequests();
  };

  return (
    <div className="bg-white min-h-screen text-black">
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Pending Seller Requests</h1>

        {sellers.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          sellers.map((seller) => (
            <div key={seller._id} className="border border-black rounded-lg p-4 mb-4 flex justify-between items-center">
              <span>{seller.seller.fullname} - {seller.seller.email}</span>
              <div className="flex gap-2">
                <button onClick={() => handleApprove(seller.seller._id)} className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Approve</button>
                <button onClick={() => handleReject(seller.seller._id)} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">Reject</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SellerRequests;
