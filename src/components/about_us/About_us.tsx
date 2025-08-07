"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const amenities = [
  {
    id: "spa",
    src: "/gallery/about1-VANASUTRA.jpg",
    alt: "Spa Treatment - Relaxing wellness experience",
    title: "Soul Spring",
  },
  {
    id: "pool",
    src: "/gallery/about-2-SWIMING-POOL.jpg",
    alt: "Swimming Pool - Refreshing pool area",
    title: "Swimming Pool",
  },
  {
    id: "gym",
    src: "/gallery/about3-GYM.jpg",
    alt: "Gym Facility - Modern fitness equipment",
    title: "Fitness Center",
  },
  {
    id: "bar",
    src: "/gallery/about4-CLOUD-9.jpg",
    alt: "Bar Area - Cloud 9 lounge and bar",
    title: "Cloud 9 Bar",
  },
  {
    id: "restaurant",
    src: "/gallery/about5.jpg",
    alt: "Basil Restaurant - Fine dining experience",
    title: "Basil Restaurant",
  },
  {
    id: "games",
    src: "/gallery/about6.jpg",
    alt: "Games Room - Entertainment and recreation",
    title: "Games Room",
  },
];

export default function AmenitiesSection() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (amenityId: string) => {
    setLoadedImages((prev) => new Set([...prev, amenityId]));
  };

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
        >
          {/* About our Team */}
        </motion.h2>
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
      {/* Heading */}
      <motion.header
        className="text-center mb-12 mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="uppercase tracking-widest text-sm text-yellow-600 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          Services
        </motion.p>
        <motion.h2
          id="amenities-heading"
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover Our Amenities
        </motion.h2>
        <motion.span
          className="block w-16 h-1 bg-yellow-600 mx-auto mt-4 rounded-full"
          aria-hidden="true"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true }}
        ></motion.span>
      </motion.header>

      {/* Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px]"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.13,
              delayChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {amenities.map(({ id, src, alt, title }, idx) => (
          <motion.article
            key={id}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-64"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover="hover"
            animate="rest"
            variants={{}}
          >
            {/* Image */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.08 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="object-cover w-full h-full transition-transform duration-500"
                quality={90}
                priority={idx < 2}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onLoad={() => handleImageLoad(id)}
              />
              {/* Loading placeholder */}
              {!loadedImages.has(id) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </motion.div>

            {/* Transparent Black Overlay on Hover */}
            <motion.div
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            {/* Bottom Overlay (left-aligned text) */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 text-left"
              variants={{
                rest: { y: 40 },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                {title}
              </h3>
              <p className="text-gray-200 text-base md:text-lg">{alt}</p>
            </motion.div>

            {/* Screen reader only title */}
            <h3 className="sr-only">{title}</h3>
          </motion.article>
        ))}
      </motion.div>

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
              image: "/gallery/about7.jpg",
              href: "/accommodations",
            },
            {
              title: "Amenities",
              image: "/gallery/about8.jpg",
              href: "/amenities",
            },
            {
              title: "Excursions",
              image: "/gallery/about9.jpg",
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
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  quality={90}
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

      {/* Contact & Offers Section */}
      {/* <motion.header
        className="text-center mb-12 mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      > */}
      {/* <motion.p
          className="uppercase tracking-widest text-sm text-yellow-600 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.p> */}
      {/* <motion.h2
          id="amenities-heading"
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          For Enquiries and Booking
        </motion.h2>
        <motion.span
          className="block w-16 h-1 bg-yellow-600 mx-auto mt-4 rounded-full"
          aria-hidden="true"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true }}
        ></motion.span> */}
      {/* </motion.header> */}

      {/* <motion.section
        className="py-16 mt-20 bg-gray-50 rounded-2xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4"> */}
      {/* Enquiries & Booking */}
      {/* <motion.div
            className="flex flex-col items-center text-center w-full mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          > */}
      {/* <motion.div
              className="mt-2 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="block text-sm sm:text-base font-medium text-gray-600 mb-2 tracking-wide">
                CALL US:
              </span>
              <a
                href="tel:+919521524169"
                className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-amber-700 transition-colors duration-200 tracking-wider"
              >
                +91 95215 24169
              </a>
            </motion.div> */}
      {/* </motion.div> */}

      {/* Seasonal Offers & Experiences */}
      {/* <motion.div
            className="flex flex-col items-center text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          > */}
      {/* <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              For Seasonal Offers & Experiences
            </motion.h3> */}
      {/* <div className="flex flex-col gap-4 mt-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-base shadow-sm transition-all duration-200"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="w-full px-6 py-3 rounded-lg border-2 border-amber-700 bg-transparent text-amber-700 font-semibold text-base shadow-sm hover:bg-amber-700 hover:text-white transition-all duration-200"
              >
                Send
              </motion.button>
            </div> */}
      {/* </motion.div> */}
      {/* </div>
      </motion.section> */}
    </section>
  );
}
