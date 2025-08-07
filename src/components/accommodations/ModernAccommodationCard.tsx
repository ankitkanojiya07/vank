"use client";

import React, { useState } from "react";
import { Room } from "@/data/rooms";
import { ArrowRight } from "lucide-react";
import BookingModal from "../common/BookingModal";
import Image from "next/image";

interface ModernAccommodationCardProps {
  room: Room;
}

const ModernAccommodationCard: React.FC<ModernAccommodationCardProps> = ({
  room,
}) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden  flex flex-col transition-all duration-300 group">
        {/* Image Section */}
        <div className="relative flex-1 aspect-video overflow-hidden">
          <Image
            src={room.images[0]}
            alt={room.name}
            width={1080}
            height={720}
            className="object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="flex-1 flex flex-col items-center mt-3 text-center px-4">
          <h3 className="text-2xl text-muted font-bold">{room.name}</h3>
          <p className="mb-4 ">{room.description}</p>
          <div className="flex items-center mt-2 justify-center gap-2">
            <span className="px-3 py-1 bg-muted text-white rounded-full text-xs font-medium">
              {room.type}
            </span>
            {room.isAvailable ? (
              <span className="px-3 bg-secondary-navy text-secondary-navy-foreground py-1 rounded-full text-xs font-medium">
                Available
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-medium">
                Fully Booked
              </span>
            )}
          </div>
          <button
            className="mt-3 px-2 py-3 text-sm flex gap-0.5 cursor-pointer items-center hover:underline text-muted "
            onClick={() => setIsBookingModalOpen(true)}
          >
            Book Now <ArrowRight className="size-[0.9em]"/>
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default ModernAccommodationCard;
