"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

const BookNowButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Fixed Book Now Button - Professional positioning */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={openModal}
          style={{ backgroundColor: "#1e2939" }}
          className="hover:bg-[#16202f] text-white font-semibold py-2 px-4 rounded-md shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Book Now"
        >
          <span className="mr-2 text-sm tracking-wide">BOOK NOW</span>
          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div
              style={{ backgroundColor: "#1e2939" }}
              className="hover:bg-[#16202f] text-white p-6 rounded-t-xl"
            >
              <h2 className="text-2xl font-bold">Our Accommodations</h2>
              <p className="opacity-90">
                Book your perfect stay at Vanaashrya Resort
              </p>
            </div>

            {/* Booking Form Content */}
            <div className="p-6">
              <div className="space-y-6">
                {/* Stay Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Guests
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Room Selection */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Accommodation
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-900 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-lg mb-1">
                        Luxury Villa
                      </div>
                      <div className="text-sm text-gray-600">
                        Private villa with garden view
                      </div>
                      <div className="mt-2 text-blue-900 font-semibold">
                        ₹12,000 / night
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-900 hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-lg mb-1">
                        Premium Suite
                      </div>
                      <div className="text-sm text-gray-600">
                        Spacious suite with balcony
                      </div>
                      <div className="mt-2 text-blue-900 font-semibold">
                        ₹15,000 / night
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Guest Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Any special requests?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="button"
                    style={{ backgroundColor: "#1e2939" }}
                    className="hover:bg-[#16202f] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                  >
                    Book Your Stay Now
                  </button>
                  {/* <p className="text-sm text-gray-500 mt-2 text-center">
                    By clicking this button, you agree to our terms and
                    conditions
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowButton;
