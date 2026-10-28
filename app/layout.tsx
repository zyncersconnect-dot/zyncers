import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: `${siteConfig.name} — Real-Time Human Coordination`,
  description: siteConfig.subTagline,
  applicationName: siteConfig.name,
  keywords: [
    "Zyncers",
    "Meet in the middle",
    "Group trip planning",
    "Real-time coordination",
    "Shared meeting point",
    "Solo trip sharing",
    "Live travel progress",
    "Group travel app",
  ],
  authors: [{ name: "Zyncers (FZE)" }],
  creator: "Zyncers (FZE)",
  publisher: "Zyncers (FZE)",
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    title: `${siteConfig.name} — Real-Time Human Coordination`,
    description: siteConfig.subTagline,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/screenshots/desktop/01_Meet_in_the_Middle_Desktop_1920x1080.jpg",
        width: 1920,
        height: 1080,
        alt: "Zyncers — Meet in the Middle. Arrive Together.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Real-Time Human Coordination`,
    description: siteConfig.subTagline,
    images: ["/images/screenshots/desktop/01_Meet_in_the_Middle_Desktop_1920x1080.jpg"],
  },
  icons: {
    icon: "/images/brand/favicon.png",
    shortcut: "/images/brand/favicon.png",
    apple: "/images/brand/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/brand/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
