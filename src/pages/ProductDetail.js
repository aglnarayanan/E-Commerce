import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find((p) => p._id === id);

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert('Razorpay SDK not loaded.');
      return;
    }

    const options = {
      key: 'rzp_test_YourTestKey', // ✅ Replace with your test key from Razorpay Dashboard
      amount: product.price * 100, // Razorpay takes paise
      currency: 'INR',
      name: product.name,
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment Success! ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="sticky top-20">
              <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                <img src={product.imageUrl} alt={product.name} className="cursor-pointer border-2 border-blue-500 rounded" />
                <img src={product.imageUrl} alt={product.name} className="cursor-pointer border-2 border-transparent hover:border-blue-500 rounded" />
                <img src={product.imageUrl} alt={product.name} className="cursor-pointer border-2 border-transparent hover:border-blue-500 rounded" />
                <img src={product.imageUrl} alt={product.name} className="cursor-pointer border-2 border-transparent hover:border-blue-500 rounded" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="text-gray-600">(42 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">Premium 100% cotton product with quality stitching and design. Available in multiple sizes and colors.</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Select Color:</h3>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-white border-2 border-white focus:border-blue-500 shadow"></button>
                <button className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white focus:border-blue-500"></button>
                <button className="w-8 h-8 rounded-full bg-gray-800 border-2 border-white focus:border-blue-500"></button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border rounded hover:bg-gray-100">S</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-100 bg-gray-100">M</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-100">L</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-100">XL</button>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700">
                <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
              </button>
              <button
                onClick={handlePayment}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="font-semibold mb-4">Product Details</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>100% Premium Cotton</li>
                <li>Pre-shrunk fabric</li>
                <li>Double-needle stitching</li>
                <li>Tear-away label</li>
                <li>Machine wash cold</li>
              </ul>
            </div>

            <Link to="/" className="inline-block mt-6 text-blue-600 hover:underline">← Back to Products</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
