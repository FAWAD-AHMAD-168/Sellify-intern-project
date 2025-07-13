// src/routes/AppRoutes.jsx
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Admin-page/Dashboard";
import SellerRequests from "../pages/Admin-page/SellerRequests";
import ConfirmedSellers from "../pages/Admin-page/ConfirmedSellers";

import SellerPending from "../pages/Seller/SellerPending";
import SellerRejected from "../pages/Seller/SellerRejected";
import SellerNav from "../pages/Seller/SellerNav";
import SDashboard from "../pages/Seller/SDashboard";






import User from "../pages/User";
import NotFound from "../pages/Notfound";
import Hero from "../pages/Home/Hero";
import "../index.css"; // Ensure global styles are imported
import Hfeatures from "../pages/Home/Hfeatures";
import ProductForm from "../pages/Products/ProductForm";
import MyProducts from "../pages/Products/MyProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Hfeatures />
        <Hero />
      </div>
    ),
  },
  { path: "/login", element: <Login /> },

  { path: "/signup", element: <Signup /> },

  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/admin/seller-requests", element: <SellerRequests /> },
  { path: "/admin/confirmed-sellers", element: <ConfirmedSellers /> },

  { path: "/seller/pending", element: <SellerPending /> },
  { path: "/seller/rejected", element: <SellerRejected /> },

 
  {
    path: "/seller/my-products",
    element: 
    <div> 
       <SellerNav />,
        <MyProducts />
    </div>
    
  },

{
    path: "/seller/add-product",
    element: 
    <div> 
       <SellerNav />,
        <ProductForm />
    </div>
    
  },



  {
    path: "/seller/dashboard",
    element: 
    <div> 
       <SellerNav />,
        <SDashboard />
    </div>
    
  },





  {
    path: "/seller/add-product",
    element: <ProductForm />,
  },

  { path: "/dashboard/user", element: <User /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
