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
    image: "/gallery/gal1.jpg",
    category: "accommodation",
    featured: true,
  },
  {
    id: "villas",
    title: "Villa Rooms",
    caption:
      "Spacious villa rooms with elegant interiors and stunning wilderness views",
    image: "/gallery/gal2.jpg",
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
    image: "/gallery/gal3.jpg",
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
  {
    id: "spa-soul-spring",
    title: "Outdoor Wilderness Dining",
    caption:
      "Step into the heart of the wild and savour a unique dining adventure.",
    image: "/gallery/gal10.jpg",
    category: "wellness",
    featured: true,
  },
  {
    id: "vanasutra-spa",
    title: "Vanasutra Spa",
    caption:
      "Luxury spa offering traditional and modern therapies for complete rejuvenation",
    image: "/gallery/gal4.jpg",
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
    image: "/gallery/gal5.jpg",
    category: "recreation",
    featured: true,
  },
  {
    id: "game-room",
    title: "Games Room",
    caption: "Board games, table tennis and TV for indoor entertainment",
    image: "/gallery/gal6.jpg",
    category: "recreation",
    featured: true,
  },
  {
    id: "indoor-games",
    title: "Folk Dance",
    caption: "Beauty and cultural Dance Performance",
    image: "/gallery/gal8.jpg",
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
    image: "/gallery/gal7.jpg",
    category: "activities",
    featured: true,
  },
  {
    id: "cultural-evening",
    title: "Cultural Evening",
    caption:
      "under the golden glow of the evening sky, enjoy freshly prepared meals",
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
    image: "/gallery/cong.jpg",
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
    image: "/gallery/tiger111.tif",
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
  {
    id: "spa-soul-spring",
    title: "Yoga",
    caption: "Wellness Yoga with Sunrise & Natural Habite ",
    image: "/gallery/yoga.jpg",
    category: "wellness",
    featured: true,
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
