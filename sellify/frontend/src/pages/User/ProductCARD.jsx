import React from "react";
import { useNavigate } from "react-router-dom";


const ProductCARD = ({ product }) => {

    const token = localStorage.getItem("token");
    const navigate=useNavigate();


    
  return (
    <div className="bg-white text-black rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition w-72 overflow-hidden">
      <img
        src={product.image }
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{product.name}</h2>

        <p className="text-gray-900 mt-1 font-medium">${product.price}</p>

        {product.discount && (
          <p className="text-sm text-gray-500">{product.discount}% off</p>
        )}

        <p className="text-sm text-gray-600 mt-1">
          Seller: {product.seller?.fullname || "Unknown"}
        </p>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-black text-white px-4 py-2  hover:bg-white hover:text-black hover:border active:bg-gray-300 transition-all duration-200"
              disabled={!token} 
             onClick={ ()=>{
                navigate("/buy-page")
             }}
          >
            Add to Bag
          </button>
          <button className="flex-1 border border-black text-black px-4 py-2 active:bg-gray-300 hover:bg-black hover:text-white transition-all duration-200"
             disabled={!token} 
             onClick={ ()=>{
                navigate("/buy-page")
             }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCARD;
