import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products" className="text-blue-600">Shop Now</Link></p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Qty: {item.qty || 1}</p>
              </div>
              <div className="flex items-center gap-4">
                <p>₹{item.price}</p>
                <button
                  onClick={() => removeItem(item._id)}
                  className="text-red-600 underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold">Total: ₹{total}</p>
            <button
              onClick={() => navigate('/checkout')}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
