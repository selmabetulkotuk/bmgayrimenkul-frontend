import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { toast } from '../hooks/use-toast';
import { companyInfo } from '../mock/mockData';
 import { sendContactForm } from '../api'; // en üstte import ekle


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await sendContactForm(formData);
    toast({
      title: 'Mesajınız Gönderildi!',
      description: res.message || 'En kısa sürede sizinle iletişime geçeceğiz.'
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  } catch (err) {
    toast({
      title: 'Hata!',
      description: 'Mesaj gönderilirken bir sorun oluştu.',
      variant: 'destructive'
    });
  }
};


  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefon',
      details: companyInfo.phone,
      link: `tel:${companyInfo.phone}`
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'E-posta',
      details: companyInfo.email,
      link: `mailto:${companyInfo.email}`
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Adres',
      details: companyInfo.address,
      link: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Çalışma Saatleri',
      details: 'Pazartesi - Cumartesi: 09:00 - 18:00',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">İletişim</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Size nasıl yardımcı olabiliriz?
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.details}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Adınız Soyadınız *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">E-posta *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Konu *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mesajınız *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ofisimiz</h2>
              
              {/* Map */}
              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99253.23624028616!2d33.143828!3d37.181006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d703f7d2a7f6e9%3A0x5f1e9f7d5b8c7a1!2sKaraman!5e0!3m2!1str!2str!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Karaman Map"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Neden Bizimle İletişime Geçmelisiniz?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">Profesyonel ve deneyimli ekibimiz</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">Hızlı ve güvenilir hizmet anlayışı</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">Geniş gayrimenkul portföyü</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">Müşteri memnuniyeti odaklı çalışma</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
