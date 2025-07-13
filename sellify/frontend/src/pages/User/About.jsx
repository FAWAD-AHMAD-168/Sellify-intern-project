import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const About = () => {


 const handleToast = () => {
  toast.success("Let's get started with Sellify! Sign up as seller", {
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  });

  setTimeout(() => {
    navigate("/signup");
  }, 3000); // ⏱️ match with autoClose time
};


  
  const navigate=useNavigate();
  return (


    <div> 
      <Navbar/>

   
    
    <div className="bg-white text-black min-h-screen px-6 py-10 md:px-20">
      
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">Sellify</h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700">
          Welcome to <strong>Sellify</strong>, your trusted marketplace where sellers grow, and shoppers discover quality products at unbeatable prices.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-800 leading-relaxed">
          At Sellify, our mission is to empower individuals and businesses to sell online effortlessly while offering customers a smooth, reliable shopping experience. 
          We believe that every seller deserves a chance to grow — whether they are launching a side hustle or building the next big brand.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">How We Started</h2>
        <p className="text-gray-800 leading-relaxed">
          Sellify began as a college project between two friends who noticed how difficult it was for small vendors to get online. What started with a few handmade crafts
          has now grown into a powerful platform helping hundreds of sellers showcase their products to the world.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>🛒 Simplicity for sellers and buyers alike</li>
          <li>🔐 Security & trust at every step</li>
          <li>🚀 Continuous innovation and improvement</li>
          <li>🧍‍♂️ People-first culture</li>
          <li>📦 Reliable shipping and fair return policies</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Sellify?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border p-4 rounded-lg hover:shadow hover:bg-gray-400  transition-all duration-200">
            <h3 className="text-xl font-medium mb-2">✔ Easy Seller Onboarding</h3>
            <p className="text-gray-700">Get started in minutes with our streamlined seller verification process.</p>
          </div>
          <div className="border p-4 rounded-lg hover:shadow hover:bg-gray-400 transition-all duration-200">
            <h3 className="text-xl font-medium mb-2">✔ Customer-First Design</h3>
            <p className="text-gray-700">Modern interface and smooth checkout make shopping a breeze.</p>
          </div>
          <div className="border p-4 rounded-lg hover:shadow hover:bg-gray-400 transition-all duration-200">
            <h3 className="text-xl font-medium mb-2">✔ Secure Payments</h3>
            <p className="text-gray-700">Transactions are safe and protected with SSL and secure gateways.</p>
          </div>
          <div className="border p-4 rounded-lg hover:shadow hover:bg-gray-400 transition-all duration-200">
            <h3 className="text-xl font-medium mb-2">✔ Real-Time Seller Tools</h3>
            <p className="text-gray-700">Track orders, manage inventory, and connect with customers easily.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
        <p className="text-gray-800 leading-relaxed">
          We’re a small but passionate team of developers, designers, and business minds — united by our belief in building something impactful. 
          (Team details coming soon!)
        </p>
      </section>

      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-700 mb-6">Join Sellify today and become part of the future of e-commerce.</p>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        
        onClick={handleToast}
          
          
        >
          Start Selling Now
        </button>
      </section>
            <ToastContainer />

    </div>
     </div>
  );
};

export default About;
