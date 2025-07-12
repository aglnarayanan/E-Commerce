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
    <nav className="bg-white border-b px-4 py-3 fixed top-0 w-full shadow-md z-50">
      {/* Flex container */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Logo + Nav links */}
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-black-600">𝓥𝓮𝓵𝓿𝓮𝓽𝓣𝓱𝓻𝓮𝓪𝓭𝓼</Link>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* ✅ Search bar - Always visible & centered in nav */}
        <div className="w-full md:w-1/3">
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 items-center ">
          <Link className='text-gray-600 hover:text-blue-600' to="/products">Products</Link>
          <Link className='text-gray-600 hover:text-blue-600' to="/sale">Sale</Link>
          <Link className='text-gray-600 hover:text-blue-600' to="/cart">Cart</Link>
          <Link className='text-gray-600 hover:text-blue-600' to="/contact">Feedback</Link>
          {isAdmin && (
            <Link to="/add-product" className="text-green-700 font-bold">+ Add Product</Link>
          )}
          {!isLoggedIn ? (
            <>
              <Link className='hover:shadow-lg' to="/login">Login</Link>
              <Link className='hover:shadow-lg' to="/signup">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-600 font-bold">Logout</button>
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 border-t pt-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/sale">Sale</Link>
          <Link to="/cart">Cart</Link>
          {isAdmin && <Link to="/add-product">+ Add Product</Link>}
          {!isLoggedIn ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-600 font-bold">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
}
