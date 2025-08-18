import React from "react";
import SariskaBlogComponent from "@/components/blog/SariskaBlogComponent";
import HeroSection from "@/components/common/HeroSection";
import { heroSections } from "@/data/heroSections";

const page = () => {
  return (
    <>
      <HeroSection {...heroSections.blog} />
      <section className="py-16 lg:py-24">
        <SariskaBlogComponent />
      </section>
    </>
  );
};

export default page;
