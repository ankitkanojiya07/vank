import React from "react";
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/common/HeroSection";
import { MapPin, Calendar, Camera, TreePine, Mountain } from "lucide-react";
import Image from "next/image";

export default function RanthamboreNationalParkBlog() {
  return (
    <MainLayout>
      <HeroSection
        image="/gallery/JUNGLE-SAFARI.jpg"
        title="Ranthambore National Park - The Land of the Tiger"
        subtitle="The Land of the Tiger"
        description="Sawai Madhopur, Rajasthan, India"
        height="h-[60vh]"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ranthambore National Park - The Land of the Tiger
            </h1>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>2025-03-10</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] relative flex items-center justify-center">
              <Image
                // sizes="100vw"
                width={1200}
                height={800}
                src="/gallery/JUNGLE-SAFARI.jpg"
                alt="Jungle Safari Adventure"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="text-white text-center z-10 relative">
                <Camera className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-sm font-medium">Jungle Safari Adventure</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center text-white/90 text-xs">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Sawai Madhopur, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ranthambore National Park, located in the Sawai Madhopur
                  district of southeastern Rajasthan, is a major wildlife
                  tourist attraction. The park is spread over 1,334 square
                  kilometers and is home to a large population of Bengal tigers.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-6">
                  The park&apos;s dry deciduous forests and open grassy meadows
                  make it an ideal habitat for tigers and other wildlife such as
                  leopards, sloth bears, and a variety of birds.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                  <TreePine className="w-6 h-6 mr-3" />
                  Safari Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Jeep Safari
                    </h3>
                    <p className="text-gray-700">
                      Explore the park in a 6-seater open jeep for a close
                      encounter with wildlife.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Canter Safari
                    </h3>
                    <p className="text-gray-700">
                      Larger groups can opt for a 20-seater canter for a shared
                      adventure.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mountain className="w-6 h-6 mr-3" />
                  Attractions in Ranthambore
                </h2>
                <div className="space-y-6">
                  <div className="bg-amber-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">
                      Ranthambore Fort
                    </h3>
                    <p className="text-gray-700">
                      The historic Ranthambore Fort, a UNESCO World Heritage
                      Site, offers panoramic views of the park and is a
                      must-visit for history enthusiasts.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">
                      Padam Talao
                    </h3>
                    <p className="text-gray-700">
                      The largest lake in the park, known for its water lilies
                      and as a popular spot for wildlife sightings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      Sawai Madhopur, Rajasthan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mountain className="w-4 h-4 mr-3 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      1,334 sq km area
                    </span>
                  </div>
                  <div className="flex items-center">
                    <TreePine className="w-4 h-4 mr-3 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      Deciduous Forests
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      Published: 2025-03-10
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">
                  Wildlife Highlights
                </h3>
                <div className="space-y-2">
                  {[
                    "Bengal Tigers",
                    "Leopards",
                    "Sloth Bears",
                    "Crocodiles",
                    "Sambar Deer",
                    "Chital",
                    "Birds",
                    "Wild Boar",
                  ].map((animal, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{animal}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  Best Time to Visit
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Winter (Nov-Feb)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Pleasant weather, best for safaris
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Summer (Mar-May)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Hot but good for tiger sightings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
