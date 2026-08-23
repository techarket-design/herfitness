import { IMAGES } from "./images";

export type Trainer = {
  slug: string;
  name: string;
  role: string;
  specialties: string[];
  certifications: string[];
  years: number;
  bio: string;
  image: string;
  instagram?: string;
  branches: string[];
};

export const TRAINERS: Trainer[] = [
  {
    slug: "Simon-Arora",
    name: "Simon Arora",
    role: "Zumba Trainer",
    specialties: ["Zumbda Dance"],
    certifications: ["Zumba", "Nutritionist"],
    years: 11,
    bio: "Simon leads our Dance Floor with her Zumba Training Sessions.",
    image: IMAGES.trainers.trainer1,
    instagram: "https://www.instagram.com/herfitnessindia",
    branches: ["Punjabi Bagh", "Rajouri Garden", "Kirti Nagar"],
  },
  {
    slug: "basant-thapa",
    name: "Basant Thapa",
    role: "Fitness Trainer",
    specialties: ["Weight Training"],
    certifications: ["Fitness Expert"],
    years: 9,
    bio: "Basant dedicatedly guides and alligns all our clients with their fitness goals",
    image: IMAGES.trainers.trainer3,
    instagram: "https://www.instagram.com/herfitnessindia",
    branches: ["Paschim Vihar", "Janakpuri", "Dwarka"],
  },
  {
    slug: "payal-nayal",
    name: "Payal Nayal",
    role: "Dance & Zumba Specialist",
    specialties: ["Zumba", "Bollywood cardio", "Afro-fit"],
    certifications: ["Zumba® ZIN", "ACE Group Fitness"],
    years: 7,
    bio: "Payal turned our Zumba floor into the most-booked class in Delhi. Her Bollywood mash-ups have a waitlist.",
    image: IMAGES.trainers.trainer2,
    instagram: "https://www.instagram.com/herfitnessindia",
    branches: ["Prashant Vihar", "Rajouri Garden", "Punjabi Bagh"],
  },
  {
    slug: "ripu-daman-kaur",
    name: "Ripu Daman kaur",
    role: "Zumba Trainer",
    specialties: ["Zumba Trainer", "Yoga-Coach", "Pilates Trainer"],
    certifications: ["ISKA Coach L2", "Women's Self-Defense Instructor"],
    years: 8,
    bio: "A national-level kickboxer, Meher now trains the next generation of women fighters from first jab to full combos.",
    image: IMAGES.trainers.trainer4,
    instagram: "https://www.instagram.com/herfitnessindia",
    branches: ["Kirti Nagar", "Dwarka"],
  },
  {
    slug: "Balli-bhamrah",
    name: "Balli bhamrah",
    role: "Fitness Trainer",
    specialties: ["Fitness Trainer"],
    certifications: [""],
    years: 13,
    bio: "Balli has built personalised nutrition plans for 2,000+ Indian women. He'll never take your dal-chawal away.",
    image: IMAGES.trainers.trainer5,
    branches: ["All studios (virtual + in-person)"],
  },
  {
    slug: "Sangi-dhir",
    name: "Sangi Dhir",
    role: "Bollywood Instructor",
    specialties: ["HIIT", "Kettlebell", "Bollywood Training"],
    certifications: [""],
    years: 6,
    bio: "Sangi's 30-minute boot camps have the highest retention rate in the studio. Small group, huge output.",
    image: IMAGES.trainers.trainer6,
    instagram: "https://www.instagram.com/herfitnessindia",
    branches: ["Paschim Vihar", "Prashant Vihar"],
  },
  {
    slug: "monti-bassi",
    name: "Monti Bassi",
    role: "Fitness Trainer",
    specialties: ["Fitness Trainer"],
    certifications: ["BASI Comprehensive", "Polestar Pilates"],
    years: 10,
    bio: "",
    image: IMAGES.trainers.trainer7,
    branches: ["Prashant Vihar", "Dwarka"],
  },
  {
    slug: "deepak-deshwal",
    name: "Deepak Deshwal",
    role: "Fitness Trainer",
    specialties: ["1:1 coaching", "Weight loss", "Beginner onboarding"],
    certifications: ["ACSM-CPT", "PN L1"],
    years: 8,
    bio: "",
    image: IMAGES.trainers.trainer8,
    instagram: "https://www.instagram.com/herfitnessindia",
    branches: ["Janakpuri", "Rajouri Garden"],
  },
  {
    slug: "tarun-nath-yogi",
    name: "Tarun Nath Yogi",
    role: "Fitness Trainer",
    specialties: ["1:1 coaching", "Weight loss", "Beginner onboarding"],
    certifications: ["ACSM-CPT", "PN L1"],
    years: 8,
    bio: "",
    image: IMAGES.trainers.trainer9,
    instagram: "https://www.instagram.com/herfitnessindia",
    branches: ["Janakpuri", "Rajouri Garden"],
  },
];

export const findTrainer = (slug: string) => TRAINERS.find((t) => t.slug === slug);
