export interface Room {
  id: string;
  type: string;
  name: string;
  size: string;
  maxGuests: number;
  features: string[];
  description: string;
  images: string[];
  price?: string;
  isAvailable: boolean;
}

export const rooms: Room[] = [
  {
    id: "cottage-room",
    type: "Cottage Room",
    name: "Cottage Room",
    size: "600 sq.ft",
    maxGuests: 2,
    features: [
      "Double/Twin Beds",
      "Air Conditioning",
      "Mini Bar",
      "Private Balcony",
      "WiFi",
      "Room Service",
      "Tea/Coffee Maker",
      "Safe",
    ],
    description:
      "Our luxurious cottages offer our guests an authentic royal experience that was experienced by our Royals on their several hunting trips in the National Park. The luxury property is the reflection of the love and dedication of the hotel towards wildlife, its conservation and creating a brilliant experience for the wildlife lovers!",
    images: ["/final/images/cottage-min.webp"],
    price: "From ₹8,000",
    isAvailable: true,
  },
  {
    id: "villa-room",
    type: "Villa Room",
    name: "Villa Room",
    size: "750 sq.ft",
    maxGuests: 3,
    features: [
      "King Size Bed",
      "Air Conditioning",
      "Mini Bar",
      "Private Terrace",
      "WiFi",
      "Room Service",
      "Sofa Bed",
      "Work Desk",
    ],
    description:
      "The Villa Room at Vanaashrya Resort near Sariska offers a luxurious escape with elegant interiors, modern amenities, and stunning views of the surrounding wilderness. Featuring spacious layouts, private balconies, and serene ambiance, it provides a perfect blend of comfort and nature for a peaceful and rejuvenating stay.",
    images: ["/final/images/villa-min.webp"],
    price: "From ₹12,000",
    isAvailable: true,
  },
  {
    id: "kothi-room",
    type: "Kothi Room",
    name: "Kothi Room",
    size: "900 sq.ft",
    maxGuests: 4,
    features: [
      "Master Bedroom",
      "Separate Living Room",
      "Private Terrace",
      "Air Conditioning",
      "Mini Bar",
      "WiFi",
      "Butler Service",
      "Luxury Amenities",
      "Panoramic Views",
    ],
    description:
      "The Kothi Room at Vanaashrya Resort near Sariska Tiger Reserve combines traditional charm with modern comfort. Offering spacious interiors, cozy furnishings, and scenic views, it provides a tranquil retreat. Guests can enjoy a peaceful atmosphere, private space, and a close connection to nature, ensuring a memorable and relaxing stay.",
    images: ["/final/images/kothi-min.webp"],
    price: "From ₹18,000",
    isAvailable: true,
  },
  // {
  //   id: "suite-room",
  //   type: "Suite Room",
  //   name: "Suite Room",
  //   size: "1625 sq.ft",
  //   maxGuests: 4,
  //   features: [
  //     "Private Pool",
  //     "Spacious Living Area",
  //     "Master Bedroom",
  //     "Garden View",
  //     "Air Conditioning",
  //     "Mini Bar",
  //     "WiFi",
  //     "Butler Service",
  //     "Outdoor Dining Area",
  //     "Premium Amenities",
  //   ],
  //   description:
  //     "The Suite Room at Vanaashrya Resort near Sariska National Park offers a lavish stay with elegant décor, ample space, and modern amenities. Featuring a separate living area, plush furnishings, and panoramic views, it ensures a luxurious and serene retreat. Perfect for guests seeking comfort, privacy, and a connection to nature.",
  //   images: ["/images/room_feature_1.webp"],
  //   price: "From ₹25,000",
  //   isAvailable: true,
  // },
  {
    id: "family-suites",
    type: "Family Suites",
    name: "Family Suites",
    size: "1800 sq.ft",
    maxGuests: 6,
    features: [
      "Multiple Bedrooms",
      "Spacious Living Area",
      "Family Dining Area",
      "Garden View",
      "Air Conditioning",
      "Mini Bar",
      "WiFi",
      "Butler Service",
      "Private Balcony",
      "Premium Amenities",
    ],
    description:
      "The Suite Room at Vanaashrya Resort near Sariska National Park offers a lavish stay with elegant décor, ample space, and modern amenities. Featuring a separate living area, plush furnishings, and panoramic views, it ensures a luxurious and serene retreat. Perfect for guests seeking comfort, privacy, and a connection to nature.",
    images: ["/final/images/suite-min.webp"],
    price: "From ₹30,000",
    isAvailable: true,
  },
];

export const getRoomById = (id: string): Room | undefined => {
  return rooms.find((room) => room.id === id);
};

export const getRoomsByType = (type: string): Room[] => {
  return rooms.filter((room) => room.type === type);
};

export const getAvailableRooms = (): Room[] => {
  return rooms.filter((room) => room.isAvailable);
};
