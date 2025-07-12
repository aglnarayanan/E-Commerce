// frontend/src/pages/Checkout.js
import { useEffect } from 'react';
import api from '../api';

export default function Checkout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePayment = async () => {
    const { data } = await api.post('/payment/create', { amount: total });

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: 'MyShop',
      handler: function (response) {
        alert('Payment Successful!');
        localStorage.removeItem('cart');
      },
      theme: {
        color: '#4F46E5',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p>Total Amount: ₹{total}</p>
      <button onClick={handlePayment} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Pay with Razorpay
      </button>
    </div>
  );
}
