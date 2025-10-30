import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize, Home, Calendar, Thermometer, ArrowLeft, Phone, Mail, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from '../hooks/use-toast';
import { mockProperties, companyInfo } from '../mock/mockData';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const found = mockProperties.find(p => p.id === id);
    if (found) {
      setProperty(found);
      setFormData({
        ...formData,
        message: `Merhaba, ${found.title} ilanı hakkında bilgi almak istiyorum.`
      });
    }
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be connected to backend later
    toast({
      title: 'Mesajınız Gönderildi!',
      description: 'En kısa sürede sizinle iletişime geçeceğiz.'
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link Kopyalandı!',
        description: 'İlan linki panoya kopyalandı.'
      });
    }
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">İlan Bulunamadı</h2>
          <Link to="/">
            <Button>Ana Sayfaya Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to={property.type === 'sale' ? '/satilik' : '/kiralik'}>
            <Button variant="ghost" className="hover:bg-blue-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Geri Dön
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={`${
                    property.type === 'sale'
                      ? 'bg-gradient-to-r from-green-600 to-green-700'
                      : 'bg-gradient-to-r from-orange-600 to-orange-700'
                  } text-white text-lg px-4 py-2`}>
                    {property.type === 'sale' ? 'Satılık' : 'Kiralık'}
                  </Badge>
                </div>
                <Button
                  onClick={handleShare}
                  className="absolute top-4 right-4 bg-white text-gray-900 hover:bg-gray-100"
                  size="icon"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {property.images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto">
                  {property.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${property.title} ${index + 1}`}
                      className={`w-24 h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedImage === index
                          ? 'ring-4 ring-blue-600 scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <Card>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="text-lg">{property.location}</span>
                </div>

                <div className="flex items-center mb-6">
                  <div className="text-4xl font-bold text-blue-600">
                    {formatPrice(property.price)}
                    {property.type === 'rent' && <span className="text-xl text-gray-600 ml-2">/ay</span>}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {property.rooms > 0 && (
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <Bed className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-600">Oda Sayısı</div>
                        <div className="font-semibold">{property.rooms}+1</div>
                      </div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <Bath className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-600">Banyo</div>
                        <div className="font-semibold">{property.bathrooms}</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                    <Maximize className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">Alan</div>
                      <div className="font-semibold">{property.area} m²</div>
                    </div>
                  </div>
                  {property.buildingAge > 0 && (
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-600">Bina Yaşı</div>
                        <div className="font-semibold">{property.buildingAge} yıl</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Açıklama</h2>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Emlak Bilgileri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.floor > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Bulunduğu Kat:</span>
                      <span className="font-semibold">{property.floor}</span>
                    </div>
                  )}
                  {property.buildingFloors > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Kat Sayısı:</span>
                      <span className="font-semibold">{property.buildingFloors}</span>
                    </div>
                  )}
                  {property.heating && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Isıtma:</span>
                      <span className="font-semibold">{property.heating}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Eşya Durumu:</span>
                    <span className="font-semibold">{property.furnished ? 'Eşyalı' : 'Eşyasız'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Özellikler</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">İletişime Geç</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Adınız Soyadınız</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-posta</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Mesajınız</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      <Mail className="h-4 w-4 mr-2" />
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Agent Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Emlak Danışmanı</h3>
                  <div className="text-center space-y-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-white">
                      <Home className="h-10 w-10" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{companyInfo.name}</h4>
                      <p className="text-sm text-gray-600">{companyInfo.tagline}</p>
                    </div>
                    <div className="space-y-2">
                      <a href={`tel:${companyInfo.phone}`}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                          <Phone className="h-4 w-4 mr-2" />
                          {companyInfo.phone}
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
