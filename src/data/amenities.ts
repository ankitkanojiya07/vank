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
    name: "Woods Restaurant",
    description:
      "Fine dining restaurant serving Indian, Continental, and local Rajasthani cuisine in a beautiful setting with panoramic views of the wilderness.",
    icon: "UtensilsCrossed",
    category: "dining",
    featured: true,
    image: "/gallery/experience.jpg",
  },
  {
    id: "woods-wellness",
    name: "Woods Wellness",
    description:
      "Rejuvenating spa treatments and wellness therapies in tranquil settings surrounded by nature.",
    icon: "Flower",
    category: "wellness",
    featured: true,
    image: "/gallery/wellness.jpg",
  },
  {
    id: "cloud9-bar",
    name: "Cloud 9 Bar",
    description:
      "Elegant bar with premium beverages and cocktails, perfect for relaxing evenings with stunning sunset views.",
    icon: "Wine",
    category: "dining",
    featured: true,
    image: "/gallery/CLOUD-9-BAR.jpg",
  },
  {
    id: "games-room",
    name: "Games Room",
    description:
      "Recreation room with board games, carrom, and other indoor activities for all ages.",
    icon: "Gamepad2",
    category: "recreation",
    featured: true,
    image: "/gallery/GAME-ROOM.jpg",
  },
  {
    id: "gym",
    name: "Fitness Center",
    description:
      "Modern gym with state-of-the-art equipment for your fitness routine with personal trainers available.",
    icon: "Dumbbell",
    category: "wellness",
    featured: true,
    image: "/gallery/GYM.jpg",
  },
  {
    id: "spa-vanasutra",
    name: "Vanasutra Spa",
    description:
      "Luxury spa offering a range of traditional and modern therapies and massages for relaxation and rejuvenation.",
    icon: "Flower",
    category: "wellness",
    featured: true,
    image: "/gallery/SPA-VANASUTRA.jpg",
  },
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    description:
      "Infinity swimming pool with panoramic views of the Sariska landscape, perfect for relaxation.",
    icon: "Waves",
    category: "recreation",
    featured: true,
    image: "/gallery/SWIMING-POOL.jpg",
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
      "Evening bonfire with live folk music and cultural performances under the starlit sky.",
    icon: "Flame",
    category: "recreation",
    featured: true,
    image: "/new_img/bon.jpeg",
  },
  {
    id: "indoor-games",
    name: "Indoor Games",
    description:
      "Recreation room with board games, carrom, and other indoor activities for family entertainment.",
    icon: "Gamepad2",
    category: "recreation",
    featured: false,
    image: "/images/rooms/indor.jpg",
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
      "Round-the-clock room service and concierge assistance for your comfort and convenience.",
    icon: "Bell",
    category: "accommodation",
    featured: false,
    image: "/new_img/ho.jpg",
  },
  {
    id: "air-conditioning",
    name: "Air Conditioning",
    description:
      "Climate-controlled rooms with individual temperature controls for optimal comfort.",
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
      "Guided nature walks and bird watching with expert naturalists through the Sariska landscape.",
    icon: "TreePine",
    category: "safari",
    featured: false,
    image: "/gallery/VILAGE-WALK.jpg",
  },
  {
    id: "jungle-safari",
    name: "Jungle Safari",
    description:
      "Thrilling wildlife safaris in Sariska Tiger Reserve with experienced naturalists and guides.",
    icon: "Camera",
    category: "safari",
    featured: true,
    image: "/gallery/JUNGLE-SAFARI.jpg",
  },
  {
    id: "camel-safari",
    name: "Camel Safari",
    description:
      "Traditional camel safari experiences through the desert landscape and local villages.",
    icon: "Camera",
    category: "safari",
    featured: false,
    image: "/gallery/CAMEL-SAFARI.jpg",
  },
  {
    id: "cycling",
    name: "Cycling",
    description:
      "Cycling tours through the wilderness and local villages for adventure enthusiasts.",
    icon: "Bike",
    category: "recreation",
    featured: false,
    image: "/gallery/CYCLING.jpg",
  },
  {
    id: "hiking",
    name: "Hiking & Trekking",
    description:
      "Guided hiking and trekking experiences through the scenic trails of Sariska.",
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
