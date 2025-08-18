"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import HeroButton from "../hero-button";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/accommodations", label: "Stay" },
  { href: "/amenities", label: "Guest Facilities" },
  { href: "/excursions", label: "Nearby Attractions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Our Story" },
  { href: "/testimonials", label: "Stay Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
        isScrolled ? "bg-secondary-navy" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center md:flex-row flex-row-reverse justify-between">
        <button
          className={`size-10 rounded-full text-xs flex flex-col items-center justify-center p-2 transition-colors duration-300`}
          style={{ color: isScrolled ? "#ffffff" : "#212322" }}
          onClick={toggleMenu}
        >
          <MenuIcon className="size-5 shrink-0" />
          Menu
        </button>

        <div className={`${isScrolled ? "w-24" : "w-50"} transition-all`}>
          <Image
            src={"/gallery/logo.png"}
            alt="Vanaashrya Logo"
            width={300}
            height={200}
            className="size-full drop-shadow-2xl object-contain"
            unoptimized
          />
        </div>

        <HeroButton className="!py-1 md:!inline-block !hidden">
          <span>Contact us</span>
        </HeroButton>
      </div>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-secondary-navy/80 z-100"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div className="md:w-96 relative w-[80%] bg-secondary-navy text-secondary-navy-foreground h-full">
            <div className="flex justify-center pt-10 relative items-center">
              <div className="w-40">
                <Image
                  src={"/gallery/logo.png"}
                  alt="Vanaashrya Logo"
                  width={300}
                  height={200}
                  className="size-full drop-shadow-2xl object-contain "
                  unoptimized
                />
              </div>
            </div>
            <button
              className="size-20 absolute cursor-pointer top-3 -right-10 text-secondary-navy-foreground hover:text-secondary-navy-foreground/80 transition-colors"
              onClick={toggleMenu}
            >
              <X />
            </button>

            <ul className="flex flex-col gap-3 md:py-10 py-8 text-center">
              {navItems.map((item) => (
                <li key={item.href} onClick={() => setIsMenuOpen(false)}>
                  <Link
                    href={item.href}
                    className={`
                      md:text-xl text-center font-caveat font-normal text-primary hover:text-secondary-navy-foreground transition-colors
                      ${
                        pathname === item.href
                          ? "text-secondary-navy-foreground"
                          : "text-primary"
                      }
                      `}
                    style={{ fontFamily: "'Edu SA Beginner'" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
