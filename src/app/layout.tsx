// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "../lib/utils";

export const metadata: Metadata = {
  title: "RajaDerek | Jasa Derek Mobil Profesional 24 Jam",
  description: "Solusi derek kendaraan cepat, aman, dan terpercaya 24 jam nonstop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn(GeistSans.variable, "antialiased")}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}