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
    image: "/final/gallery/gal1-min.jpg",
    category: "accommodation",
    featured: true,
  },
  {
    id: "villas",
    title: "Villa Rooms",
    caption:
      "Spacious villa rooms with elegant interiors and stunning wilderness views",
    image: "/final/gallery/gal2-min.jpg",
    category: "accommodation",
    featured: true,
  },
  {
    id: "kothi-rooms",
    title: "Kothi Rooms",
    caption:
      "Traditional charm meets modern comfort in our heritage-style Kothi rooms",
    image: "/final/images/kothi-min.jpg",
    category: "accommodation",
    featured: false,
  },

  // Dining
  {
    id: "cloud9-bar",
    title: "Cloud 9 - The Bar",
    caption:
      "Retro styled bar with outdoor deck for enjoying drinks in the lap of nature",
    image: "/final/gallery/gal3-min.jpg",
    category: "dining",
    featured: true,
  },
  {
    id: "basil-restaurant",
    title: "Basil - The Restaurant",
    caption:
      "Multi cuisine restaurant serving authentic local flavors and international dishes",
    image: "/final/gallery/BASIL-min.jpg",
    category: "dining",
    featured: true,
  },
  {
    id: "spa-soul-spring",
    title: "Outdoor Wilderness Dining",
    caption:
      "Step into the heart of the wild and savour a unique dining adventure.",
    image: "/final/gallery/gal10.JPG",
    category: "wellness",
    featured: false,
  },
  {
    id: "vanasutra-spa",
    title: "Vanasutra Spa",
    caption:
      "Luxury spa offering traditional and modern therapies for complete rejuvenation",
    image: "/final/gallery/gal4-min.jpg",
    category: "wellness",
    featured: true,
  },
  {
    id: "gym",
    title: "Fitness Center",
    caption: "Well equipped gym with modern machines for your fitness routine",
    image: "/final/gallery/GYM.jpg",
    category: "wellness",
    featured: false,
  },

  // Recreation
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    caption:
      "20 meter swimming pool with gazebos and poolside bar for relaxation",
    image: "/final/gallery/gal5-min.jpg",
    category: "recreation",
    featured: true,
  },
  {
    id: "game-room",
    title: "Games Room",
    caption: "Board games, table tennis and TV for indoor entertainment",
    image: "/final/gallery/gal6-min.jpg",
    category: "recreation",
    featured: true,
  },
  // {
  //   id: "indoor-games",
  //   title: "Folk Dance",
  //   caption: "Beauty and cultural Dance Performance",
  //   image: "/gallery/gal8.jpg",
  //   category: "recreation",
  //   featured: true,
  // },

  // Activities
  {
    id: "camel-safari",
    title: "Camel Safari",
    caption: "Traditional camel safari experiences through desert landscape",
    image: "/final/gallery/CAMEL-SAFARI-min.jpg",
    category: "activities",
    featured: true,
  },
  {
    id: "jungle-safari",
    title: "Jungle Safari",
    caption: "Thrilling wildlife safaris in Sariska Tiger Reserve",
    image: "/final/gallery/gal7.jpg",
    category: "activities",
    featured: true,
  },
  {
    id: "cultural-evening",
    title: "Cultural Evening",
    caption: "under the golden glow of the evening sky, enjoy",
    image: "/final/gallery/evening-min.jpg",
    category: "activities",
    featured: false,
  },
  {
    id: "village-walk",
    title: "Village Walk",
    caption: "Guided nature walks and bird watching with expert naturalists",
    image: "/final/gallery/VILAGE-WALK.jpg",
    category: "activities",
    featured: false,
  },
  {
    id: "cycling",
    title: "Cycling",
    caption: "Cycling tours through wilderness and local villages",
    image: "/final/gallery/CYCLING-min.jpg",
    category: "activities",
    featured: false,
  },
  {
    id: "hiking",
    title: "Hiking & Trekking",
    caption: "Guided hiking experiences through scenic trails of Sariska",
    image: "/final/gallery/HIKING.jpg",
    category: "activities",
    featured: false,
  },

  // Resort
  {
    id: "Plantation",
    title: "Plantation",
    caption: "Plantation by our Guests",
    image: "/final/images/plant-min.jpg",
    category: "resort",
    featured: false,
  },
  {
    id: "conference-room",
    title: "Conference Room",
    caption: "Modern conference facilities for business meetings and events",
    image: "/final/gallery/cong-min.jpg",
    category: "resort",
    featured: true,
  },
  {
    id: "mansorover-lake",
    title: "Siliserh Lake",
    caption: "Serene lake views and peaceful surroundings",
    image: "/final/gallery/MANSOROVER-LAKE.jpg",
    category: "resort",
    featured: false,
  },
  {
    id: "tiger",
    title: "Tiger",
    caption: "Royal Bengal Tiger in Sariska Tiger Reserve",
    image: "/final/gallery/tiger111.webp",
    category: "activities",
    featured: false,
  },
  {
    id: "neelkhant-temple",
    title: "Neelkhant Temple",
    caption: "Ancient temple architecture and spiritual ambiance",
    image: "/final/gallery/NEELKHANT-TEMPLE.jpg",
    category: "resort",
    featured: false,
  },
  {
    id: "abhaneri",
    title: "Abhaneri Step Well",
    caption: "Ancient step well showcasing historical architecture",
    image: "/final/gallery/ABHANERI.jpg",
    category: "resort",
    featured: false,
  },
  {
    id: "spa-soul-spring-dslk",
    title: "Group Getaway",
    caption:
      "A joyful group enjoying their stay amidst serene nature at the resort",
    image: "/final/gallery/slo.JPG",
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
