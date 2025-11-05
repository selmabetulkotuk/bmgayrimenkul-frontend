import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendURL = "https://bmgayrimenkul-backend.onrender.com/api/properties";

  const fetchProperties = async () => {
    try {
      const response = await axios.get(backendURL);
      setProperties(response.data.properties || []);
    } catch (err) {
      console.error("İlanlar yüklenemedi:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProperty = async (id) => {
    if (!window.confirm("Bu ilanı silmek istediğine emin misin?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${backendURL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("İlan silindi!");
      fetchProperties();
    } catch (err) {
      console.error("Silme hatası:", err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  if (loading) return <p className="text-center mt-10">Yükleniyor...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">İlan Yönetimi</h2>
      {properties.length === 0 ? (
        <p>Henüz ilan yok.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Başlık</th>
              <th className="border p-2">Fiyat</th>
              <th className="border p-2">Tür</th>
              <th className="border p-2">Durum</th>
              <th className="border p-2">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="border p-2">{p.title}</td>
                <td className="border p-2">{p.price}</td>
                <td className="border p-2">{p.type}</td>
                <td className="border p-2">{p.status || "active"}</td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteProperty(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProperties;
