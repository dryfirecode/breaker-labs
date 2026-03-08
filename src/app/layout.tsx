import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Breaker Labs",
    template: "%s | Breaker Labs",
  },
  description:
    "Cybersecurity research, AI security, and SaaS products from JD — breaking things down and building them back up.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://breakerlabs.io",
    siteName: "Breaker Labs",
    title: "Breaker Labs",
    description:
      "Cybersecurity research, AI security, and SaaS products from JD.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breaker Labs",
    description:
      "Cybersecurity research, AI security, and SaaS products from JD.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
