import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Clock,
  Flame,
  Users,
  CheckCircle2,
  Calendar,
} from "lucide-react";
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
import { ContactForm } from "@/components/site/ContactForm";
import { VideoBlock } from "@/components/site/VideoBlock";
import { SERVICES, findService } from "@/lib/services";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const svc = findService(params.service);
    if (!svc) throw notFound();
    return { svc };
  },
  component: ServicePage,
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Her Fitness" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.svc;
    return {
      meta: [
        { title: `${s.title} for Women in Delhi | Her Fitness` },
        {
          name: "description",
          content: `${s.title} at Her Fitness — ${s.short} Coached by certified female trainers across 8 Delhi studios.`,
        },
        { property: "og:title", content: `${s.title} — Her Fitness` },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${s.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${s.title} — Her Fitness`,
            description: s.intro,
            provider: { "@type": "HealthClub", name: "Her Fitness" },
            areaServed: "Delhi NCR",
          }),
        },
      ],
    };
  },
  staticData: { prerender: SERVICES.map((s) => ({ service: s.slug })) },
});

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const rise = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function ServicePage() {
  const { svc } = Route.useLoaderData() as { svc: (typeof SERVICES)[number] };
  const others = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <motion.img
          src={svc.image}
          alt={svc.title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 2 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.4), oklch(0.20 0.02 20 / 0.55) 55%, oklch(0.20 0.02 20 / 0.92))",
          }}
        />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float [animation-delay:2s]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl text-white">
            <motion.div variants={rise} className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/80">
              <Link to="/" className="hover:text-white">Her Fitness</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span>{svc.title}</span>
            </motion.div>
            <motion.span variants={rise} className="mt-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5" /> {svc.tag}
            </motion.span>
            <motion.h1 variants={rise} className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {svc.title}
            </motion.h1>
            <motion.p variants={rise} className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
              {svc.intro}
            </motion.p>
            <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/" hash="contact">
                <Button size="lg" className="rounded-full px-8 py-6 text-base shadow-[var(--shadow-luxe)]">
                  Book Your Free Trial <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
                All services
              </Link>
            </motion.div>

            {/* stats strip */}
            <motion.div variants={rise} className="mt-14 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Clock, label: "Duration", value: svc.duration },
                { icon: Flame, label: "Intensity", value: svc.intensity },
                { icon: Users, label: "Format", value: svc.format },
              ].map((it) => (
                <div key={it.label} className="glass-dark rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60">
                    <it.icon className="h-3.5 w-3.5 text-accent" /> {it.label}
                  </div>
                  <p className="mt-2 text-sm text-white/90">{it.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS + BENEFITS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Inside the class</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              What makes <em className="text-gradient-rose">{svc.title}</em> different.
            </h2>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 space-y-3"
            >
              {svc.highlights.map((h) => (
                <motion.li key={h} variants={rise} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground/80">{h}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {svc.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                variants={rise}
                whileHover={{ y: -4 }}
                className="glass rounded-3xl p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary font-display text-lg">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-xl">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WEEKLY FLOW */}
      <section className="bg-secondary/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">A typical week</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Your <em className="text-gradient-rose">{svc.title}</em> calendar.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {svc.weeklyFlow.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 flex items-start gap-3"
              >
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-foreground/80">{line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO PLACEHOLDER */}
      <VideoBlock
        src={`/videos/service-${svc.slug}.mp4`}
        eyebrow={`${svc.title} · Preview`}
        title={
          <>
            See <em className="text-gradient-rose">{svc.title}</em> in motion.
          </>
        }
        copy="A short walk-through of the class from a Her Fitness studio floor."
      />

      {/* FAQ */}
      {svc.faqs.length > 0 && (
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">FAQ</span>
              <h2 className="mt-4 text-4xl sm:text-5xl">
                Before you book <em className="text-gradient-rose">{svc.title}</em>
              </h2>
            </div>
            <Accordion type="single" collapsible className="mt-12 space-y-3">
              {svc.faqs.map((f, i) => (
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
      )}

      {/* OTHER SERVICES */}
      <section className="bg-secondary/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">More programs</span>
              <h2 className="mt-4 text-4xl sm:text-5xl">
                Also popular <em className="text-gradient-rose">with her.</em>
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium hover:text-primary flex items-center gap-1"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to="/services/$service"
                  params={{ service: o.slug }}
                  className="group block overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-luxe)]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={o.image}
                      alt={o.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary">{o.tag}</p>
                    <h3 className="mt-1 font-display text-xl">{o.title}</h3>
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
