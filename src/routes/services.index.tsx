import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, Flame } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ChatBot } from "@/components/site/ChatBot";
import { ContactForm } from "@/components/site/ContactForm";
import { VideoBlock } from "@/components/site/VideoBlock";
import { SERVICES } from "@/lib/services";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Our Services — Women-Only Gym, Yoga, Zumba & More | Her Fitness" },
      {
        name: "description",
        content:
          "Seven expert-led programs designed for women: strength training, power yoga & pilates, zumba, kickboxing, boot camp, weight training and nutrition. Explore all Her Fitness services.",
      },
      { property: "og:title", content: "Her Fitness — All Services" },
      {
        property: "og:description",
        content:
          "Strength, yoga, dance, combat & nutrition — 7 programs built by women, for women.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <motion.img
          src={IMAGES.hero}
          alt="Her Fitness services"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 2 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.4), oklch(0.20 0.02 20 / 0.9))",
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5" /> 7 signature programs
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl leading-[1.05]">
              Services built <em className="text-gradient-rose">for her.</em>
            </h1>
            <p className="mt-5 max-w-xl text-white/85 text-lg">
              Every program at Her Fitness is coached by certified women and built
              around female physiology — hormones, cycles, PCOS, post-natal, all of it.
            </p>
          </motion.div>
        </div>
      </section>

      <VideoBlock
        youtubeId="a6vPnyQ5kwE"
        eyebrow="Inside the studio"
        title={<>Real classes. <em className="text-gradient-rose">Real women.</em></>}
        copy="A glimpse into a typical week at Her Fitness — no filters, no staged shots."
        height="md"
      />

      {/* Grid of services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to="/services/$service"
                  params={{ service: s.slug }}
                  className="group relative block overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-luxe)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, oklch(0.20 0.02 20 / 0.9))",
                      }}
                    />
                    <span className="absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white">
                      0{i + 1} · {s.tag}
                    </span>
                    <div className="absolute inset-x-5 bottom-5 text-white">
                      <h3 className="font-display text-3xl">{s.title}</h3>
                      <p className="mt-2 text-sm text-white/80 line-clamp-2">
                        {s.short}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-3 text-[11px] uppercase tracking-widest text-white/70">
                          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{s.duration}</span>
                          <span className="inline-flex items-center gap-1"><Flame className="h-3 w-3" />{s.intensity}</span>
                        </div>
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
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
