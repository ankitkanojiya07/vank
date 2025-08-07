"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GalleryImage } from "@/data/gallery";
import { simpleCardHover } from "@/lib/framer";
import { ZoomIn, X } from "lucide-react";
import Image from "next/image";

interface GalleryCardProps {
  image: GalleryImage;
  featured?: boolean;
  onClick?: () => void;
  isModalOpen?: boolean;
  onClose?: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  image,
  featured = false,
  onClick,
  isModalOpen,
  onClose,
}) => {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const modalOpen = isModalOpen !== undefined ? isModalOpen : internalModalOpen;
  const handleOpen = () => {
    if (onClick) onClick();
    else setInternalModalOpen(true);
  };
  const handleClose = () => {
    if (onClose) onClose();
    else setInternalModalOpen(false);
  };

  const cardSize = featured ? "h-80" : "h-64";

  return (
    <>
      <motion.div
        variants={simpleCardHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className={`relative group rounded-xl overflow-hidden shadow-lg cursor-pointer ${cardSize}`}
        onClick={handleOpen}
      >
        {/* Image */}
        <Image
          src={image.image}
          alt={image.title}
          width={1080}
          height={720}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ZoomIn className="text-white w-8 h-8" />
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-lg mb-1">
            {image.title}
          </h3>
          <p className="text-gray-200 text-sm">{image.caption}</p>
        </div>
      </motion.div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
            >
              <X className="text-white w-6 h-6" />
            </button>

            {/* Image */}
            <Image
              src={image.image}
              alt={image.title}
              width={1080}
              height={720}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-2xl mb-2">
                {image.title}
              </h3>
              <p className="text-gray-200 text-lg">{image.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;
