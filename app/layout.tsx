import type { Metadata, Viewport } from "next";
import { MobileTabBar } from "../components/layout/MobileTabBar";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "The 10 F's by Lornette Daye | Student-Athlete Development",
  description: "A premium student-athlete success program helping athletes build career readiness, responsible AI habits, personal-brand confidence, and mental wellness.",
  keywords: ["student-athlete", "athlete development", "NCAA", "NIL", "Lornette Daye", "sports career transition"],
  authors: [{ name: "Lornette Daye" }],
  creator: "Lornette Daye",
  openGraph: {
    title: "The 10 F's by Lornette Daye",
    description: "Equipping student-athletes for life beyond sport.",
    url: "https://lornettedaye.com",
    siteName: "The 10 F's",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 10 F's by Lornette Daye",
    description: "Equipping student-athletes for life beyond sport.",
    creator: "@lornettedaye",
  },
  manifest: "/manifest.ts",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "10 F's",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased overscroll-none pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0`}
      >
        {children}
        <MobileTabBar />
      </body>
    </html>
  );
}
