import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function AmenitiesSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-1"
      aria-labelledby="amenities-heading"
    >
      <section className="max-w-6xl mx-auto px-4 py-1 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-navy">
          About Us
        </h2>
        <p className="mt-2 text-lg text-gray-600 leading-relaxed max-w-4xl">
          Experience the luxury in the middle of jungle, located in the foothill
          of Aravali Ranges, offers absolute peaceful & pristine atmosphere to
          relax. Tucked faraway in the country side, Vanaashrya is close to the
          Sariska tiger reserve in Rajasthan. Enjoy every moment in this
          luxurious hideaway with well equipped cottages and tents to make your
          stay comfortable and memorable for a life time.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-1 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800"></h2>
        <p className="mt-2 text-lg text-gray-600 leading-relaxed max-w-4xl">
          Our Team combines the best of service with local roots. Feel free to
          ask them for anything and they will ensure that all service
          expectations are met. Our skilled team-members work round the clock to
          manage client satisfaction and guide you through your journey at
          Vanaashrya.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-gray-800">
          What We Offer
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        <div className="grid gap-y-10 gap-x-6 sm:gap-x-8 lg:gap-x-12 md:grid-cols-3">
          {[
            {
              title: "Accommodation",
              image: "/final/gallery/bh-min.jpg",
              href: "/accommodations",
            },
            {
              title: "Amenities",
              image: "/final/gallery/gal3-min.jpg",
              href: "/amenities",
            },
            {
              title: "Excursions",
              image: "/final/gallery/bh1-min.jpg",
              href: "/excursions",
            },
          ].map(({ title, image, href }) => (
            <Link key={title} href={href} aria-label={`Go to ${title}`}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-[400px] flex flex-col justify-end hover:shadow-2xl transition-shadow duration-300">
                {/* Image */}
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-300 z-10" />
                {/* Title and Arrow Button */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full">
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-white text-2xl md:text-3xl font-semibold text-center drop-shadow-lg  duration-300">
                      {title}
                    </h3>
                  </div>
                  <div className="mt-6 mb-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 group-hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg">
                    <ArrowRight className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                {/* Border */}
                <div className="absolute inset-6 border border-dashed border-white/70 group-hover:border-primary/70 pointer-events-none z-30 transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
