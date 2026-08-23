import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Sparkles, Clock, Zap } from "lucide-react";
import { SERVICES } from "@/lib/services";

/**
 * Services showcase.
 * Desktop: sticky-pin horizontal parallax rail calibrated so when the last service card
 * appears, the sticky section finishes and smoothly transitions into the next section.
 * Mobile: touch-optimized horizontal snap row with live progress indicators.
 */
export function ServiceScroller() {
  return (
    <>
      <DesktopScroller />
      <MobileScroller />
    </>
  );
}

function SectionHeader({
  activeIndex,
  onDotClick,
}: {
  activeIndex?: number;
  onDotClick?: (idx: number) => void;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Signature Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-display leading-tight sm:text-5xl lg:text-6xl"
          >
            Every workout, <em className="text-gradient-rose">designed for her.</em>
          </motion.h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Coach-led, women-only programs built around female physiology and cycle awareness.
          </p>
        </div>

        {/* Live Card Navigation Dots (Desktop only) */}
        {typeof activeIndex === "number" && onDotClick && (
          <div className="hidden md:flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-primary">
                0{activeIndex + 1}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                / 0{SERVICES.length}
              </span>
            </div>
            <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5 shadow-sm">
              {SERVICES.map((s, i) => (
                <button
                  key={s.slug}
                  onClick={() => onDotClick(i)}
                  title={s.title}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-7 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Jump to ${s.title}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DesktopScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [maxScrollX, setMaxScrollX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Measure exact horizontal overflow distance
  useEffect(() => {
    const calculateOverflow = () => {
      if (cardsRef.current) {
        const totalWidth = cardsRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const overflow = Math.max(0, totalWidth - viewportWidth);
        setMaxScrollX(overflow);
      }
    };

    calculateOverflow();

    const observer = new ResizeObserver(() => calculateOverflow());
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    window.addEventListener("resize", calculateOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateOverflow);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Direct 1:1 scroll translation mapping
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollX]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const progressPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Calculate active index as scroll progresses
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const cardStep = 1 / SERVICES.length;
      const index = Math.min(
        SERVICES.length - 1,
        Math.floor(latest / cardStep)
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  // Jump to specific card position on dot click
  const scrollToCard = (index: number) => {
    if (!containerRef.current || maxScrollX === 0) return;
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetProgress = index / (SERVICES.length - 1);
    const targetY = containerTop + targetProgress * maxScrollX;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section
      id="programs"
      ref={containerRef}
      className="relative hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/40 md:block"
      style={{
        height: maxScrollX ? `${window.innerHeight + maxScrollX}px` : "350vh",
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 lg:py-12">
        {/* Soft background ambient glow */}
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 opacity-60"
        >
          <div className="absolute -top-24 left-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float [animation-delay:2s]" />
        </motion.div>

        {/* Section Header */}
        <div className="relative z-10 pt-4">
          <SectionHeader activeIndex={activeIndex} onDotClick={scrollToCard} />
        </div>

        {/* Horizontal Cards Rail */}
        <div className="relative z-10 my-auto w-full overflow-hidden">
          <motion.div
            ref={cardsRef}
            style={{ x }}
            className="flex items-center gap-6 pl-8 pr-16 lg:pl-24 lg:pr-32"
          >
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.slug}
                service={s}
                index={i}
                isActive={i === activeIndex}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Control & Next Section Indicator */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 border-t border-border/40 pt-4">
            {/* Scroll progress track */}
            <div className="flex items-center gap-4">
              <div className="h-1 w-48 overflow-hidden rounded-full bg-muted">
                <motion.div
                  style={{ width: progressPercent }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                {activeIndex === SERVICES.length - 1
                  ? "Last Service — Scroll for Coaches"
                  : `Service ${activeIndex + 1} of ${SERVICES.length}`}
              </span>
            </div>

            {/* Next section indicator preview */}
            <a
              href="#trainers"
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              Next: Certified Coaches
              <ChevronDown className="h-3.5 w-3.5 animate-bounce text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileScroller() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIndex(Math.min(SERVICES.length - 1, Math.max(0, index)));
  };

  return (
    <section
      id="programs-mobile"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/40 py-12 md:hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float [animation-delay:2s]" />
      </div>

      <div className="relative z-10">
        <SectionHeader />

        {/* Mobile Horizontal Snap Row */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {SERVICES.map((s, i) => (
            <div key={s.slug} className="snap-center shrink-0">
              <ServiceCard service={s} index={i} isActive={i === activeIndex} />
            </div>
          ))}
          <div className="shrink-0 pr-4" aria-hidden />
        </div>

        {/* Mobile Pagination Pills */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {SERVICES.map((s, i) => (
            <div
              key={s.slug}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isActive,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  isActive?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -8 }}
      className={`group relative h-[62vh] min-h-[460px] max-h-[540px] w-[82vw] max-w-[400px] shrink-0 overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)] transition-all duration-500 ${
        isActive ? "ring-2 ring-primary/40 shadow-xl" : "opacity-95"
      }`}
    >
      <Link
        to="/services/$service"
        params={{ service: service.slug }}
        className="block h-full w-full"
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        {/* Shading overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.25) 0%, transparent 40%, oklch(0.18 0.02 20 / 0.85) 75%, oklch(0.15 0.02 20 / 0.98) 100%)",
          }}
        />

        {/* Top Tag Badges */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2">
          <span className="rounded-full glass-dark px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            0{index + 1} · {service.tag}
          </span>
          <span className="rounded-full bg-primary/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
            Coach-led
          </span>
        </div>

        {/* Card Body Content */}
        <div className="absolute inset-x-6 bottom-6 text-white">
          <h3 className="font-display text-2xl leading-tight sm:text-3xl lg:text-4xl group-hover:text-primary-foreground transition-colors">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-white/80 line-clamp-3 leading-relaxed">
            {service.short}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/15 pt-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-accent" />
                {service.duration}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-accent" />
                {service.intensity}
              </span>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
