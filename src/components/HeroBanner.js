// src/components/HeroBanner.js
import { useState, useEffect } from 'react';

const images = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg',
  '/images/banner4.jpg',
  '/images/banner5.jpg',
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative mt-16">
      <img
        src={images[index]}
        alt="Hero Banner"
        className="w-full h-[400px] object-cover"
      />
    </div>
  );
}
