import React from "react";
import HeroSection from "@/components/common/HeroSection";
import { heroSections } from "@/data/heroSections";
// import ParkInfoCard from "@/components/about/ParkInfoCard";
import RoomsList from "@/components/accommodations/RoomsList";
// import ModernAmenitiesSection from "@/components/amenities/ModernAmenitiesSection";
// import ExperiencesPreview from "@/components/common/ExperiencesPreview";
import GalleryPreview from "@/components/gallery/GalleryPreview";
import TestimonialsSection from "@/components/common/TestimonialsSection";
import FeatureCarousel from "@/components/feature-carousel";
import Link from "next/link";
import RoomSection from "@/components/home/room-section";
import ParkInfoCard from "@/components/about/ParkInfoCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection {...heroSections.home} videoSrc="/images/video.mp4" />

      <div className="container mx-auto py-20 px-3 lg:px-10 overflow-hidden">
        <section
          className="py-10 z-10 md:before:opacity-70 before:opacity-50    about-section relative before:right-[-75px] before:bottom-[-5.96rem] before:z-[-1] after:z-[-1] md:after:opacity-80 after:opacity-50 after:-top-[25%] after:left-[-75px] after:rotate-[-20deg] after:scale-y-[-1]"
          id="about-section"
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl lg:text-5xl font-bold flex flex-col text-gray-800 mb-4">
              Welcome To Vanaashrya
              <p
                className="text-lg text-gray-600"
                style={{ fontFamily: "'Edu SA Beginner'" }}
              >
                Where Luxury Intertwines with Nature
              </p>
            </h1>
          </div>
          <article className="max-w-3xl text-center flex justify-center items-center flex-col mx-auto">
            <p className=" text-gray-600 leading-relaxed mb-6">
              Experience luxury in the middle of the jungle, found in the
              foothills of the Aravali Ranges, which offers an absolute peaceful
              & pristine atmosphere to relax. Tucked far away in the
              countryside, Vanaashrya, a luxury resort, is close to the Sariska
              tiger reserve in Rajasthan.
            </p>
            <p className=" text-gray-600  leading-relaxed">
              Enjoy every moment in this luxurious hideaway with well-equipped
              cottages, villas, private bungalows, and suites to make your stay
              comfortable and memorable for a lifetime.
            </p>
          </article>

          <div className="mt-8 flex justify-center">
            <Link className="hero-button" href="/about">
              Read More
            </Link>
          </div>
        </section>
      </div>

      <div
        className="bg-secondary-navy text-secondary-navy-foreground"
        id="features-section"
      >
        <section id="features" className="">
          <FeatureCarousel />
        </section>
      </div>

      <RoomSection />

      <section id="park-info-section">
        <div className="relative z-10">
          <ParkInfoCard />
        </div>
      </section>

      <section
        id="accommodations-section"
        className="accommodations-section relative z-10 md:before:top-[-20%] before:left-0 before:top-[-8%] max-sm:before:opacity-60 before:opacity-80"
      >
        <div className="z-10 relative">
          <RoomsList maxRooms={5} />
        </div>
      </section>

      <section id="about-com" className="py-20">
        <div className="container max-sm:px-4 mx-auto">
          <div className="max-w-5xl p-10 relative border-2 w-full border-primary mx-auto">
            <div className="absolute -top-[3.5rem] bg-background text-foreground left-1/2 -translate-x-1/2">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/new_img/hotel.png"
                  alt="The Vanaashrya Resort"
                  width={100}
                  height={100}
                  quality={80}
                />
              </div>
            </div>
            <div className="aspect-video">
              <Image
                src={"/hero-img_land.JPG"}
                width={1080}
                height={720}
                quality={100}
                alt="The Vanaashrya Resort"
                className="-scale-y-100 aspect-video w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery-section" className="py-16 lg:py-24">
        <GalleryPreview />
      </section>

      <TestimonialsSection />
    </>
  );
}
