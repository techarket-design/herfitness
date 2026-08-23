import { ShieldCheck, Award, Leaf, HeartPulse, Sparkles, Users } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Women-Only Sanctuary" },

  { icon: Award, label: "Certified Coaches" },
  { icon: HeartPulse, label: "Medically Screened" },
  { icon: Leaf, label: "Wellness-First" },
  { icon: Sparkles, label: "Luxury Amenities" },
  { icon: Users, label: "5,000+ Members" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-6 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-foreground/70">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm font-medium">
              <b.icon className="h-4 w-4 text-primary" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
