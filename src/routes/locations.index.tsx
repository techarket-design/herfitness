import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ChatBot } from "@/components/site/ChatBot";
import { ContactForm } from "@/components/site/ContactForm";
import { LOCATIONS } from "@/lib/locations";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/locations/")({
  component: LocationsIndex,
  head: () => ({
    meta: [
      { title: "Our Women-Only Gyms in Delhi | Her Fitness Locations" },
      {
        name: "description",
        content:
          "Her Fitness runs 8 premium women-only gyms across West, North-West & South-West Delhi — Punjabi Bagh, Rajouri Garden, Paschim Vihar, Janakpuri, Vikas Puri, Kirti Nagar, Prashant Vihar & Dwarka. Find your studio.",
      },
      { property: "og:title", content: "Her Fitness — All Delhi Locations" },
      {
        property: "og:description",
        content: "8 women-only fitness studios across Delhi. Find the one closest to you and book your free 3-day trial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/locations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
});

function LocationsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img src={hero} alt="Her Fitness locations across Delhi" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.5), oklch(0.20 0.02 20 / 0.85))" }} />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5" /> 8 studios across Delhi
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl leading-[1.05]">
              Find your <em className="text-gradient-rose">sanctuary.</em>
            </h1>
            <p className="mt-5 max-w-xl text-white/85 text-lg">
              Every Her Fitness studio is women-only, coach-led and community-driven — from
              Punjabi Bagh to Dwarka.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to="/locations/$location"
                  params={{ location: loc.slug }}
                  className="group relative block overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-luxe)] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={hero} alt={`Her Fitness ${loc.name}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">{loc.area}</p>
                    <h3 className="mt-2 font-display text-2xl">{loc.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{loc.intro}</p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1.5 text-foreground/70">
                        <Phone className="h-3.5 w-3.5" /> {loc.phone}
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <MapPin className="absolute top-4 right-4 h-5 w-5 text-white drop-shadow" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
