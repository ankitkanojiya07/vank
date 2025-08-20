import React from "react";
import RoomsList from "@/components/accommodations/RoomsList";

export default function AccommodationsPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <RoomsList showAll={true} />
      </section>
    </>
  );
}
