import { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rating: '5',
    feedback: '',
  });
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', form);
      setSuccess('✅ Thank you for your feedback!');
      setForm({
        name: '',
        email: '',
        rating: '5',
        feedback: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="max-w-lg mx-auto mt-16 bg-blue-50 rounded-xl p-8 shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-700">Share Your Feedback</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="feedback">Your Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            value={form.feedback}
            onChange={handleChange}
            placeholder="Your Feedback"
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>

        {success && <p className="text-green-600 text-center mt-4">{success}</p>}
      </form>
    </section>
  );
}
