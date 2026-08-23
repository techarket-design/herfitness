import { Instagram } from "lucide-react";
import strength from "@/assets/program-strength.jpg";
import yoga from "@/assets/program-yoga.jpg";
import dance from "@/assets/program-dance.jpg";
import hiit from "@/assets/program-hiit.jpg";
import t1 from "@/assets/trainer-1.jpg";
import t3 from "@/assets/trainer-3.jpg";

const pics = [strength, yoga, dance, hiit, t1, t3];

export function InstagramFeed() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">The Feed</span>
          <h2 className="text-4xl sm:text-5xl">
            @<em className="text-gradient-rose">herfitness.in</em>
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition"
          >
            <Instagram className="h-4 w-4" /> Follow for daily inspiration
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {pics.map((p, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={p}
                alt="Her Fitness Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 grid place-items-center transition-colors">
                <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
