import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span className="font-display text-5xl sm:text-6xl text-gradient-rose">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Women empowered since 2018" },
  { value: 98, suffix: "%", label: "Retention after first month" },
  { value: 24, suffix: "", label: "Expert female coaches" },
  { value: 8, suffix: "", label: "Studios across Delhi NCR" },
];

export function AnimatedStats() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">By the numbers</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">A movement, not a membership.</h2>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl glass p-6 sm:p-8"
            >
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
