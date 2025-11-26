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

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken"); // <-- Admin giriş token'ı

    if (!token) {
      alert("Yetkiniz yok. Lütfen yeniden giriş yapın.");
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

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const res = await axios.post(`${backendUrl}/api/properties`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("İlan başarıyla kaydedildi!");
      console.log(res.data);

      // Formu temizle
      setTitle("");
      setPrice("");
      setArea("");
      setRooms("");
      setLocation("");
      setStatus("Satılık");
      setType("Daire");
      setDescription("");
      setImages([]);

    } catch (err) {
      console.error(err);
      alert("İlan eklenirken hata oluştu!");
    }
  };

  return (
    <div className="add-property-container">
      <h2>Yeni İlan Ekle</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Fiyat"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Alan (m²)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Oda Sayısı"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Lokasyon"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Satılık">Satılık</option>
          <option value="Kiralık">Kiralık</option>
        </select>

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Daire">Daire</option>
          <option value="Villa">Villa</option>
          <option value="Arsa">Arsa</option>
          <option value="Ofis">Ofis</option>
          <option value="Dükkan">Dükkan</option>
        </select>

        <textarea
          placeholder="Açıklama"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="file" multiple onChange={handleImageChange} />

        <button type="submit">İlan Kaydet</button>
      </form>
    </div>
  );
}

export default AddProperty;
