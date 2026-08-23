import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* The centred column is a child of <body>, not <body> itself.
          
          It used to be the body: `max-w-2xl mx-auto px-6` straight on the
          element. Radix's dialog locks scrolling through react-remove-scroll,
          which compensates for the scrollbar it removes by writing
          padding-right and margin-right onto <body> — measuring the gap as
          viewport width minus body width. That is the scrollbar's width when
          body fills the viewport, and 345px when body is a 672px column in a
          1400px window. It also zeroes the margins, which is what centred it.
          Every dialog therefore collapsed the page behind it to nothing.
          
          With the column one level in, body is full width, the measurement is
          right, and the layout underneath does not move. */}
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="mx-auto max-w-2xl px-6 py-12 sm:py-24">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
