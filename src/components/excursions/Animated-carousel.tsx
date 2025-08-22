import Image from "next/image";


const cards = [
  {
    id: 1,
    image: "/final/gallery/gal7.webp",
    title: "Jungle Safari",
    description:
      "The Sariska gate is just 5 km from the resort. After the successful relocation of tigers, The National Park now has over 19 Tigers.",
  },
  {
    id: 2,
    image: "/final/gallery/CAMEL-SAFARI-min.webp",
    title: "Camel Safari",
    description:
      "Visit the Sarpanch and interact with nearby Banjara tribes on a comfortable camel cart.",
  },
  {
    id: 3,
    image: "/final/gallery/VILAGE-WALK.webp",
    title: "Village Walk",
    description:
      "A guided village walk through the local farms and trails where you can interact and learn about the cattles.",
  },
  {
    id: 4,
    image: "/final/gallery/BHANGAR-FORT-min.webp",
    title: "Bhangarh Fort",
    description:
      "Just 30 min drive away, this infamous haunted fort comes under archaeological survey of India.",
  },
  {
    id: 5,
    image: "/final/gallery/NEELKHANT-TEMPLE.webp",
    title: "Neelkanth Temple",
    description:
      "Neelkanth Mahadev Temple (dedicated to Lord Shiva) was constructed in 1010 ad by the Bargujar King Ajay Pal.",
  },
  {
    id: 6,
    image: "/final/gallery/ABHANERI.webp",
    title: "Abhaneri",
    description:
      "Abhaneri is a village in the Dausa district of the Indian state of Rajasthan.",
  },
  {
    id: 7,
    image: "/final/gallery/HIKING.webp",
    title: "Trekking & Hiking",
    description:
      "Hiking amongst the Aravali Ranges walking through the agriculture fields can be planned on request.",
  },
  {
    id: 8,
    image: "/final/gallery/MANSOROVER-LAKE.webp",
    title: "Mansarovar Lake",
    description: "Drive/trek to witness beautiful sunset at Mansarovar Lake.",
  },
  {
    id: 9,
    image: "/final/gallery/CYCLING-min.webp",
    title: "Cycling",
    description:
      "Enjoy the cycling on typical village roads with friends/family.",
  },
];

export function AnimatedCarouselWithCards() {

  return (
    <div>

      {/* Zig-zag Gallery Cards Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold flex  justify-center gap-1.5 flex-wrap text-secondary-navy mb-3">
            Nearby
            <span className="block text-secondary-navy">Attractions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enjoy interactive gallery cards with smooth hover effects.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex items-center gap-12 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-sm group">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                    width={1080}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="w-1/2 space-y-6">
                <div className="relative">
                  {/* Decorative line */}
                  <div className="relative inline-block mb-4">
                    <h3 className="text-3xl font-light text-amber-800">
                      {card.title}
                    </h3>
                    <div className="absolute bottom-0 right-0 w-16 h-px bg-amber-400"></div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

