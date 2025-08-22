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
    image: "/final/gallery/basil11.webp",
  },
  {
    id: "woods-wellness",
    name: "Cultural Evening",
    description: "Under the golden glow of the evening sky enjoy.",
    icon: "Flower",
    category: "wellness",
    featured: true,
    image: "/final/gallery/evening-min.webp",
  },
  {
    id: "cloud9-bar",
    name: "Cloud 9 Bar",
    description:
      "Elegant bar with premium beverages and cocktails, perfect for relaxing.",
    icon: "Wine",
    category: "dining",
    featured: true,
    image: "/final/new_img/feature_4-min.webp",
  },
  {
    id: "games-room",
    name: "Games Room",
    description:
      "Games room with board games, carrom, and other indoor activities.",
    icon: "Gamepad2",
    category: "recreation",
    featured: true,
    image: "/final/gallery/gal6-min.webp",
  },
  {
    id: "gym",
    name: "Fitness Center",
    description:
      "Modern gym with state-of-the-art equipment for your fitness routine.",
    icon: "Dumbbell",
    category: "wellness",
    featured: true,
    image: "/final/gallery/GYM.webp",
  },
  {
    id: "spa-vanasutra",
    name: "Vanasutra Spa",
    description:
      "Luxury spa offering a range of traditional and modern therapies.",
    icon: "Flower",
    category: "wellness",
    featured: true,
    image: "/final/gallery/SPA-VANASUTRA.webp",
  },
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    description: "Swimming pool with panoramic views of the Sariska landscape.",
    icon: "Waves",
    category: "recreation",
    featured: true,
    image: "/final/gallery/swing.webp",
  },
  {
    id: "lounge-bar",
    name: "Lounge & Bar",
    description:
      "Elegant lounge with premium beverages and cocktails by the fireplace with live music.",
    icon: "Wine",
    category: "dining",
    featured: false,
    image: "/final/gallery/CLOUD-9-min.webp",
  },
  {
    id: "bonfire",
    name: "Bonfire & Folk Music",
    description:
      "Evening bonfire with live folk music and cultural performances.",
    icon: "Flame",
    category: "recreation",
    featured: true,
    image: "/final/gallery/folkmusic-min.webp",
  },
  {
    id: "indoor-games",
    name: "Outdoor Wilderness Dining",
    description:
      "Step into the heart of the wild and savour a unique dining adventure.",
    icon: "Flame",
    category: "recreation",
    featured: false,
    image: "/final/gallery/gal10.webp",
  },
  {
    id: "wifi",
    name: "WiFi Internet",
    description:
      "Complimentary high-speed WiFi throughout the property for seamless connectivity.",
    icon: "Wifi",
    category: "connectivity",
    featured: false,
    image: "/final/gallery/experience-min.webp",
  },
  {
    id: "room-service",
    name: "24/7 Room Service",
    description:
      "Round-the-clock room service and concierge assistance for your comfort.",
    icon: "Bell",
    category: "accommodation",
    featured: false,
    image: "/final/new_img/ho-min.webp",
  },
  {
    id: "air-conditioning",
    name: "Air Conditioning",
    description:
      "Climate-controlled rooms with individual temperature controls.",
    icon: "Snowflake",
    category: "accommodation",
    featured: false,
    image: "/final/new_img/ac-min.webp",
  },
  {
    id: "nature-walks",
    name: "Nature Walks",
    description:
      "Guided nature walks and bird watching with expert naturalists.",
    icon: "TreePine",
    category: "safari",
    featured: false,
    image: "/final/gallery/VILAGE-WALK.webp",
  },
  {
    id: "jungle-safari",
    name: "Jungle Safari",
    description: "Thrilling wildlife safaris in Sariska Tiger Reserve.",
    icon: "Camera",
    category: "safari",
    featured: true,
    image: "/final/gallery/tiger111.webp",
  },
  {
    id: "camel-safari",
    name: "Camel Safari",
    description:
      "Traditional camel safari experiences through the desert landscape.",
    icon: "Camera",
    category: "safari",
    featured: false,
    image: "/final/gallery/cal.webp",
  },
  {
    id: "cycling",
    name: "Cycling",
    description:
      "Cycling tours through the wilderness and local villages for adventure.",
    icon: "Bike",
    category: "recreation",
    featured: false,
    image: "/final/gallery/CYCLING-min.webp",
  },
  {
    id: "hiking",
    name: "Hiking & Trekking",
    description:
      "Guided hiking and trekking experiences through the scenic trails.",
    icon: "Mountain",
    category: "recreation",
    featured: false,
    image: "/final/gallery/HIKING.webp",
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
