"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Masonry from "./Masonry";
import { getFeaturedGalleryImages } from "@/data/gallery";

const GalleryPreview: React.FC = () => {
  // Responsive columns for Masonry
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container w-full mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl flex gap-1 justify-center items-center font-bold text-muted mb-2">
          Gallery Preview
        </h2>
        <p className="text-xl text-secondary-navy max-w-3xl mx-auto leading-relaxed">
          Take a glimpse into the luxury and beauty that awaits you at
          Vanaashrya Resort.
        </p>
      </div>

      {/* Masonry Gallery Preview */}
      <div className="mb-12">
        <Masonry
          items={getFeaturedGalleryImages()} // Display only the first 9 images
          columns={columns}
          ease="power3.out"
          duration={0.7}
          stagger={0.08}
          animateFrom="bottom"
          colorShiftOnHover={false}
        />
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link
          href="/gallery"
          className="inline-block bg-muted text-white px-4 text-sm py-2 rounded-full font-semibold transition-colors duration-300"
        >
          View Full Gallery
        </Link>
      </div>
    </div>
  );
};

export default GalleryPreview;
