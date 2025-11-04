import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "../../components/ui/card";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "../../hooks/use-toast";

const ManageProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // İlanları backend'den çek
  const fetchProperties = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/properties`);
      const data = await res.json();
      setProperties(data.properties || []);
    } catch (err) {
      toast({
        title: "Hata!",
        description: "İlanlar alınamadı.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // İlan silme
  const deleteProperty = async (id) => {
    if (!window.confirm("Bu ilanı silmek istediğinize emin misiniz?")) return;

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/properties/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Silme işlemi başarısız.");

      toast({
        title: "Başarılı",
        description: "İlan silindi ✅",
      });
      setProperties(properties.filter((p) => p.id !== id));
    } catch (err) {
      toast({
        title: "Hata!",
        description: err.message || "Silme işlemi sırasında bir hata oluştu.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-700">🏠 İlan Yönetimi</h1>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => navigate("/admin/add-property")}
          >
            <PlusCircle className="mr-2 h-5 w-5" /> Yeni İlan Ekle
          </Button>
        </div>

        {properties.length === 0 ? (
          <p className="text-gray-600 text-center mt-10">
            Henüz eklenmiş ilan bulunmuyor.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card key={property.id} className="shadow-md hover:shadow-lg transition">
                <img
                  src={
                    property.images?.[0]
                      ? `${process.env.REACT_APP_API_URL}${property.images[0]}`
                      : "https://via.placeholder.com/300x200?text=Fotoğraf+Yok"
                  }
                  alt={property.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">{property.location}</p>
                  <p className="font-semibold">{property.price} ₺</p>
                  <div className="flex justify-between mt-3">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => navigate(`/admin/edit-property/${property.id}`)}
                    >
                      <Pencil className="h-4 w-4 mr-2" /> Düzenle
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => deleteProperty(property.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Sil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProperties;
