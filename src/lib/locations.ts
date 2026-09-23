import { IMAGES } from "./images";

export type Location = {
  slug: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  landmark: string;
  heroImage?: string;
  aboutImage?: string;
  galleryImages?: string[];
  serves: string[];
  intro: string;
  usp: string[];
  metros: string[];
  faqs: { q: string; a: string }[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "punjabi-bagh",
    name: "Punjabi Bagh",
    area: "West Delhi",
    address: "NWA 10, Club Road, Punjabi Bagh, Delhi – 110026",
    phone: "+91 99900 02564",
    hours: "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM, Sunday: Closed",
    landmark: "2 min from Punjabi Bagh Club, opposite Central Market",
    heroImage: IMAGES.locations["punjabi-bagh"].hero,
    aboutImage: IMAGES.locations["punjabi-bagh"].about,
    galleryImages: IMAGES.locations["punjabi-bagh"].gallery,
    serves: ["Punjabi Bagh", "West Punjabi Bagh", "Madipur", "Shivaji Park", "Ashok Vihar"],
    intro:
      "The most loved women-only gym in Punjabi Bagh — a private, luxurious space where West Delhi women lift, flow and transform together.",
    usp: [
      "Women-only fitness floor with 4 dedicated group class studios",
      "PCOS, post-natal & strength coaching by certified male & female experts",
      "Complimentary steam & recovery lounge",
      "Valet parking in Central Market",
    ],
    metros: ["Shivaji Park (Green Line) — 6 min"],
    faqs: [
      {
        q: "Is this a women-only gym in Punjabi Bagh?",
        a: "Yes! Her Fitness Punjabi Bagh is an exclusive, private fitness sanctuary built for women members, supported by certified female and male fitness experts.",
      },
      {
        q: "Do you offer home pickup from Punjabi Bagh West?",
        a: "Signature and Luxe members within a 3 km radius (including Punjabi Bagh West, Madipur and Shivaji Park) get complimentary cab pickup for early-morning slots.",
      },
    ],
  },
  {
    slug: "rajouri-garden",
    name: "Rajouri Garden",
    area: "West Delhi",
    address: "WZ 153, Next to Cambridge Foundation School, Block J, Rajouri Garden, New Delhi – 110027",
    phone: "+91 99900 01865",
    hours: "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM, Sunday: Closed",
    landmark: "Above TGIP Mall entrance, walking distance from metro",
    heroImage: IMAGES.locations["rajouri-garden"].hero,
    aboutImage: IMAGES.locations["rajouri-garden"].about,
    galleryImages: IMAGES.locations["rajouri-garden"].gallery,
    serves: ["Rajouri Garden", "Tagore Garden", "Subhash Nagar", "Ramesh Nagar", "Moti Nagar"],
    intro:
      "Rajouri Garden's premier ladies-only fitness club — a bright, sunlit studio built for the modern West Delhi woman.",
    usp: [
      "Direct-from-metro access with private members' entrance",
      "12+ group classes every day, from HIIT to hatha",
      "Certified pre & post-natal female & male coaches on staff",
      "Members-only rooftop yoga deck",
    ],
    metros: ["Rajouri Garden (Blue Line) — 2 min walk"],
    faqs: [
      {
        q: "Can I do a walk-in trial at your Rajouri Garden studio?",
        a: "Yes. Walk in any weekday between 10 am–5 pm and our team will take you on a tour and set up your complimentary 3-day trial on the spot.",
      },
    ],
  },
  {
    slug: "paschim-vihar",
    name: "Paschim Vihar",
    area: "West Delhi",
    address: "A, Pizza Hut, Building 1, Shubham Enclave, Reserve Bank Enclave, Paschim Vihar, Delhi – 110087",
    phone: "+91 99900 01461",
    hours: "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM, Sunday: Closed",
    landmark: "Opposite Paschim Vihar Market, next to HDFC Bank",
    heroImage: IMAGES.locations["paschim-vihar"].hero,
    aboutImage: IMAGES.locations["paschim-vihar"].about,
    galleryImages: IMAGES.locations["paschim-vihar"].gallery,
    serves: ["Paschim Vihar", "Peeragarhi", "Sunder Vihar", "Meera Bagh", "Outer Ring Road"],
    intro:
      "Paschim Vihar's calmest, most premium women-only fitness sanctuary — designed to feel like a spa and train like a pro gym.",
    usp: [
      "Airy 6,000 sq. ft. floor with natural light",
      "Small-group coaching with certified male & female trainers",
      "In-house nutritionist consultations included",
      "Kids play-corner for members with toddlers",
    ],
    metros: ["Paschim Vihar East (Green Line) — 4 min"],
    faqs: [
      {
        q: "Do you have a créche or kids area in Paschim Vihar?",
        a: "Yes — our Paschim Vihar studio has a supervised play-corner for members' children aged 2–8, so moms can train without worry.",
      },
    ],
  },
  {
    slug: "janakpuri",
    name: "Janakpuri",
    area: "West Delhi",
    address: "C1/3, Block C1, Janak Puri, New Delhi – 110058, Opposite Mata Chandan Devi Hospital",
    phone: "+91 99900 81464",
    hours: "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM, Sunday: Closed",
    landmark: "5 min from Janakpuri West Metro, above City Square Mall",
    heroImage: IMAGES.locations["janak-puri"].hero,
    aboutImage: IMAGES.locations["janak-puri"].about,
    galleryImages: IMAGES.locations["janak-puri"].gallery,
    serves: ["Janakpuri", "Vikaspuri", "Uttam Nagar", "Tilak Nagar", "Subhash Nagar"],
    intro:
      "Janakpuri's most trusted women-only gym — where mothers, students, professionals and grandmothers all find their strong.",
    usp: [
      "Zumba, Bollywood dance, strength & yoga under one roof",
      "Physiotherapy & strength consultation on call",
      "Special senior-women programs (55+)",
      "Ample basement parking",
    ],
    metros: ["Janakpuri West (Magenta & Blue Line) — 5 min"],
    faqs: [
      {
        q: "Do you have programs for women over 50 in Janakpuri?",
        a: "Yes — our Silver Bloom program is designed specifically for women 55+, focusing on bone density, mobility and balance under expert supervision.",
      },
    ],
  },
  {
    slug: "kirti-nagar",
    name: "Kirti Nagar",
    area: "Central-West Delhi",
    address: "42, Basement, Opposite Singh Chicken, DLE Industrial Area, Kirti Nagar, New Delhi – 110015",
    phone: "+91 99900 02969",
    hours: "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM, Sunday: Closed",
    landmark: "Opposite Kirti Nagar Furniture Market, on Ring Road",
    heroImage: IMAGES.locations["kirti-nagar"].hero,
    aboutImage: IMAGES.locations["kirti-nagar"].about,
    galleryImages: IMAGES.locations["kirti-nagar"].gallery,
    serves: ["Kirti Nagar", "Moti Nagar", "Karol Bagh", "Rajouri Garden", "Ramesh Nagar"],
    intro:
      "The women's gym Kirti Nagar has been asking for — expert coaching, calm design and a real sisterhood, minutes from your door.",
    usp: [
      "High-intensity conditioning zone with turf & sleds",
      "Recovery corner with cold plunge & sauna",
      "Working-women-friendly 6 am and 9 pm class slots",
      "Direct Ring Road access with private parking",
    ],
    metros: ["Kirti Nagar (Blue & Green Line) — 3 min"],
    faqs: [
      {
        q: "Do you offer late-evening classes for working women near Kirti Nagar?",
        a: "Yes — we run strength and dance classes every weekday at 7:30 pm, 8:30 pm and 9:30 pm to fit around office schedules.",
      },
    ],
  },
  {
    slug: "rohini",
    name: "Rohini",
    area: "North-West Delhi",
    address: "D13, 1st Floor, Prashant Vihar, Near Axis Bank, Sector 14, Rohini, New Delhi – 110085",
    phone: "+91 99900 01480",
    hours: "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM, Sunday: Closed",
    landmark: "Opposite Prashant Vihar Chowk, next to Reliance Fresh",
    heroImage: IMAGES.locations["rohini"].hero,
    aboutImage: IMAGES.locations["rohini"].about,
    galleryImages: IMAGES.locations["rohini"].gallery,
    serves: ["Prashant Vihar", "Rohini Sec 14", "Rohini Sec 9", "Pitampura", "Shalimar Bagh"],
    intro:
      "The women-only fitness address for Rohini and Prashant Vihar — luxurious, private and designed by women, for women.",
    usp: [
      "Exclusive women-only member environment",
      "Reformer Pilates studio with certified coaches",
      "Free InBody scan every 30 days",
      "Ample outdoor parking",
    ],
    metros: ["Rohini East (Red Line) — 6 min"],
    faqs: [
      {
        q: "Do you offer Pilates classes in Prashant Vihar?",
        a: "Yes — our Prashant Vihar studio is home to Delhi's premier Reformer Pilates room for women, led by certified expert instructors.",
      },
    ],
  },
  {
    slug: "dwarka",
    name: "Dwarka",
    area: "South-West Delhi",
    address: "HOD Building, Basement, Parmanand Colony, Block B, Sector 12, Dwarka, New Delhi – 110078",
    phone: "+91 99900 06982",
    hours: "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM, Sunday: Closed",
    landmark: "Near Radisson Blu, opposite Sector 12 Metro Station",
    heroImage: IMAGES.locations["dwarka"].hero,
    aboutImage: IMAGES.locations["dwarka"].about,
    galleryImages: IMAGES.locations["dwarka"].gallery,
    serves: ["Dwarka Sec 12", "Dwarka Sec 10", "Dwarka Sec 6", "Palam", "Sector 13"],
    intro:
      "Dwarka's most premium women-only fitness studio — a modern, spacious sanctuary right next to Sector 12 Metro.",
    usp: [
      "8,000 sq. ft. floor, spread across two levels",
      "Rooftop yoga & meditation deck at sunrise",
      "Signature Dwarka Sisterhood Sunday brunches",
      "Direct metro access + free parking",
    ],
    metros: ["Sector 12 Dwarka (Blue Line) — 1 min"],
    faqs: [
      {
        q: "How close is the gym to Sector 12 Dwarka metro?",
        a: "Our Dwarka studio is a 60-second walk from Gate 1 of Sector 12 Metro Station — one of the most accessible women-only gyms in South-West Delhi.",
      },
    ],
  },
  {
    slug: "vikas-puri",
    name: "Vikas Puri",
    area: "West Delhi",
    address: "139, H1 Block, Vikas Puri, New Delhi – 110018",
    phone: "+91 99900 01465",
    hours: "Monday - Saturday: 7:00 AM - 12:30 PM & 5:00 PM - 9:00 PM, Sunday: Closed",
    landmark: "H 1 Block Market, near PVR Vikaspuri",
    heroImage: IMAGES.locations["vikas-puri"].hero,
    aboutImage: IMAGES.locations["vikas-puri"].about,
    galleryImages: IMAGES.locations["vikas-puri"].gallery,
    serves: ["Vikaspuri", "Janakpuri West", "Uttam Nagar", "Hastsal", "Keshopur"],
    intro:
      "Vikaspuri's finest women-only fitness sanctuary — a luxurious, high-energy studio created for women who want empowering workouts and a vibrant community.",
    usp: [
      "Dedicated women-only strength & functional training floor",
      "PCOS, post-natal & pelvic floor certified male & female coaches",
      "High-energy Zumba, Bollywood dance & Pilates studio",
      "Easy street parking & prime location in H 1 Block Market",
    ],
    metros: ["Janakpuri West (Blue & Magenta Line) — 4 min", "Vikas Puri Bus Terminal — 2 min"],
    faqs: [
      {
        q: "Where is the Her Fitness Vikas Puri branch located?",
        a: "Our Vikas Puri studio is located at 139, H1 Block, Vikas Puri, New Delhi – 110018, right in the heart of H-Block market with easy parking and access.",
      },
      {
        q: "What is the coaching staff like at the Vikas Puri location?",
        a: "Her Fitness Vikas Puri is an exclusive women-only member sanctuary. Our coaching team includes certified female and male fitness experts specialized in strength, dance, and body transformation.",
      },
    ],
  },
];

export const findLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);

