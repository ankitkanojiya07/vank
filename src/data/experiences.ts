export interface Experience {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  highlights: string[];
  includes: string[];
  images: string[];
  bestTime: string;
  maxParticipants: number;
  ageRestriction?: string;
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    id: "tiger-safari",
    name: "Tiger Safari",
    description:
      "Embark on an exciting jeep safari through Sariska Tiger Reserve to spot the magnificent Bengal tigers in their natural habitat.",
    duration: "3-4 hours",
    price: "₹2,500 per person",
    difficulty: "Easy",
    highlights: [
      "Spot Bengal tigers in their natural habitat",
      "Experienced naturalist guide",
      "Wildlife photography opportunities",
      "Diverse flora and fauna",
      "Visit to ancient temples within the reserve",
    ],
    includes: [
      "Jeep safari with driver",
      "Expert naturalist guide",
      "Entry fees to tiger reserve",
      "Refreshments",
      "Wildlife spotting assistance",
    ],
    images: [
      "/images/experiences/tiger-safari-1.jpg",
      "/images/experiences/tiger-safari-2.jpg",
      "/images/experiences/tiger-safari-3.jpg",
    ],
    bestTime: "Early morning (6:00 AM) or late afternoon (3:00 PM)",
    maxParticipants: 6,
    ageRestriction: "All ages welcome",
    featured: true,
  },
  {
    id: "live-cooking",
    name: "Live Cooking Experience",
    description:
      "Take a look at the 'very-own' kitchen garden where you can see the seasonal vegetables being grown. A cooking demo can be planned where you can learn the secrets of Indian spices and plan your own menu with chef.",
    duration: "1-2 hours",
    price: "On request",
    difficulty: "Easy",
    highlights: [
      "Visit kitchen garden",
      "Cooking demo with chef",
      "Learn Indian spices",
      "Plan your own menu",
      "Farm-to-table experience",
    ],
    includes: [
      "Guided garden tour",
      "Cooking demonstration",
      "Tasting session",
    ],
    images: ["/gallery/experience.jpg"],
    bestTime: "Morning or Evening",
    maxParticipants: 10,
    featured: true,
  },
  {
    id: "yoga-meditation",
    name: "Yoga & Meditation",
    description:
      "Escape the stress through a detoxing yoga session in peaceful surroundings.",
    duration: "1 hour",
    price: "Complimentary for guests",
    difficulty: "Easy",
    highlights: [
      "Detoxing yoga session",
      "Guided meditation",
      "Peaceful natural setting",
    ],
    includes: ["Yoga instructor", "Meditation guidance"],
    images: ["/gallery/wellness.jpg"],
    bestTime: "Morning or Evening",
    maxParticipants: 20,
    featured: true,
  },
  {
    id: "tea-with-peacocks",
    name: "Tea with the Peacocks",
    description:
      "Have tea and snacks amongst these enigmatic beings in the resort's gardens.",
    duration: "1 hour",
    price: "Complimentary for guests",
    difficulty: "Easy",
    highlights: ["Tea and snacks", "Peacock sightings", "Garden setting"],
    includes: ["Tea service", "Snacks"],
    images: ["/gallery/discover.jpg"],
    bestTime: "Morning or Evening",
    maxParticipants: 20,
    featured: true,
  },
  {
    id: "birdwatching",
    name: "Bird Watching",
    description:
      "Discover over 200 species of birds in Sariska's diverse ecosystems with expert ornithologists.",
    duration: "2-3 hours",
    price: "₹1,500 per person",
    difficulty: "Easy",
    highlights: [
      "Spot over 200 bird species",
      "Expert ornithologist guide",
      "Binoculars and bird identification guides",
      "Visit to prime birding locations",
      "Photography tips and techniques",
    ],
    includes: [
      "Professional bird guide",
      "Binoculars",
      "Bird identification charts",
      "Light refreshments",
      "Photography assistance",
    ],
    images: [
      "/images/experiences/birdwatching-1.jpg",
      "/images/experiences/birdwatching-2.jpg",
      "/images/experiences/birdwatching-3.jpg",
    ],
    bestTime: "Early morning (5:30 AM - 8:30 AM)",
    maxParticipants: 8,
    ageRestriction: "Children above 8 years",
    featured: true,
  },
  {
    id: "temple-visits",
    name: "Temple & Heritage Tour",
    description:
      "Explore ancient temples and historical sites including the famous Hanuman Temple inside the reserve.",
    duration: "4-5 hours",
    price: "₹2,000 per person",
    difficulty: "Moderate",
    highlights: [
      "Visit ancient Hanuman Temple",
      "Explore historical Kankwari Fort",
      "Learn about local legends and folklore",
      "Archaeological sites within the reserve",
      "Cultural and spiritual significance",
    ],
    includes: [
      "Transportation",
      "Entry fees",
      "Local guide",
      "Lunch",
      "Cultural presentations",
    ],
    images: [
      "/images/experiences/temple-tour-1.jpg",
      "/images/experiences/temple-tour-2.jpg",
      "/images/experiences/temple-tour-3.jpg",
    ],
    bestTime: "Morning (9:00 AM - 2:00 PM)",
    maxParticipants: 12,
    ageRestriction: "All ages welcome",
    featured: true,
  },
  {
    id: "haunted-fort",
    name: "Bhangarh Fort Excursion",
    description:
      "Visit the mysterious Bhangarh Fort, known as one of India's most haunted places, rich in history and legends.",
    duration: "6-7 hours",
    price: "₹3,500 per person",
    difficulty: "Moderate",
    highlights: [
      "Explore the legendary Bhangarh Fort",
      "Learn about historical mysteries",
      "Architectural marvels of medieval India",
      "Scenic drive through Rajasthan countryside",
      "Photography opportunities",
    ],
    includes: [
      "Transportation",
      "Entry fees",
      "Archaeological guide",
      "Lunch en route",
      "Refreshments",
    ],
    images: [
      "/images/experiences/bhangarh-fort-1.jpg",
      "/images/experiences/bhangarh-fort-2.jpg",
      "/images/experiences/bhangarh-fort-3.jpg",
    ],
    bestTime: "Full day (9:00 AM - 4:00 PM)",
    maxParticipants: 15,
    ageRestriction: "Children above 10 years",
    featured: false,
  },
  // {
  //   id: "horse-riding",
  //   name: "Horse Riding Adventure",
  //   description: "Experience the wilderness on horseback with guided trails through scenic landscapes and local villages.",
  //   duration: "2-3 hours",
  //   price: "₹2,200 per person",
  //   difficulty: "Moderate",
  //   highlights: [
  //     "Horseback riding through wilderness",
  //     "Visit to local villages",
  //     "Scenic landscape views",
  //     "Traditional riding techniques",
  //     "Cultural interaction with locals"
  //   ],
  //   includes: [
  //     "Well-trained horses",
  //     "Riding instructor",
  //     "Safety equipment",
  //     "Refreshments",
  //     "Village visit"
  //   ],
  //   images: [
  //     "/images/experiences/horse-riding-1.jpg",
  //     "/images/experiences/horse-riding-2.jpg",
  //     "/images/experiences/horse-riding-3.jpg"
  //   ],
  //   bestTime: "Morning (7:00 AM - 10:00 AM) or Evening (4:00 PM - 7:00 PM)",
  //   maxParticipants: 6,
  //   ageRestriction: "Children above 12 years",
  //   featured: false
  // },
  {
    id: "nature-walks",
    name: "Guided Nature Walks",
    description:
      "Intimate walking tours to discover the smaller wonders of Sariska's ecosystem with expert naturalists.",
    duration: "1.5-2 hours",
    price: "₹1,200 per person",
    difficulty: "Easy",
    highlights: [
      "Discover medicinal plants and herbs",
      "Learn about local ecosystems",
      "Butterfly and insect spotting",
      "Forest sounds and natural music",
      "Mindful walking meditation",
    ],
    includes: [
      "Expert naturalist guide",
      "Nature identification materials",
      "Walking stick if needed",
      "Refreshments",
      "Educational materials",
    ],
    images: [
      "/images/experiences/nature-walk-1.jpg",
      "/images/experiences/nature-walk-2.jpg",
      "/images/experiences/nature-walk-3.jpg",
    ],
    bestTime: "Early morning (6:00 AM - 8:00 AM)",
    maxParticipants: 10,
    ageRestriction: "All ages welcome",
    featured: false,
  },
  {
    id: "cultural-evening",
    name: "Cultural Evening with Folk Music",
    description:
      "Experience traditional Rajasthani culture with folk music, dance performances, and local cuisine around a bonfire.",
    duration: "3-4 hours",
    price: "₹1,800 per person",
    difficulty: "Easy",
    highlights: [
      "Traditional Rajasthani folk music",
      "Dance performances",
      "Bonfire experience",
      "Local cuisine tasting",
      "Cultural storytelling",
    ],
    includes: [
      "Folk music performance",
      "Traditional dance show",
      "Bonfire setup",
      "Local dinner",
      "Cultural guide",
    ],
    images: [
      "/images/experiences/cultural-evening-1.jpg",
      "/images/experiences/cultural-evening-2.jpg",
      "/images/experiences/cultural-evening-3.jpg",
    ],
    bestTime: "Evening (6:00 PM - 10:00 PM)",
    maxParticipants: 25,
    ageRestriction: "All ages welcome",
    featured: true,
  },
];

export const getFeaturedExperiences = (): Experience[] => {
  return experiences.filter((experience) => experience.featured);
};

export const getExperienceById = (id: string): Experience | undefined => {
  return experiences.find((experience) => experience.id === id);
};

export const getExperiencesByDifficulty = (
  difficulty: Experience["difficulty"]
): Experience[] => {
  return experiences.filter(
    (experience) => experience.difficulty === difficulty
  );
};
