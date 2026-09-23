import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, VolumeX, Volume2 } from "lucide-react";
import { IMAGES } from "@/lib/images";

type Props = {
  /** Path under /public — drop your MP4 there. Falls back to poster on error. */
  src?: string;
  /** YouTube video ID for embedded video */
  youtubeId?: string;
  /** Poster/fallback image. Defaults to hero. */
  poster?: string;
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
  height?: "sm" | "md" | "lg";
  align?: "center" | "left";
};

const heights = {
  sm: "min-h-[60vh]",
  md: "min-h-[75vh]",
  lg: "min-h-[92vh]",
};

/**
 * Reusable cinematic video placeholder.
 * Drop an MP4 at `public/videos/<name>.mp4` and pass `src="/videos/<name>.mp4"`.
 * Until then, the poster (defaults to hero) plays with parallax.
 */
export function VideoBlock({
  src,
  youtubeId,
  poster = IMAGES.hero,
  eyebrow,
  title,
  copy,
  height = "md",
  align = "center",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [errored, setErrored] = useState(!src && !youtubeId);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-foreground ${heights[height]}`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {!errored && youtubeId ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <iframe
              className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] min-w-[177.77vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 object-cover"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&playlist=${youtubeId}&modestbranding=1`}
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          </div>
        ) : !errored && src ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            onError={() => setErrored(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img src={poster} alt="" className="h-full w-full object-cover" />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.02 20 / 0.55), oklch(0.20 0.02 20 / 0.3) 45%, oklch(0.20 0.02 20 / 0.85))",
          }}
        />
      </motion.div>

      <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-float" />
      <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-accent/25 blur-3xl animate-float [animation-delay:2s]" />

      <div
        className={`relative z-10 flex ${heights[height]} items-center px-4 sm:px-6 ${
          align === "left" ? "justify-start" : "justify-center"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className={`max-w-3xl text-white ${align === "center" ? "text-center mx-auto" : "text-left"}`}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.3em]">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          {copy && (
            <p className="mt-6 text-base text-white/85 sm:text-lg max-w-xl mx-auto">{copy}</p>
          )}
          {!src && (
            <p className="mt-4 inline-block rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">
              Video placeholder · drop MP4 into /public/videos
            </p>
          )}
        </motion.div>
      </div>

      {src && !errored && (
        <div className="absolute bottom-6 right-6 z-10 flex gap-3">
          <button
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            className="grid h-11 w-11 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="grid h-11 w-11 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      )}
    </section>
  );
}
