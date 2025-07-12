import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 999,
    image: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752349043/3bd5d8104055543.5f5a590049a9f_dzn3nr.png',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 1499,
    image: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347672/OIP_2_rrvqeq.webp',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 1499,
    image: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347494/BEE-1528-Fashion_Sale_Banners_1_preview4_tqqbmw.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 999,
    image: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347645/OIP_1_tfrx68.webp',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 1499,
    image: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347455/b8ce12af4e594bcb26b8f55b0377dad4_on3gzd.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 1499,
    image: 'https://res.cloudinary.com/dxkerla8e/image/upload/v1752347494/BEE-1528-Fashion_Sale_Banners_1_preview4_tqqbmw.jpg',
  },
  // Add up to 10 products like this
];

export default function Sale() {

  const handlePayment = (product) => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: product.price * 100, // Amount in paise
      currency: 'INR',
      name: 'EMC Kart',
      description: `Buy ${product.name}`,
      image: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/emckart-products/logo.png',
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        // Here: POST response & product info to your backend to verify payment
      },
      prefill: {
        name: 'Your Customer',
        email: 'customer@example.com',
      },
      notes: {
        address: 'Customer Address',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">On Sale 🔥</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700 mb-4">₹ {product.price}</p>
            <button
              onClick={() => handlePayment(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
