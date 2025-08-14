"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/framer";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/accommodations", label: "Stay" },
    { href: "/amenities", label: "Guest Facilities" },
    { href: "/excursions", label: "Nearby Attractions" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/vanaashrya/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/vanaashryaresortandspa/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/vanaashryaresort/",
      label: "LinkedIn",
    },
  ];

  const moreHotels = [
    { name: "Vanashare", href: "https://www.vanaashrya.com/" },
    { name: "Ranthabhore Regency", href: "https://ranthamboreregency.com/" },
    { name: "Aagna", href: "https://ranthamboreaangan.com/" },
  ];

  return (
    <footer className="relative text-white">
      {/* Background Image with Overlay using CSS */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/gallery/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative container mx-auto px-4 py-8 sm:py-12 z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col gap-10 sm:gap-12 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8"
        >
          {/* Brand & Description */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1"
          >
            <Image
              src="/gallery/logo.png"
              alt="Vanaashrya Logo"
              width={140}
              height={36}
              style={{ width: "100%", maxWidth: "140px", height: "auto" }}
              className="mb-3 mx-auto md:mx-0"
            />
            <p className="text-gray-300 mb-5 leading-relaxed text-sm sm:text-base">
              Experience the luxury in the middle of jungle, located in the
              foothill of Aravali Ranges, offers absolute peaceful & pristine
              atmosphere to relax.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start mb-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-[#1a2238] rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links & Contact Info Row on Mobile, grid on md+ */}
          <div className="w-full flex flex-row justify-between gap-6 md:contents">
            {/* Quick Links */}
            <motion.div
              variants={fadeInUp}
              className="flex-1 flex flex-col items-start text-left"
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.slice(2, 7).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#bfa76f] transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              className="flex-1 flex flex-col items-end text-right"
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Get in Touch
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-end sm:items-start sm:space-x-3 space-y-1 sm:space-y-0">
                  <MapPin
                    size={18}
                    className="text-[#bfa76f] mt-1 flex-shrink-0"
                  />
                  <div className="text-gray-300 text-xs sm:text-sm text-right">
                    <p>Vanaashrya, Tehla by pass road,</p>
                    <p>Village: Talab, Tehsil: Rajgarh</p>
                    <p>District: Alwar, Rajasthan, India</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center sm:space-x-3 space-y-1 sm:space-y-0">
                  <Phone size={18} className="text-[#bfa76f] flex-shrink-0" />
                  <a
                    href="tel:+919521524169"
                    className="text-gray-300 hover:text-[#bfa76f] transition-colors duration-200 text-xs sm:text-sm"
                  >
                    +91 95215 24169
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center sm:space-x-3 space-y-1 sm:space-y-0">
                  <Mail size={18} className="text-[#bfa76f] flex-shrink-0" />
                  <a
                    href="mailto:info@vanaashrya.com"
                    className="text-gray-300 hover:text-[#bfa76f] transition-colors duration-200 text-xs sm:text-sm"
                  >
                    info@vanaashrya.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* More Hotels */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              More Hotels
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {moreHotels.map((hotel) => (
                <li key={hotel.name}>
                  <a
                    href={hotel.href}
                    className="text-gray-300 hover:text-[#bfa76f] transition-colors duration-200 text-sm sm:text-base flex items-center justify-center md:justify-start gap-2"
                  >
                    {hotel.name}
                    <ExternalLink size={14} className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-6 flex flex-col items-center text-center gap-4 sm:gap-0 sm:block"
        >
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <div className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Vanaashrya. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm mt-2 sm:mt-0">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-[#bfa76f] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-[#bfa76f] transition-colors duration-200"
              >
                Terms of Service
              </a> */}
              {/* <a
                href="#"
                className="text-gray-400 hover:text-[#bfa76f] transition-colors duration-200"
              >
                Cancellation Policy
              </a> */}
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-800 w-full">
            <p className="text-gray-400 text-xs text-center">
              Designed and developed with ❤️ for wildlife conservation and
              sustainable tourism.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
