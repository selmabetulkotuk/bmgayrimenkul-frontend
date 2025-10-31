import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { companyInfo } from '../mock/mockData';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1AHDbK35YH/?mibextid=wwXIfr" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/berkkmutlu?igsh=dHl2bzJiYTY3amhw" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/satilik" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Satılık İlanlar
                </Link>
              </li>
              <li>
                <Link to="/kiralik" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Kiralık İlanlar
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Gayrimenkul Tipleri</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Daireler</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Villalar</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">İşyerleri</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Arsalar</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Ticari Alanlar</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-blue-400 transition-colors duration-300">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-blue-400 transition-colors duration-300">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Designed By Selma Betül Kotuk & Bahar Güney © 2025 {companyInfo.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

