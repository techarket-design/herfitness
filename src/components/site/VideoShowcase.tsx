import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import hero from "@/assets/hero.jpg";

// TODO: Drop your studio walkthrough video into `public/videos/gym-showcase.mp4`.
// A free stock fallback plays until you do — replace the URL below when ready.
const VIDEO_SRC = "/videos/gym-showcase.mp4";
const FALLBACK_SRC =
  "https://cdn.coverr.co/videos/coverr-a-woman-doing-yoga-at-the-beach-4029/1080p.mp4";

export function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [errored, setErrored] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }
  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] min-h-[640px] w-full overflow-hidden bg-foreground"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {!errored ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={hero}
            onError={() => setErrored(true)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
            <source src={FALLBACK_SRC} type="video/mp4" />
          </video>
        ) : (
          <img
            src={hero}
            alt="Her Fitness studio"
            className="h-full w-full object-cover"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.55), oklch(0.20 0.02 20 / 0.35) 40%, oklch(0.20 0.02 20 / 0.85))",
          }}
        />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
      <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-accent/25 blur-3xl animate-float [animation-delay:2s]" />

      <div className="sticky top-0 flex h-screen items-center justify-center px-4 sm:px-6">
        <motion.div style={{ y: textY }} className="max-w-3xl text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.3em]"
          >
            Step Inside
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl"
          >
            A sanctuary
            <br />
            <em className="text-gradient-rose">built for her.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl text-base text-white/80 sm:text-lg"
          >
            Sunlit studios. Whisper-quiet weight floors. A recovery lounge that
            feels like a spa. Take the tour.
          </motion.p>
        </motion.div>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-3">
        <button
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="grid h-11 w-11 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="grid h-11 w-11 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </section>
  );
}
