import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SellerNav = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  const linkClasses = ({ isActive }) =>
    `relative pb-1 transition-all duration-300
     ${isActive ? "text-black font-bold after:w-full" : "text-gray-600"}
     hover:text-black
     after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-black
     after:w-0 hover:after:w-full after:transition-all after:duration-300`;

  return (
    <header className="w-full flex justify-between items-center bg-white text-black p-4 border-b border-black shadow">
      <div className="flex items-center gap-2">
        <img src="/images/ssss.png" className="h-[40px] w-[40px]" alt="logo"/>
        <h3 className="font-bold text-2xl">Sellify</h3>
      </div>

      <nav className="flex gap-10 text-lg font-semibold">
        <NavLink to="/seller/dashboard" className={linkClasses}>
          Dashboard
        </NavLink>
        <NavLink to="/seller/my-products" className={linkClasses}>
          My Products
        </NavLink>
        <NavLink to="/seller/add-product" className={linkClasses}>
          Add Product
        </NavLink>
      </nav>

      <button
        className="w-[80px] rounded px-1 py-2 bg-black text-white font-semibold hover:bg-gray-800 active:bg-gray-950"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default SellerNav;
