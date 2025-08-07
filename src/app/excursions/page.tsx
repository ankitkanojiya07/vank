import React from "react";
import HeroSection from "@/components/common/HeroSection";
import { AnimatedCarouselWithCards } from "@/components/excursions/Animated-carousel";
import { heroSections } from "@/data/heroSections";

const page = () => {
  return (
    <>
      <HeroSection {...heroSections.excursions} />
      <section className="py-16 lg:py-24">
        <AnimatedCarouselWithCards />
      </section>
    </>
  );
};

export default page;
