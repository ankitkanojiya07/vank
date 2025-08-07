"use client";

import React from 'react';
import TestimonialsTabs from '@/components/common/TestimonialsTabs';
import HeroSection from '@/components/common/HeroSection';
import { heroSections } from '@/data/heroSections';

export default function TestimonialsPage() {
  return (
    <>
      <HeroSection {...heroSections.testimonials} videoSrc={heroSections.testimonials.videoSrc} />
      <div className="container mx-auto px-4 py-12">
        <TestimonialsTabs />
      </div>
    </>
  );
} 