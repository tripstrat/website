export const samplePlanMeta = {
  title: "Tokyo, Softly Structured",
  subtitle:
    "An 8-day Tokyo plan for a couple who wants food, neighborhoods, culture, and calm structure without overpacking every day.",
  image: "/images/tokyo-sample.jpg",
  imageAlt: "Tokyo city skyline at dusk",
  details: [
    { label: "Dates", value: "Sample trip" },
    { label: "Destinations", value: "Tokyo with optional Kamakura or Yokohama day trip" },
    { label: "Duration", value: "8 days / 7 nights" },
    { label: "Pace", value: "Balanced" },
    { label: "Budget", value: "Moderate" },
    { label: "Travel style", value: "Food-focused, scenic, cultural, stylish, walkable" },
  ],
  howToUse:
    "Use this plan as a flexible structure. Each day is built around one or two main areas so you avoid crossing Tokyo unnecessarily. Keep restaurant choices flexible unless there is a specific place you care about booking early.",
  route: [
    { days: "Days 1–2", areas: "Shinjuku, Shibuya, Harajuku" },
    { days: "Days 3–4", areas: "Asakusa, Ueno, Ginza, Tokyo Station" },
    { days: "Days 5–6", areas: "Daikanyama, Nakameguro, Ebisu, Shimokitazawa" },
    { days: "Day 7", areas: "Kamakura or Yokohama day trip" },
    { days: "Day 8", areas: "Final morning and departure" },
  ],
  whyRoute:
    "Tokyo is huge, so this plan groups neighborhoods by geography and energy. It balances iconic first-time sights with slower areas, good food, shopping, and flexible evenings.",
};

export const sampleDays = [
  {
    day: 1,
    title: "Arrival + Shinjuku Soft Landing",
    theme: "Arrival, orientation, easy evening",
    morning: "Arrive in Tokyo and transfer to your stay. Keep the first day light, especially after a long flight.",
    afternoon:
      "Check in, freshen up, and take a short walk around your stay area. If staying near Shinjuku, use this time to get oriented around the station area without planning too much.",
    evening:
      "Dinner in Shinjuku or a nearby area. Walk through Omoide Yokocho or Golden Gai for atmosphere, but keep the night flexible.",
    timing: "Do not schedule major attractions today. Tokyo arrival days are better kept simple.",
    transit:
      "Airport transfer depends on arrival airport and stay area. Narita Express, airport limousine bus, or taxi may all make sense depending on luggage and timing.",
    flexible: [
      "Add a casual ramen or izakaya dinner.",
      "Skip nightlife and sleep early if jet-lagged.",
    ],
  },
  {
    day: 2,
    title: "Shibuya, Harajuku + Omotesando",
    theme: "Tokyo energy, shopping, cafes, first iconic views",
    morning:
      "Start in Shibuya. See the crossing, explore nearby streets, and consider a viewpoint if the weather is clear.",
    afternoon:
      "Walk or transit toward Harajuku and Omotesando. Mix a calm shrine/garden stop with boutiques, cafes, and design-focused streets.",
    evening: "Dinner around Shibuya, Ebisu, or Aoyama depending on the mood.",
    timing:
      "Shibuya is better earlier or later. Harajuku gets crowded midday, especially on weekends.",
    transit:
      "Use the JR Yamanote Line or metro depending on where you stay. Keep this day mostly on Tokyo’s west side.",
    flexible: [
      "Add Meiji Shrine if you want a calm cultural stop.",
      "Add a rooftop or viewpoint if the sky is clear.",
    ],
  },
  {
    day: 3,
    title: "Asakusa, Ueno + Old Tokyo",
    theme: "Temple streets, museums, old Tokyo atmosphere",
    morning:
      "Start in Asakusa. Visit Senso-ji, walk the surrounding streets, and keep time for snacks or small shops.",
    afternoon:
      "Continue to Ueno. Choose one museum, park walk, or market area instead of trying to do everything.",
    evening: "Dinner near Ueno, Asakusa, or back closer to your stay.",
    timing:
      "Asakusa is best earlier in the day. Choose one main cultural stop in Ueno to avoid museum fatigue.",
    transit:
      "Use metro connections across the east side. Avoid going back west in the middle of the day unless needed.",
    flexible: [
      "Add Kappabashi if you like kitchenware and design.",
      "Skip Ueno museums and keep the day more street-focused.",
    ],
  },
  {
    day: 4,
    title: "Ginza, Tokyo Station + Imperial Garden Area",
    theme: "Polished Tokyo, shopping, architecture, refined dinner",
    morning:
      "Start around Tokyo Station and Marunouchi. Walk the area for architecture, cafes, and a more polished city feel.",
    afternoon: "Continue to Ginza for shops, department stores, design, and a slower lunch.",
    evening:
      "Plan one nicer dinner tonight if desired. Ginza, Nihonbashi, or Marunouchi work well.",
    timing:
      "This is a good day for a more elevated meal because the areas are polished and easy to navigate.",
    transit: "Keep this day centered around Tokyo Station, Ginza, and nearby neighborhoods.",
    flexible: [
      "Add teamLab or a modern museum if tickets and timing work.",
      "Keep it simple with shopping, cafes, and dinner.",
    ],
  },
  {
    day: 5,
    title: "Daikanyama, Nakameguro + Ebisu",
    theme: "Stylish neighborhoods, cafes, slower pace",
    morning: "Start in Daikanyama for cafes, bookstores, boutiques, and quiet streets.",
    afternoon:
      "Walk or transit toward Nakameguro. Spend time along the river area, then continue toward Ebisu if energy allows.",
    evening:
      "Dinner in Ebisu or Nakameguro. This is a good night for a cozy restaurant or wine bar.",
    timing: "This day should feel slower and more local. Do not overpack it.",
    transit:
      "These neighborhoods are easier when grouped together. Use short train rides or taxis if tired.",
    flexible: [
      "Add a relaxed afternoon break at the hotel.",
      "Add Shimokitazawa instead if you prefer vintage shops and casual energy.",
    ],
  },
  {
    day: 6,
    title: "Shimokitazawa + West Tokyo",
    theme: "Vintage shops, casual food, local neighborhoods",
    morning:
      "Start later today. Go to Shimokitazawa for vintage shops, cafes, and a less formal Tokyo feel.",
    afternoon:
      "Continue exploring Shimokitazawa or add Kichijoji/Inokashira Park if you want a calmer green-space option.",
    evening: "Dinner in Shimokitazawa, Kichijoji, or return to Shinjuku/Shibuya.",
    timing: "This is a good flexible day after several structured sightseeing days.",
    transit:
      "Use local train lines. Check routing from your stay because some west-side areas require transfers.",
    flexible: [
      "Add Kichijoji if you want a park and calmer evening.",
      "Stay in Shimokitazawa if you prefer shops, cafes, and casual food.",
    ],
  },
  {
    day: 7,
    title: "Kamakura or Yokohama Day Trip",
    theme: "Coast, temples, or harbor city",
    morning:
      "Option A: Kamakura — best if you want temples, coastal atmosphere, small streets, and a break from Tokyo density.",
    afternoon:
      "Option B: Yokohama — best if you want an easier urban day trip with harbor views, Chinatown, and a less intense schedule.",
    evening: "Return to Tokyo for a simple final dinner near your stay.",
    timing:
      "Choose one day trip, not both. Kamakura is more scenic and cultural. Yokohama is easier and more relaxed.",
    transit: "Both are reachable by train from Tokyo. Check the best route based on your stay area.",
    flexible: [
      "Skip the day trip and use this as an open Tokyo day.",
      "Choose based on weather.",
    ],
  },
  {
    day: 8,
    title: "Final Morning + Departure",
    theme: "Simple final morning, no stress",
    morning:
      "Breakfast near your stay. Keep the schedule open for packing, one final walk, or a nearby shop.",
    afternoon: "Transfer to the airport with extra time.",
    evening: "Travel day — keep the evening open for departure.",
    timing: "Do not schedule anything important before departure.",
    transit: "Choose airport transfer based on luggage, departure airport, and time of day.",
    flexible: [
      "Add one final cafe.",
      "Pick up gifts or snacks near your stay.",
    ],
  },
];

export const sampleStay = {
  strategy:
    "For this trip, stay in one well-connected area rather than switching hotels. Tokyo is large, but changing hotels inside the city usually adds luggage friction without enough benefit for a 7-night stay.",
  areas: [
    {
      name: "Shinjuku",
      text: "Best overall for first-time visitors who want strong transit access, nightlife, food, and easy connections across the city.",
    },
    {
      name: "Shibuya / Aoyama",
      text: "Best for stylish neighborhoods, shopping, cafes, and easy access to west-side Tokyo.",
    },
    {
      name: "Ginza / Tokyo Station",
      text: "Best for a calmer, more polished stay with excellent access to trains, shopping, and airport connections.",
    },
  ],
  avoid:
    "Staying too far from major train or metro lines. Saving a little on accommodation can cost more in time and energy.",
  transport: [
    {
      title: "Airport to city",
      text: "Narita and Haneda have different best transfer options. Choose based on arrival airport, luggage, and hotel location.",
    },
    {
      title: "Getting around Tokyo",
      text: "Use trains and metro for most movement. Use taxis for late nights, luggage, or short trips when transfers are inconvenient.",
    },
    {
      title: "Day trip transport",
      text: "Kamakura and Yokohama are both train-friendly. Choose one based on weather and desired pace.",
    },
  ],
  bookingNotes: [
    "Choose accommodation near a useful station.",
    "Check airport transfer route before booking the stay.",
    "Book popular restaurants early if there are must-have dining spots.",
    "Check museum, attraction, and viewpoint reservation requirements.",
    "Avoid planning multiple far-apart neighborhoods in one day.",
  ],
};

export const sampleFood = {
  diningStyle:
    "This trip should mix casual local meals, cafes, one or two special dinners, and flexible neighborhood-based food stops. Do not overbook restaurants every day because Tokyo is better when there is room to follow what looks interesting.",
  rhythm: [
    {
      title: "Breakfast",
      text: "Simple cafe, hotel breakfast, or convenience store breakfast when starting early.",
    },
    {
      title: "Lunch",
      text: "Keep lunch area-based so the day does not get interrupted by long transfers.",
    },
    {
      title: "Dinner",
      text: "Plan dinner more intentionally. Use Shinjuku, Shibuya, Ebisu, Ginza, or Nakameguro depending on the day’s location.",
    },
    {
      title: "Special meal",
      text: "Use one nicer dinner in Ginza, Ebisu, or Aoyama — polished, but not overly formal.",
    },
  ],
  experiences: [
    { area: "Shibuya & Harajuku", text: "First-time Tokyo energy" },
    { area: "Omotesando & Daikanyama", text: "Design, cafes, and boutiques" },
    { area: "Asakusa", text: "Classic Tokyo atmosphere" },
    { area: "Ginza & Marunouchi", text: "Polished city energy" },
    { area: "Nakameguro & Ebisu", text: "Slower evenings" },
    { area: "Kamakura", text: "Scenic cultural day trip" },
    { area: "Yokohama", text: "Easier harbor-city day trip" },
  ],
  skip: [
    "Trying to see every famous Tokyo neighborhood",
    "Crossing the city repeatedly for meals",
    "Overbooking themed cafes or viral restaurants",
    "Doing both Kamakura and Yokohama in the same day",
    "Changing hotels inside Tokyo without a strong reason",
    "Scheduling early mornings after late nightlife",
  ],
};

export const samplePractical = {
  refinements:
    "The Complete Plan includes two refinement rounds. Use them to adjust pacing, remove activities, swap neighborhoods, add more food options, simplify the route, or make the plan more relaxed or more active.",
  helpsWith: [
    "Route and neighborhood strategy",
    "Day-by-day structure and pacing",
    "Stay-area guidance",
    "Transport thinking",
    "Food and experience direction",
    "Booking considerations before you spend",
  ],
  doesNotBook: [
    "Flights",
    "Hotels",
    "Restaurants",
    "Activities and tours",
    "Transportation tickets",
    "Other travel services on your behalf",
  ],
  reminder:
    "Prices, availability, opening hours, schedules, restaurant policies, train times, entry requirements, and travel conditions can change. Before booking or traveling, check current details directly with airlines, hotels, restaurants, transportation providers, official tourism sites, and activity providers.",
  responsibilities: [
    "Booking flights, hotels, activities, and transportation",
    "Checking passports, visas, health, safety, and entry requirements",
    "Confirming prices and availability",
    "Reading cancellation policies",
    "Arriving on time for booked experiences",
    "Making final decisions based on your comfort and needs",
  ],
  finalNote:
    "This plan is designed to make the trip easier to understand and easier to book. Use it as a clear structure, then adjust as needed based on real-time availability, weather, energy, and personal preference.",
};

export const sampleTabs = [
  { id: "overview", label: "Overview" },
  { id: "days", label: "Day-by-Day" },
  { id: "stay", label: "Stay & Transport" },
  { id: "food", label: "Food & Experiences" },
  { id: "practical", label: "Practical Notes" },
] as const;

export type SampleTabId = (typeof sampleTabs)[number]["id"];
