"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer";
import { amenities } from "@/data/amenities";
import AmenityCard from "./AmenityCard";
import BookingModal from "../common/BookingModal";
// import Link from "next/link";

const AmenitiesSection: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Filter amenities by category
  // const diningAmenities = amenities.filter(
  //   (amenity) => amenity.category === "dining" && !amenity.featured
  // );
  // const wellnessAmenities = amenities.filter(
  //   (amenity) => amenity.category === "wellness" && !amenity.featured
  // );
  const recreationAmenities = amenities.filter(
    (amenity) => amenity.category === "recreation" && !amenity.featured
  );
  const safariAmenities = amenities.filter(
    (amenity) => amenity.category === "safari" && !amenity.featured
  );
  const accommodationAmenities = amenities.filter(
    (amenity) => amenity.category === "accommodation" && !amenity.featured
  );

  return (
    <>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
          >
            World-Class
            <span className="block text-[#1a2238]">Amenities</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Experience luxury and comfort with our comprehensive range of
            amenities designed to make your stay unforgettable.
          </motion.p>
        </motion.div>

        {/* Featured Amenities */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {amenities
            .filter((amenity) => amenity.featured)
            .map((amenity, index) => (
              <motion.div
                key={amenity.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <AmenityCard amenity={amenity} featured={true} />
              </motion.div>
            ))}
        </motion.div>

        {/* Category Sections */}
        <div className="space-y-16">
          {/* Dining */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* <motion.h3
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Dining Experiences
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {diningAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <AmenityCard amenity={amenity} featured={false} />
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Wellness */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="background-color:#f4efea rounded-2xl p-8 lg:p-12"
          >
            {/* <motion.h3
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Wellness & Relaxation
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {wellnessAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <AmenityCard amenity={amenity} featured={false} />
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Recreation */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Recreation & Activities
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {recreationAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <AmenityCard amenity={amenity} featured={false} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Safari */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="background-color: #f4efea rounded-2xl p-8 lg:p-12"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Wildlife Safari
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {safariAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <AmenityCard amenity={amenity} featured={false} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Accommodation */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              Room Amenities
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {accommodationAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <AmenityCard amenity={amenity} featured={false} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        {/* <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1a2238] to-[#232323] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Book your stay and enjoy all our premium amenities in the heart of Sariska.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#1a2238] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                Book Now
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[#1a2238] px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default AmenitiesSection;
