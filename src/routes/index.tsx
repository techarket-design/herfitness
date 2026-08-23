import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import { VideoBlock } from "@/components/site/VideoBlock";
import { TrustBadges } from "@/components/site/TrustBadges";
import { AnimatedStats } from "@/components/site/AnimatedStats";
import { ServiceScroller } from "@/components/site/ServiceScroller";
import { Programs } from "@/components/site/Programs";
import { Trainers } from "@/components/site/Trainers";
import { Transformations } from "@/components/site/Transformations";
import { Branches } from "@/components/site/Branches";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { FAQ } from "@/components/site/FAQ";
import { BlogPreview } from "@/components/site/BlogPreview";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ChatBot } from "@/components/site/ChatBot";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Her Fitness — Delhi NCR's Premium Women-Only Fitness Studio" },
      {
        name: "description",
        content:
          "Luxury women-only fitness studio in Delhi NCR. Strength, yoga, dance & HIIT led by certified female & male fitness coaches. Book your free 3-day trial today.",
      },
      { property: "og:title", content: "Her Fitness — Delhi NCR's Premium Women-Only Fitness Studio" },
      {
        property: "og:description",
        content:
          "Strength, yoga, dance & HIIT — designed by women, for women. 8 women-only studios across Delhi. Book a free trial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Her Fitness — Premium Women-Only Fitness Studio" },
      {
        name: "twitter:description",
        content: "Book your free trial at Delhi NCR's most loved women-only studio.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "Her Fitness",
          description: "Premium women-only fitness studio in Delhi NCR.",
          areaServed: "Delhi NCR",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Delhi NCR",
            addressCountry: "IN",
          },
          telephone: "+91-98100-00000",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1240",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <TrustBadges />
        <AnimatedStats />
        <ServiceScroller />
        <Trainers />
        <Transformations />
        <VideoBlock
          src="/videos/transformations-showcase.mp4"
          eyebrow="Real transformations"
          title={<>Stronger, calmer, <em className="text-gradient-rose">happier.</em></>}
          copy="Six months at Her Fitness looks like this. Real members, real results."
          height="md"
        />
        <Branches />
        <Testimonials />
        <InstagramFeed />
        <FAQ />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
