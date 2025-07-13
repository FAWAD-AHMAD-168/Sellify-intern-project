import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNav";
import api from "../../services/api";

const ConfirmedSellers = () => {
  const [approvedSellers, setApprovedSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchApprovedSellers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/admin/approved-sellers")
      
      setApprovedSellers(response.data.approvedSellers);
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Unauthorized: Please login again.");
        
      } else {
        console.error("Error fetching approved sellers:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  fetchApprovedSellers();
}, []);


  return (
    <div className="bg-white min-h-screen text-black">
      <AdminNavbar />
      <div className="p-6 ">
        <h1 className="text-2xl font-bold mb-4">Confirmed Sellers</h1>

        {loading ? (
          <p>Loading sellers...</p>
        ) : approvedSellers.length === 0 ? (
          <p>No approved sellers found.</p>
        ) : (
          <ul className="space-y-2 grid grid-cols-4 gap-4">
            {approvedSellers.map((seller) => (
              <li key={seller._id} className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 border border-black p-3 rounded">
                <p><strong>Name:</strong> {seller.seller.fullname}</p>
                <p><strong>Email:</strong> {seller.seller.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ConfirmedSellers;
