import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image (poster) with subtle Ken Burns */}
      <motion.img
        src={hero}
        alt="Woman practicing yoga at Her Fitness studio in Delhi NCR"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />
      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.35) 0%, oklch(0.20 0.02 20 / 0.55) 60%, oklch(0.20 0.02 20 / 0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Floating glass orbs */}
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float [animation-delay:2s]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90">
            <Sparkles className="h-3.5 w-3.5" />
            Delhi NCR&apos;s Women-Only Fitness Sanctuary
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Strong is the new
            <br />
            <span className="italic text-gradient-rose">beautiful.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            A private space designed exclusively for women — expert coaching,
            luxury amenities, and a sisterhood that celebrates every rep, every
            breath, every transformation.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base shadow-[var(--shadow-luxe)]"
              >
                Book Your Free Trial <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-3 rounded-full glass-dark px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-primary">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Watch Her Story
            </a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6"
        >
          {[
            ["5,000+", "Women transformed"],
            ["12", "Signature programs"],
            ["4.9★", "Google rating"],
            ["8", "Delhi NCR studios"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="glass-dark rounded-2xl px-5 py-4 text-white"
            >
              <div className="font-display text-2xl sm:text-3xl">{n}</div>
              <div className="text-xs uppercase tracking-widest text-white/70 mt-1">
                {l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
