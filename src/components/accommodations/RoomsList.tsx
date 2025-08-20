import React from "react";
import { rooms } from "@/data/rooms";
import ModernAccommodationCard from "./ModernAccommodationCard";
interface RoomsListProps {
  maxRooms?: number; // Optional prop to limit number of rooms shown
  showAll?: boolean; // Optional prop to show all rooms
}

const RoomsList: React.FC<RoomsListProps> = ({ maxRooms, showAll = false }) => {

  const filteredRooms = showAll ? rooms : rooms.slice(0, maxRooms || 3);

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
          {filteredRooms.map((room) => (
            <div key={room.id}>
              <ModernAccommodationCard room={room} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default RoomsList;
