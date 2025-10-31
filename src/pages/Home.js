import React from "react";

const Home = () => {
  return (
    <div className="pt-32 flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-blue-500 min-h-screen text-white px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
        Berk Mutlu<br className="md:hidden" /> Gayrimenkul
      </h1>
      <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-8">
        Berk Mutlu Gayrimenkul, güven ve dürüstlük ilkesiyle hareket eden, 
        her müşterisinin ihtiyaçlarına özel çözümler sunmayı hedefleyen bir gayrimenkul danışmanlık firmasıdır.
        Bizim için her müşteri bir iş değil, uzun soluklu bir dostluğun başlangıcıdır.
        Gayrimenkulde mutlu bir başlangıç için doğru adrestesiniz. 
        <strong> Soyadımız mutluluk, işimiz güven.</strong>
      </p>

      <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md text-gray-800 space-y-3">
        <select className="w-full p-2 border rounded-lg">
          <option>Satılık</option>
          <option>Kiralık</option>
        </select>

        <select className="w-full p-2 border rounded-lg">
          <option>Tümü</option>
          <option>Daire</option>
          <option>Villa</option>
          <option>Arsa</option>
        </select>

        <input
          type="text"
          placeholder="Konum ara..."
          className="w-full p-2 border rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
          Ara
        </button>
      </div>
    </div>
  );
};

export default Home;
