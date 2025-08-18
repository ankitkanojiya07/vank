"use client";

import React from "react";
import { ChevronRight, MapPin, Calendar, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SariskaBlogComponent = () => {
  const blogCards = [
    {
      image: "/gallery/tiger111.tif",
      alt: "Sariska Tiger Safari",
      location: "Alwar, Rajasthan",
      title: "Sariska Tiger Reserve - A Sanctuary of Serenity and Beauty",
      description:
        "Nestled near Alwar, Rajasthan, Sariska Tiger Reserve offers an ideal blend of nature's beauty, wildlife, and adventure.",
      date: "2025-02-28",
      href: "/blog/sariska-tiger-reserve",
    },
    {
      image: "/gallery/gal7.jpg",
      alt: "Jungle Safari Adventure",
      location: "Ranthambore, Rajasthan",
      title: "Ranthambore National Park - The Land of the Tiger",
      description:
        "Ranthambore National Park is one of the largest and most renowned national parks in Northern India, famous for its Bengal tigers.",
      date: "2025-03-10",
      href: "/blog/ranthambore-national-park",
    },
  ];

  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="space-y-8">
        {blogCards.map((card, idx) => (
          <article
            key={idx}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 relative overflow-hidden group">
                <div className="size-full relative">
                  <Image
                    width={600}
                    height={400}
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                  {/* Camera overlay - only shows icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <Camera className="w-12 h-12 mx-auto drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Location badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{card.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-[#46141d] transition-colors">
                    <Link href={card.href} className="hover:underline">
                      {card.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center flex-wrap-reverse md:flex-nowrap gap-2 justify-between pt-4 border-t border-gray-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center md:w-fit w-full justify-center bg-[#46141d] hover:bg-[#3a110f] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md space-x-2 group"
                    aria-label={`Read more about ${card.title}`}
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center text-end text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={card.date}>{formatDate(card.date)}</time>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SariskaBlogComponent;
