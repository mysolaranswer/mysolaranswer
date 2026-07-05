import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | MySolarAnswer",
    default: "MySolarAnswer — Solar Calculators & Tools",
  },
  description: "Free solar calculators for panels, battery, ROI, off-grid & more. Calculate your solar system size, savings, and payback period instantly.",
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
    title: "MySolarAnswer — Solar Calculators & Tools Coming Soon",
    description:
      "Free solar calculators launching soon. Size your battery bank, calculate ROI, design off-grid systems and more.",
    url: "https://mysolaranswer.com",
    siteName: "MySolarAnswer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mysolaranswer",
    title: "MySolarAnswer — Solar Calculators Coming Soon",
    description:
      "Free solar calculators launching soon. Size your battery bank, calculate ROI, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
