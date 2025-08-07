export interface ParkInfo {
  name: string;
  established: string;
  area: string;
  location: string;
  nearestCity: string;
  distanceFromLodge: string;
  tigerPopulation: {
    count: number;
    lastSurvey: string;
  };
  wildlife: string[];
  vegetation: string[];
  bestVisitTime: string;
  safariTimings: {
    morning: string;
    afternoon: string;
  };
  zones: {
    name: string;
    area: string;
    highlights: string[];
  }[];
  nearbyAttractions: {
    name: string;
    distance: string;
    description: string;
  }[];
}

export const parkInfo: ParkInfo = {
  name: "Sariska Tiger Reserve",
  established: "1958 (Tiger Reserve in 1978)",
  area: "866 sq km",
  location: "Alwar District, Rajasthan, India",
  nearestCity: "Alwar (37 km)",
  distanceFromLodge: "4 km from main gate",
  tigerPopulation: {
    count: 28,
    lastSurvey: "July 2022"
  },
  wildlife: [
    "Bengal Tiger",
    "Indian Leopard",
    "Jungle Cat",
    "Caracal",
    "Striped Hyena",
    "Golden Jackal",
    "Chital (Spotted Deer)",
    "Sambar",
    "Nilgai",
    "Wild Boar",
    "Langur",
    "Rhesus Macaque",
    "Indian Porcupine",
    "Five-striped Palm Squirrel"
  ],
  vegetation: [
    "Dry Deciduous Forest",
    "Dhok Trees",
    "Bamboo Groves",
    "Grasslands",
    "Thorny Scrubland",
    "Medicinal Plants"
  ],
  bestVisitTime: "October to March (Pleasant weather, active wildlife)",
  safariTimings: {
    morning: "6:00 AM - 10:00 AM",
    afternoon: "3:00 PM - 7:00 PM"
  },
  zones: [
    {
      name: "Zone 1 - Sariska Palace Area",
      area: "Core zone",
      highlights: [
        "Highest tiger density",
        "Sariska Palace ruins",
        "Water bodies",
        "Ancient temples"
      ]
    },
    {
      name: "Zone 2 - Kankwari Fort",
      area: "Core zone",
      highlights: [
        "Historical Kankwari Fort",
        "Aurangzeb's prison",
        "Scenic landscapes",
        "Wildlife corridors"
      ]
    },
    {
      name: "Zone 3 - Tehla & Bharthari",
      area: "Buffer zone",
      highlights: [
        "Tehla Lake",
        "Bharthari Temple",
        "Diverse birdlife",
        "Peaceful environment"
      ]
    }
  ],
  nearbyAttractions: [
    {
      name: "Bhangarh Fort",
      distance: "25 km",
      description: "Archaeological ruins known for legends and mystery, maintained by ASI"
    },
    {
      name: "Pandupole Temple",
      distance: "15 km",
      description: "Ancient Hanuman temple with natural spring, believed to have healing properties"
    },
    {
      name: "Neelkanth Temples",
      distance: "20 km",
      description: "6th-10th century temple complex dedicated to Lord Shiva"
    },
    {
      name: "Siliserh Lake",
      distance: "50 km",
      description: "Artificial lake with palace, popular for boating and bird watching"
    },
    {
      name: "City Palace Alwar",
      distance: "40 km",
      description: "18th-century palace showcasing Rajput and Mughal architecture"
    }
  ]
};

export const getConnectivityInfo = () => {
  return {
    airports: [
      {
        name: "Jaipur Airport",
        distance: "107 km",
        driveTime: "2.5 hours"
      },
      {
        name: "Delhi Airport",
        distance: "200 km",
        driveTime: "4 hours"
      }
    ],
    railways: [
      {
        name: "Alwar Junction",
        distance: "37 km",
        driveTime: "45 minutes"
      },
      {
        name: "Delhi Junction",
        distance: "200 km",
        driveTime: "4 hours"
      }
    ],
    roads: [
      {
        route: "Delhi - Gurgaon - Alwar - Sariska",
        distance: "200 km",
        driveTime: "4 hours"
      },
      {
        route: "Jaipur - Alwar - Sariska",
        distance: "107 km",
        driveTime: "2.5 hours"
      }
    ]
  };
};
