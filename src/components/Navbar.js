import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // 1. NAV ETİKETİ: 'z-50' yapıldı (yüksek bir katman), 'fixed top-0 w-full' eklenerek
    // menü sabitleştirildi. Bu, tıklama sorunlarını azaltmaya yardımcı olabilir.
    <nav className="bg-blue-600 text-white p-4 fixed top-0 w-full z-50"> 
      
      {/* 2. LOGO VE HAMBURGER KISMI: justify-between kullanılırken, logo için mx-auto'dan
           önce bir kapsayıcı div'e ihtiyaç vardır. Ancak bu tasarımda en kolayı, logo 
           div'ini esnek (flex) bir kapsayıcı içinde ortalamaktır. */}
      <div className="flex justify-between items-center">
        
        {/* Logo/Başlık - flex-grow 1 ve text-center ile ortalanmaya çalışıldı. */}
        <div className="flex-1 text-center md:text-left">
            <Link to="/" className="font-bold text-lg">BM GAYRIMENKUL</Link>
        </div>

        {/* Mobil Menü Düğmesi (Hamburger) */}
        {/* md:hidden ve absolute sağa sabitlendi */}
        <button
          className="md:hidden text-white focus:outline-none absolute right-4 top-4"
          onClick={toggleMenu}
          aria-label="Menü Aç/Kapat"
        >
          {/* Hamburger/Kapat ikonu SVG'si */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>

        {/* Masaüstü Menüsü */}
        <div className="hidden md:flex gap-4">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/satilik">Satılık</Link>
          <Link to="/kiralik">Kiralık</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
          <Link to="/iletisim">İletişim</Link>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {/* w-full ve 'bg-blue-600' eklenerek menünün tam genişlikte arka planı kaplaması sağlandı. */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 bg-blue-600`}>
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