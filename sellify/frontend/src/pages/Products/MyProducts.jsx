import React, { useEffect, useState } from "react";

import axios from "axios";
import {jwtDecode} from "jwt-decode";
import ProductCard from "./ProductCard";
import api from "../../services/api";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const {data} = await api.get("/products");
        
        
        const sellerId = jwtDecode(token).id;
        setProducts(data.filter((p) => p.seller._id === sellerId));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyProducts();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="bg-white min-h-screen text-black">
     
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">My Products</h1>
        {products.length === 0 ? (
          <p>You have no products yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onDelete={(id) =>
                  setProducts(products.filter((p) => p._id !== id))
                }
                onUpdate={(updated) =>
                  setProducts(
                    products.map((p) => (p._id === updated._id ? updated : p))
                  )
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
