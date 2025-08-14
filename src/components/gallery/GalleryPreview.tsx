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

  // Custom function to arrange gallery images with specific positioning
  const getArrangedGalleryImages = () => {
    const featuredImages = getFeaturedGalleryImages().slice(0, 12); // Limit to 12 cards

    // Find Games Room and Yoga cards
    const gamesRoomCard = featuredImages.find(
      (img) => img.title === "Games Room"
    );
    const yogaCard = featuredImages.find((img) => img.title === "Yoga");

    // Filter out these cards from the original array
    const otherCards = featuredImages.filter(
      (img) => img.title !== "Games Room" && img.title !== "Yoga"
    );

    // Create a new array with our desired order
    const arrangedImages = [];

    // For 3 columns layout:
    if (columns === 3) {
      // First column starts with Games Room
      const col1 = gamesRoomCard ? [gamesRoomCard] : [];
      // Second column with other images
      const col2 = [];
      // Third column starts with Yoga
      const col3 = yogaCard ? [yogaCard] : [];

      // Distribute remaining cards
      let colIndex = 0;
      for (const card of otherCards) {
        if (colIndex === 0 && col1.length > 0) {
          col1.push(card);
          colIndex = 1;
        } else if (colIndex === 1) {
          col2.push(card);
          colIndex = 2;
        } else {
          col3.push(card);
          colIndex = 0;
        }
      }

      // Interleave the columns to create the correct order for the Masonry component
      const maxLength = Math.max(col1.length, col2.length, col3.length);
      for (let i = 0; i < maxLength; i++) {
        if (i < col1.length) arrangedImages.push(col1[i]);
        if (i < col2.length) arrangedImages.push(col2[i]);
        if (i < col3.length) arrangedImages.push(col3[i]);
      }
    }
    // For 2 columns layout
    else if (columns === 2) {
      // First column starts with Games Room
      const col1 = gamesRoomCard ? [gamesRoomCard] : [];
      // Second column starts with Yoga
      const col2 = yogaCard ? [yogaCard] : [];

      // Distribute remaining cards
      let colIndex = 0;
      for (const card of otherCards) {
        if (colIndex === 0) {
          col1.push(card);
          colIndex = 1;
        } else {
          col2.push(card);
          colIndex = 0;
        }
      }

      // Interleave the columns
      const maxLength = Math.max(col1.length, col2.length);
      for (let i = 0; i < maxLength; i++) {
        if (i < col1.length) arrangedImages.push(col1[i]);
        if (i < col2.length) arrangedImages.push(col2[i]);
      }
    }
    // For 1 column layout, place Games Room at top, Yoga at bottom
    else {
      if (gamesRoomCard) arrangedImages.push(gamesRoomCard);
      arrangedImages.push(...otherCards);
      if (yogaCard) arrangedImages.push(yogaCard);
    }

    return arrangedImages;
  };

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
          items={getArrangedGalleryImages()}
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
