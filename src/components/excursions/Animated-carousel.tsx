"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const carouselData: any[] = [];

function AnimatedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || carouselData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex =
      currentSlide === 0 ? carouselData.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentSlide + 1) % carouselData.length;
    goToSlide(newIndex);
  };

  const currentData = carouselData[currentSlide];

  // If no carousel data, return null (don't render anything)
  if (carouselData.length === 0) {
    return null;
  }

  return (
    <div className="relative w-[80vw] h-[80vh] mx-auto my-1 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden rounded-3xl">
      {/* Main carousel container */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Regular slides for all content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
          <Image
            width={1080}
            height={720}
            src={currentData.image}
            alt={currentData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentData.title}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              {currentData.description}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-30">
          <div
            className="h-full bg-amber-500 transition-all duration-100 ease-linear"
            style={{
              width: isAutoPlaying
                ? `${((currentSlide + 1) / carouselData.length) * 100}%`
                : "100%",
            }}
          />
        </div>
      </div>

      {/* Navigation controls below the carousel */}
      <div className="w-full flex items-center justify-center gap-6 py-6 mt-2 z-50">
        <button
          onClick={goToPrevious}
          className="w-14 h-14 rounded-full border border-amber-400 bg-white/90 text-amber-800 hover:bg-white transition-all duration-300 flex items-center justify-center text-2xl shadow"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        {/* Slide indicators */}
        <div className="flex gap-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-amber-800 scale-125 border-2 border-amber-400"
                  : "bg-amber-400/50 hover:bg-amber-400/80"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-14 h-14 rounded-full border border-amber-400 bg-white/90 text-amber-800 hover:bg-white transition-all duration-300 flex items-center justify-center text-2xl shadow"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}

// AnimatedCarouselWithCards: Carousel + 9 interactive cards below
export function AnimatedCarouselWithCards() {
  // Gallery cards data
  const cards = [
    {
      id: 1,
      image: "/gallery/gal7.jpg",
      title: "Jungle Safari",
      description:
        "The Sariska gate is just 5 km from the resort. After the successful relocation of tigers, The National Park now has over 19 Tigers.",
    },
    {
      id: 2,
      image: "/gallery/CAMEL-SAFARI.jpg",
      title: "Camel Safari",
      description:
        "Visit the Sarpanch and interact with nearby Banjara tribes on a comfortable camel cart.",
    },
    {
      id: 3,
      image: "/gallery/VILAGE-WALK.jpg",
      title: "Village Walk",
      description:
        "A guided village walk through the local farms and trails where you can interact and learn about the cattles.",
    },
    {
      id: 4,
      image: "/gallery/BHANGAR-FORT.jpg",
      title: "Bhangarh Fort",
      description:
        "Just 30 min drive away, this infamous haunted fort comes under archaeological survey of India.",
    },
    {
      id: 5,
      image: "/gallery/NEELKHANT-TEMPLE.jpg",
      title: "Neelkanth Temple",
      description:
        "Neelkanth Mahadev Temple (dedicated to Lord Shiva) was constructed in 1010 ad by the Bargujar King Ajay Pal.",
    },
    {
      id: 6,
      image: "/gallery/ABHANERI.jpg",
      title: "Abhaneri",
      description:
        "Abhaneri is a village in the Dausa district of the Indian state of Rajasthan.",
    },
    {
      id: 7,
      image: "/gallery/HIKING.jpg",
      title: "Trekking & Hiking",
      description:
        "Hiking amongst the Aravali Ranges walking through the agriculture fields can be planned on request.",
    },
    {
      id: 8,
      image: "/gallery/MANSOROVER-LAKE.jpg",
      title: "Mansarovar Lake",
      description: "Drive/trek to witness beautiful sunset at Mansarovar Lake.",
    },
    {
      id: 9,
      image: "/gallery/CYCLING.jpg",
      title: "Cycling",
      description:
        "Enjoy the cycling on typical village roads with friends/family.",
    },
  ];

  return (
    <div>
      <AnimatedCarousel />

      {/* Zig-zag Gallery Cards Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-1e2939-700 mb-6">
            Nearby
            <span className="block text-1e2939-700">Attractions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enjoy interactive gallery cards with smooth hover effects.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex items-center gap-12 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-1/2">
                <div className="relative overflow-hidden rounded-0xl shadow-xl group">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                    width={1080}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="w-1/2 space-y-6">
                <div className="relative">
                  {/* Decorative line */}
                  <div className="relative inline-block mb-4">
                    <h3 className="text-3xl font-light text-amber-800">
                      {card.title}
                    </h3>
                    <div className="absolute bottom-0 right-0 w-16 h-px bg-amber-400"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {card.description}
                </p>
                {/* <button className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium transition-colors duration-300">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimatedCarousel;
