import React from "react";
import { Users, Square, Wifi, Coffee, Car, Calendar, Check } from "lucide-react";
import { Room } from "@/data/rooms";
import Link from 'next/link';
import BookNowButton from "../common/BookNowButton";

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {

  const amenityIcons: { [key: string]: React.ComponentType<any> } = {
    'WiFi': Wifi,
    'Tea/Coffee Maker': Coffee,
    'Room Service': Car,
  };

  return (
    <>
      <div
        className="relative rounded-2xl border border-gray-200 shadow-lg overflow-hidden min-h-[420px] flex flex-col justify-end transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
        style={{
          backgroundImage:
            room.images && room.images.length > 0
              ? `url('${room.images[0]}')`
              : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay for readability */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.15) 100%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Price Badge */}
        {room.price && (
          <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full text-base font-bold bg-gradient-to-r from-[#1a2238] to-[#232323] text-white shadow-lg border-2 border-white/30">
            {room.price}
          </div>
        )}
        {/* Content Overlay */}
        <div className="relative z-10 p-6 flex flex-col h-full justify-end">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-lg">
              {room.name}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Square className="w-4 h-4" />
                <span className="text-white/90 bg-black/30 rounded px-2 py-0.5 text-xs font-medium">
                  {room.size}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span className="text-white/90 bg-black/30 rounded px-2 py-0.5 text-xs font-medium">
                  Up to {room.maxGuests} guests
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            {room.description.length > 90
              ? room.description.slice(0, 90) + "..."
              : room.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-white mb-3 text-sm">
              Room Features
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {room.features.slice(0, 6).map((feature, index) => {
                const IconComponent = amenityIcons[feature] || Check;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-black/30 rounded px-2 py-1"
                  >
                    <IconComponent className="w-3 h-3 text-[#bfa76f] flex-shrink-0" />
                    <span className="text-xs text-white/90">{feature}</span>
                  </div>
                );
              })}
            </div>
            {room.features.length > 6 && (
              <p className="text-xs text-white/70 mt-2">
                +{room.features.length - 6} more features
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <BookNowButton className="flex-1 bg-[#1a2238] hover:bg-[#232323] text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md group-hover:shadow-[#bfa76f]/40 group-hover:ring-2 group-hover:ring-[#bfa76f]">
              <>
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </>
            </BookNowButton>
            <Link
              href="/amenities"
              className="px-4 py-3 border-2 border-[#1a2238] text-[#1a2238] hover:bg-[#1a2238] hover:text-white rounded-lg font-semibold transition-all duration-300 bg-black/20 backdrop-blur-sm flex items-center justify-center"
            >
              Details
            </Link>
          </div>

          {/* Availability Status */}
          <div className="mt-4 text-center">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                room.isAvailable
                  ? "bg-green-600/80 text-white"
                  : "bg-red-600/80 text-white"
              }`}
            >
              {room.isAvailable ? "Available" : "Fully Booked"}
            </span>
          </div>
        </div>
      </div>

    </>
  );
};

export default RoomCard;
