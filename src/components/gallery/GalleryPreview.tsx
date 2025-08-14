"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedGalleryImages, getAllGalleryImages } from "@/data/gallery";

const GalleryPreview: React.FC = () => {
  // Responsive columns for Masonry
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumns(1);
      } else if (width < 768) {
        setColumns(2);
      } else if (width < 1024) {
        setColumns(2);
      } else if (width < 1280) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom function to arrange gallery images with better distribution
  const getArrangedGalleryImages = () => {
    const featuredImages = getFeaturedGalleryImages();

    // For better visual flow, use a number divisible by columns
    const targetCount =
      columns === 4 ? 12 : columns === 3 ? 12 : columns === 2 ? 8 : 9;
    const imagesToShow = featuredImages.slice(0, targetCount);

    // If we don't have enough images, fill with non-featured ones
    if (imagesToShow.length < targetCount) {
      const allImages = getAllGalleryImages();
      const nonFeaturedImages = allImages.filter((img) => !img.featured);
      const additionalImages = nonFeaturedImages.slice(
        0,
        targetCount - imagesToShow.length
      );
      imagesToShow.push(...additionalImages);
    }

    // Simple balanced distribution
    return imagesToShow;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex gap-1 justify-center items-center font-bold text-muted mb-2">
          Gallery Preview
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-secondary-navy max-w-3xl mx-auto leading-relaxed px-4">
          Take a glimpse into the luxury and beauty that awaits you at
          Vanaashrya Resort.
        </p>
      </div>

      {/* Grid Gallery Preview - Better for even distribution */}
      <div className="mb-8 sm:mb-10 md:mb-12 w-full">
        <div
          className={`grid gap-3 sm:gap-4 md:gap-6 ${
            columns === 1
              ? "grid-cols-1"
              : columns === 2
              ? "grid-cols-2"
              : columns === 3
              ? "grid-cols-3"
              : "grid-cols-4"
          }`}
        >
          {getArrangedGalleryImages().map((item, index) => (
            <div
              key={item.id}
              className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:shadow-2xl h-64 sm:h-72 md:h-80"
            >
              <div className="relative transition-transform duration-300 group-hover:scale-105 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 4}
                />
                {/* Overlay with gradient and text on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl">
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm md:text-base drop-shadow">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <Link
          href="/gallery"
          className="inline-block bg-muted text-white px-6 sm:px-8 text-sm sm:text-base py-2 sm:py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-muted/90"
        >
          View Full Gallery
        </Link>
      </div>
    </div>
  );
};

export default GalleryPreview;
