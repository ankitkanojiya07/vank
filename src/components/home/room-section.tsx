"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const roomImg = [
  "/final/new_img/room_1-min.jpg",
  "/final/new_img/room_2-min.jpg",
  "/final/new_img/room_3-min.jpg",
  "/final/new_img/room_4-min.jpg",
];

const barImg = ["/final/new_img/bar3-min.jpg", "/final/new_img/bar3-min.jpg"];

const rooftopImg = ["/final/new_img/rooftop_1-min.JPG", "/final/new_img/rooftop_2-min.JPG"];

const imgData = [barImg, roomImg, rooftopImg];

const RoomSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [activeImg, setActiveImg] = useState(imgData[currentIndex]);

  const handleActiveIdx = (index: number) => {
    if (index === currentIndex) return; // Prevent re-setting the same index
    setCurrentIndex(index);
    setActiveImg(imgData[index]);
  };

  return (
    <div className="relative room-section overflow-hidden">
      <section id="accommodations-section" className="py-20 relative">
        <div className="container mx-auto max-sm:px-4 max-w-7xl">
          <div className="space-y-2">
            <h4 className="text-secondary-navy tracking-wide text-4xl text-center font-medium">
              Divine Dining, Legendary Libations
            </h4>
            <p
              className="md:max-w-3xl text-center mx-auto text-lg"
              style={{ fontFamily: "'Edu SA Beginner'" }}
            >
              A gathering place for visitors and locals alike, our hotel
              features three award-winning dining establishments, inviting
              guests to unwind and savor exceptional culinary experiences. From
              the serenity of our garden room and courtyard to the lively
              ambiance of the popular bar, there’s something to please every
              palate.
            </p>
          </div>
          <div className="max-w-5xl md:p-10 p-4 py-10 mx-auto border mt-16 relative border-primary">
            <div className="absolute -top-[2.5rem] inset-0 md:left-1/2 left-1 md:-translate-x-1/2">
              <div className="bg-background p-4 flex items-center justify-between max-w-xl w-full gap-4 md:gap-10  text-foreground">
                <button className="cursor-pointer">
                  <h6
                    onMouseEnter={() => handleActiveIdx(0)}
                    onClick={() => handleActiveIdx(0)}
                    className={`uppercase flex flex-col gap-0.5 leading-none justify-center items-center tracking-normal ${
                      currentIndex === 0
                        ? "text-primary"
                        : "text-secondary-navy"
                    }`}
                  >
                    <span className="text-sm">THE</span>
                    <span
                      className={`-mt-2 md:text-xl tracking-widest ${
                        currentIndex === 0 ? "font-black" : "font-semibold"
                      }`}
                    >
                      BAR
                    </span>
                  </h6>
                </button>
                <button className="cursor-pointer">
                  <h6
                    onMouseEnter={() => handleActiveIdx(1)}
                    onClick={() => handleActiveIdx(1)}
                    className={`uppercase flex flex-col gap-0.5 leading-none justify-center items-center tracking-normal ${
                      currentIndex === 1
                        ? "text-primary"
                        : "text-secondary-navy"
                    }`}
                  >
                    <span className="text-base">The</span>
                    <span
                      className={`-mt-2 text-xl ${
                        currentIndex === 1 ? "font-black" : "font-semibold"
                      }`}
                    >
                      Cottages
                    </span>
                  </h6>
                </button>
                <button className="cursor-pointer">
                  <h6
                    onMouseEnter={() => handleActiveIdx(2)}
                    onClick={() => handleActiveIdx(2)}
                    className={`uppercase flex flex-col gap-0.5 leading-none justify-center items-center tracking-normal ${
                      currentIndex === 2
                        ? "text-primary"
                        : "text-secondary-navy"
                    }`}
                  >
                    <span className="text-base">the</span>
                    <span
                      className={`-mt-2 md:text-xl ${
                        currentIndex === 2 ? "font-black" : "font-semibold"
                      }`}
                    >
                      Rooftop
                    </span>
                  </h6>
                </button>
              </div>
            </div>
            <div className="overflow-hidden h-[60vh] md:h-[70vh] shadow-md mx-auto">
              {activeImg.length > 0 ? (
                <ImageCarouselCrossfade key={currentIndex} imgs={activeImg} />
              ) : (
                <p>No images available</p>
              )}
            </div>
            <div className="absolute -bottom-[1rem] left-1/2 -translate-x-1/2">
              <Link
                href={"/accommodations"}
                className="hero-button text-sm h-8 !py-0 !flex !justify-center !items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ImageMotion = motion.create(Image);

// Alternative version with crossfade effect (both images visible during transition)
const ImageCarouselCrossfade = ({ imgs }: { imgs: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        <ImageMotion
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          src={imgs[currentIndex]}
          alt={`cottage room ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};
export default RoomSection;
