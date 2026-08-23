import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is Her Fitness a women-only gym?", a: "Yes. Her Fitness is an exclusive, private sanctuary designed for women members. To provide world-class results, our team includes certified female and male fitness experts, personal trainers, and nutrition specialists." },

  { q: "What if I've never worked out before?", a: "Perfect — most of our members started exactly there. Every program has a beginner track, and your first session includes a private consult with a coach." },
  { q: "Do you offer trial classes?", a: "Yes. You get a complimentary 3-day trial including one group class, one 1:1 consult and full facility access." },
  { q: "Can I transfer between branches?", a: "Absolutely. Members can train at any of our 7 women-only Delhi studios — Punjabi Bagh, Rajouri Garden, Paschim Vihar, Janakpuri, Kirti Nagar, Prashant Vihar or Dwarka." },
  { q: "Do you have programs for PCOS, pre/post-natal or menopause?", a: "Yes. These are our specialities. Our coaches are certified in women's hormonal health and pre/post-natal training." },
  { q: "What are your hours?", a: "All studios are open 6:00 am – 10:00 pm, seven days a week. Personal training slots run from 5:30 am." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Questions</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Everything you&apos;re <em className="text-gradient-rose">wondering</em>.
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl glass px-6 border-none"
            >
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
