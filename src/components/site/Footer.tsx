import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute -top-20 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center rounded-2xl bg-white p-3">
              <img src="/her-fitness-logo.png" alt="Her Fitness" className="h-12 w-auto" />
            </div>
            <p className="mt-6 max-w-md text-background/70">
              Delhi NCR&apos;s premium women-only fitness studio. Strong bodies,
              softer minds, unstoppable sisterhood.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/herfitnessindia", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Youtube, href: "#", label: "Youtube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noreferrer" : undefined}
                  className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:bg-primary hover:border-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {[
                { l: "Services", h: "/services" },
                { l: "About Us", h: "/about" },
                { l: "Trainers", h: "/trainers" },
                { l: "Blogs & Journal", h: "/blogs" },
                { l: "Locations", h: "/locations" },
                { l: "Contact", h: "/#contact" },
              ].map((item) => (
                <li key={item.l}><a href={item.h} className="hover:text-background">{item.l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98100 00000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@herfitness.in</li>
              <li>8 studios · Delhi NCR</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-background/10 pt-8 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Her Fitness Pvt. Ltd. — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
