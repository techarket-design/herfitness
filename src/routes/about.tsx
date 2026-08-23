import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Sparkles, ShieldCheck, Award, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ChatBot } from "@/components/site/ChatBot";
import { AnimatedStats } from "@/components/site/AnimatedStats";
import { Trainers } from "@/components/site/Trainers";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactForm } from "@/components/site/ContactForm";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Her Fitness — Delhi NCR's Women-Only Fitness Sanctuary" },
      {
        name: "description",
        content:
          "Meet Her Fitness — a women-only fitness studio in Delhi NCR built on empathy, expertise and community. Discover our story, mission and values.",
      },
      { property: "og:title", content: "About Her Fitness — Our Story" },
      {
        property: "og:description",
        content:
          "Founded by women, for women. Learn how Her Fitness is redefining strength, sisterhood and wellness across Delhi NCR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Her Fitness" },
      { name: "twitter:description", content: "Our story, mission & values." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const rise = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const values = [
  { icon: Heart, title: "Empathy First", desc: "Every coach is trained to listen — because motivation begins with being understood." },
  { icon: ShieldCheck, title: "Safe Space", desc: "Women-only floors, women-only staff. From the reception to the sauna." },
  { icon: Award, title: "Certified Expertise", desc: "NASM, ACE, RYT-500 and PCOS-certified coaches. Nothing less." },
  { icon: Leaf, title: "Holistic Wellness", desc: "Strength, breath, nutrition and rest — we treat fitness as a whole ecosystem." },
  { icon: Users, title: "Sisterhood", desc: "We build friendships as much as we build bodies. You'll never train alone." },
  { icon: Sparkles, title: "Progress, Not Perfection", desc: "Small wins, honoured. Big goals, celebrated. Zero judgement in between." },
];

const timeline = [
  { y: "2009", t: "The Founding Vision", d: "Two friends walked out of a mixed gym feeling unseen — and opened Her Fitness in Punjabi Bagh: a space designed around how women actually live and train." },
  { y: "2013", t: "West Delhi Expansion", d: "Rajouri Garden and Paschim Vihar join. We become the first women-only chain to serve West Delhi at scale." },
  { y: "2017", t: "The Wellness Pivot", d: "We add power yoga, pilates and PCOS-informed nutrition — treating fitness as an ecosystem, not just a workout." },
  { y: "2021", t: "Eight Studios Strong", d: "Janakpuri, Vikas Puri, Kirti Nagar, Prashant Vihar and Dwarka open. Over 10,000 women call Her Fitness home." },
  { y: "Today", t: "17 Years of Sisterhood", d: "Every day, women walk in unsure — and walk out unstoppable. That's the whole point, and it always has been." },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <motion.img
          src={IMAGES.aboutHero}
          alt="Her Fitness — women training together"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.45) 0%, oklch(0.20 0.02 20 / 0.6) 55%, oklch(0.20 0.02 20 / 0.92) 100%)",
          }}
        />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl text-white">
            <motion.div variants={rise} className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/80">
              <Link to="/" className="hover:text-white">Her Fitness</Link>
              <span>/</span>
              <span>About Us</span>
            </motion.div>
            <motion.span variants={rise} className="mt-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5" /> Our Story
            </motion.span>
            <motion.h1 variants={rise} className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Built by women.
              <br />
              <em className="text-gradient-rose">Trusted by thousands.</em>
            </motion.h1>
            <motion.p variants={rise} className="mt-6 max-w-xl text-lg text-white/85">
              Her Fitness began with one belief: fitness spaces should feel like home, not a stage. Today, eight studios later, that promise still guides everything we do.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Mission</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              To make every woman feel <em className="text-gradient-rose">strong, seen and safe.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We're not building gyms. We're building sanctuaries — places where a first-time lifter and a marathon runner can share a mat, a laugh and a protein shake. Where hormones, cycles and life stages are understood, not ignored. Where progress is measured in confidence, not calories.
            </p>
            <div className="mt-8">
              <Link to="/" hash="contact">
                <Button size="lg" className="rounded-full px-8 py-6 text-base shadow-[var(--shadow-luxe)]">
                  Join our sisterhood <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)]">
              <img src={IMAGES.aboutHero} alt="Inside Her Fitness" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl glass p-5">
                <p className="text-xs uppercase tracking-widest text-primary">Since 2009 · 17 Years</p>
                <p className="mt-2 font-display text-xl">8,000+ women, one community.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedStats />

      {/* VALUES */}
      <section className="py-24 sm:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">What we stand for</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Six values, <em className="text-gradient-rose">zero compromises.</em>
            </h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={rise}
                whileHover={{ y: -6 }}
                className="rounded-3xl glass p-8 group"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Journey</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Five years, <em className="text-gradient-rose">countless comebacks.</em>
            </h2>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-transparent md:-translate-x-1/2" />
            {timeline.map((step, i) => (
              <motion.div
                key={step.y}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div className={`pl-12 md:pl-0 md:pr-8 ${i % 2 === 0 ? "md:text-right" : "md:text-left md:[direction:ltr]"}`}>
                  <div className="rounded-3xl glass p-6 inline-block md:max-w-md">
                    <span className="text-xs uppercase tracking-[0.3em] text-primary">{step.y}</span>
                    <h3 className="mt-2 font-display text-2xl">{step.t}</h3>
                    <p className="mt-2 text-muted-foreground">{step.d}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 top-6 md:left-1/2 md:-translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Trainers />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
