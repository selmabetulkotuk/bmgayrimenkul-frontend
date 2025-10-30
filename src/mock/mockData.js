// Mock data for Berk Mutlu Emlak

export const mockProperties = [
  {
    id: '1',
    title: 'Merkez\'de Satılık Lüks 3+1 Daire',
    price: 2500000,
    type: 'sale',
    propertyType: 'apartment',
    location: 'Karaman Merkez',
    district: 'Merkez',
    rooms: 3,
    bathrooms: 2,
    area: 150,
    floor: 5,
    buildingFloors: 8,
    buildingAge: 2,
    heating: 'Kombi (Doğalgaz)',
    furnished: false,
    features: ['Asansör', 'Otopark', 'Balkon', 'Güvenlik', 'Merkezi Sistem'],
    description: 'Karaman merkezde, ulaşım imkanlarına çok yakın, ferah ve modern 3+1 daire. Site içerisinde güvenlik, otopark ve sosyal alanlar mevcuttur.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1502672260066-6bc35f0a1f80?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
    ],
    virtualTour: 'https://example.com/virtual-tour-1',
    mapLocation: { lat: 37.1759, lng: 33.2287 },
    createdAt: '2025-01-15'
  },
  {
    id: '2',
    title: 'Kiralık Merkezi Konumda 2+1 Daire',
    price: 8000,
    type: 'rent',
    propertyType: 'apartment',
    location: 'Karaman Merkez',
    district: 'Merkez',
    rooms: 2,
    bathrooms: 1,
    area: 100,
    floor: 3,
    buildingFloors: 6,
    buildingAge: 5,
    heating: 'Kombi (Doğalgaz)',
    furnished: true,
    features: ['Asansör', 'Eşyalı', 'Balkon', 'Doğalgaz'],
    description: 'Merkezi konumda, okullara ve marketlere yakın, eşyalı kiralık 2+1 daire. Hemen taşınılabilir.',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80'
    ],
    virtualTour: '',
    mapLocation: { lat: 37.1759, lng: 33.2287 },
    createdAt: '2025-01-14'
  },
  {
    id: '3',
    title: 'Satılık Müstakil Villa',
    price: 4500000,
    type: 'sale',
    propertyType: 'house',
    location: 'Karaman Merkez',
    district: 'Merkez',
    rooms: 5,
    bathrooms: 3,
    area: 300,
    floor: 0,
    buildingFloors: 2,
    buildingAge: 1,
    heating: 'Yerden Isıtma',
    furnished: false,
    features: ['Bahçe', 'Otopark', 'Güvenlik Kamerası', 'Şömine', 'Havuz'],
    description: 'Lüks villalar bölgesinde, özel havuzlu, bahçeli müstakil villa. Modern mimarisi ve ferah iç mekanları ile dikkat çekiyor.',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    ],
    virtualTour: 'https://example.com/virtual-tour-3',
    mapLocation: { lat: 37.1759, lng: 33.2287 },
    createdAt: '2025-01-13'
  },
  {
    id: '4',
    title: 'Kiralık İşyeri / Dükkan',
    price: 15000,
    type: 'rent',
    propertyType: 'commercial',
    location: 'Karaman Merkez',
    district: 'Merkez',
    rooms: 0,
    bathrooms: 1,
    area: 80,
    floor: 1,
    buildingFloors: 4,
    buildingAge: 10,
    heating: 'Klima',
    furnished: false,
    features: ['Geniş Vitrin', 'WC', 'Merkezi Konum', 'Yüksek Tavan'],
    description: 'Ana cadde üzerinde, yoğun insan trafiğine sahip, geniş vitrinli kiralık işyeri. Her türlü ticari faaliyet için uygundur.',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
    ],
    virtualTour: '',
    mapLocation: { lat: 37.1759, lng: 33.2287 },
    createdAt: '2025-01-12'
  },
  {
    id: '5',
    title: 'Satılık Arsa / Arazi',
    price: 1800000,
    type: 'sale',
    propertyType: 'land',
    location: 'Karaman Merkez',
    district: 'Merkez',
    rooms: 0,
    bathrooms: 0,
    area: 500,
    floor: 0,
    buildingFloors: 0,
    buildingAge: 0,
    heating: '',
    furnished: false,
    features: ['İmar İçinde', 'Ana Yola Cepheli', 'Elektrik', 'Su'],
    description: 'İmar içerisinde, ana yola cepheli, elektrik ve su bağlantısı olan satılık arsa. Yatırım için ideal.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80'
    ],
    virtualTour: '',
    mapLocation: { lat: 37.1759, lng: 33.2287 },
    createdAt: '2025-01-11'
  },
  {
    id: '6',
    title: 'Kiralık 4+1 Dubleks Daire',
    price: 12000,
    type: 'rent',
    propertyType: 'apartment',
    location: 'Karaman Merkez',
    district: 'Merkez',
    rooms: 4,
    bathrooms: 2,
    area: 200,
    floor: 6,
    buildingFloors: 7,
    buildingAge: 3,
    heating: 'Merkezi Sistem',
    furnished: true,
    features: ['Asansör', 'Otopark', 'Balkon', 'Eşyalı', 'Teras', 'Güvenlik'],
    description: 'Lüks sitede, teraslı, manzaralı 4+1 dubleks daire. Eşyalı olarak kiralanmaktadır.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80'
    ],
    virtualTour: 'https://example.com/virtual-tour-6',
    mapLocation: { lat: 37.1759, lng: 33.2287 },
    createdAt: '2025-01-10'
  }
];

export const mockContacts = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    email: 'ahmet@email.com',
    phone: '0555 123 45 67',
    message: 'Merkezdeki 3+1 daire hakkında bilgi almak istiyorum.',
    propertyId: '1',
    createdAt: '2025-01-15'
  },
  {
    id: '2',
    name: 'Ayşe Demir',
    email: 'ayse@email.com',
    phone: '0533 987 65 43',
    message: 'Kiralık daireleri görmek istiyorum.',
    propertyId: null,
    createdAt: '2025-01-14'
  }
];

export const companyInfo = {
  name: 'Berk Mutlu Gayrimenkul',
  tagline: 'Karaman\'ın Güvenilir Gayrimenkul Danışmanı',
  phone: '+90 545 426 8962',
  email: 'berkmutlu701@gmail.com',
  address: 'Kazım Karabekir Paşa Mahallesi Kazım Karabekir Caddesi No:16/D',
  description: 'Berk Mutlu Gayrimenkul, güven ve dürüstlük ilkesiyle hareket eden, her müşterisinin ihtiyaçlarına özel çözümler sunmayı hedefleyen bir gayrimenkul danışmanlık firmasıdır.Bizim için her müşteri, bir iş değil; uzun soluklu bir dostluğun başlangıcıdır. Gayrimenkulde mutlu bir başlangıç için doğru adrestesiniz.Soyadımız mutluluk,işimiz güven.'
};
