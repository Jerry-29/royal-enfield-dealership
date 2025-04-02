import type { Metadata } from "next";
import { defaultMetadata } from "@/config/metadata/default";
import JsonLd from "@/components/seo/JsonLd";
import GoogleTagManager from "@/components/seo/GoogleTagManager";
import GoogleTagManagerNoScript from "@/components/seo/GoogleTagManagerNoScript";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="RUfIBsodN5c4WQko8qKIqPh5-IJZrnFz9VGE5SpUs7M"
        />
        <link rel="icon" href="/favicon.ico" />
        <JsonLd />
        <GoogleTagManager />
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}
