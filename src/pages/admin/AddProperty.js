import React, { useState } from "react";
import axios from "axios";

function AddProperty() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Satılık");
  const [type, setType] = useState("Daire");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Yetkiniz yok. Lütfen giriş yapın.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("area", area);
    formData.append("rooms", rooms);
    formData.append("location", location);
    formData.append("status", status);
    formData.append("type", type);
    formData.append("description", description);

    images.forEach((img) => formData.append("images", img));

    try {
      const res = await axios.post(`${backendUrl}/api/properties/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("İlan başarıyla kaydedildi!");
      console.log(res.data);

      setTitle(""); setPrice(""); setArea(""); setRooms(""); setLocation("");
      setStatus("Satılık"); setType("Daire"); setDescription("");
      setImages([]); setPreviewImages([]);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(
        err.response?.data?.message ||
        err.response?.data?.detail ||
        "İlan eklenirken hata oluştu!"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Yeni İlan Ekle</h2>
        <p className="text-gray-500 mb-6">Tüm alanları eksiksiz doldurduğunuzdan emin olun.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Başlık" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" required />
          <input type="number" placeholder="Fiyat" value={price} onChange={(e) => setPrice(e.target.value)} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" required />
          <input type="number" placeholder="Alan (m²)" value={area} onChange={(e) => setArea(e.target.value)} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" required />
          <input type="number" placeholder="Oda Sayısı" value={rooms} onChange={(e) => setRooms(e.target.value)} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" required />
          <input type="text" placeholder="Lokasyon" value={location} onChange={(e) => setLocation(e.target.value)} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none" required />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none">
            <option value="Satılık">Satılık</option>
            <option value="Kiralık">Kiralık</option>
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none">
            <option value="Daire">Daire</option>
            <option value="Villa">Villa</option>
            <option value="Arsa">Arsa</option>
            <option value="Ofis">Ofis</option>
            <option value="Dükkan">Dükkan</option>
          </select>
          <textarea placeholder="Açıklama" value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none md:col-span-2" />
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-600 font-medium">Resimler</label>
            <input type="file" multiple onChange={handleImageChange} className="border rounded-lg p-2 w-full" />
            <div className="flex mt-3 space-x-3 overflow-x-auto">
              {previewImages.map((img, idx) => (
                <img key={idx} src={img} alt={`preview-${idx}`} className="w-20 h-20 object-cover rounded-lg shadow" />
              ))}
            </div>
          </div>
          <button type="submit" className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition">
            İlanı Kaydet
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;
