import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export function Programs() {
  return (
    <section id="programs-grid" className="relative py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">All Services</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Explore every <em className="text-gradient-rose">program.</em>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Seven signature programs — from heavy lifts to healing flows — every one
            built by female coaches who understand hormones, cycles and real life.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/services/$service"
                params={{ service: p.slug }}
                className="group relative block overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-luxe)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-2xl glass p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
                        {p.tag}
                      </span>
                      <h3 className="mt-1 font-display text-2xl">{p.title}</h3>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/70">{p.short}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
