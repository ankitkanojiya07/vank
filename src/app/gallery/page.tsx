"use client"
import React from 'react';
import GallerySection from '@/components/gallery/GallerySection';
import HeroSection from '@/components/common/HeroSection';
import { heroSections } from '@/data/heroSections';

export default function GalleryPage() {
  return (
    <>
      <HeroSection {...heroSections.gallery} videoSrc={heroSections.gallery.videoSrc} />
      <section className="py-16 lg:py-24">
        <GallerySection />
      </section>
    </>
  );
} 