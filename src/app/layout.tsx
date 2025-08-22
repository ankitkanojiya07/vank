import type { Metadata } from "next";
import "./globals.css";

import {Caveat, Playfair} from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/common/HeroSection";
import { heroSections } from "@/data/heroSections";

export const metadata: Metadata = {
  title: "Vanaashrya Resort - Luxury Wildlife Resort in Sariska",
  description:
    "Experience luxury in the heart of Sariska Tiger Reserve. Vanaashrya Resort offers premium accommodations, world-class amenities, and unforgettable wildlife experiences.",
  keywords:
    "Sariska, Tiger Reserve, Luxury Resort, Wildlife, Accommodation, Vanaashrya, Rajasthan",
  authors: [{ name: "Vanaashrya Resort" }],
  creator: "Vanaashrya Resort",
  publisher: "Vanaashrya Resort",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vanaashrya.com"),
  openGraph: {
    title: "Vanaashrya Resort - Luxury Wildlife Resort in Sariska",
    description:
      "Experience luxury in the heart of Sariska Tiger Reserve. Premium accommodations and unforgettable wildlife experiences.",
    url: "https://vanaashrya.com",
    siteName: "Vanaashrya Resort",
    images: [
      {
        url: "/gallery/herobackground.webp",
        width: 1200,
        height: 630,
        alt: "Vanaashrya Resort - Luxury Wildlife Resort",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanaashrya Resort - Luxury Wildlife Resort in Sariska",
    description:
      "Experience luxury in the heart of Sariska Tiger Reserve. Premium accommodations and unforgettable wildlife experiences.",
    images: ["/gallery/herobackground.webp"],
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
    google: "XWq-G-JcFAE8o2JT784g4EdfUwCv_IbEz8yNhEpH910",
  },
};

const playFair = Playfair({
  weight: ["400", "500", "600", "700","300","800", "900"],
  subsets: ["latin","cyrillic"],
  variable: "--font-playfair",
})

const caveat = Caveat({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playFair.variable} ${caveat.variable} antialiased`}>
        <MainLayout>
          <HeroSection {...heroSections.home} />

          {children}
        </MainLayout>
      </body>
    </html>
  );
}
