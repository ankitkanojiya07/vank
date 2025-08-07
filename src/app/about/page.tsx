import React from "react";
import AmenitiesSection from "@/components/about_us/About_us";
import HeroSection from "@/components/common/HeroSection";
import { heroSections } from "@/data/heroSections";

const page = () => {
  return (
    <>
      <HeroSection {...heroSections.about} />
      <section className="py-16 lg:py-24">
        <AmenitiesSection />
      </section>
    </>
  );
};

export default page;
