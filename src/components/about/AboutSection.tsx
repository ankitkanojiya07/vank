"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Leaf, Shield } from "lucide-react";
import {
  dramaticStaggerContainer,
  slideInFromLeft,
  slideInFromRight,
  simpleCardHover,
} from "@/lib/framer";

const AboutSection: React.FC = () => {
  return (
    <div className="">
      <motion.div
        variants={dramaticStaggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Text Content */}
        <motion.div variants={slideInFromLeft} className="space-y-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Welcome To Vanaashrya
              <span className="block text-[#1a2238]">
                Where Luxury Intertwines with Nature
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Experience luxury in the middle of the jungle, found in the
              foothills of the Aravali Ranges, which offers an absolute peaceful
              & pristine atmosphere to relax. Tucked far away in the
              countryside, Vanaashrya, a luxury resort, is close to the Sariska
              tiger reserve in Rajasthan.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Enjoy every moment in this luxurious hideaway with well-equipped
              cottages, villas, private bungalows, and suites to make your stay
              comfortable and memorable for a lifetime.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-[#1a2238] mb-1">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-[#1a2238] mb-1">
                1000+
              </div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
          </div>
        </motion.div>

        {/* Image and Highlights */}
        <motion.div variants={slideInFromRight} className="space-y-8">
          {/* Main Image */}
          <div className="relative">
            <div
              className="rounded-lg overflow-hidden shadow-2xl h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('./gallery/7424630ac3.webp')",
              }}
            />
            {/* Overlay Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    4.8/5 Rating
                  </div>
                  <div className="text-sm text-gray-600">Guest Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Updated highlights to match reference site themes */}
            <motion.div
              variants={simpleCardHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#bfa76f] rounded-lg flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                Boutique Bespoke Resort
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                A unique blend of luxury and nature, offering personalized
                experiences.
              </p>
            </motion.div>
            <motion.div
              variants={simpleCardHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#bfa76f] rounded-lg flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                Peaceful & Pristine
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Located in the foothills of Aravali, surrounded by nature and
                tranquility.
              </p>
            </motion.div>
            <motion.div
              variants={simpleCardHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#bfa76f] rounded-lg flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                Wildlife & Conservation
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Close to Sariska Tiger Reserve, supporting wildlife and
                eco-tourism.
              </p>
            </motion.div>
            <motion.div
              variants={simpleCardHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#bfa76f] rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                Comfort & Safety
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Modern amenities and attentive service for a memorable stay.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
