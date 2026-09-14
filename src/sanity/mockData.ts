import { BlogPost } from "@/lib/types";

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    _id: "post-1",
    title: "Understanding PCOS & Fitness: 5 Workout Strategies for Hormonal Balance",
    slug: { current: "pcos-fitness-workout-strategies-hormonal-balance" },
    publishedAt: "2026-08-15T10:00:00Z",
    excerpt: "Discover how low-impact strength training, HIIT management, and specific nutrition tweaks help reverse insulin resistance and manage PCOS symptoms naturally.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      },
      alt: "Woman practicing yoga flow for PCOS",
    },
    category: {
      title: "Hormonal Health",
      color: "#E91E63",
    },
    author: {
      name: "Dr. Ananya Sharma",
      role: "Lead Clinical Dietitian & Women's Health Specialist",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        },
      },
    },
    readTime: "6 min read",
    body: [
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Why Traditional Cardio Isn't Always the Answer for PCOS" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Polycystic Ovary Syndrome (PCOS) affects 1 in 5 Indian women. Excessive high-intensity cardio without adequate rest can spike cortisol (the stress hormone), which triggers insulin resistance and abdominal fat storage. At Her Fitness, we design progressive resistance training and restorative Pilates flows tailored to regulate blood glucose without overtaxing your adrenals.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "1. Prioritize Progressive Strength Training 3x Weekly" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Lifting moderate weights builds lean muscle mass. Muscle tissue acts as a glucose sponge, absorbing excess blood sugar and lowering circulating insulin levels. Focus on compound movements like goblet squats, glute bridges, and dumbbell rows.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "2. Limit HIIT Sessions to 20 Minutes" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "High-intensity intervals are fantastic for fat loss, but keep them short and structured. Short bursts followed by full recovery prevent chronic cortisol elevation.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-2",
    title: "Why Women-Only Fitness Spaces Boost Confidence & Workout Consistency",
    slug: { current: "women-only-fitness-spaces-boost-confidence-consistency" },
    publishedAt: "2026-08-10T12:30:00Z",
    excerpt: "Research shows women are 3x more consistent with their fitness routine when training in a safe, judgment-free, 100% female environment.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      },
      alt: "Women workout community at Her Fitness",
    },
    category: {
      title: "Mindset & Wellness",
      color: "#8CBF3F",
    },
    author: {
      name: "Pooja Malhotra",
      role: "Head Master Fitness Coach",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        },
      },
    },
    readTime: "4 min read",
    body: [
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Eliminating Gym Intimidation Once and for All" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Many women report feeling self-conscious when attempting heavy weight lifting or intense cardio in co-ed environments. A dedicated women-only sanctuary removes gym anxiety, allowing you to focus entirely on your form, strength, and personal transformation.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-3",
    title: "The Ultimate Guide to Pre & Post Workout Nutrition for Indian Women",
    slug: { current: "ultimate-guide-pre-post-workout-nutrition-indian-women" },
    publishedAt: "2026-08-02T09:15:00Z",
    excerpt: "Fueling your body correctly with home-cooked Indian meals can supercharge your energy levels and accelerate fat burn.",
    mainImage: {
      asset: {
        url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
      },
      alt: "Healthy nutritious food bowl",
    },
    category: {
      title: "Nutrition",
      color: "#E91E63",
    },
    author: {
      name: "Dr. Ananya Sharma",
      role: "Lead Clinical Dietitian & Women's Health Specialist",
      image: {
        asset: {
          url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        },
      },
    },
    readTime: "5 min read",
    body: [
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Pre-Workout: Simple Carbs for Instant Energy" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "30 minutes before your workout session at Her Fitness, fuel up with a banana, a piece of sourdough toast with almond butter, or a handful of soaked almonds & dates. Avoid heavy fats before exercise to prevent digestive discomfort.",
          },
        ],
      },
    ],
  },
];
