'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/framer';

const ExperiencesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = [
    {
      id: 1,
      title: 'Live Cooking',
      description: 'Take a look at the "very-own" kitchen garden where you can see the seasonal vegetables being grown. A cooking demo can be planned where you can learn the secrets of Indian spices and plan your own menu with chef.',
      image: '/images/experiences/live-cooking.webp'
    },
    {
      id: 2,
      title: 'Sariska Tiger Reserve',
      description: 'Escape to the Tiger Reserve to catch our majestic beasts in action. Catch them on the hunt, or even lazing around like the rest of us on a Sunday. Our experienced tour guides take you through trails only known to the locals.',
      image: '/images/experiences/tiger-safari.webp'
    },
    {
      id: 3,
      title: 'Cultural Performances',
      description: 'The Rajasthani Dance Form Originated From the Bhil Tribe, which was later adopted by the Royal Rajput Communities of Rajasthan.',
      image: '/images/experiences/cultural-dance.webp'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experiences.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [experiences.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8"
          >
            Experiences
          </motion.h2>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative h-[70vh] min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('${experiences[currentSlide].image}')`
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                    {experiences[currentSlide].title}
                  </h3>
                  <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                    {experiences[currentSlide].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute inset-y-0 left-4 flex items-center">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 text-white"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-3">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesCarousel;
