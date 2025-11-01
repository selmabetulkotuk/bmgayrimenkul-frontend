import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  Home as HomeIcon,
  Building,
  Store,
  MapPin,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  const [searchType, setSearchType] = useState("sale");
  const [searchPropertyType, setSearchPropertyType] = useState("all");
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    description: "",
    phone: "",
  });

  useEffect(() => {
    // Backend'den verileri çek
    const fetchData = async () => {
      try {
        // Şirket bilgileri
        const companyRes = await fetch("http://localhost:5000/api/company-info");
        const companyData = await companyRes.json();
        setCompanyInfo(companyData);

        // Öne çıkan ilanlar
        const propertyRes = await fetch("http://localhost:5000/api/properties/featured");
        const propertyData = await propertyRes.json();
        setFeaturedProperties(propertyData);
      } catch (error) {
        console.error("Veriler yüklenirken hata oluştu:", error);
      }
    };
    fetchData();
  }, []);

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Güvenilir Hizmet",
      description:
        "Yılların deneyimi ile güvenilir ve profesyonel gayrimenkul danışmanlığı",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Geniş Portföy",
      description:
        "Karaman'ın en geniş gayrimenkul portföyü ile hizmetinizdeyiz",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Hızlı İşlemler",
      description:
        "Alım-satım ve kiralama işlemleriniz için hızlı çözümler sunuyoruz",
    },
  ];

  const propertyTypes = [
    { icon: <HomeIcon className="h-6 w-6" />, label: "Daireler", count: "150+" },
    { icon: <Building className="h-6 w-6" />, label: "Villalar", count: "45+" },
    { icon: <Store className="h-6 w-6" />, label: "İşyerleri", count: "80+" },
    { icon: <MapPin className="h-6 w-6" />, label: "Arsalar", count: "60+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex flex-col items-center justify-center pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in text-center leading-tight px-4">
            {companyInfo.name || "Berk Mutlu Gayrimenkul"}
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            {companyInfo.description ||
              "Berk Mutlu Gayrimenkul, güven ve dürüstlük ilkesiyle hareket eden, her müşterisinin ihtiyaçlarına özel çözümler sunmayı hedefleyen bir gayrimenkul danışmanlık firmasıdır.Bizim için her müşteri, bir iş değil; uzun soluklu bir dostluğun başlangıcıdır. Gayrimenkulde mutlu bir başlangıç için doğru adrestesiniz.Soyadımız mutluluk,işimiz güven."}
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="İlan Tipi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sale">Satılık</SelectItem>
                  <SelectItem value="rent">Kiralık</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={searchPropertyType}
                onValueChange={setSearchPropertyType}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Gayrimenkul Tipi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tümü</SelectItem>
                  <SelectItem value="apartment">Daire</SelectItem>
                  <SelectItem value="house">Villa/Müstakil</SelectItem>
                  <SelectItem value="commercial">İşyeri</SelectItem>
                  <SelectItem value="land">Arsa/Arazi</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Konum ara..." className="h-12" />

              <Link to={`/${searchType === "sale" ? "satilik" : "kiralik"}`}>
                <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                  <Search className="h-5 w-5 mr-2" />
                  Ara
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {type.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {type.label}
                </h3>
                <p className="text-blue-600 font-bold">{type.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan İlanlar
            </h2>
            <p className="text-lg text-gray-600">
              Sizin için seçtiğimiz en iyi gayrimenkuller
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProperties.length > 0 ? (
              featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                Henüz eklenmiş ilan bulunmamaktadır.
              </p>
            )}
          </div>

          <div className="text-center">
            <Link to="/satilik">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
              >
                Tüm İlanları Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Berk Mutlu Emlak?
            </h2>
            <p className="text-lg text-gray-600">
              Hayalinizdeki evi bulmak için en iyi seçim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Hayalinizdeki Evi Bulalım</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Profesyonel ekibimiz ile size en uygun gayrimenkulu bulmak için hazırız
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
              >
                İletişime Geç
              </Button>
            </Link>
            <a href={`tel:${companyInfo.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-xl"
              >
                Hemen Ara
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
