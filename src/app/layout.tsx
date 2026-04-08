import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neurofn — AI Integrated Fin-tech Institution",
  description: "Experience the next generation of financial intelligence with Neurofn. AI-driven wealth management, predictive analytics, and institutional-grade financial solutions.",
  authors: [{ name: "Neurofn Team" }],
  openGraph: {
    title: "Neurofn — AI Integrated Fin-tech Institution",
    description: "AI-driven financial solutions for the modern world.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurofn",
    description: "AI-integrated fintech solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
