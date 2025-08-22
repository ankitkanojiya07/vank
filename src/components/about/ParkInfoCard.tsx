import React from "react";
import { Calendar } from "lucide-react";
import { parkInfo } from "@/data/parkInfo";
import Image from "next/image";
import { ViewMoreCursor } from "../view-more-cursor";


const ParkInfoCard: React.FC = () => {

  const quickFacts = [
    `Established: ${parkInfo.established}`,
    `Location: ${parkInfo.location}`,
    `Nearest City: ${parkInfo.nearestCity}`,
    `Best Season: October to March`,
  ];

  return (
    <>
      {/* Content Section with Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title & Description */}
        <div className="text-center mt-12 mb-10">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-secondary-navy relative inline-block">
            Discover Sariska Tiger Reserve
          </h2>
          <h3 className="text-xl md:text-2xl mb-6 font-semibold ">
            Where Luxury Intertwines with Nature
            <span className="block w-24 h-px bg-muted mx-auto mt-3 rounded-full" />
          </h3>
          <p
            className="text-lg  md:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "'Edu SA Beginner'" }}
          >
            Experience the magic of Sariska, A sanctuary where Bengal tigers
            roam free, luxury meets wilderness, and every moment is a blend of
            comfort, adventure, and natural beauty. Enjoy safaris, serene
            landscapes, and the iconic wildlife of Rajasthan—all from the
            doorstep of Vanaashrya.
          </p>
        </div>

        {/* Wildlife Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {["Tigers", "Leopards", "Deer", "Birds", "Peacocks"].map((animal) => (
            <span
              key={animal}
              className="px-4 text-sm py-2 bg-muted text-white rounded-full font-medium shadow-md hover:bg-muted transition-colors duration-200 cursor-pointer"
            >
              {animal}
            </span>
          ))}
        </div>

        {/* Stats Row */}
        <ParkStats />

        {/* Quick Facts Section */}
        <div className="rounded-3xl mb-12">
          <h3 className="text-3xl md:text-4xl text-secondary-navy font-bold text-center mb-6">
            Quick Facts About Sariska
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center flex-col justify-center  gap-2 bg-muted/90 border-2 border-muted text-white rounded-md p-3"
              >
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span
                  className="text-lg text-center font-caveat font-medium"
                  style={{ fontFamily: "'Edu SA Beginner'" }}
                >
                  {fact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

function ParkStats() {
  const parkInfo = {
    tigerPopulation: {
      count: 28,
      lastSurvey: "2024",
    },
    distanceFromLodge: "12 KM",
    area: "392 km²",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 gap-2 mb-8 md:p-8">
      <ViewMoreCursor>
        <div className="bg-white size-full relative overflow-hidden rounded-md p-4 flex flex-col justify-center items-center text-center border border-gray-200 shadow-lg">
          <Image
            src={"/final/new_img/tiger_1-min.webp"}
            alt="Tiger"
            width={200}
            height={200}
            className="absolute opacity-50  bottom-[-40%] z-0 select-none right-0 object-cover"
          />
          <div className="text-4xl max-sm:text-3xl font-semibold z-10 text-secondary-navy text-shadow-lg mb-1">
            {parkInfo.tigerPopulation.count}
          </div>
          <div className="text-lg max-sm:text-base font-medium text-shadow-md text-foreground z-10">
            Tigers ({parkInfo.tigerPopulation.lastSurvey})
          </div>
        </div>
      </ViewMoreCursor>
      <ViewMoreCursor>
        <div className="bg-white size-full relative overflow-hidden rounded-lg md:p-6 p-4 flex flex-col items-center text-center border border-gray-200 shadow-sm">
          <Image
            src={"/final/new_img/travel-min.webp"}
            alt="Tiger"
            width={200}
            height={200}
            className="absolute opacity-50  bottom-[-40%] z-0 select-none right-0 object-cover"
          />
          <div className="text-4xl max-sm:text-3xl font-semibold z-10 text-secondary-navy mb-1">
            {parkInfo.distanceFromLodge}
          </div>
          <div className="text-lg max-sm:text-base font-medium text-shadow-md z-10">
            From Lodge
          </div>
        </div>
      </ViewMoreCursor>

      <ViewMoreCursor>
        <div className="bg-white size-full relative overflow-hidden rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 shadow-sm">
          <Image
            src={"/final/new_img/forest-min.webp"}
            alt="Tiger"
            width={200}
            height={200}
            className="absolute opacity-50  bottom-[-40%] z-0 select-none right-0 object-cover"
          />
          <div className="text-4xl max-sm:text-3xl font-semibold z-10 text-secondary-navy mb-1">
            {parkInfo.area}
          </div>
          <div className="text-lg max-sm:text-base font-medium text-shadow-md z-10">
            Reserve Area
          </div>
        </div>
      </ViewMoreCursor>

      <ViewMoreCursor>
        <div className="bg-white size-full relative overflow-hidden rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 shadow-sm">
          <Image
            src={"/final/new_img/time-min.webp"}
            alt="Tiger"
            width={200}
            height={200}
            className="absolute opacity-50  bottom-[-40%] z-0 select-none right-0 object-cover"
          />
          <div className="text-4xl max-sm:text-3xl font-semibold z-10 text-secondary-navy mb-1">
            Oct–Mar
          </div>
          <div className="text-lg max-sm:text-base font-medium text-shadow-md z-10">
            Best Season
          </div>
        </div>
      </ViewMoreCursor>
    </div>
  );
}

export default ParkInfoCard;
