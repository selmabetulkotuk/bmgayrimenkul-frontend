import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">BM GAYRİMENKUL</Link>
      <div className="flex gap-4">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/satilik">Satılık</Link>
        <Link to="/kiralik">Kiralık</Link>
        <Link to="/hakkimizda">Hakkımızda</Link>
        <Link to="/iletisim">İletişim</Link>
      </div>
    </nav>
  );
}
