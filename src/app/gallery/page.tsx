import React from "react";
import GallerySection from "@/components/gallery/GallerySection";

export default function GalleryPage() {
  return (
    <div className="gallery-container">
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 w-full overflow-hidden">
        <GallerySection />
      </section>
    </div>
  );
}
