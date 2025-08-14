import React from "react";
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/common/HeroSection";
import {
  MapPin,
  Calendar,
  Camera,
  Users,
  TreePine,
  Mountain,
} from "lucide-react";
import Image from "next/image";

export default function SariskaTigerReserveBlog() {
  return (
    <MainLayout>
      <HeroSection
        image="/gallery/herobackground.jpg"
        title="Sariska Tiger Reserve - A Sanctuary of Serenity and Beauty"
        subtitle="A Sanctuary of Serenity and Beauty"
        description="Near Alwar, Rajasthan, India"
        height="h-[60vh]"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sariska Tiger Reserve - A Sanctuary of Serenity and Beauty
            </h1>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>2025-02-28</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] relative flex items-center justify-center">
              <Image
                width={1200}
                height={800}
                src="/gallery/tiger111.tif"
                alt="Sariska Tiger Safari"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="text-white text-center z-10 relative">
                <Camera className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-sm font-medium">Tigers at Sariska</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center text-white/90 text-xs">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Alwar, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Located near Alwar, Rajasthan, Sariska Tiger Reserve is a
                  perfect place to enjoy the beauty of nature, wildlife, and
                  adventure together. Spanning over 800 square kilometers, this
                  national park features the majestic Aravali mountains, cliffs,
                  dry deciduous forests, and grasslands.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-6">
                  Those who wish to spend their breaks far from the rush of the
                  city can choose this destination to relax their mind and body
                  amidst the lap of nature. This place will not disappoint
                  nature lovers as here they will be able to experience nature
                  in the purest form.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                  <TreePine className="w-6 h-6 mr-3" />
                  Sariska National Park Gates and Safaris
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Park Gates
                    </h3>
                    <p className="text-gray-700">
                      In Sariska National Park, there are two gates. The Sariska
                      Gate is the first one from which you can enter 1, 2 and 3
                      zones. Tehla Gate is another one through which you can
                      enter the 4th zone.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Safari Types
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Two types of Safaris i.e. Jeep and Canter Safari can be
                      found in Sariska.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-green-200">
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 mr-2 text-green-600" />
                          <h4 className="font-semibold text-gray-900">
                            Jeep Safari
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Accommodates 6 people excluding the driver/guide.
                          Experience wildlife up close in smaller groups.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-green-200">
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 mr-2 text-green-600" />
                          <h4 className="font-semibold text-gray-900">
                            Canter Safari
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Accommodates 20 visitors excluding the guide. Perfect
                          for larger groups exploring together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mountain className="w-6 h-6 mr-3" />
                  Places to Visit in and Around Sariska
                </h2>
                <div className="space-y-6">
                  <div className="bg-amber-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">
                      Accessibility
                    </h3>
                    <p className="text-gray-700">
                      The place is located 200 km from Delhi and Jaipur,
                      it&apos;s only 100km thus making it an accessible spot for
                      a long weekend. The place has many things to do that are
                      enough to make one&apos;s trip an unforgettable one.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">
                      Jungle Safari
                    </h3>
                    <p className="text-gray-700">
                      The main thing that attracts visitors to Sariska is the
                      jungle Safari that one can enjoy inside the reserve.
                      Sariska Tiger Reserve is a great place to enjoy the beauty
                      of the untouched natural forest. Beyond tigers, the place
                      is also home to other wildlife species like Striped Hyena,
                      Wild Boar, Indian Leopard, Honey Badger, Golden Jackal,
                      Monkeys, Sambar Deer and much more.
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
                      Near Alwar, Rajasthan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mountain className="w-4 h-4 mr-3 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      800 sq km area
                    </span>
                  </div>
                  <div className="flex items-center">
                    <TreePine className="w-4 h-4 mr-3 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      Aravali Mountains
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      Published: 2025-02-28
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
                    "Striped Hyena",
                    "Wild Boar",
                    "Indian Leopard",
                    "Honey Badger",
                    "Golden Jackal",
                    "Sambar Deer",
                    "Various Monkey Species",
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
                      Perfect weather for safaris
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Summer (Mar-May)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Hot but good for wildlife spotting
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
