"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer";
import { getFeaturedGalleryImages, GalleryImage } from "@/data/gallery";
import GalleryCard from "./GalleryCard";

const LazyGalleryGrid: React.FC = () => {
  const featuredImages = getFeaturedGalleryImages().slice(0, 6); // Show only 6 featured images
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12"
      >
        {featuredImages.map((image, index) => (
          <motion.div
            key={image.id}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="w-full"
          >
            <GalleryCard
              image={image}
              featured={false}
              onClick={() => setSelectedImage(image)}
            />
          </motion.div>
        ))}
        {/* Modal rendered at grid level */}
        {selectedImage ? (
          <GalleryCard
            image={selectedImage}
            featured={false}
            isModalOpen={true}
            onClose={() => setSelectedImage(null)}
          />
        ) : null}
      </motion.div>
    </div>
  );
};

export default LazyGalleryGrid;
