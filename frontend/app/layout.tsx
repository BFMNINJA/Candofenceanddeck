import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Can Do Fence & Deck | GTA's Most Trusted Fence Builder Since 1998",
    template: "%s | Can Do Fence & Deck",
  },
  description:
    "Can Do Fence & Deck has been building premium fences, decks, and gates across the Greater Toronto Area since 1998. Industry-leading 5-year written warranty. Fully insured. Free quotes.",
  keywords: [
    "fence contractor Toronto",
    "deck builder GTA",
    "fence installation Vaughan",
    "wooden fence Toronto",
    "cedar fence GTA",
    "pressure treated fence",
    "gate installation Toronto",
    "deck contractor Markham",
    "fence company Richmond Hill",
    "Can Do Fence",
  ],
  authors: [{ name: "Can Do Fence & Deck" }],
  creator: "Can Do Fence & Deck",
  publisher: "Can Do Fence & Deck",
  metadataBase: new URL("https://www.candofence.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.candofence.com",
    siteName: "Can Do Fence & Deck",
    title: "Can Do Fence & Deck | GTA's Most Trusted Fence Builder Since 1998",
    description:
      "Premium fences, decks, and gates across the Greater Toronto Area since 1998. 5-year written warranty. Fully insured. Call (416) 630-3325 for a free quote.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Can Do Fence & Deck — Premium Fence and Deck Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can Do Fence & Deck | GTA's Most Trusted Fence Builder Since 1998",
    description:
      "Premium fences, decks, and gates across the GTA since 1998. 5-year written warranty. Call (416) 630-3325.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
