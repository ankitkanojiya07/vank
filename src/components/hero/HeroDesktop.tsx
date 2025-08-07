'use client';

import React from 'react';
import { motion } from 'framer-motion';

const bgVariants = {
  initial: { scale: 1, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 2.2 } },
  zoom: {
    scale: 1.25,
    transition: {
      duration: 18,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};
const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.6, delay: 0.2 } },
};
const textParent = {
  initial: {},
  animate: { transition: { staggerChildren: 0.22, delayChildren: 0.7 } },
};
const textChild = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.4 } },
};

const HeroDesktop: React.FC = () => {
  return (
    <section className="relative h-screen w-full ">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.25)), url('./gallery/herobackground.jpg')",
          transformOrigin: "bottom center"
        }}
        variants={bgVariants}
        initial="initial"
        animate={["animate", "zoom"]}
      />
      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
      />
      {/* Animated Text */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-w-2xl w-full text-center flex flex-col gap-2"
        variants={textParent}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          className="text-white text-3xl lg:text-5xl font-bold mb-2 opacity-95 drop-shadow-lg"
          variants={textChild}
        >
          Where Luxury Intertwines with Nature
        </motion.h2>
        <motion.p
          className="text-white text-lg lg:text-2xl font-medium mb-1 opacity-85 drop-shadow"
          variants={textChild}
        >
          A Boutique Bespoke Iconic Resort
        </motion.p>
        <motion.p
          className="text-white text-base lg:text-lg opacity-80"
          variants={textChild}
        >
          Near Sariska Tiger Reserve, Rajasthan
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroDesktop; 