import Image from "next/image";
import React from "react";

const featureCarouselItems = [
  {
    img: "/new_img/feature_1.JPG",
    title: "Wilderness Luxury",
    subtitle: "Where Royal Heritage Meets Untamed Beauty",
    description:
      "Immerse yourself in unparalleled comfort just 400 yards from Sariska's pristine wilderness. Our commitment to exceptional hospitality creates an extraordinary sanctuary where luxury and nature coexist in perfect harmony.",
    link: "/about",
  },
  {
    img: "/gallery/feature_6.jpg",
    title: "Bespoke Experiences",
    subtitle: "Curated Adventures in Rajasthan's Heart",
    description:
      "Discover personalized journeys crafted exclusively for discerning travelers. Our boutique approach ensures every moment is tailored to your desires, from sunrise safaris to candlelit dinners under starlit Aravalli skies.",
    link: "/about",
  },
  {
    img: "/new_img/feature_3.jpg",
    title: "Tranquil Sanctuary",
    subtitle: "Ancient Hills, Timeless Serenity",
    description:
      "Find profound peace nestled within the ancient Aravalli ranges. Our resort offers a serene escape where the whispers of history blend with modern comfort, creating an atmosphere of unmatched tranquility and rejuvenation.",
    link: "/about",
  },
  {
    img: "/new_img/feature_6.jpg",
    title: "Conservation Excellence",
    subtitle: "Guardians of India's Majestic Tigers",
    description:
      "Experience responsible luxury at the gateway to Sariska Tiger Reserve. Our dedication to wildlife conservation and sustainable tourism ensures future generations will witness the majesty of Bengal tigers in their natural habitat.",
    link: "/about",
  },
  {
    img: "/new_img/feature_4.jpg",
    title: "Refined Comfort",
    subtitle: "Modern Elegance in Nature's Embrace",
    description:
      "Indulge in world-class amenities thoughtfully integrated with the natural landscape. From our infinity pool overlooking the wilderness to our rejuvenating spa treatments, every detail reflects our unwavering commitment to excellence.",
    link: "/about",
  },
];

const FeatureCarousel = () => {
  return (
    <div>
      <div>
        {featureCarouselItems.map((item, index) => (
          <div
            className="flex  md:odd:flex-row-reverse even:bg-background even:text-foreground md:flex-row flex-col-reverse"
            key={index}
          >
            <div className="md:w-1/2 flex-1">
              <div className="px-8 ml-auto py-10 flex-col flex justify-center items-start h-full">
                <p className="text-sm uppercase max-sm:text-center tracking-wider  font-semibold">
                  {item.subtitle}
                </p>
                <h3 className="md:text-5xl text-4xl md:text-start text-center my-3 font-medium text-primary">
                  {item.title}
                </h3>
                <p className="text-base max-sm:text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex-1">
              <div className="aspect-video">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="aspect-video w-full object-cover"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
