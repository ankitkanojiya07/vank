"use client";
import React, { useState } from "react";
import { testimonials } from "@/data/testimonials";
import {
  ChevronLeft,
  ChevronRight,
  Video,
  MessageCircle,
  Star as StarIcon,
  User,
} from "lucide-react";

const tabs = [
  {
    label: "Hotel Video",
    icon: <Video className="w-5 h-5 mr-1" />,
    tooltip: "Watch our hotel introduction video",
  },
  {
    label: "Guest Reviews",
    icon: <MessageCircle className="w-5 h-5 mr-1" />,
    tooltip: "Read what our guests say",
  },
];

const TestimonialsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1); // Reviews tab active by default
  const [activeReview, setActiveReview] = useState(0);
  const total = testimonials.length;
  const next = () => setActiveReview((prev) => (prev + 1) % total);
  const prev = () => setActiveReview((prev) => (prev - 1 + total) % total);

  // Handle tab click
  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8  max-sm:px-4 max-w-7xl mx-auto">
      {/* Left: Tabs & Review Card */}
      <div className="flex-1 h-full">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4  w-full">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`flex items-center w-full sm:w-auto justify-center px-4 py-3 sm:py-2 rounded-lg sm:rounded-t-lg font-medium text-base border-b-2 transition-all size-4 duration-200 focus:outline-none relative group hover:bg-secondary-navy/90 hover:text-white text-center ${
                activeTab === idx
                  ? "bg-secondary-navy border-muted text-white"
                  : "bg-transparent border-transparent text-muted text-lg"
              }`}
              onClick={() => handleTabClick(idx)}
              aria-label={tab.label}
              style={{ minHeight: "48px" }}
            >
              {tab.icon}
              <span className="text-base sm:text-sm font-semibold">
                {tab.label}
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2.2rem] z-20 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg">
                {tab.tooltip}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white h-full rounded-lg border border-gray-100 p-4 relative overflow-hidden">
          {activeTab === 1 ? (
            <>
              {/* Subtle Navigation */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center group"
                aria-label="Previous Review"
              >
                <ChevronLeft
                  size={14}
                  className="text-gray-600 group-hover:text-gray-800 transition-colors"
                />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center group"
                aria-label="Next Review"
              >
                <ChevronRight
                  size={14}
                  className="text-gray-600 group-hover:text-gray-800 transition-colors"
                />
              </button>

              {/* Review Content */}
              <div className="mx-auto text-center space-y-3">
                {/* Quote */}
                <div className="relative">
                  <svg
                    className="w-5 h-5 text-gray-200 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <p className="text-muted font-medium leading-relaxed italic">
                    {testimonials[activeReview].text}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-2">
                  {/* Avatar */}
                  <div className="w-8 h-8 rounded-full flex border border-primary items-center justify-center">
                    <User className="w-4 h-4 text-muted-50" />
                  </div>

                  <div className="text-left">
                    <div className="flex items-center">
                      <span className="font-medium text-secondary-navy">
                        {testimonials[activeReview].name}
                      </span>
                    </div>
                    {testimonials[activeReview].date && (
                      <span className="text-muted -mt-2 block text-xs">
                        {testimonials[activeReview].date}
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="flex items-center space-x-0.5">
                    {Array.from({
                      length: testimonials[activeReview].stars || 0,
                    }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-3 h-3 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <div className="inline-flex items-center space-x-1 px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-emerald-700 text-xs font-medium">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <span className="text-lg">🏨</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-gray-800 text-sm font-medium">
                  More experiences coming soon
                </h3>
                <p className="text-gray-500 text-xs max-w-xs">
                  Stay tuned for authentic reviews from Booking.com and Agoda.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Right: Why Choose Us */}
      <div className="flex-1 h-full">
        <div>
          <h2 className="text-2xl font-black text-muted mt-2 md:mt-0">
            Why Choose Our Hotel
          </h2>
          <div
            className="text-secondary-navy font-black mb-4 text-base"
            style={{ fontFamily: "'Edu SA Beginner'" }}
          >
            Enjoy a world-class stay with premium amenities and personalized
            service.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-muted-50 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform">
              <div className="font-bold text-muted text-lg uppercase">
                Luxury Rooms & Suites
              </div>
              <div className="text-muted text-sm">
                Experience comfort and elegance in every stay
              </div>
            </div>
            <div className="bg-muted-50 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform">
              <div className="font-bold text-muted text-lg uppercase">
                Award-Winning Service
              </div>
              <div className="text-muted text-sm">
                Recognized for exceptional hospitality
              </div>
            </div>
            <div className="bg-muted-50 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform">
              <div className="font-bold text-muted text-lg uppercase">
                Prime Location
              </div>
              <div className="text-muted text-sm">
                Close to major attractions and transport
              </div>
            </div>
            <div className="bg-muted-50 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform">
              <div className="font-bold text-muted text-lg uppercase">
                Sustainable Hospitality
              </div>
              <div className="text-muted text-sm">
                Committed to eco-friendly practices
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsTabs;
