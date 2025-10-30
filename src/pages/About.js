import React from 'react';
import { Shield, TrendingUp, Users, Award, Heart, Target } from 'lucide-react';
import { companyInfo } from '../mock/mockData';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Güven',
      description: 'Müşterilerimizin güvenini kazanmak ve korumak en büyük önceliğimizdir'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Müşteri Memnuniyeti',
      description: 'Her müşterimizin ihtiyaçlarına özel çözümler sunmak için çalışıyoruz'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Profesyonellik',
      description: 'Yılların deneyimi ile sektörde profesyonel hizmet anlayışı'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Hedef Odaklı',
      description: 'Müşterilerimizin hayallerindeki evi bulmalarına yardımcı olmak'
    }
  ];

  const stats = [
    { number: '10+', label: 'Yıllık Tecrübe' },
    { number: '500+', label: 'Mutlu Müşteri' },
    { number: '350+', label: 'Tamamlanan İşlem' },
    { number: '%98', label: 'Memnuniyet Oranı' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
            alt="About"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Hakkımızda</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Karaman'ın güvenilir emlak danışmanı
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{companyInfo.name}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Gayrimenkul sektöründeki yılların tecrübesi ve güvenilirliğimizle, 
                Karaman'da ev, işyeri, arsa ve her türlü gayrimenkul alım-satım ve 
                kiralama işlemlerinizde yanınızdayız. Müşteri memnuniyetini ön planda 
                tutarak, profesyonel ekibimizle size en uygun gayrimenkulü bulmanıza yardımcı oluyoruz.
                Soyadımız mutluluk,işimiz güven.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Office"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-600">
              Başarımızın arkasındaki temel prensiplerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600">
              Size sunduğumuz profesyonel emlak hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alım-Satım Danışmanlığı</h3>
              <p className="text-gray-600 leading-relaxed">
                Ev, arsa, işyeri gibi gayrimenkul alım-satım işlemlerinizde profesyonel danışmanlık hizmeti
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kiralama Hizmetleri</h3>
              <p className="text-gray-600 leading-relaxed">
                Kiralık daire, işyeri ve diğer gayrimenkul kiralama işlemlerinizde aracılık hizmeti
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yatırım Danışmanlığı</h3>
              <p className="text-gray-600 leading-relaxed">
                Gayrimenkul yatırımlarınızda en doğru kararları almanız için uzman görüşü sunuyoruz
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
