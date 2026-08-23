import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MapPin, ArrowUpRight } from "lucide-react";
import { LOCATIONS } from "@/lib/locations";

export function Branches() {
  return (
    <section id="branches" className="py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Branch Locator
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Eight studios. <em className="text-gradient-rose">One sisterhood.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Across West, North-West and South-West Delhi — always women-only.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to="/locations/$location"
                params={{ location: b.slug }}
                className="group block rounded-2xl glass p-6 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {b.area}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl">{b.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {b.landmark}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/80">
                    {b.phone}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
