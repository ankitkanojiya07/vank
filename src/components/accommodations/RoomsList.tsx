"use client";

import React, { useState } from "react";
import { rooms } from "@/data/rooms";
import ModernAccommodationCard from "./ModernAccommodationCard";
import BookingModal from "../common/BookingModal";
// import Image from "next/image";
// import Link from 'next/link';

interface RoomsListProps {
  maxRooms?: number; // Optional prop to limit number of rooms shown
  showAll?: boolean; // Optional prop to show all rooms
}

const RoomsList: React.FC<RoomsListProps> = ({ maxRooms, showAll = false }) => {
  const [selectedFilter] = useState<string>("all");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);


  const filteredRooms = rooms.filter((room) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "cottage")
      return room.type.toLowerCase().includes("cottage");
    if (selectedFilter === "suite")
      return room.type.toLowerCase().includes("suite");
    if (selectedFilter === "pool")
      return room.type.toLowerCase().includes("pool");
    return true;
  });

  return (
    <>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-navy leading-relaxed">
            Our Accommodations
          </h2>
          <p className="text-xl text-secondary-navy max-w-3xl mx-auto">
            From cozy cottages to luxurious pool suites, each accommodation is
            designed to provide comfort while immersing you in the natural
            beauty of Sariska.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center max-w-4xl mx-auto">
          {(showAll
            ? filteredRooms
            : filteredRooms.slice(0, maxRooms || 3)
          ).map((room) => (
            <div key={room.id}>
              <ModernAccommodationCard room={room} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No rooms found for the selected filter.
            </p>
          </div>
        )}

        {/* Call to Action */}
        {/* <div
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect accommodation for
              your stay. Contact us for personalized recommendations based on
              your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#1a2238] hover:bg-[#232323] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                Contact Our Team
              </Link>
              <Link href="/amenities" className="border-2 border-[#1a2238] text-[#1a2238] hover:bg-[#1a2238] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                View Amenities
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default RoomsList;
