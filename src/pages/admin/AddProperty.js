import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export default function AddProperty() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("adminToken");

  const [formDataObj, setFormDataObj] = useState({
    title: "",
    price: "",
    category: "",
    m2: "",
    rooms: "",
    floor: "",
    heating: "",
    buildingAge: "",
    description: "",
    address: "",
    type: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormDataObj({
      ...formDataObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!backendUrl) {
      alert("Backend URL bulunamadı! frontend/.env dosyasını kontrol edin.");
      return;
    }

    const data = new FormData();
    Object.keys(formDataObj).forEach((key) => data.append(key, formDataObj[key]));
    for (let i = 0; i < images.length; i++) data.append("images", images[i]);

    try {
      await axios.post(`${backendUrl}/api/properties`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        }
      });

      alert("İlan başarıyla eklendi!");
    } catch (error) {
      console.error(error);
      alert("İlan yüklenirken hata oluştu!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <Label>İlan Başlığı</Label>
        <Input name="title" value={formDataObj.title} onChange={handleChange} required />
      </div>

      <div>
        <Label>Fiyat</Label>
        <Input name="price" value={formDataObj.price} onChange={handleChange} required />
      </div>

      <div>
        <Label>Kategori</Label>
        <Input name="category" value={formDataObj.category} onChange={handleChange} required />
      </div>

      <div>
        <Label>Metrekare (m²)</Label>
        <Input name="m2" value={formDataObj.m2} onChange={handleChange} required />
      </div>

      <div>
        <Label>Oda Sayısı</Label>
        <Input name="rooms" value={formDataObj.rooms} onChange={handleChange} required />
      </div>

      <div>
        <Label>Bulunduğu Kat</Label>
        <Input name="floor" value={formDataObj.floor} onChange={handleChange} required />
      </div>

      <div>
        <Label>Isıtma</Label>
        <Input name="heating" value={formDataObj.heating} onChange={handleChange} required />
      </div>

      <div>
        <Label>Bina Yaşı</Label>
        <Input name="buildingAge" value={formDataObj.buildingAge} onChange={handleChange} required />
      </div>

      <div>
        <Label>Adres</Label>
        <Input name="address" value={formDataObj.address} onChange={handleChange} required />
      </div>

      <div>
        <Label>Tür</Label>
        <Input name="type" value={formDataObj.type} onChange={handleChange} required />
      </div>

      <div>
        <Label>Açıklama</Label>
        <Input name="description" value={formDataObj.description} onChange={handleChange} required />
      </div>

      <div>
        <Label>Fotoğraflar</Label>
        <Input type="file" multiple onChange={handleFileChange} required />
      </div>

      <Button type="submit">İlan Ekle</Button>
    </form>
  );
}
