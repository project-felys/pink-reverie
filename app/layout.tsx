import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felys",
  description: "A playground for showcasing features of Project Felys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
