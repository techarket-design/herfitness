import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCATIONS } from "@/lib/locations";

const links = [
  { to: "/services", hash: undefined, label: "Services" },
  { to: "/trainers", hash: undefined, label: "Trainers" },
  { to: "/blogs", hash: undefined, label: "Blogs" },
  { to: "/about", hash: undefined, label: "About" },
  { to: "/", hash: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setLocOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 ${
          scrolled ? "glass rounded-full py-2.5" : "py-3"
        } transition-all duration-500`}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Her Fitness home">
          <img
            src="/her-fitness-logo.png"
            alt="Her Fitness"
            className="h-10 w-auto sm:h-11 transition-transform hover:scale-105"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={l.hash}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li
            className="relative"
            onMouseEnter={() => setLocOpen(true)}
            onMouseLeave={() => setLocOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Locations <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {locOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="glass rounded-2xl p-3 min-w-[240px] shadow-[var(--shadow-luxe)] animate-fade-in">
                  <Link
                    to="/locations"
                    className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    All Locations →
                  </Link>
                  <div className="my-1 h-px bg-border/60" />
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      to="/locations/$location"
                      params={{ location: loc.slug }}
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/" hash="contact">
            <Button className="rounded-full px-5 shadow-[var(--shadow-luxe)]">
              Free Trial
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mx-4 mt-2 glass rounded-3xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} hash={l.hash} className="block py-1 hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-border/60">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Locations
              </p>
              <div className="grid grid-cols-2 gap-1">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to="/locations/$location"
                    params={{ location: loc.slug }}
                    className="block py-1.5 text-sm hover:text-primary"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link to="/" hash="contact">
                <Button className="w-full rounded-full">Free Trial</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
