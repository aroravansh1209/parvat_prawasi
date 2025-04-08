import { GoaPackage } from "../../components/Packages/GoaPackage";

export const goaPackages = [
  {
    id: "beach-bliss",
    name: "Beach Bliss Getaway",
    duration: "4 Days / 3 Nights",
    description: "Immerse yourself in the sun, sand, and sea with our Beach Bliss package.",
    image: "/packages/beach-bliss.jpg",
    price: 15999,
    rating: 4.5,
    highlights: [
      "Relax on the pristine beaches of Baga and Calangute",
      "Sunset cruise on the Arabian Sea",
      "Water sports activities",
    ],
    inclusions: [
      "3 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Sunset cruise",
      "Half-day water sports package",
    ],
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival and transfer to hotel",
          "Welcome drink and leisure time at Baga Beach",
          "Overnight stay in Baga",
        ],
      },
      {
        day: 2,
        activities: [
          "Breakfast at the hotel",
          "Half-day water sports at Calangute Beach",
          "Evening sunset cruise with dinner",
          "Overnight stay in Baga",
        ],
      },
      {
        day: 3,
        activities: [
          "Breakfast at the hotel",
          "Day trip to Anjuna Flea Market and Chapora Fort",
          "Evening leisure time",
          "Overnight stay in Baga",
        ],
      },
      {
        day: 4,
        activities: ["Breakfast at the hotel", "Check-out and transfer to airport", "Departure"],
      },
    ],
    accommodation: "3-star beach resort in Baga",
    transportation: "AC car for all transfers and sightseeing",
  },
  {
    id: "cultural-explorer",
    name: "Cultural Explorer",
    duration: "5 Days / 4 Nights",
    description: "Discover Goa's rich history and vibrant culture with our Cultural Explorer package.",
    image: "/packages/cultural-explorer.jpg",
    price: 18999,
    rating: 4.7,
    highlights: ["Visit to Old Goa's historic churches", "Spice plantation tour", "Traditional Goan cooking class"],
    inclusions: [
      "4 nights accommodation",
      "Daily breakfast and one traditional Goan dinner",
      "Airport transfers",
      "Guided tours of Old Goa and spice plantation",
      "Cooking class with local chef",
    ],
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival and transfer to hotel in Panaji",
          "Evening walk in Fontainhas (Latin Quarter)",
          "Overnight stay in Panaji",
        ],
      },
      {
        day: 2,
        activities: [
          "Breakfast at the hotel",
          "Full-day tour of Old Goa's churches and cathedrals",
          "Visit to Shanta Durga Temple",
          "Overnight stay in Panaji",
        ],
      },
      {
        day: 3,
        activities: [
          "Breakfast at the hotel",
          "Spice plantation tour with traditional lunch",
          "Evening free for leisure",
          "Overnight stay in Panaji",
        ],
      },
      {
        day: 4,
        activities: [
          "Breakfast at the hotel",
          "Morning visit to local market",
          "Afternoon Goan cooking class",
          "Traditional Goan dinner",
          "Overnight stay in Panaji",
        ],
      },
      {
        day: 5,
        activities: ["Breakfast at the hotel", "Check-out and transfer to airport", "Departure"],
      },
    ],
    accommodation: "4-star heritage hotel in Panaji",
    transportation: "AC car for all transfers and sightseeing",
  },
  {
    id: "adventure-seeker",
    name: "Adventure Seeker",
    duration: "6 Days / 5 Nights",
    description: "Get your adrenaline pumping with our Adventure Seeker package in Goa.",
    image: "/packages/adventure-seeker.jpg",
    price: 22999,
    rating: 4.8,
    highlights: ["Scuba diving experience", "Trekking in Dudhsagar Waterfalls", "Kayaking in the backwaters"],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Scuba diving session",
      "Dudhsagar Waterfall trek",
      "Kayaking tour",
    ],
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival and transfer to hotel in Palolem",
          "Evening beach yoga session",
          "Overnight stay in Palolem",
        ],
      },
      {
        day: 2,
        activities: [
          "Breakfast at the hotel",
          "Full-day scuba diving experience",
          "Evening at leisure",
          "Overnight stay in Palolem",
        ],
      },
      {
        day: 3,
        activities: [
          "Early breakfast at the hotel",
          "Full-day trek to Dudhsagar Waterfalls",
          "Overnight stay in Mollem",
        ],
      },
      {
        day: 4,
        activities: [
          "Breakfast at the hotel",
          "Transfer to Nerul",
          "Afternoon kayaking tour in the backwaters",
          "Overnight stay in Nerul",
        ],
      },
      {
        day: 5,
        activities: [
          "Breakfast at the hotel",
          "Morning cycling tour of nearby villages",
          "Afternoon parasailing at Baga Beach",
          "Farewell bonfire dinner",
          "Overnight stay in Nerul",
        ],
      },
      {
        day: 6,
        activities: ["Breakfast at the hotel", "Check-out and transfer to airport", "Departure"],
      },
    ],
    accommodation: "Mix of beach huts and eco-lodges",
    transportation: "AC car for transfers and jeep for Dudhsagar trek",
  },
];
