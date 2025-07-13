import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white text-black py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
      
      
      
      {/* Left part  yahan se shruu ho rha ha  */}

      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Your One-Stop Marketplace – <br /> Buy or Sell with Ease
        </h1>

        <p className="text-lg mb-8 max-w-md">
          Browse thousands of products or start selling your own – all in one
          powerful platform.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => navigate("/products")}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-900 transition-all duration-200"
          >
            Start Shopping
          </button>

          <button
            onClick={() => navigate("/seller")}
            className="border border-black bg-gray-300 text-black px-6 py-3 rounded 
             hover:bg-gray-600 hover:scale-105 hover:shadow-md 
             transition-all duration-200 ease-in-out"
          >
            Become a Seller
          </button>
        </div>
      </div>




      {/* Right Part  yahan se shru ho rha hai */}




      <div className="md:w-1/2 flex justify-center">
        <img
          src="../images/hero2.svg"
          alt="Cart"
          className="w-full max-w-[300px]"
        />
      </div>
    </section>
  );
};

export default Hero;
