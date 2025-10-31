import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white flex flex-wrap items-center justify-between px-4 py-3">
      <div className="text-lg font-bold">BM GAYRİMENKUL</div>

      {/* Hamburger menü butonu (mobilde görünür) */}
      <button
        className="block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menüyü aç/kapat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menü öğeleri */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}
      >
        <a href="/" className="block hover:underline">
          Ana Sayfa
        </a>
        <a href="/satilik" className="block hover:underline">
          Satılık
        </a>
        <a href="/kiralik" className="block hover:underline">
          Kiralık
        </a>
        <a href="/hakkimizda" className="block hover:underline">
          Hakkımızda
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

