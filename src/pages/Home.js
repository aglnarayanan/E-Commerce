// src/pages/Home.js
import HeroBanner from '../components/HeroBanner';
import { Link } from 'react-router-dom';
import Products from './Products';

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Welcome Text */}
     

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <Products />
      </div>
    </div>
  );
}
