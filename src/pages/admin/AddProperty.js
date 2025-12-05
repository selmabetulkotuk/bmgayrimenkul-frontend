import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export default function AddProperty() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

  const token = localStorage.getItem("adminToken"); // <-- ARTIK TANIMLI!

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

  // -----------------------------
  //    Cloudinary'ye RESİM YÜKLEME
  // -----------------------------
  const uploadImagesToCloudinary = async () => {
    const uploadedUrls = [];

    for (let i = 0; i < images.length; i++) {
      const form = new FormData();
      form.append("file", images[i]);
      form.append("upload_preset", uploadPreset);

      const uploadResult = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        form
      );

      uploadedUrls.push(uploadResult.data.secure_url);
    }

    return uploadedUrls;
  };

  // -----------------------------
  //      FORMU GÖNDER
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("ADMİN TOKEN BULUNAMADI! Login olup tekrar deneyin.");
      return;
    }

    try {
      // 1) Resimleri Cloudinary'ye yükle
      const uploadedImageUrls = await uploadImagesToCloudinary();

      // 2) Backend'e veri gönder
      const payload = {
        ...formDataObj,
        images: uploadedImageUrls,
      };

      await axios.post(`${backendUrl}/api/properties`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      alert("İlan başarıyla eklendi!");
    } catch (error) {
      console.error("HATA:", error);
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
