import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SellerNav from "../Seller/SellerNav";
import api from "../../services/api";

const ProductForm = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    discount: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/products/create", form);   
      navigate("/seller/my-products");
    } catch (err) {
      console.error(err);
      alert("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-black">
      
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full border border-black rounded p-2"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border border-black rounded p-2"
            placeholder="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border border-black rounded p-2"
            placeholder="Discount (%)"
            name="discount"
            type="number"
            value={form.discount}
            onChange={handleChange}
          />
          <textarea
            className="w-full border border-black rounded p-2"
            placeholder="Description"
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
          />
          <input
            className="w-full border border-black rounded p-2"
            placeholder="Image URL"
            name="image"
            value={form.image}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition-all duration-100"
          >
            {loading ? "Saving…" : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
