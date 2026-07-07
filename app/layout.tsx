import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_FULL,
  SITE_DESCRIPTION_FR,
  KEYWORDS,
  CONTACT,
  SOCIAL_LINKS,
  OPENING_HOURS,
  DOCTOR_NAME,
} from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME_FULL} | Médecine Esthétique à Mohammedia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION_FR,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: DOCTOR_NAME }],
  creator: DOCTOR_NAME,
  publisher: SITE_NAME,
  category: "Health",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      ar: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: "ar_MA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME_FULL} | Médecine Esthétique à Mohammedia`,
    description: SITE_DESCRIPTION_FR,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME_FULL,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME_FULL} | Médecine Esthétique à Mohammedia`,
    description: SITE_DESCRIPTION_FR,
    images: ["/og-image.png"],
  },
  verification: {
    google: "U_j1hKjVkqGBP2pfc4xeYEhjfbp2lyCHs_gKazqJ-z0",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

// Schema.org structured data — MedicalBusiness / LocalBusiness.
// This is what allows Google to show Iconic Clinic as a rich local result
// (map pin, hours, phone, review stars) for searches like
// "Clinique esthétique Mohammedia" or "Iconic Clinic".
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME_FULL,
  alternateName: SITE_NAME,
  description: SITE_DESCRIPTION_FR,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  priceRange: "$$",
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.streetAddress,
    addressLocality: CONTACT.addressLocality,
    postalCode: CONTACT.postalCode,
    addressCountry: CONTACT.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CONTACT.latitude,
    longitude: CONTACT.longitude,
  },
  hasMap: CONTACT.googleMapsUrl,
  openingHoursSpecification: OPENING_HOURS.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook, SOCIAL_LINKS.tiktok],
  founder: {
    "@type": "Person",
    name: DOCTOR_NAME,
  },
  areaServed: {
    "@type": "City",
    name: "Mohammedia",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.2",
    reviewCount: "10",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Script
          id="ld-medical-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
