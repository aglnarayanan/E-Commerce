import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Search from './Search';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData?.role === 'admin') setIsAdmin(true);
        setIsLoggedIn(true);
      } else {
        setIsAdmin(false);
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('userData');
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      if (menuOpen) setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 border-b">
      <div className="flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-xl font-bold">𝓥𝓮𝓵𝓿𝓮𝓽𝓣𝓱𝓻𝓮𝓪𝓭𝓼</Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/sale" className="hover:text-blue-600">Sale</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
          <Link to="/contact" className="hover:text-blue-600">Feedback</Link>
          {isAdmin && <Link to="/add-product" className="text-green-700 font-bold">+ Add Product</Link>}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:shadow-lg">Login</Link>
              <Link to="/signup" className="hover:shadow-lg">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-600 font-bold">Logout</button>
          )}
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      <div className="px-4 pb-2 md:hidden">
        <form onSubmit={handleSearch} className="flex mb-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
            Search
          </button>
        </form>
      </div>

      {menuOpen && (
        <div className="flex flex-col px-4 pb-4 gap-2 border-t md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/sale" onClick={() => setMenuOpen(false)}>Sale</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          {isAdmin && <Link to="/add-product" onClick={() => setMenuOpen(false)}>+ Add Product</Link>}
          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-600 font-bold">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
}
