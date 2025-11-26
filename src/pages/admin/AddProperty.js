import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "../../components/ui/card";
import { toast } from "../../hooks/use-toast";

const AddProperty = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    price: "",
    area: "",
    rooms: "",
    location: "",
    type: "satılık",
    property_type: "daire",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ İlan oluştur
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/properties`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: form.title,
          price: parseFloat(form.price),
          area: parseFloat(form.area),
          rooms: parseInt(form.rooms),
          location: form.location,
          type: form.type,
          property_type: form.property_type,
          description: form.description,
          status: "active",
          created_at: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("İlan eklenemedi");
      const data = await res.json();
      const propertyId = data.property.id;

      // 2️⃣ Görselleri yükle
      if (form.images.length > 0) {
        const formData = new FormData();
        form.images.forEach((file) => formData.append("files", file));

        await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/properties/${propertyId}/images`, {
          method: "POST",
          body: formData,
        });
      }

      toast({
        title: "Başarılı!",
        description: "Yeni ilan başarıyla eklendi 🎉",
      });
      navigate("/admin/dashboard");
    } catch (err) {
      toast({
        title: "Hata!",
        description: err.message || "İlan eklenirken bir hata oluştu.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-700 text-center">
              🏡 Yeni İlan Ekle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label>Başlık</Label>
                <Input name="title" value={form.title} onChange={handleChange} required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Fiyat (₺)</Label>
                  <Input name="price" type="number" value={form.price} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Alan (m²)</Label>
                  <Input name="area" type="number" value={form.area} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Oda Sayısı</Label>
                  <Input name="rooms" type="number" value={form.rooms} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Lokasyon</Label>
                  <Input name="location" value={form.location} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Durum</Label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="satılık">Satılık</option>
                    <option value="kiralık">Kiralık</option>
                  </select>
                </div>
                <div>
                  <Label>Tür</Label>
                  <select
                    name="property_type"
                    value={form.property_type}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="daire">Daire</option>
                    <option value="villa">Villa</option>
                    <option value="arsa">Arsa</option>
                    <option value="ofis">Ofis</option>
                  </select>
                </div>
              </div>

              <div>
                <Label>Açıklama</Label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>

              <div>
                <Label>Fotoğraflar</Label>
                <Input type="file" multiple onChange={handleImageChange} />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                disabled={loading}
              >
                {loading ? "Kaydediliyor..." : "İlanı Kaydet"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      </div>
  );
};

export default AddProperty;
