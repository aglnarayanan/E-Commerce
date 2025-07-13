// src/pages/AddProduct.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'; // ✅ your Firebase config
import { onAuthStateChanged } from 'firebase/auth';

export default function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email === 'admin@example.com') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      alert('❌ Only admin can add products!');
      return;
    }

    try {
      // ✅ Upload image to Cloudinary
      const data = new FormData();
      data.append('file', form.image);
      data.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // <-- Your Cloudinary preset

      const cloudinaryRes = await axios.post(
        `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`,
        data
      );

      const imageUrl = cloudinaryRes.data.secure_url;

      // ✅ Send product to backend
      await axios.post('http://localhost:5000/api/products', {
        name: form.name,
        price: form.price,
        description: form.description,
        imageUrl,
        uid: user.uid,
      });

      alert('✅ Product saved!');
      setForm({ name: '', price: '', description: '', image: null });
      navigate('/products');
    } catch (err) {
      console.error(err);
      alert('❌ Error saving product');
    }
  };

  if (!user) {
    return (
      <div className="text-center p-8 text-red-500">
        <p>❌ Please login as admin to add products.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <input
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <input
        type="file"
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Save Product
      </button>
    </form>
  );
}
