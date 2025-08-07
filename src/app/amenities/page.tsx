import React from 'react';
import AmenitiesSection from '@/components/amenities/AmenitiesSection';
import HeroSection from '@/components/common/HeroSection';
import { heroSections } from '@/data/heroSections';

export default function AmenitiesPage() {
  return (
    <>
      <HeroSection {...heroSections.amenities} />
      <section className="py-16 lg:py-24">
        <AmenitiesSection />
      </section>
    </>
  );
} 