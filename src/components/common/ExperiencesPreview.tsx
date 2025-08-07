'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { dramaticFadeInUp, dramaticStaggerContainer } from '@/lib/framer';

const ExperiencesPreview: React.FC = () => {
  return (
    <section id="experiences-preview" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={dramaticStaggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.h2 
            variants={dramaticFadeInUp}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
          >
            Unforgettable <span className="text-[#1a2238]">Experiences</span>
          </motion.h2>
          <motion.p 
            variants={dramaticFadeInUp}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            From thrilling tiger safaris to peaceful nature walks, 
            discover the magic of Sariska with our curated experiences.
          </motion.p>
          <motion.div variants={dramaticFadeInUp}>
            <a 
              href="/experiences" 
              className="inline-block bg-[#1a2238] hover:bg-[#232323] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Explore All Experiences
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesPreview; 