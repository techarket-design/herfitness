import { useEffect } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import strength from "@/assets/program-strength.jpg";
import yoga from "@/assets/program-yoga.jpg";
import dance from "@/assets/program-dance.jpg";
import hiit from "@/assets/program-hiit.jpg";
import t1 from "@/assets/trainer-1.jpg";
import t3 from "@/assets/trainer-3.jpg";

const pics = [
  { img: strength, label: "Strength Training at @herfitnessindia" },
  { img: yoga, label: "Yoga & Mindfulness at @herfitnessindia" },
  { img: dance, label: "Zumba Dance Session at @herfitnessindia" },
  { img: hiit, label: "High Intensity Workout at @herfitnessindia" },
  { img: t1, label: "Personal Training Session at @herfitnessindia" },
  { img: t3, label: "Community & Sisterhood at @herfitnessindia" },
];

const INSTAGRAM_PROFILE = "https://www.instagram.com/herfitnessindia";
const INSTAGRAM_HANDLE = "herfitnessindia";
const DEFAULT_WIDGET_URL = "https://lightwidget.com/widgets/a7a74558b3585938aac8f6e39f68e3d3.html";

interface InstagramFeedProps {
  /** Optional third-party widget URL (defaults to user's LightWidget ID a7a74558b3585938aac8f6e39f68e3d3). */
  widgetUrl?: string;
}

export function InstagramFeed({ widgetUrl }: InstagramFeedProps) {
  const activeWidgetUrl =
    widgetUrl ||
    (import.meta.env.VITE_INSTAGRAM_WIDGET_URL as string | undefined) ||
    DEFAULT_WIDGET_URL;

  useEffect(() => {
    if (!activeWidgetUrl.includes("lightwidget")) return;

    const scriptId = "lightwidget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [activeWidgetUrl]);

  return (
    <section className="py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">The Feed</span>
          <h2 className="text-4xl sm:text-5xl">
            @<em className="text-gradient-rose">{INSTAGRAM_HANDLE}</em>
          </h2>
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition group"
          >
            <Instagram className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
            Follow @{INSTAGRAM_HANDLE} for daily inspiration
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>

        {activeWidgetUrl ? (
          /* Live LightWidget Embed */
          <div className="mt-12 overflow-hidden rounded-3xl shadow-[var(--shadow-luxe)] bg-card border border-border/50 p-2 sm:p-4">
            <iframe
              src={activeWidgetUrl}
              scrolling="no"
              allowTransparency
              className="lightwidget-widget w-full border-0 rounded-2xl min-h-[500px]"
              style={{ width: "100%", border: 0, overflow: "hidden" }}
              title="Her Fitness Instagram Feed"
            />
          </div>
        ) : (
          /* Fallback Grid */
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {pics.map((p, i) => (
              <a
                key={i}
                href={INSTAGRAM_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
                aria-label={p.label}
              >
                <img
                  src={p.img}
                  alt={p.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-3 text-white">
                  <div className="flex justify-end">
                    <span className="rounded-full bg-white/20 p-1.5 backdrop-blur-md">
                      <Instagram className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-[11px] font-medium leading-tight drop-shadow">
                    @{INSTAGRAM_HANDLE}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
