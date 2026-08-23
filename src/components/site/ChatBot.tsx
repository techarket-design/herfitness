import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnpargop";

const GOALS = [
  "Fat loss",
  "Strength & tone",
  "Hormonal / PCOS",
  "Post-natal recovery",
  "Just try it out",
];

const BRANCHES = [
  "Punjabi Bagh",
  "Rajouri Garden",
  "Paschim Vihar",
  "Janakpuri",
  "Kirti Nagar",
  "Prashant Vihar",
  "Dwarka",
];

type Step = 0 | 1 | 2 | 3 | 4;

interface Lead {
  name: string;
  phone: string;
  goal: string;
  branch: string;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [lead, setLead] = useState<Lead>({ name: "", phone: "", goal: "", branch: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [step, status, open]);

  function reset() {
    setStep(0);
    setStatus("idle");
    setLead({ name: "", phone: "", goal: "", branch: "" });
  }

  async function submit(final: Lead) {
    setStatus("sending");
    try {
      const fd = new FormData();
      fd.append("name", final.name);
      fd.append("phone", final.phone);
      fd.append("goal", final.goal);
      fd.append("branch", final.branch);
      fd.append("source", "Website chatbot");
      fd.append("_subject", "New Chatbot Lead — Her Fitness");
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Floating Trigger Button — offset from WhatsApp button on mobile */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="fixed bottom-4 right-20 z-50 group sm:bottom-6 sm:right-24"
      >
        <span
          className={`absolute inset-0 -z-10 rounded-full bg-primary opacity-60 ${
            open ? "" : "animate-ping"
          }`}
        />
        <span className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-luxe)] transition-transform group-hover:scale-110">
          {open ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
        </span>
      </button>

      {/* Mobile-Responsive Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed inset-x-3 bottom-20 z-50 max-h-[82vh] sm:bottom-24 sm:left-auto sm:right-6 sm:w-96 rounded-3xl bg-card border border-border shadow-[var(--shadow-luxe)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary/80 px-4 py-3.5 text-primary-foreground flex items-center justify-between shrink-0">
              <div className="absolute -top-10 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl pointer-events-none" />
              <div className="relative flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-white/90 p-1 shadow-sm">
                  <img src="/her-fitness-logo.png" alt="Her Fitness" className="h-5 w-auto object-contain" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold leading-tight">Her Fitness Concierge</p>
                  <p className="text-[11px] opacity-90 flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" /> Online · Replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="relative grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Conversation Body */}
            <div
              ref={scrollRef}
              className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3 bg-secondary/20 max-h-[52vh] sm:max-h-[380px]"
            >
              {/* Bot Greeting */}
              <Bubble from="bot" delay={0}>
                Hi love! 🌸 I&apos;m your Her Fitness concierge. Book a free 3-day trial in 3 quick steps?
              </Bubble>

              {step >= 0 && (
                <>
                  <Bubble from="bot" delay={0.2}>
                    <b>Step 1 of 3</b> — what should we call you?
                  </Bubble>
                  {lead.name && <Bubble from="user">{lead.name}</Bubble>}
                </>
              )}

              {step >= 1 && (
                <>
                  <Bubble from="bot" delay={0.15}>
                    Lovely to meet you, {lead.name.split(" ")[0]}! ✨ <br />
                    <b>Step 2 of 3</b> — your WhatsApp number, so we can confirm your slot?
                  </Bubble>
                  {lead.phone && <Bubble from="user">{lead.phone}</Bubble>}
                </>
              )}

              {step >= 2 && (
                <>
                  <Bubble from="bot" delay={0.15}>
                    <b>Step 3 of 3</b> — pick your primary goal and closest studio 👇
                  </Bubble>
                  {lead.goal && lead.branch && (
                    <Bubble from="user">
                      {lead.goal} · {lead.branch}
                    </Bubble>
                  )}
                </>
              )}

              {status === "sending" && (
                <Bubble from="bot">
                  <Loader2 className="inline h-4 w-4 animate-spin mr-2" /> Booking your trial slot…
                </Bubble>
              )}

              {status === "sent" && (
                <Bubble from="bot">
                  <CheckCircle2 className="inline h-4 w-4 text-primary mr-1" />
                  You&apos;re all set! Our studio team will WhatsApp you within 2 hours 💖
                </Bubble>
              )}

              {status === "error" && (
                <Bubble from="bot">
                  Something went wrong. Please click the green WhatsApp button to reach us directly!
                </Bubble>
              )}
            </div>

            {/* Input Composer Footer */}
            <div className="border-t border-border bg-card p-3 shrink-0">
              {status === "sent" || status === "error" ? (
                <button
                  onClick={reset}
                  className="w-full rounded-full bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-sm"
                >
                  Start new inquiry
                </button>
              ) : status === "sending" ? (
                <div className="text-center text-xs text-muted-foreground py-2 font-medium">
                  Submitting your request…
                </div>
              ) : step === 0 ? (
                <TextField
                  key="name"
                  placeholder="Your name (e.g. Aditi)"
                  onSubmit={(v) => {
                    setLead((l) => ({ ...l, name: v }));
                    setStep(1);
                  }}
                />
              ) : step === 1 ? (
                <TextField
                  key="phone"
                  type="tel"
                  placeholder="WhatsApp number (+91…)"
                  onSubmit={(v) => {
                    setLead((l) => ({ ...l, phone: v }));
                    setStep(2);
                  }}
                />
              ) : step === 2 ? (
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-1.5">
                      Your Goal
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {GOALS.map((g) => (
                        <button
                          key={g}
                          onClick={() => setLead((l) => ({ ...l, goal: g }))}
                          className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                            lead.goal === g
                              ? "bg-primary text-primary-foreground border-primary shadow-sm"
                              : "border-border bg-background hover:border-primary/50 text-foreground"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-1.5">
                      Preferred Studio
                    </p>
                    <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                      {BRANCHES.map((b) => (
                        <button
                          key={b}
                          onClick={() => setLead((l) => ({ ...l, branch: b }))}
                          className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                            lead.branch === b
                              ? "bg-primary text-primary-foreground border-primary shadow-sm"
                              : "border-border bg-background hover:border-primary/50 text-foreground"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    disabled={!lead.goal || !lead.branch}
                    onClick={() => {
                      setStep(3);
                      submit(lead);
                    }}
                    className="w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="h-4 w-4" /> Book My Free Trial
                  </button>
                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({
  from,
  children,
  delay = 0,
}: {
  from: "bot" | "user";
  children: React.ReactNode;
  delay?: number;
}) {
  const isBot = from === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.25 }}
      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "bg-card text-foreground border border-border/80 shadow-xs rounded-tl-xs"
            : "bg-primary text-primary-foreground rounded-tr-xs shadow-xs"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

function TextField({
  placeholder,
  onSubmit,
  type = "text",
}: {
  placeholder: string;
  onSubmit: (v: string) => void;
  type?: string;
}) {
  const [v, setV] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  function go() {
    if (v.trim().length < 2) return;
    onSubmit(v.trim());
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        go();
      }}
      className="flex items-center gap-2"
    >
      <input
        ref={ref}
        type={type}
        value={v}
        onChange={(e) => setV(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-base sm:text-sm text-foreground focus:outline-none focus:border-primary shadow-xs"
      />
      <button
        type="submit"
        disabled={v.trim().length < 2}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
