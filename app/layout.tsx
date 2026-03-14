import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hizkyas Tadele — AI & Data Engineer",
  description:
    "Portfolio of Hizkyas Tadele — AI & Data Engineer specializing in RAG systems, data pipelines, LangChain, and cybersecurity. Building AI-driven data platforms and full-stack solutions.",
  keywords: [
    "AI Engineer",
    "Data Engineer",
    "Machine Learning",
    "RAG Systems",
    "LangChain",
    "Apache Airflow",
    "Python",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Hizkyas Tadele" }],
  openGraph: {
    title: "Hizkyas Tadele — AI & Data Engineer",
    description:
      "Building AI-driven data platforms and full-stack solutions",
    type: "website",
    url: "https://hizkyastadele.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
