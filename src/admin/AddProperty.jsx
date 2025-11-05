import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    area: "",
    rooms: "",
    location: "",
    type: "",
    property_type: "",
    is_featured: false,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const backendURL = "https://bmgayrimenkul-backend.onrender.com/api/properties";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token"); // admin giriş token’ı varsa gönder
      const response = await axios.post(backendURL, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.message) {
        setMessage("✅ İlan başarıyla eklendi!");
        setFormData({
          title: "",
          description: "",
          price: "",
          area: "",
          rooms: "",
          location: "",
          type: "",
          property_type: "",
          is_featured: false,
        });
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Hata oluştu, ilan eklenemedi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Yeni İlan Ekle</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="title"
          placeholder="Başlık"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Açıklama"
          value={formData.description}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="price"
          type="number"
          placeholder="Fiyat"
          value={formData.price}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="area"
          type="number"
          placeholder="Metrekare"
          value={formData.area}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="rooms"
          type="number"
          placeholder="Oda Sayısı"
          value={formData.rooms}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="location"
          placeholder="Konum"
          value={formData.location}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="type"
          placeholder="Satılık / Kiralık"
          value={formData.type}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          name="property_type"
          placeholder="Daire, Villa, Arsa..."
          value={formData.property_type}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_featured"
            checked={formData.is_featured}
            onChange={handleChange}
          />
          Öne Çıkan İlan
        </label>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? "Kaydediliyor..." : "İlan Ekle"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center font-semibold text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default AddProperty;
