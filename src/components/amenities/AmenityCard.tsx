import React from "react";
import * as Icons from "lucide-react";
import { Amenity } from "@/data/amenities";
import Image from "next/image";


interface AmenityCardProps {
  amenity: Amenity;
  featured?: boolean;
}

const AmenityCard: React.FC<AmenityCardProps> = ({
  amenity,
  featured = false,
}) => {
  const IconComponent = Icons[
    amenity.icon as keyof typeof Icons
  ] as React.ComponentType<any>;


  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col transition-all duration-300 group"
    >
      {/* Image Section - Increased Size */}
      <div className="relative h-48 sm:h-52 w-full bg-gray-200">
        <Image
          src={amenity.image}
          alt={amenity.name}
          width={500}
          height={300}
          className="object-cover w-full h-full rounded-t-2xl"
        />
        {/* Icon Overlay */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 bg-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 border-4 border-white">
          {IconComponent && (
            <IconComponent className="w-7 h-7 text-[#bfa76f]" />
          )}
        </div>
      </div>
      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center text-center px-4 pt-10 pb-6 bg-white rounded-b-2xl">
        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-2">
          {amenity.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {amenity.description.length > 70
            ? amenity.description.slice(0, 70) + "..."
            : amenity.description}
        </p>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#bfa76f] text-[#1a2238]">
            {amenity.category.charAt(0).toUpperCase() +
              amenity.category.slice(1)}
          </span>
          {featured && (
            <span className="px-3 py-1 bg-[#1a2238] text-white rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AmenityCard;
