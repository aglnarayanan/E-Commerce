import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>
              <li><a href="#products" className="hover:text-blue-300 transition">Shop</a></li>
              <li><a href="#sale" className="hover:text-blue-300 transition">Sale</a></li>
              <li><a href="#feedback" className="hover:text-blue-300 transition">Reviews</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              About Us
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition">Our Story</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <p className="mb-4">Subscribe for updates and promotions</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-800 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social & Payment Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Media */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-2xl hover:text-blue-300 transition">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-300 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-300 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-300 transition">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-4">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0815c23-97eb-48b5-bda2-da853f2c4668.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2db7cabd-f22e-4c8e-91a5-ccbc2703c483.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dee08085-6d2a-45b4-9627-d1763b0f0855.png"
                alt="American Express"
                className="h-6"
              />
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7829ee0c-0d88-46bf-b4cf-2d39fa16b098.png"
                alt="PayPal"
                className="h-6"
              />
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7284c1ed-523b-4d87-acf1-7f4da00a0efb.png"
                alt="Secure Payment"
                className="h-6"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© 2023 PrimeMart. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
