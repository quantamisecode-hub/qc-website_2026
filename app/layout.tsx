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
  metadataBase: new URL("https://www.quantamisecode.com"),
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
        url: "https://www.quantamisecode.com/logo.png",
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
    images: ["https://www.quantamisecode.com/logo.png"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
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
      <head>
        {/* Explicit favicon links for better browser compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Quantamise Code",
              url: "https://www.quantamisecode.com/",
              logo: "https://www.quantamisecode.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/quantamise-code",
                "https://instagram.com/quantamise"
              ],
              description:
                "AI-powered software development company specializing in web, mobile, and enterprise solutions."
            }),
          }}
        />
      </head>
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
