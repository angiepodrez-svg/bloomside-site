import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bloomside | Strategic Talent & Community Builders",
  description: "Scaling the Commercial, Account Management, and Operations teams that drive the digital economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${inter.variable} font-sans antialiased selection:bg-brand-blue/30`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
