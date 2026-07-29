import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const display = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bellcorp International | China to India Import & Sourcing Partner",
  description:
    "Bellcorp International sources quality products across China and delivers your stock to India, door to door. Sourcing, best pricing, end-to-end shipment management, LCL & full loads by air and sea, and complete customs solutions for manufacturers, wholesalers and traders.",
  keywords: [
    "import from China to India", "China sourcing agent India", "China to India shipping", "LCL import India",
    "shipment consolidation", "wholesale import", "Bellcorp International",
  ],
  openGraph: {
    title: "Bellcorp International | China to India Import & Sourcing Partner",
    description: "Sourcing Trust. Delivering Value. Quality products sourced across China and delivered door to door in India.",
    type: "website",
    url: "https://www.bellcorpinternational.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
