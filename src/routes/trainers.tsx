import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Sparkles, ArrowRight, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ChatBot } from "@/components/site/ChatBot";
import { ContactForm } from "@/components/site/ContactForm";
import { VideoBlock } from "@/components/site/VideoBlock";
import { TRAINERS } from "@/lib/trainers";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/trainers")({
  component: TrainersPage,
  head: () => ({
    meta: [
      { title: "Meet Our Female Trainers | Her Fitness Delhi" },
      {
        name: "description",
        content:
          "Every coach at Her Fitness is a certified woman — specialising in strength, yoga, zumba, kickboxing, PCOS-safe training, post-natal recovery and clinical nutrition. Meet the team.",
      },
      { property: "og:title", content: "Her Fitness — Our Trainers" },
      {
        property: "og:description",
        content:
          "Certified female coaches across strength, yoga, dance, combat and nutrition — one team, eight Delhi studios.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/trainers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/trainers" }],
  }),
});

function TrainersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[80vh] w-full overflow-hidden">
        <motion.img
          src={IMAGES.hero}
          alt="Her Fitness female trainers"
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
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5" /> Certified · All-female team
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl leading-[1.05]">
              Coached by women. <em className="text-gradient-rose">For women.</em>
            </h1>
            <p className="mt-5 max-w-xl text-white/85 text-lg">
              Every trainer at Her Fitness is a nationally certified woman who
              specialises in the way female bodies actually train, recover and thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <VideoBlock
        src="/videos/trainers-showcase.mp4"
        eyebrow="Meet the team"
        title={
          <>
            The coaches behind <em className="text-gradient-rose">every rep.</em>
          </>
        }
        copy="A behind-the-scenes look at our head coaches on the studio floor."
        height="md"
      />

      {/* Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TRAINERS.map((t, i) => (
              <motion.article
                key={t.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-luxe)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, oklch(0.20 0.02 20 / 0.9))",
                    }}
                  />
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <span className="rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                      {t.years}+ yrs · Certified
                    </span>
                    <h3 className="mt-3 font-display text-2xl">{t.name}</h3>
                    <p className="text-sm text-white/80">{t.role}</p>
                  </div>
                  {t.instagram && (
                    <a
                      href={t.instagram}
                      aria-label={`${t.name} Instagram`}
                      className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{t.bio}</p>

                  <div className="mt-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary">Specialties</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {t.specialties.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-2 text-xs text-foreground/70">
                    <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{t.certifications.join(" · ")}</span>
                  </div>
                  <div className="mt-2 flex items-start gap-2 text-xs text-foreground/70">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{t.branches.join(" · ")}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/" hash="contact">
              <Button size="lg" className="rounded-full px-8 py-6 shadow-[var(--shadow-luxe)]">
                Book a session with one of our coaches <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
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
