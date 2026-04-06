"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "Beranda", href: "#" },
  { name: "Tentang", href: "#" },
  { name: "Layanan", href: "#" },
  { name: "Keunggulan", href: "#" },
  { name: "Area", href: "#" },
  { name: "Testimoni", href: "#" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-orange-500">Raja</span>
          <span className={isScrolled ? "text-gray-900" : "text-white"}>
            Derek
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            <Phone className="mr-2 h-4 w-4" />
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}