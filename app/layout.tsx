import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const cormorantgaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "700"],
});

const nunitosans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bright Smile",
  description: "Bright Smile Dental Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload critical hero image */}
        <link
          rel="preload"
          as="image"
          href="/hero-image.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${cormorantgaramond.variable} ${nunitosans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
