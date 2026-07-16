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
    "Bellcorp International sources quality products from China and supplies them in bulk across India. Sourcing, import management, shipment consolidation and bulk trading since 2016.",
  keywords: [
    "import from China to India", "China sourcing agent India", "bulk import India",
    "shipment consolidation", "wholesale import", "Bellcorp International",
  ],
  openGraph: {
    title: "Bellcorp International | China to India Import & Sourcing Partner",
    description: "Sourcing Trust. Delivering Value. Quality products sourced from China, supplied in bulk across India.",
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
