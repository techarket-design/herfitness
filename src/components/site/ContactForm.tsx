import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCATIONS } from "@/lib/locations";

// TODO: Replace with your real Formspree form ID (https://formspree.io/)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-blush)" }} />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Book Your Free Trial
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">
              Your first <em className="text-gradient-rose">3 days</em>
              <br /> are on us.
            </h2>
            <p className="mt-5 max-w-md text-foreground/70">
              Tell us a little about you and a member of our team will WhatsApp
              you within 2 hours to schedule your visit.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["1 group class of your choice", "1 personal consult with a coach", "Full facility & spa access"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] glass p-6 sm:p-8 space-y-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Aditi Verma" className="mt-2 rounded-xl bg-white/70" />
              </div>
              <div>
                <Label htmlFor="phone">Phone (WhatsApp)</Label>
                <Input id="phone" name="phone" required type="tel" placeholder="+91 …" className="mt-2 rounded-xl bg-white/70" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" required type="email" placeholder="you@example.com" className="mt-2 rounded-xl bg-white/70" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="branch">Preferred branch</Label>
                <Select name="branch">
                  <SelectTrigger className="mt-2 rounded-xl bg-white/70">
                    <SelectValue placeholder="Choose a studio" />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCATIONS.map((loc) => (
                      <SelectItem key={loc.slug} value={loc.name}>{loc.name} ({loc.area})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="goal">Primary goal</Label>
                <Select name="goal">
                  <SelectTrigger className="mt-2 rounded-xl bg-white/70">
                    <SelectValue placeholder="What matters most?" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Fat loss", "Strength & tone", "Hormonal / PCOS", "Post-natal recovery", "Mind & body", "Just try it out"].map((b) => (
                      <SelectItem key={b} value={b}>{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="message">Anything we should know? (optional)</Label>
              <Textarea id="message" name="message" rows={3} className="mt-2 rounded-xl bg-white/70" />
            </div>
            <input type="hidden" name="_subject" value="New Free Trial Lead — Her Fitness" />

            <Button
              type="submit"
              disabled={status === "loading"}
              size="lg"
              className="w-full rounded-full text-base shadow-[var(--shadow-luxe)]"
            >
              {status === "loading" ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
              ) : status === "success" ? (
                <><CheckCircle2 className="mr-2 h-4 w-4" /> We&apos;ll be in touch!</>
              ) : (
                "Claim My Free Trial"
              )}
            </Button>
            {status === "error" && (
              <p className="text-sm text-destructive text-center">
                Something went wrong. Please WhatsApp us directly.
              </p>
            )}
            <p className="text-[11px] text-muted-foreground text-center">
              By submitting, you agree to be contacted about your trial. We never spam.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
