import React, { useEffect, useState } from "react";
import SellerNav from "./SellerNav";

import {jwtDecode} from "jwt-decode";
import api from "../../services/api";


const SDashboard = () => {
  const [stats, setStats] = useState({ total: 0 });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const fetchStats = async () => {
      try {
        const { data } = await api.get("/products");
        
        
        const sellerId = jwtDecode(token).id;
        const mine = data.filter((p) => p.seller._id === sellerId);
        setStats({ total: mine.length });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  const sellerName = (() => {
    const token = localStorage.getItem("token");
    return token ? jwtDecode(token).fullname : "Seller";
  })();

  return (
    <div className="bg-white min-h-screen text-black">
      
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {sellerName}! 🎉
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="border border-black bg-gray-200 rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Products Listed</h2>
            <p className="text-4xl">{stats.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDashboard;
