"use client";
import Image from "next/image";
// import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AmenitiesSection() {
  // const [setLoadedImages] = useState<Set<string>>(new Set());

  // const handleImageLoad = (amenityId: string) => {
  //   setLoadedImages((prev) => new Set([...prev, amenityId]));
  // };

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-1"
      aria-labelledby="amenities-heading"
    >
      <motion.section
        className="max-w-6xl mx-auto px-4 py-1 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="mt-2 text-lg text-gray-600 leading-relaxed max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          Experience the luxury in the middle of jungle, located in the foothill
          of Aravali Ranges, offers absolute peaceful & pristine atmosphere to
          relax. Tucked faraway in the country side, Vanaashrya is close to the
          Sariska tiger reserve in Rajasthan. Enjoy every moment in this
          luxurious hideaway with well equipped cottages and tents to make your
          stay comfortable and memorable for a life time.
        </motion.p>
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto px-4 py-1 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.h2>
        <motion.p
          className="mt-2 text-lg text-gray-600 leading-relaxed max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          Our Team combines the best of service with local roots. Feel free to
          ask them for anything and they will ensure that all service
          expectations are met. Our skilled team-members work round the clock to
          manage client satisfaction and guide you through your journey at
          Vanaashrya.
        </motion.p>
      </motion.section>

      {/* What We Offer Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-gray-800">
          What We Offer
        </h2>
        <div className="w-16 h-1 bg-yellow-600 mx-auto mb-10 rounded-full" />
        <div className="grid gap-y-10 gap-x-6 sm:gap-x-8 lg:gap-x-12 md:grid-cols-3">
          {[
            {
              title: "Accommodation",
              image: "/gallery/bh.jpg",
              href: "/accommodations",
            },
            {
              title: "Amenities",
              image: "/gallery/gal3.jpg",
              href: "/amenities",
            },
            {
              title: "Excursions",
              image: "/gallery/bh1.jpg",
              href: "/excursions",
            },
          ].map(({ title, image, href }) => (
            <Link key={title} href={href} aria-label={`Go to ${title}`}>
              <motion.div
                className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-[400px] flex flex-col justify-end hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-300 z-10"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Title and Arrow Button */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full">
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-white text-2xl md:text-3xl font-semibold text-center drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
                      {title}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mt-6 mb-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 group-hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
                  >
                    <ArrowRight className="w-7 h-7 text-yellow-700 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </div>
                {/* Border */}
                <div className="absolute inset-6 border border-dashed border-white/70 group-hover:border-yellow-300/70 pointer-events-none z-30 transition-colors duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
