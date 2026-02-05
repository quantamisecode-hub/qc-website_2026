import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quantamise Code | AI & Software Development Company",
    template: "%s | Quantamise Code",
  },
  description: "A trusted AI and software development company delivering secure, scalable, and future-ready digital solutions for startups and enterprises worldwide.",
  keywords: ["Software Development", "AI Solutions", "App Development", "Web Development", "Next.js", "React", "Mobile Apps", "Enterprise Software"],
  authors: [{ name: "Quantamise Code" }],
  creator: "Quantamise Code",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.quantamisecode.com/",
    title: "Quantamise Code | Building AI-Driven Software Solutions",
    description: "Transforming ideas into powerful digital realities with cutting-edge AI and software development expertise.",
    siteName: "Quantamise Code",
    images: [
      {
        url: "/assets/og-image.jpg", // We need to ensure an OG image exists or use a logo placeholder
        width: 1200,
        height: 630,
        alt: "Quantamise Code - AI & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantamise Code | AI & Software Development",
    description: "Building secure, scalable, and future-ready digital solutions.",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

import CTAPopup from "@/components/cta-popup";
import CookieConsent from "@/components/cookie-consent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CTAPopup />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
