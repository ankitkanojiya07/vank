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
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
    >
      {featuredImages.map((image, index) => (
        <motion.div
          key={image.id}
          variants={fadeInUp}
          transition={{ delay: index * 0.1 }}
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
  );
};

export default LazyGalleryGrid;
