import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://herfitness.in"),
  title: {
    default: "Her Fitness | Premium Women-Only Gym Sanctuary in Delhi NCR",
    template: "%s | Her Fitness Women-Only Gym",
  },
  description:
    "Her Fitness is Delhi NCR's premier women-only fitness sanctuary across 8 locations: Dwarka, Rajouri Garden, Janakpuri, Vikaspuri, Punjabi Bagh, Paschim Vihar, Rohini, and Kirti Nagar. 100% certified female coaches, reformer pilates, zumba, and infrared spa.",
  keywords: [
    "women only gym delhi",
    "ladies gym dwarka",
    "her fitness rajouri garden",
    "female fitness trainer delhi",
    "pcos workout center delhi",
    "reformer pilates women delhi",
    "zumba classes ladies west delhi",
  ],
  authors: [{ name: "Her Fitness India" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://herfitness.in",
    siteName: "Her Fitness",
    title: "Her Fitness | Premium Women-Only Gym Sanctuary",
    description:
      "Delhi NCR's #1 Women-Only Gym Chain across 8 locations. Certified female coaches, customized nutrition, reformer pilates, and luxury spa.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Her Fitness Women-Only Gym",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1082983587653846');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="bg-her-blush text-slate-800 font-sans antialiased min-h-screen flex flex-col selection:bg-her-primary selection:text-white">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1082983587653846&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
