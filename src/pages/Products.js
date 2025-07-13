import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const mockProducts = [
  { _id: '1', name: 'Cool T-Shirt', price: 499, imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752349043/3bd5d8104055543.5f5a590049a9f_dzn3nr.png' },
  { _id: '2', name: 'Stylish Hoodie', price: 799, imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752348927/OIP_3_yzravx.webp' },
  { _id: '3', name: 'Cozy Sweater', price: 999, imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752348994/download_ph5l0n.webp' },
  { _id: '4', name: 'Denim Jacket', price: 1299, imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752348873/OIP4_rn55qo.jpg' },
  { _id: '5', name: 'Graphic Tee', price: 599, imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347645/OIP_1_tfrx68.webp' },
  { _id: '6', name: 'Winter Coat', price: 1599, imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347494/BEE-1528-Fashion_Sale_Banners_1_preview4_tqqbmw.jpg' },
  { _id: '7', name: 'Casual Shirt', price: 699, imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347455/b8ce12af4e594bcb26b8f55b0377dad4_on3gzd.jpg' },
  { _id: '8', name: 'Cargo Pants', price: 899, imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/samples/woman-on-a-football-field' },
];

export default function Products() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = (product) => {
    const exists = cartItems.find((item) => item._id === product._id);
    if (exists) {
      setCartItems(cartItems.filter((item) => item._id !== product._id));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 mt-16">
      {mockProducts.map((product) => (
        <div
          key={product._id}
          className="relative border rounded shadow p-4 flex flex-col items-center"
        >
          <button
            className="absolute top-2 right-2 text-red-500 text-2xl"
            onClick={() => toggleCart(product)}
          >
            {cartItems.find((item) => item._id === product._id) ? '❤️' : '🤍'}
          </button>

          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover mb-4"
          />

          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600 mb-4">₹{product.price}</p>

          <Link
            to={`/product/${product._id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Shop Now
          </Link>
        </div>
      ))}
    </div>
  );
}
