import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Train, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ChatBot } from "@/components/site/ChatBot";
import { Programs } from "@/components/site/Programs";
import { Trainers } from "@/components/site/Trainers";
import { Transformations } from "@/components/site/Transformations";
import { VideoBlock } from "@/components/site/VideoBlock";
import { ContactForm } from "@/components/site/ContactForm";
import { LOCATIONS, type Location } from "@/lib/locations";
import hero from "@/assets/hero.jpg";

type Props = { location: Location };

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function LocationPageView({ location: loc }: Props) {
  const others = LOCATIONS.filter((l) => l.slug !== loc.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <motion.img
          src={loc.heroImage ?? hero}
          alt={`Her Fitness ${loc.name} — women-only gym in ${loc.area}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.4) 0%, oklch(0.20 0.02 20 / 0.55) 55%, oklch(0.20 0.02 20 / 0.9) 100%)",
          }}
        />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl text-white"
          >
            <motion.div variants={rise} className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/80">
              <Link to="/" className="hover:text-white">Her Fitness</Link>
              <span>/</span>
              <Link to="/locations" className="hover:text-white">Locations</Link>
              <span>/</span>
              <span className="text-white">{loc.name}</span>
            </motion.div>
            <motion.span
              variants={rise}
              className="mt-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]"
            >
              <Sparkles className="h-3.5 w-3.5" /> {loc.area} · Women-Only
            </motion.span>
            <motion.h1
              variants={rise}
              className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              Her Fitness
              <br />
              <em className="text-gradient-rose">{loc.name}.</em>
            </motion.h1>
            <motion.p variants={rise} className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
              {loc.intro}
            </motion.p>
            <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/" hash="contact">
                <Button size="lg" className="rounded-full px-8 py-6 text-base shadow-[var(--shadow-luxe)]">
                  Book Your Free Trial <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <a
                href={`tel:${loc.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 rounded-full glass-dark px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" /> {loc.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* Address strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-14 grid gap-3 sm:grid-cols-3"
          >
            {[
              { icon: MapPin, label: "Address", value: loc.address },
              { icon: Clock, label: "Open", value: loc.hours },
              { icon: Train, label: "Nearest Metro", value: loc.metros[0] ?? "—" },
            ].map((it) => (
              <div key={it.label} className="glass-dark rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60">
                  <it.icon className="h-3.5 w-3.5 text-accent" /> {it.label}
                </div>
                <p className="mt-2 text-sm text-white/90 leading-snug">{it.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY THIS BRANCH ================= */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Why {loc.name}
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Built around <em className="text-gradient-rose">{loc.area} women.</em>
            </h2>
            <p className="mt-5 text-muted-foreground">
              {loc.landmark}. Our {loc.name} studio serves women from {loc.serves.join(", ")} — with
              coaching, community and amenities designed exactly for how you live.
            </p>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 space-y-3"
            >
              {loc.usp.map((u) => (
                <motion.li key={u} variants={rise} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground/80">{u}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)]">
              <img
                src={loc.aboutImage ?? hero}
                alt={`Inside Her Fitness ${loc.name}`}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl glass p-5">
                <p className="text-xs uppercase tracking-widest text-primary">Est. 2009</p>
                <p className="mt-2 font-display text-xl">
                  A women-only floor · {loc.name}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= AREAS SERVED ================= */}
      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Serving women across</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {loc.serves.map((s) => (
              <span
                key={s}
                className="rounded-full glass px-5 py-2 text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STUDIO VIDEO ================= */}
      <VideoBlock
        src={`/videos/location-${loc.slug}.mp4`}
        eyebrow={`${loc.name} Studio Tour`}
        title={
          <>
            Step inside <em className="text-gradient-rose">Her Fitness {loc.name}.</em>
          </>
        }
        copy="Sunlit studios, whisper-quiet weight floors and a recovery lounge that feels like a spa — a 60-second walk-through."
        height="md"
      />

      {/* ================= GALLERY STRIP ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(loc.galleryImages && loc.galleryImages.length > 0 ? loc.galleryImages : [hero, hero, hero, hero]).map((imgSrc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img
                  src={imgSrc}
                  alt={`${loc.name} studio ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full glass-dark px-2.5 py-1 text-[10px] uppercase tracking-widest text-white">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Programs />
      <Trainers />
      <Transformations />

      {/* ================= LOCATION FAQ ================= */}
      <section className="py-24 sm:py-32 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              {loc.name} FAQ
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Common questions from <em className="text-gradient-rose">{loc.name}</em>
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {[
              ...loc.faqs,
              {
                q: `What are the timings of your ${loc.name} studio?`,
                a: `${loc.hours}. Personal training slots begin as early as 5:30 am on request.`,
              },
              {
                q: `Is your ${loc.name} gym truly women-only?`,
                a: `Her Fitness ${loc.name} is a 100% private, women-only gym sanctuary for members. Our coaching team includes certified female and male fitness experts specialized in personal training, strength, and women's health.`,
              },
            ].map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl glass px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ================= OTHER LOCATIONS ================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                More Studios
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl">
                Also close to <em className="text-gradient-rose">you</em>
              </h2>
            </div>
            <Link
              to="/locations"
              className="text-sm font-medium hover:text-primary flex items-center gap-1"
            >
              All locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to="/locations/$location"
                  params={{ location: o.slug }}
                  className="group block rounded-2xl glass p-6 hover:-translate-y-1 transition-all"
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-display text-xl">{o.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {o.area}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition">
                    Visit branch <ArrowRight className="h-3.5 w-3.5" />
                  </span>
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
