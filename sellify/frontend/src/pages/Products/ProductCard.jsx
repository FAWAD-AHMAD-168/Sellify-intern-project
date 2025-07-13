import React, { useState } from "react";
import axios from "axios";
import api from "../../services/api";
import { jwtDecode } from "jwt-decode";

const ProductCard = ({ product, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(product);
  const token = localStorage.getItem("token");

  async function handleDelete() {
    if (!window.confirm("Delete this product?")) return;
    try {
      await api.delete(`/products/${product._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onDelete(product._id);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSave() {
    try {
      const { data } = await api.put(`/products/${product._id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onUpdate(data.product);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="  p-4 shadow space-y-2">
      {isEditing ? (
        <>
          <input
            className="w-full border border-black rounded p-1"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="w-full border border-black rounded p-1"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />
          <textarea
            className="w-full border border-black rounded p-1"
            name="description"
            rows="2"
            value={form.description}
            onChange={handleChange}
          />
          <div className="flex justify-between">
            <button
              onClick={handleSave}
              className="px-2 py-1 bg-black text-white rounded hover:bg-gray-800"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-2 py-1 border border-black rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover rounded"
          />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600 line-clamp-2">{product.description}</p>
          <p className="font-bold">PKR {product.price}</p>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-2 py-1 border border-black bg-gray-500 text-white rounded hover:bg-gray-700 "
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-2 py-1 bg-black text-white rounded hover:bg-gray-800"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
