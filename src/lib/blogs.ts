import yoga from "@/assets/program-yoga.jpg";
import strength from "@/assets/program-strength.jpg";
import hiit from "@/assets/program-hiit.jpg";
import dance from "@/assets/program-dance.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Nutrition" | "Hormones" | "Mindset" | "Strength" | "Recovery";
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  img: string;
  featured?: boolean;
  keyTakeaways: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    conclusion: string;
  };
};

export const BLOG_CATEGORIES = [
  "All",
  "Nutrition",
  "Hormones",
  "Mindset",
  "Strength",
  "Recovery",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "indian-women-protein-guide",
    slug: "indian-women-protein-guide",
    title: "The Indian Woman's Guide to Protein — Without the Powder",
    excerpt:
      "Struggling to hit your daily protein requirements on a traditional Indian diet? Here is how to fuel muscle recovery and hormonal balance naturally using real kitchen staples.",
    category: "Nutrition",
    readTime: "6 min read",
    date: "Aug 15, 2026",
    featured: true,
    author: {
      name: "Dr. Priya Sharma",
      role: "Lead Clinical Nutritionist & Women's Health Specialist",
      avatar: trainer1,
    },
    img: strength,
    keyTakeaways: [
      "Combine lentils and whole grains to build complete protein profiles.",
      "Incorporate paneer, sattu, chana, and Greek yogurt daily into traditional recipes.",
      "Distribute protein intake evenly across all 3 main meals for optimal muscle synthesis.",
      "Focus on bioavailable protein sources to aid energy levels and hormone synthesis.",
    ],
    content: {
      intro:
        "For generations, Indian diets have been rich in flavor, herbs, and nourishing carbohydrates. However, modern nutritional research consistently shows that urban Indian women consume significantly less protein than required for optimal muscle density, metabolic health, and hormonal balance. The good news? You do not need artificial supplements or expensive imported foods to meet your targets.",
      sections: [
        {
          heading: "Why Protein Matters Specifically for Women",
          body: [
            "Protein is not just for bodybuilders. For women, amino acids are the fundamental building blocks of enzymes, thyroid hormones, collagen, and neurotransmitters like serotonin.",
            "As we age—starting as early as our late 20s—women experience progressive sarcopenia (gradual muscle mass loss). Consuming adequate protein alongside resistance training prevents metabolic slowdown and keeps your bones strong.",
          ],
        },
        {
          heading: "Power Staples in the Traditional Indian Kitchen",
          body: [
            "Paneer & Tofu: 100g of fresh cottage cheese provides around 18g of high-quality protein. Opt for homemade or low-fat paneer for daily meals.",
            "Roasted Sattu & Chana: Sattu (roasted gram flour) is an underrated Indian superfood. Two tablespoons mixed with buttermilk or cold water gives an instant 8-10g protein boost.",
            "Sprouted Moong & Black Chana: Sprouting leguminous seeds doubles their protein digestibility while neutralizing anti-nutrients like phytic acid.",
            "Greek Yogurt & Hung Curd: Straining regular dahi concentrated protein per bowl up to 12-15g while providing natural probiotics for gut health.",
          ],
        },
        {
          heading: "Building Complete Amino Acid Profiles",
          body: [
            "Plant-based protein sources like dal, rajma, and chole often lack certain essential amino acids like methionine or lysine. Pairing them with grains—such as Rajma Chawal or Khichdi—creates a complete protein profile.",
            "Add seeds (pumpkin, flax, sesame) as tadka garnishes to elevate both healthy fat and micronutrient content.",
          ],
        },
      ],
      conclusion:
        "Eating for strength doesn't require abandoning the food you love. By making conscious, small adjustments to meal proportions and keeping high-protein Indian staples handy, you fuel a resilient body and lasting energy.",
    },
  },
  {
    id: "training-with-your-cycle",
    slug: "training-with-your-cycle",
    title: "Training With Your Cycle: A 28-Day Blueprint for Energy & Strength",
    excerpt:
      "Stop pushing through monthly fatigue. Learn how syncing your workouts with the four menstrual phases maximizes strength, balances estrogen & progesterone, and prevents burnout.",
    category: "Hormones",
    readTime: "8 min read",
    date: "Aug 10, 2026",
    featured: false,
    author: {
      name: "Ananya Kapoor",
      role: "Senior Master Trainer & Functional Movement Coach",
      avatar: trainer2,
    },
    img: yoga,
    keyTakeaways: [
      "Follicular & Ovulatory phases are ideal for progressive heavy lifting and high-intensity HIIT.",
      "Luteal phase requires steady endurance, active recovery, and moderate weights as progesterone rises.",
      "Menstrual phase benefits from restorative yoga, light mobility work, and rest.",
      "Cycle syncing reduces cortisol spikes and prevents menstrual cramps and fatigue.",
    ],
    content: {
      intro:
        "For decades, fitness programs were designed around male hormonal cycles—which reset every 24 hours. Women, however, operate on an infradian rhythm spanning roughly 28 days. By understanding how estrogen and progesterone fluctuate, you can tailor your workout intensity to ride the wave of your natural strength.",
      sections: [
        {
          heading: "Phase 1: Menstrual Phase (Days 1–5)",
          body: [
            "Progesterone and estrogen levels drop to their lowest point. Energy levels naturally dip.",
            "Best Activities: Gentle restorative yoga, walking, light spinal mobility, and deep abdominal breathing. Prioritize magnesium-rich foods and restful sleep.",
          ],
        },
        {
          heading: "Phase 2: Follicular & Ovulatory Phase (Days 6–14)",
          body: [
            "Estrogen rises rapidly, delivering heightened motivation, mental clarity, and muscle recovery speed.",
            "Best Activities: This is your prime window to test personal records (PRs) in heavy strength training, power lifting, sprints, and dynamic cardio like dance HIIT.",
          ],
        },
        {
          heading: "Phase 3: Luteal Phase (Days 15–28)",
          body: [
            "Progesterone takes over, slightly elevating core body temperature and metabolic rate while increasing fatigue vulnerability.",
            "Best Activities: Moderate-weight strength circuits, steady-state cardio, Reformer Pilates, and lower-impact functional conditioning.",
          ],
        },
      ],
      conclusion:
        "Working with your body instead of fighting against it yields long-term results without burnout. Honor your cycle as a built-in training compass.",
    },
  },
  {
    id: "strong-women-strong-communities",
    slug: "strong-women-strong-communities",
    title: "Why Strong Women Build Stronger Communities",
    excerpt:
      "Fitness is more than physical aesthetic. Discover how dedicated women-only spaces foster psychological safety, peer motivation, and lifelong sisterhood across generations.",
    category: "Mindset",
    readTime: "4 min read",
    date: "Aug 02, 2026",
    featured: false,
    author: {
      name: "Meera Oberoi",
      role: "Community Director & Mindset Coach",
      avatar: trainer3,
    },
    img: hiit,
    keyTakeaways: [
      "Safe physical environments encourage women to step out of comfort zones and lift heavier.",
      "Multi-generational fitness spaces build confidence in young girls and older women alike.",
      "Social accountability in group fitness boosts consistency by over 70%.",
    ],
    content: {
      intro:
        "When a woman picks up a barbell or masters a challenging yoga balance, something fundamental shifts—not just in her physique, but in how she navigates her world. When women train together in an supportive space free of male gaze or performance anxiety, the collective energy becomes electric.",
      sections: [
        {
          heading: "The Power of Psychological Safety in Fitness",
          body: [
            "Many women report feeling intimidated in traditional commercial gyms. Having an environment designed exclusively for women eliminates self-consciousness, letting members focus purely on form, breath, and power.",
            "In our studios, mothers train alongside college students and grandmothers. This intergenerational encouragement breaks down barriers and celebrates female strength at every decade of life.",
          ],
        },
        {
          heading: "Accountability Beyond the Gym Floor",
          body: [
            "Research shows that women who exercise in supportive female groups stick to their fitness routines significantly longer than those who train alone.",
            "The connections built in class extend into coffee catchups, professional networking, emotional support, and lifelong friendships.",
          ],
        },
      ],
      conclusion:
        "When one woman transforms her strength, she inspires her family and community. That sisterhood is the heartbeat of Her Fitness.",
    },
  },
  {
    id: "pcos-strength-training-guide",
    slug: "pcos-strength-training-guide",
    title: "Managing PCOS Through Strength Training & Mindful Movement",
    excerpt:
      "Polycystic Ovary Syndrome affects 1 in 5 Indian women. Learn how compound resistance workouts and stress reduction improve insulin sensitivity naturally.",
    category: "Hormones",
    readTime: "7 min read",
    date: "Jul 28, 2026",
    featured: false,
    author: {
      name: "Dr. Priya Sharma",
      role: "Lead Clinical Nutritionist & Women's Health Specialist",
      avatar: trainer1,
    },
    img: dance,
    keyTakeaways: [
      "Resistance training increases GLUT4 glucose transporters in muscle cells without spiking cortisol.",
      "Excessive high-intensity cardio without recovery can worsen PCOS hormonal imbalances.",
      "Prioritizing slow-tempo compound lifts improves androgen regulation and insulin sensitivity.",
    ],
    content: {
      intro:
        "PCOS is a complex metabolic and hormonal condition, often accompanied by insulin resistance, weight stubbornness, and elevated cortisol. Traditional advice often pushes women towards endless intense cardio, which can actually elevate stress hormones. Resistance training offers a far superior medical mechanism.",
      sections: [
        {
          heading: "Insulin Sensitivity: The Muscle Connection",
          body: [
            "Skeletal muscle is the largest consumer of glucose in the human body. When you lift weights, your muscles absorb blood sugar independently of insulin action.",
            "By building lean muscle mass, you create a natural sink for excess blood glucose, helping lower circulating insulin levels.",
          ],
        },
        {
          heading: "The Cortisol Connection: Why Less Can Be More",
          body: [
            "Chronic intense HIIT without proper recovery elevates cortisol, which signals the liver to release more glucose and stores stubborn belly fat.",
            "Structuring workouts with 3-4 days of heavy-to-moderate lifting and low-stress walks or yoga yields far superior endocrine results.",
          ],
        },
      ],
      conclusion:
        "PCOS management isn't about extreme restriction or exhausting cardio. Smart, structured resistance training empowers your body to heal from within.",
    },
  },
  {
    id: "post-natal-recovery-blueprint",
    slug: "post-natal-recovery-blueprint",
    title: "Post-Natal Recovery: Safe Exercises for Rebuilding Core & Pelvic Floor",
    excerpt:
      "Returning to exercise after childbirth requires patience and specialized guidance. Here is your step-by-step roadmap to healing diastasis recti and restoring core stability.",
    category: "Recovery",
    readTime: "6 min read",
    date: "Jul 20, 2026",
    featured: false,
    author: {
      name: "Ananya Kapoor",
      role: "Senior Master Trainer & Functional Movement Coach",
      avatar: trainer2,
    },
    img: yoga,
    keyTakeaways: [
      "Always seek medical clearance and assessment for diastasis recti before jumping into crunches or planks.",
      "Transverse abdominis (TVA) breathing and pelvic floor re-education are foundational first steps.",
      "Gradually progress from isometric core stabilization to functional compound movements like glute bridges and modified squats.",
    ],
    content: {
      intro:
        "Childbirth is an extraordinary physical marathon. Whether you had a vaginal delivery or a C-section, your core musculature and pelvic floor underwent significant stretching and shift. Rebuilding strength requires a rehabilitative mindset before returning to heavy weights.",
      sections: [
        {
          heading: "Step 1: Deep Core Re-connection",
          body: [
            "Avoid traditional crunches or leg lifts early on, as they exert outward intra-abdominal pressure that can worsen abdominal separation.",
            "Focus on diaphragmatic 360-degree breathing: inhale into the ribs, exhale gently drawing the belly button inward while elevating the pelvic floor.",
          ],
        },
        {
          heading: "Step 2: Functional Daily Movement",
          body: [
            "Incorporate pelvic tilts, bird-dogs, glute bridges, and supported wall squats to rebuild hip stability and lower back support.",
            "Work with certified post-natal coaches who monitor your form and prevent compensatory strain.",
          ],
        },
      ],
      conclusion:
        "Post-natal strength is not about 'snapping back'—it is about honoring your journey and laying a resilient foundation for life.",
    },
  },
];

export const getBlogBySlug = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);

export const getBlogsByCategory = (category: string) => {
  if (category === "All") return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === category);
};
