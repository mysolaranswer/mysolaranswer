import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "MySolarAnswer — Solar Calculators & Tools Coming Soon",
  description:
    "MySolarAnswer is launching soon — free solar calculators to help you size batteries, calculate ROI, design off-grid systems, and save money with solar.",
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
