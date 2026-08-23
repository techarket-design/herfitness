import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

const trainers = [
  { name: "Simon Arora", role: "Zumba Trainer", cert: "", img: t1 },
  { name: "Basant Thapa", role: "Fitness Trainer", cert: "", img: t3 },
  { name: "Payal Nayal", role: "fitness dance instructor", cert: "Zumba® ZIN", img: t2 },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">The Coaches</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Trained by the best. <em className="text-gradient-rose">For the best.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every coach at Her Fitness is nationally certified and specialised in
            women&apos;s health from pre/post-natal to hormonal fitness.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)]"
            >
              <img
                src={t.img}
                alt={t.name}
                width={900}
                height={1100}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 45%, oklch(0.20 0.02 20 / 0.85) 100%)",
                }}
              />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
                <div>
                  <h3 className="font-display text-2xl">{t.name}</h3>
                  <p className="text-sm text-white/80">{t.role}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-white/60">
                    {t.cert}
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/herfitnessindia"
                  aria-label={`${t.name} Instagram`}
                  className="grid h-10 w-10 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
