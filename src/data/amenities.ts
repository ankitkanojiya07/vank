export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  category:
    | "accommodation"
    | "dining"
    | "recreation"
    | "wellness"
    | "safari"
    | "connectivity";
  featured: boolean;
  image: string; // Image path
}

export const amenities: Amenity[] = [
  {
    id: "woods-restaurant",
    name: "Basil Restaurant",
    description: "Fine dining restaurant serving Indian, Continental food.",
    icon: "UtensilsCrossed",
    category: "dining",
    featured: true,
    image: "/gallery/basil11.jpg",
  },
  {
    id: "woods-wellness",
    name: "Cultural Evening",
    description:
      "Under the golden glow of the evening sky, enjoy freshly prepared meal.",
    icon: "Flower",
    category: "wellness",
    featured: true,
    image: "/images/rooms/evening.jpg",
  },
  {
    id: "cloud9-bar",
    name: "Cloud 9 Bar",
    description:
      "Elegant bar with premium beverages and cocktails, perfect for relaxing.",
    icon: "Wine",
    category: "dining",
    featured: true,
    image: "/new_img/feature_4.jpg",
  },
  {
    id: "games-room",
    name: "Games Room",
    description:
      "Games room with board games, carrom, and other indoor activities.",
    icon: "Gamepad2",
    category: "recreation",
    featured: true,
    image: "/gallery/gal6.jpg",
  },
  {
    id: "gym",
    name: "Fitness Center",
    description:
      "Modern gym with state-of-the-art equipment for your fitness routine.",
    icon: "Dumbbell",
    category: "wellness",
    featured: true,
    image: "/gallery/GYM.jpg",
  },
  {
    id: "spa-vanasutra",
    name: "Vanasutra Spa",
    description:
      "Luxury spa offering a range of traditional and modern therapies.",
    icon: "Flower",
    category: "wellness",
    featured: true,
    image: "/gallery/SPA-VANASUTRA.jpg",
  },
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    description: "Swimming pool with panoramic views of the Sariska landscape.",
    icon: "Waves",
    category: "recreation",
    featured: true,
    image: "/gallery/swing.jpg",
  },
  {
    id: "lounge-bar",
    name: "Lounge & Bar",
    description:
      "Elegant lounge with premium beverages and cocktails by the fireplace with live music.",
    icon: "Wine",
    category: "dining",
    featured: false,
    image: "/gallery/CLOUD-9.jpg",
  },
  {
    id: "bonfire",
    name: "Bonfire & Folk Music",
    description:
      "Evening bonfire with live folk music and cultural performances.",
    icon: "Flame",
    category: "recreation",
    featured: true,
    image: "/gallery/folkmusic.png",
  },
  {
    id: "indoor-games",
    name: "Outdoor Wilderness Dining",
    description:
      "Step into the heart of the wild and savour a unique dining adventure.",
    icon: "Flame",
    category: "recreation",
    featured: false,
    image: "/gallery/gal10.jpg",
  },
  {
    id: "wifi",
    name: "WiFi Internet",
    description:
      "Complimentary high-speed WiFi throughout the property for seamless connectivity.",
    icon: "Wifi",
    category: "connectivity",
    featured: false,
    image: "/gallery/experience.jpg",
  },
  {
    id: "room-service",
    name: "24/7 Room Service",
    description:
      "Round-the-clock room service and concierge assistance for your comfort.",
    icon: "Bell",
    category: "accommodation",
    featured: false,
    image: "/new_img/ho.jpg",
  },
  {
    id: "air-conditioning",
    name: "Air Conditioning",
    description:
      "Climate-controlled rooms with individual temperature controls.",
    icon: "Snowflake",
    category: "accommodation",
    featured: false,
    image: "/new_img/ac.jpg",
  },
  // {
  //   id: "horse-riding",
  //   name: "Horse Riding",
  //   description: "Horse riding experiences through the wilderness and local villages with expert guides.",
  //   icon: "Horse",
  //   category: "recreation",
  //   featured: false,
  //   image: "/gallery/CYCLING.jpg"
  // },
  {
    id: "nature-walks",
    name: "Nature Walks",
    description:
      "Guided nature walks and bird watching with expert naturalists.",
    icon: "TreePine",
    category: "safari",
    featured: false,
    image: "/gallery/VILAGE-WALK.jpg",
  },
  {
    id: "jungle-safari",
    name: "Jungle Safari",
    description: "Thrilling wildlife safaris in Sariska Tiger Reserve.",
    icon: "Camera",
    category: "safari",
    featured: true,
    image: "/gallery/tiger111.tif",
  },
  {
    id: "camel-safari",
    name: "Camel Safari",
    description:
      "Traditional camel safari experiences through the desert landscape.",
    icon: "Camera",
    category: "safari",
    featured: false,
    image: "/gallery/cal.jpg",
  },
  {
    id: "cycling",
    name: "Cycling",
    description:
      "Cycling tours through the wilderness and local villages for adventure.",
    icon: "Bike",
    category: "recreation",
    featured: false,
    image: "/gallery/CYCLING.jpg",
  },
  {
    id: "hiking",
    name: "Hiking & Trekking",
    description:
      "Guided hiking and trekking experiences through the scenic trails.",
    icon: "Mountain",
    category: "recreation",
    featured: false,
    image: "/gallery/HIKING.jpg",
  },
];

export const getAmenitiesByCategory = (
  category: Amenity["category"]
): Amenity[] => {
  return amenities.filter((amenity) => amenity.category === category);
};

export const getFeaturedAmenities = (): Amenity[] => {
  return amenities.filter((amenity) => amenity.featured);
};

export const getAmenityById = (id: string): Amenity | undefined => {
  return amenities.find((amenity) => amenity.id === id);
};
