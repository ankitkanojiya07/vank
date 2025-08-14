"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { fadeInUp, staggerContainer } from "@/lib/framer";
import {
  getGalleryImagesByCategory,
  getAllGalleryImages,
  GalleryImage,
} from "@/data/gallery";
import Masonry from "./Masonry";
import BookingModal from "../common/BookingModal";

type GalleryCategory = GalleryImage["category"];

const GallerySection: React.FC = () => {
  const [activeCategory] = useState<string>("all");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
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

  const getImagesForCategory = (categoryId: string) => {
    if (categoryId === "all") {
      return getAllGalleryImages();
    }
    return getGalleryImagesByCategory(categoryId as GalleryCategory);
  };

  const currentImages = getImagesForCategory(activeCategory);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Masonry Gallery Grid with entry motion */}
        <motion.div
          className="mb-8 sm:mb-12 md:mb-16 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Masonry
            items={currentImages}
            columns={columns}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            colorShiftOnHover={false}
          />
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default GallerySection;
