import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12">
      {/* Top Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div>
          <p className="font-bold mb-2">100% Secure Payments</p>
          <p className="text-sm">Your card details are secure with us</p>
        </div>
        <div>
          <p className="font-bold mb-2">TrustPay</p>
          <p className="text-sm">100% Payment Protection. Easy Returns.</p>
        </div>
        <div>
          <p className="font-bold mb-2">Help Center</p>
          <p className="text-sm">Got questions? Browse FAQs or submit a query.</p>
        </div>
        <div>
          <p className="font-bold mb-2">Shop on the Go</p>
          <p className="text-sm">Download our app for exclusive offers.</p>
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-8 mb-12">
        <div>
          <h3 className="font-bold mb-3">Policy Info</h3>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Report Abuse</li>
            <li>BIS Standard</li>
            <li>Compulsory BIS</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Business</h3>
          <ul className="space-y-1 text-sm">
            <li>Shopping App</li>
            <li>Sell on Snapdeal</li>
            <li>Media Enquiries</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Popular Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Lehenga</li>
            <li>Kids Clothing</li>
            <li>Sarees</li>
            <li>Winter Wear</li>
            <li>Sweatshirts</li>
            <li>Men's Shoes</li>
            <li>Women's Shoes</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Subscribe</h3>
          <div className="flex flex-col sm:flex-row mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-400 px-3 py-2 w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2"
            />
            <button className="bg-black text-white px-4 py-2 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
          <p className="text-xs">Register for updates & app-only offers.</p>
        </div>
      </div>

      {/* Payment & Social */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
          {['OIP_1_lotovg', 'OIP_bv6ci2', 'OIP_4_pkfpg5', 'cash_on_delivery_COD_payment_payment_method_pay-512_i8mazw', 'OIP_2_jqwfle'].map((img) => (
            <img
              key={img}
              src={`https://res.cloudinary.com/dxkerla8e/image/upload/v1752351536/${img}.webp`}
              alt="Payment"
              className="w-12 h-auto object-contain"
            />
          ))}
        </div>
        <div className="flex gap-4 text-xl text-gray-600">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
          <FaTelegram />
          <FaWhatsapp />
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} EMC Kart. All Rights Reserved.
      </div>
    </footer>
  );
}
