"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Calendar,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import BookingModal from "./BookingModal";

const QuickLinks: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getButtonStyle = (isScrolled: boolean) => {
    return isScrolled
      ? "bg-black/80 hover:bg-black text-white"
      : "bg-white/90 hover:bg-white text-black";
  };

  const links = [
    {
      id: "call",
      icon: Phone,
      label: "Call",
      href: "tel:+919876543210",
      action: null,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/919876543210?text=Hi, I would like to inquire about booking at Sariska Lodge",
      action: null,
    },
    {
      id: "book",
      icon: Calendar,
      label: "Book Now",
      href: null,
      action: () => setIsBookingModalOpen(true),
    },
  ];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed right-4 bottom-4 z-40 flex flex-col items-end space-y-2"
      >
        {/* Expand/Collapse Button - Mobile */}
        <motion.button
          onClick={toggleExpanded}
          className="lg:hidden w-12 h-12 bg-[#1a2238] hover:bg-[#232323] text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </motion.button>

        {/* Quick Action Buttons */}
        <motion.div
          className={`flex flex-col space-y-2 ${
            isExpanded ? "flex" : "hidden lg:flex"
          }`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => {
            const IconComponent = link.icon;

            return (
              <motion.div
                key={link.id}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.id === "whatsapp" ? "_blank" : undefined}
                    rel={
                      link.id === "whatsapp" ? "noopener noreferrer" : undefined
                    }
                    className={`w-12 h-12 lg:w-14 lg:h-14 ${getButtonStyle(
                      isScrolled
                    )} rounded-full flex items-center justify-center transition-all duration-200 group backdrop-blur-sm shadow-lg`}
                  >
                    <IconComponent size={20} className="lg:w-6 lg:h-6" />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {link.label}
                    </span>
                  </a>
                ) : (
                  <button
                    onClick={link.action || undefined}
                    className={`w-12 h-12 lg:w-14 lg:h-14 ${getButtonStyle(
                      isScrolled
                    )} rounded-full flex items-center justify-center transition-all duration-200 group relative backdrop-blur-sm shadow-lg`}
                  >
                    <IconComponent size={20} className="lg:w-6 lg:h-6" />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {link.label}
                    </span>
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default QuickLinks;
