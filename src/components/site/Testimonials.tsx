import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const rows = [
  { n: "Priya M.", t: "Punjabi Bagh", q: "The only gym where I don't feel watched. The coaches actually listen." },
  { n: "Ritika S.", t: "Rajouri Garden", q: "Lost 9 kilos, but the real gain is the friendships. I look forward to Mondays now." },
  { n: "Meera K.", t: "Janakpuri", q: "Post-baby recovery here was gentle, expert and empowering. Highly recommend." },
  { n: "Anjali D.", t: "Dwarka", q: "The community, the coaching — it's genuinely a wellness sanctuary." },
  { n: "Tanya B.", t: "Prashant Vihar", q: "I was intimidated by gyms my whole life. Not anymore. This place changed everything." },
  { n: "Zoya A.", t: "Paschim Vihar", q: "Their PCOS-informed programming is the real deal. My periods are finally regular." },
  { n: "Sneha R.", t: "Kirti Nagar", q: "Kickboxing here made me fall in love with lifting. My arms have never felt stronger." },
  { n: "Neha G.", t: "Punjabi Bagh", q: "Zumba mornings are the highlight of my week. Instructors are pure sunshine." },
  { n: "Kavya P.", t: "Dwarka", q: "The nutritionist reworked my Indian meal plan without making me give up roti. 6 kg down." },
  { n: "Ishita J.", t: "Rajouri Garden", q: "Power yoga transformed my back pain. I finally sleep through the night." },
  { n: "Divya M.", t: "Janakpuri", q: "Boot camp is addictive. 30 minutes and I'm done — but glowing all day." },
  { n: "Aarohi V.", t: "Kirti Nagar", q: "Lower body training gave me the strength to run my first 10K. Incredible coaching." },
  { n: "Simar K.", t: "Prashant Vihar", q: "As a working mom, the flexibility and childcare-friendly timings are a lifesaver." },
  { n: "Nidhi S.", t: "Paschim Vihar", q: "I've tried five gyms in Delhi. This is the only one that felt safe from day one." },
];

function Card({ n, t, q }: { n: string; t: string; q: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-[320px] shrink-0 rounded-2xl glass p-6 relative"
    >
      <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15" />
      <div className="flex items-center gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/80">&ldquo;{q}&rdquo;</p>
      <div className="mt-5 border-t border-border/60 pt-4">
        <p className="text-sm font-medium">{n}</p>
        <p className="text-xs text-muted-foreground">{t}</p>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const half = Math.ceil(rows.length / 2);
  const rowA = rows.slice(0, half);
  const rowB = rows.slice(half);
  const loopA = [...rowA, ...rowA];
  const loopB = [...rowB, ...rowB];

  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Testimonials</span>
        <h2 className="mt-4 text-4xl sm:text-5xl">
          Loved by <em className="text-gradient-rose">thousands</em>.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Real words from women across Delhi NCR who found their strength with us.
        </p>
      </div>

      <div className="mt-14 relative space-y-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-6 animate-marquee w-max">
          {loopA.map((r, i) => <Card key={`a-${i}`} {...r} />)}
        </div>
        <div className="flex gap-6 animate-marquee w-max [animation-direction:reverse] [animation-duration:35s]">
          {loopB.map((r, i) => <Card key={`b-${i}`} {...r} />)}
        </div>
      </div>
    </section>
  );
}
