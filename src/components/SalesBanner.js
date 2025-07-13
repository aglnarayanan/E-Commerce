import { useState } from 'react';

export default function SalesBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="bg-yellow-400 text-yellow-900 text-center py-2 px-4 flex justify-center items-center relative">
      <p className="font-semibold">🔥 Flash Sale: Limited Time Offers - Shop Now!</p>
      <button
        onClick={() => setShow(false)}
        className="absolute right-4 text-xl text-yellow-900 hover:text-yellow-700"
      >
        &times;
      </button>
    </div>
  );
}
