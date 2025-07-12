import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTelegram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12">
      {/* Top Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 mb-12">
        <div className="text-center">
          <p className="font-bold mb-2">100% Secure Payments</p>
          <p>Moving your card details to a much more secured place</p>
        </div>
        <div className="text-center">
          <p className="font-bold mb-2">TrustPay</p>
          <p>100% Payment Protection. Easy Return Policy</p>
        </div>
        <div className="text-center">
          <p className="font-bold mb-2">Help Center</p>
          <p>Got a question? Look no further. Browse our FAQs or submit your query here.</p>
        </div>
        <div className="text-center">
          <p className="font-bold mb-2">Shop on the Go</p>
          <p>Download the app and get exciting app-only offers at your fingertips</p>
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-8 mb-12">
        <div>
          <h3 className="font-bold mb-4">Policy Info</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Report Abuse & Takedown Policy</li>
            <li>Know Your BIS Standard</li>
            <li>Products Under Compulsory BIS Certification</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Snapdeal Business</h3>
          <ul className="space-y-2">
            <li>Shopping App</li>
            <li>Sell on Snapdeal</li>
            <li>Media Enquiries</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Popular Links</h3>
          <ul className="space-y-2">
            <li>Lehenga</li>
            <li>Kid's Clothing</li>
            <li>Sarees</li>
            <li>Winter Wear</li>
            <li>Sweatshirts</li>
            <li>Shoes for Women</li>
            <li>Shoes for Men</li>
            <li>T-Shirt</li>
            <li>Shirt</li>
            <li>Watch</li>
            <li>Smart Watch</li>
            <li>Bra</li>
            <li>Tops for Women</li>
            <li>Earrings</li>
            <li>Headphone</li>
            <li>Kurti</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Subscribe</h3>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-gray-400 px-2 py-1"
            />
            <button className="bg-black text-white px-4 py-1">Subscribe</button>
          </div>
          <p className="text-sm">Register now to get updates on promotions and coupons. Or Download App</p>
        </div>
      </div>

      {/* Payment & Social */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 pb-8">
        <div className="flex gap-4 mb-4 md:mb-0">
  <img
    src="https://res.cloudinary.com/dxkerla8e/image/upload/v1752351536/OIP_1_lotovg.webp"
    alt="Visa"
    className="w-12 h-auto object-contain"
  />
  <img
    src="https://res.cloudinary.com/dxkerla8e/image/upload/v1752351545/OIP_bv6ci2.webp"
    alt="Mastercard"
    className="w-12 h-auto object-contain"
  />
  <img
    src="https://res.cloudinary.com/dxkerla8e/image/upload/v1752351547/OIP_4_pkfpg5.webp"
    alt="Rupay"
    className="w-12 h-auto object-contain"
  />
  <img
    src="https://res.cloudinary.com/dxkerla8e/image/upload/v1752351569/cash_on_delivery_COD_payment_payment_method_pay-512_i8mazw.webp"
    alt="COD"
    className="w-12 h-auto object-contain"
  />
  <img
    src="https://res.cloudinary.com/dxkerla8e/image/upload/v1752351545/OIP_2_jqwfle.webp"
    alt="Net Banking"
    className="w-12 h-auto object-contain"
  />
</div>

        <div className="flex gap-4 text-xl">
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
      <div className="bg-gray-200 text-center py-4">
        <p>&copy; {new Date().getFullYear()} EMC Kart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
