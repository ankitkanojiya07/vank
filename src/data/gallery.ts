export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  image: string;
  category:
    | "accommodation"
    | "dining"
    | "wellness"
    | "recreation"
    | "activities"
    | "resort"
    | "spa";
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  // Accommodation
  {
    id: "cottages-room",
    title: "Cottages Room",
    caption:
      "Luxurious cottage rooms offering authentic royal experience with modern amenities",
    image: "/gallery/9612761ACCOMODATION.jpg",
    category: "accommodation",
    featured: true,
  },
  {
    id: "villas",
    title: "Villa Rooms",
    caption:
      "Spacious villa rooms with elegant interiors and stunning wilderness views",
    image: "/gallery/villa.jpg",
    category: "accommodation",
    featured: true,
  },
  {
    id: "kothi-rooms",
    title: "Kothi Rooms",
    caption:
      "Traditional charm meets modern comfort in our heritage-style Kothi rooms",
    image: "/images/rooms/kothi.jpg",
    category: "accommodation",
    featured: false,
  },

  // Dining
  {
    id: "cloud9-bar",
    title: "Cloud 9 - The Bar",
    caption:
      "Retro styled bar with outdoor deck for enjoying drinks in the lap of nature",
    image: "/gallery/CLOUD-9-BAR.jpg",
    category: "dining",
    featured: true,
  },
  {
    id: "basil-restaurant",
    title: "Basil - The Restaurant",
    caption:
      "Multi cuisine restaurant serving authentic local flavors and international dishes",
    image: "/gallery/BASIL.jpg",
    category: "dining",
    featured: true,
  },

  // Wellness & Spa
  {
    id: "spa-soul-spring",
    title: "Spa - Soul Spring",
    caption:
      "Wellness centre with massage rooms, jacuzzi, steam, cold shower and gym",
    image: "/gallery/SPA-VANASUTRA.jpg",
    category: "wellness",
    featured: true,
  },
  {
    id: "vanasutra-spa",
    title: "Vanasutra Spa",
    caption:
      "Luxury spa offering traditional and modern therapies for complete rejuvenation",
    image: "/gallery/VANASUTRA-SPA2.jpg",
    category: "wellness",
    featured: true,
  },
  {
    id: "gym",
    title: "Fitness Center",
    caption: "Well equipped gym with modern machines for your fitness routine",
    image: "/gallery/GYM.jpg",
    category: "wellness",
    featured: false,
  },

  // Recreation
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    caption:
      "20 meter swimming pool with gazebos and poolside bar for relaxation",
    image: "/gallery/SWIMING-POOL.jpg",
    category: "recreation",
    featured: true,
  },
  {
    id: "game-room",
    title: "Game Room",
    caption: "Board games, table tennis and TV for indoor entertainment",
    image: "/gallery/GAME-ROOM.jpg",
    category: "recreation",
    featured: true,
  },
  {
    id: "indoor-games",
    title: "Indoor Games",
    caption: "Recreation room with carrom, chess and other indoor activities",
    image: "/images/rooms/indor.jpg",
    category: "recreation",
    featured: false,
  },

  // Activities
  {
    id: "camel-safari",
    title: "Camel Safari",
    caption: "Traditional camel safari experiences through desert landscape",
    image: "/gallery/CAMEL-SAFARI.jpg",
    category: "activities",
    featured: true,
  },
  {
    id: "jungle-safari",
    title: "Jungle Safari",
    caption: "Thrilling wildlife safaris in Sariska Tiger Reserve",
    image: "/gallery/JUNGLE-SAFARI.jpg",
    category: "activities",
    featured: true,
  },
  {
    id: "cultural-evening",
    title: "Cultural Evening",
    caption: "Evening bonfire with live folk music and cultural performances",
    image: "/images/rooms/evening.jpg",
    category: "activities",
    featured: false,
  },
  {
    id: "village-walk",
    title: "Village Walk",
    caption: "Guided nature walks and bird watching with expert naturalists",
    image: "/gallery/VILAGE-WALK.jpg",
    category: "activities",
    featured: false,
  },
  {
    id: "cycling",
    title: "Cycling",
    caption: "Cycling tours through wilderness and local villages",
    image: "/gallery/CYCLING.jpg",
    category: "activities",
    featured: false,
  },
  {
    id: "hiking",
    title: "Hiking & Trekking",
    caption: "Guided hiking experiences through scenic trails of Sariska",
    image: "/gallery/HIKING.jpg",
    category: "activities",
    featured: false,
  },

  // Resort
  {
    id: "Plantation",
    title: "Plantation",
    caption: "Plantatin by our Guests",
    image: "/images/rooms/plant.jpg",
    category: "resort",
    featured: false,
  },
  {
    id: "conference-room",
    title: "Conference Room",
    caption: "Modern conference facilities for business meetings and events",
    image: "/new_img/seat.jpg",
    category: "resort",
    featured: false,
  },
  {
    id: "mansorover-lake",
    title: "Mansorover Lake",
    caption: "Serene lake views and peaceful surroundings",
    image: "/gallery/MANSOROVER-LAKE.jpg",
    category: "resort",
    featured: false,
  },
  {
    id: "tiger",
    title: "Tiger",
    caption: "Royal Bengal Tiger in Sariska Tiger Reserve",
    image: "/gallery/9632882small2.jpg",
    category: "activities",
    featured: false,
  },
  {
    id: "neelkhant-temple",
    title: "Neelkhant Temple",
    caption: "Ancient temple architecture and spiritual ambiance",
    image: "/gallery/NEELKHANT-TEMPLE.jpg",
    category: "resort",
    featured: false,
  },
  {
    id: "abhaneri",
    title: "Abhaneri Step Well",
    caption: "Ancient step well showcasing historical architecture",
    image: "/gallery/ABHANERI.jpg",
    category: "resort",
    featured: false,
  },
];

export const getGalleryImagesByCategory = (
  category: GalleryImage["category"]
): GalleryImage[] => {
  return galleryImages.filter((image) => image.category === category);
};

export const getFeaturedGalleryImages = (): GalleryImage[] => {
  return galleryImages.filter((image) => image.featured);
};

export const getAllGalleryImages = (): GalleryImage[] => {
  return galleryImages;
};

export const getGalleryImageById = (id: string): GalleryImage | undefined => {
  return galleryImages.find((image) => image.id === id);
};
