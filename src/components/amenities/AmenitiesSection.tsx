import React from "react";
import { amenities } from "@/data/amenities";
import AmenityCard from "./AmenityCard";

const AmenitiesSection: React.FC = () => {
  const recreationAmenities = amenities.filter(
    (amenity) => amenity.category === "recreation" && !amenity.featured
  );
  const safariAmenities = amenities.filter(
    (amenity) => amenity.category === "safari" && !amenity.featured
  );
  const accommodationAmenities = amenities.filter(
    (amenity) => amenity.category === "accommodation" && !amenity.featured
  );

  return (
    <>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            World-Class
            <span className="block text-[#1a2238]">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury and comfort with our comprehensive range of
            amenities designed to make your stay unforgettable.
          </p>
        </div>

        {/* Featured Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities
            .filter((amenity) => amenity.featured)
            .map((amenity, index) => (
              <div key={amenity.id}>
                <AmenityCard amenity={amenity} featured={true} />
              </div>
            ))}
        </div>

        {/* Category Sections */}
        <div className="space-y-16">
          {/* Dining */}
          <div></div>

          {/* Wellness */}
          <div className="bg-[#f4efea] rounded-2xl p-8 lg:p-12"></div>

          {/* Recreation */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Recreation & Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recreationAmenities.map((amenity, index) => (
                <div key={amenity.id}>
                  <AmenityCard amenity={amenity} featured={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Safari */}
          <div className="bg-[#f4efea] rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Wildlife Safari
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safariAmenities.map((amenity, index) => (
                <div key={amenity.id}>
                  <AmenityCard amenity={amenity} featured={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Accommodation */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Room Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accommodationAmenities.map((amenity, index) => (
                <div key={amenity.id}>
                  <AmenityCard amenity={amenity} featured={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmenitiesSection;
