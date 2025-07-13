// src/pages/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      if (uid === 'XCppvLru6iavFO7lKBhy4epCKKs1') {
        localStorage.setItem('userData', JSON.stringify({ uid, role: 'admin' }));
      } else {
        localStorage.setItem('userData', JSON.stringify({ uid, role: 'user' }));
      }

      alert('Login successful!');
      navigate('/'); // go home
    } catch (err) {
      console.error(err);
      alert('Login failed!');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 flex flex-col gap-4 mt-16">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}
