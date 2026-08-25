import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import tr1 from "@/assets/transform-4.jpg";
import tr2 from "@/assets/transform-5.jpg";
import tr3 from "@/assets/transform-6.jpg";

const items = [
  { img: tr1, name: "Neha, 34", stat: "−14 kg in 6 months", quote: "I finally love the mirror. And the sisterhood here is everything." },
  { img: tr2, name: "Aisha, 28", stat: "PCOS symptoms reversed", quote: "My cycle normalised in 4 months. Their coaches actually understand hormones." },
  { img: tr3, name: "Kavya, 41", stat: "Off blood-pressure meds", quote: "Post-partum, I felt invisible. Her Fitness gave me back my body — and my confidence." },
];

export function Transformations() {
  return (
    <section id="transformations" className="relative py-24 sm:py-32 bg-secondary/40 overflow-hidden">
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Transformations</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Real women. <em className="text-gradient-rose">Real results.</em>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            No filters. No airbrushing. Just the honest, joyful outcomes of showing
            up for yourself.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.figure
              key={it.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[2rem] bg-card p-4 shadow-[var(--shadow-luxe)]"
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={it.img}
                  alt={`${it.name} transformation`}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <figcaption className="p-4">
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl">{it.name}</p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {it.stat}
                  </span>
                </div>
                <div className="mt-4 flex gap-3 text-sm text-foreground/70">
                  <Quote className="h-4 w-4 shrink-0 text-primary" />
                  <p>{it.quote}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
