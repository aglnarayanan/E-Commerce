// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Products from './Products';
import axios from 'axios';

export default function Home() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Dummy fallback reviews
  const dummyReviews = [
    {
      _id: 'dummy1',
      name: 'John Doe',
      email: 'john@example.com',
      rating: 5,
      feedback: 'Amazing service! The products are top-notch and delivery was super fast.',
    },
    {
      _id: 'dummy2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      rating: 4,
      feedback: 'Good quality and reasonable prices. Will definitely shop again!',
    },
    {
      _id: 'dummy3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      rating: 5,
      feedback: 'Customer support was excellent. Very satisfied with my purchase.',
    },
  ];

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/contact');
        // If no DB reviews, use dummy ones
        if (res.data.length === 0) {
          setFeedbacks(dummyReviews);
        } else {
          setFeedbacks(res.data);
        }
      } catch (err) {
        console.error(err);
        // If request fails, show dummy reviews
        setFeedbacks(dummyReviews);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <Products />
      </div>

      {/* Customer Feedback */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbacks.map((fb) => (
            <div
              key={fb._id}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-700">{fb.name}</h3>
                <p className="text-sm text-gray-500">{fb.email}</p>
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: fb.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-700">{fb.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
