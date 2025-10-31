import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  // Menünün açık/kapalı durumunu yönetmek için state
  const [isOpen, setIsOpen] = useState(false);

  // Menü açma/kapama işlevi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo/Başlık */}
        <Link to="/" className="font-bold text-lg">BM GAYRIMENKUL</Link>

        {/* Mobil Menü Düğmesi (Hamburger) - Sadece küçük ekranlarda görünür */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menü Aç/Kapat"
        >
          {/* Basit bir hamburger menü ikonu için SVG veya metin kullanılabilir */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>

        {/* Masaüstü Menüsü - Orta ve büyük ekranlarda her zaman görünür */}
        <div className="hidden md:flex gap-4">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/satilik">Satılık</Link>
          <Link to="/kiralik">Kiralık</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
          <Link to="/iletisim">İletişim</Link>
        </div>
      </div>

      {/* Mobil Açılır Menü - Sadece küçük ekranlarda ve 'isOpen' true olduğunda görünür */}
      
<div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col space-y-2">
          {/* Tıklandığında menüyü kapatmak için onClick eklendi */}
          <Link to="/" className="block py-2" onClick={toggleMenu}>Ana Sayfa</Link>
          <Link to="/satilik" className="block py-2" onClick={toggleMenu}>Satılık</Link>
          <Link to="/kiralik" className="block py-2" onClick={toggleMenu}>Kiralık</Link>
          <Link to="/hakkimizda" className="block py-2" onClick={toggleMenu}>Hakkımızda</Link>
          <Link to="/iletisim" className="block py-2" onClick={toggleMenu}>İletişim</Link>
        </div>
      </div>
    </nav>
  );
}