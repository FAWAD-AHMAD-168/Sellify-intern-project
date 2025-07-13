import React from 'react'
import Navbar from '../../components/Navbar'
import ProductCARD from './ProductCARD'
import { useEffect } from 'react'
import { useState } from 'react'
import api from "../../services/api";



const Products = () => {

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        try {
            const response = await api.get('/products/');
            setProducts(response.data);
            console.log("Fetched Products:", response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);
        



  return (
    <div>
      <Navbar />

      <div className="mb-6 mt-6 flex justify-center gap-4">
        <input
          type="text"
          placeholder="Search products..."
          
          className="w-full max-w-md px-4 py-2 border border-black rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button  className='w-[10%] px-2 py-3 bg-black text-white rounded border hover:bg-gray-300 hover:text-black transition-all duration-200'>Search</button>
      </div>


      <h1 className="text-3xl font-bold text-center mt-10">
        Featured Products
      </h1>

      {products.length > 0 ? (
        <div className=" w-[90%]  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto gap-10 mt-10">
          {products.map((product) => (
            <ProductCARD key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-10">No products available</p>
      )}
    </div>
  );
}

export default Products