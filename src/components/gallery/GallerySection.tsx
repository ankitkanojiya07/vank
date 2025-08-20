import React from "react";
import {
  getGalleryImagesByCategory,
  getAllGalleryImages,
  GalleryImage,
} from "@/data/gallery";
import Masonry from "./Masonry";

type GalleryCategory = GalleryImage["category"];

const GallerySection: React.FC = () => {

  const getImagesForCategory = (categoryId: string) => {
    if (categoryId === "all") {
      return getAllGalleryImages();
    }
    return getGalleryImagesByCategory(categoryId as GalleryCategory);
  };

  const currentImages = getImagesForCategory("all");

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          className="mb-8 sm:mb-12 md:mb-16 w-full"
        >
          <Masonry
            items={currentImages}
            ease="power3.out"
            columns={4}
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </>
  );
};

export default GallerySection;
