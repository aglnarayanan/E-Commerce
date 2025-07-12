import { useParams } from 'react-router-dom';
import { useState } from 'react';

// 👉 Example product data (replace with your real DB data)
const mockProducts = [
  {
    _id: '1',
    name: 'Harry Potter: Dark Arts',
    category: 'Super Oversized T-Shirts',
    price: 1299,
    description: 'This is an awesome Harry Potter themed oversized T-shirt.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752349043/3bd5d8104055543.5f5a590049a9f_dzn3nr.png',
  },
  {
    _id: '2',
    name: 'Another Product',
    category: 'Category',
    price: 999,
    description: 'Another product description.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752348927/OIP_3_yzravx.webp',
  },
  {
    _id: '3',
    name: 'Another Product',
    category: 'Category',
    price: 999,
    description: 'Another product description.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752348994/download_ph5l0n.webp',
  },
  {
    _id: '4',
    name: 'Harry Potter: Dark Arts',
    category: 'Super Oversized T-Shirts',
    price: 1299,
    description: 'This is an awesome Harry Potter themed oversized T-shirt.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752348873/OIP4_rn55qo.jpg',
  },
  {
    _id: '5',
    name: 'Another Product',
    category: 'Category',
    price: 999,
    description: 'Another product description.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347645/OIP_1_tfrx68.webp',
  },
  {
    _id: '6',
    name: 'Another Product',
    category: 'Category',
    price: 999,
    description: 'Another product description.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347494/BEE-1528-Fashion_Sale_Banners_1_preview4_tqqbmw.jpg',
  },
  {
    _id: '7',
    name: 'Harry Potter: Dark Arts',
    category: 'Super Oversized T-Shirts',
    price: 1299,
    description: 'This is an awesome Harry Potter themed oversized T-shirt.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347455/b8ce12af4e594bcb26b8f55b0377dad4_on3gzd.jpg',
  },
  {
    _id: '8',
    name: 'Another Product',
    category: 'Category',
    price: 999,
    description: 'Another product description.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/samples/woman-on-a-football-field',
  },
  {
    _id: '9',
    name: 'Another Product',
    category: 'Category',
    price: 999,
    description: 'Another product description.',
    imageUrl: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752349043/3bd5d8104055543.5f5a590049a9f_dzn3nr.png',
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find((p) => p._id === id);

  const [showMiniCart, setShowMiniCart] = useState(false);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find((item) => item._id === product._id);
    if (!exists) {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowMiniCart(true); // ✅ Open popup
  };

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div>
        <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg" />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl mb-4">₹ {product.price}</p>
        <p className="mb-6">{product.description}</p>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded mr-4"
        >
          Add to Cart
        </button>

        <button
          onClick={() => handlePayment(product)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Pay Now
        </button>
      </div>

      {/* ✅ Mini Cart Popup */}
      {showMiniCart && (
        <div className="fixed right-4 top-20 bg-white border shadow-lg p-4 w-64 rounded z-50">
          <h2 className="text-lg font-bold mb-2">Cart</h2>
          <div className="mb-4">
            {JSON.parse(localStorage.getItem('cart')).map((item) => (
              <div key={item._id} className="flex justify-between mb-2">
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
          <a
            href="/cart"
            className="block bg-green-600 text-center text-white px-4 py-2 rounded"
          >
            Go to Cart
          </a>
          <button
            onClick={() => setShowMiniCart(false)}
            className="mt-2 text-sm text-gray-500 underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

// ✅ Optional Razorpay payment (keep as is, or handle inline)
function handlePayment(product) {
  if (!window.Razorpay) {
    alert('Razorpay SDK not loaded.');
    return;
  }

  const options = {
    key: 'YOUR_RAZORPAY_KEY',
    amount: product.price * 100,
    currency: 'INR',
    name: product.name,
    description: 'Order Payment',
    handler: function (response) {
      alert(`Payment success! ID: ${response.razorpay_payment_id}`);
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}
