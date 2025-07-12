// src/pages/AddProduct.js
import { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', price: '', description: '', image: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Cloudinary
      const data = new FormData();
      data.append('file', form.image);
      data.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // set in Cloudinary
      const cloudinaryRes = await axios.post(`https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`, data);
      const imageUrl = cloudinaryRes.data.secure_url;

      // Send product to backend
      const userData = JSON.parse(localStorage.getItem('userData'));
      await axios.post('http://localhost:5000/api/products', {
        name: form.name,
        price: form.price,
        description: form.description,
        imageUrl,
        uid: userData.uid,
      });

      alert('Product saved!');
      setForm({ name: '', price: '', description: '', image: null });
    } catch (err) {
      console.error(err);
      alert('Error saving product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="file"
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Save Product
      </button>
    </form>
  );
}
