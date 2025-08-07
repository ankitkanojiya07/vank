import React from "react";
import ContactInfoCards from "@/components/contact/ContactPageComponent";
import HeroSection from "@/components/common/HeroSection";
import { heroSections } from "@/data/heroSections";

const page = () => {
  return (
    <>
      <HeroSection {...heroSections.contact} />
      <section className="py-16 lg:py-24">
        <ContactInfoCards />
      </section>
    </>
  );
};

export default page;
