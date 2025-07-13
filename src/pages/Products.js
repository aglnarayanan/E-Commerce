import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);
    if (!exists) {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockProducts.map((product) => (
        <div
          key={product._id}
          className="product-card bg-white rounded-lg shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative overflow-hidden h-64">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <span className="text-blue-600 font-bold">₹{product.price}</span>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <Link
                to={`/products/${product._id}`}
                className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Shop Now
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="w-full text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
