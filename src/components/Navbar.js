import SalesBanner from './SalesBanner';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out!');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <SalesBanner />

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/064a4e56-26bc-4bfa-a74e-6b03ab88c097.png"
                alt="PrimeMart Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-blue-600">PrimeMart</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-500 font-medium">Products</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-medium">Contact</Link>

              {isAdmin && (
                <Link to="/add-product" className="text-gray-700 hover:text-blue-500 font-medium">Add Product</Link>
              )}

              <div className="relative">
                <button className="flex items-center text-gray-700 hover:text-blue-500">
                  <i className="fas fa-shopping-cart mr-1"></i>
                  <span>Cart</span>
                  <span className="ml-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </button>
              </div>

              {user ? (
                <>
                  <span className="text-gray-700 font-medium">{user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-md font-medium bg-red-600 text-white hover:bg-red-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-4 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700">Login</Link>
                  <Link to="/signup" className="px-4 py-2 rounded-md font-medium bg-green-600 text-white hover:bg-green-700">Sign Up</Link>
                </>
              )}
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button className="relative text-gray-700">
                <i className="fas fa-shopping-cart"></i>
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
              <button
                className="text-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(true)}
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur"></div>
        )}

        <div
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4e6c7d82-3ad6-4595-9010-3fbc8be3b7a0.png"
                alt="PrimeMart logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-blue-600">PrimeMart</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <div className="p-4">
            <ul className="space-y-2">
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600">Home</Link></li>
              <li><Link to="/products" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600">Products</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600">Contact</Link></li>

              {isAdmin && (
                <li><Link to="/add-product" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600">Add Product</Link></li>
              )}

              {user ? (
                <>
                  <li><span className="block py-2 px-3 text-gray-600">{user.email}</span></li>
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left py-2 px-3 rounded hover:bg-red-50 hover:text-red-600"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600">Login</Link></li>
                  <li><Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600">Sign Up</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
