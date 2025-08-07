'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getFeaturedAmenities } from '@/data/amenities';
import Link from 'next/link';

const ModernAmenitiesSection: React.FC = () => {
  const amenities = getFeaturedAmenities();

  const [activeAmenity, setActiveAmenity] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveAmenity((prev) => (prev + 1) % amenities.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [amenities.length]);

  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl lg:text-5xl font-bold  mb-8"
          >
            Amenities
          </h2>
        </div>

        {/* Interactive Amenities Display */}
        <div className="max-w-6xl mx-auto">
          {/* Main Display Area with Carousel */}
          <div
            className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl mb-8"
          >
            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveAmenity((prev) => (prev - 1 + amenities.length) % amenities.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/70 hover:bg-white/90 shadow-lg"
              aria-label="Previous Amenity"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => setActiveAmenity((prev) => (prev + 1) % amenities.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/70 hover:bg-white/90 shadow-lg"
              aria-label="Next Amenity"
            >
              <ChevronRight size={28} />
            </button>
            {/* AnimatePresence for swipe effect */}
            <AnimatePresence mode="wait">
              <div
                key={activeAmenity}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                  style={{
                    backgroundImage: `url('${amenities[activeAmenity].image}')`
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Content */}
                <div className="relative z-10 h-full flex items-end">
                  <div className="p-8 w-full">
                    <div
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-6 max-w-md"
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {amenities[activeAmenity].name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {amenities[activeAmenity].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          </div>

          {/* Amenity Selection Row - Modern, Glassy, Animated */}
          <div className="w-full overflow-x-auto no-scrollbar">
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar { display: none; }
              .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            <div className="flex flex-row gap-4 min-w-[600px] md:min-w-0 justify-center items-end">
              {amenities.map((amenity, index) => {
                const isActive = index === activeAmenity;
                return (
                  <button
                    key={amenity.id}
                    onClick={() => setActiveAmenity(index)}
                    className={`group relative flex-shrink-0 transition-all duration-300 overflow-hidden rounded-xl bg-white/30 backdrop-blur-md border border-white/40 shadow-lg ${
                      isActive
                        ? 'z-10 scale-125 ring-4 ring-green-500 shadow-2xl w-40 h-40 md:w-48 md:h-48'
                        : 'scale-90 w-24 h-24 md:w-28 md:h-28 opacity-70'
                    }`}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${amenity.image}')` }}
                    />
                    {/* Glass overlay */}
                    <div className={`absolute inset-0 transition-colors duration-300 ${
                      isActive
                        ? 'bg-green-600/40'
                        : 'bg-white/20 group-hover:bg-white/30'
                    } rounded-xl`} />
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-2">
                      <h4 className={`font-semibold text-center drop-shadow-lg ${isActive ? 'text-base md:text-lg' : 'text-xs md:text-sm'}`.trim()}>
                        {amenity.name}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="text-center mt-12"
          >
            <Link 
              href="/amenities" 
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded text-lg font-semibold transition-colors duration-300"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAmenitiesSection;
