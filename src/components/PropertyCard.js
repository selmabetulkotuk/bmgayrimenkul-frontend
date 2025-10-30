import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getPropertyTypeLabel = (type) => {
    const types = {
      apartment: 'Daire',
      house: 'Villa/Müstakil',
      commercial: 'İşyeri',
      land: 'Arsa/Arazi'
    };
    return types[type] || type;
  };

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
      <div className="relative overflow-hidden h-64">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={`${
            property.type === 'sale'
              ? 'bg-gradient-to-r from-green-600 to-green-700'
              : 'bg-gradient-to-r from-orange-600 to-orange-700'
          } text-white border-0 shadow-lg`}>
            {property.type === 'sale' ? 'Satılık' : 'Kiralık'}
          </Badge>
          <Badge className="bg-white/90 text-gray-800 border-0 shadow-lg">
            {getPropertyTypeLabel(property.propertyType)}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="h-4 w-4 mr-1 text-blue-600" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          {property.rooms > 0 && (
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-blue-600" />
              <span>{property.rooms}+1</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-blue-600" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4 text-blue-600" />
            <span>{property.area} m²</span>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <div className="text-3xl font-bold text-blue-600">
            {formatPrice(property.price)}
            {property.type === 'rent' && <span className="text-base text-gray-600 ml-1">/ay</span>}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Link to={`/ilan/${property.id}`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Detayları Gör
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
