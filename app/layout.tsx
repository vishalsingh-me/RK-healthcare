import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageFade from "@/components/PageFade";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RK Healthcare | Consultant Cardiothoracic Anaesthesia",
    template: "%s | RK Healthcare",
  },
  description:
    "Private consultant-led cardiothoracic anaesthetic care by Dr. Rajendra Singh in Leeds, UK.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-surface text-text">
        <Navbar />
        <main className="min-h-screen pt-20">
          <PageFade>{children}</PageFade>
        </main>
        <Footer />
      </body>
    </html>
  );
}
