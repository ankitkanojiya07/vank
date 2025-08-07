"use client";

import React from "react";
import RoomsList from "@/components/accommodations/RoomsList";
import HeroSection from "@/components/common/HeroSection";
import { heroSections } from "@/data/heroSections";

export default function AccommodationsPage() {
  return (
    <>
      <HeroSection
        {...heroSections.accommodations}
        videoSrc={heroSections.accommodations.videoSrc}
      />
      <section className="py-16 lg:py-24">
        <RoomsList showAll={true} />
      </section>
    </>
  );
}
