import { Inter, Outfit, Playfair_Display, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata = {
  title: "MySolarAnswer — Free Solar Calculators",
  description:
    "Free solar calculators to help you size batteries, calculate ROI, design off-grid systems, and save money with solar.",
  keywords: [
    "solar calculator",
    "solar battery calculator",
    "solar ROI calculator",
    "off grid solar calculator",
    "solar savings calculator",
    "how many solar panels do i need",
  ],
  authors: [{ name: "MySolarAnswer" }],
  openGraph: {
    title: "MySolarAnswer — Free Solar Calculators",
    description:
      "Free solar calculators. Size your battery bank, calculate ROI, design off-grid systems and more.",
    url: "https://mysolaranswer.com",
    siteName: "MySolarAnswer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mysolaranswer",
    title: "MySolarAnswer — Free Solar Calculators",
    description:
      "Free solar calculators. Size your battery bank, calculate ROI, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${spaceGrotesk.variable} ${syne.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
