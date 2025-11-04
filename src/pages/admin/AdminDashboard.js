import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { PlusCircle, List, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "../../hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast({
      title: "Çıkış yapıldı",
      description: "Admin oturumu kapatıldı.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-blue-700">
              🏠 BMGayrimenkul Admin Paneli
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6 mt-6">
            <div
              onClick={() => navigate("/admin/add-property")}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              <Card className="text-center py-8 bg-white hover:bg-blue-50">
                <PlusCircle className="w-10 h-10 mx-auto text-blue-600" />
                <h3 className="mt-3 font-semibold">Yeni İlan Ekle</h3>
              </Card>
            </div>

            <div
              onClick={() => navigate("/admin/manage-properties")}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              <Card className="text-center py-8 bg-white hover:bg-blue-50">
                <List className="w-10 h-10 mx-auto text-green-600" />
                <h3 className="mt-3 font-semibold">İlanları Yönet</h3>
              </Card>
            </div>

            <div
              onClick={handleLogout}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              <Card className="text-center py-8 bg-white hover:bg-red-50">
                <LogOut className="w-10 h-10 mx-auto text-red-600" />
                <h3 className="mt-3 font-semibold text-red-600">Çıkış Yap</h3>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
