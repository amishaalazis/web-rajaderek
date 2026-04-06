import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const SERVICES_LINKS = [
  { name: "Derek Mobil", href: "#" },
  { name: "Derek Motor", href: "#" },
  { name: "Evakuasi Kendaraan", href: "#" },
  { name: "Pengiriman Antar Kota", href: "#" },
  { name: "Layanan Darurat 24 Jam", href: "#" },
] as const;

const CONTACT_INFO = [
  { id: "phone", icon: Phone, text: "0812-3456-7890", href: "tel:081234567890" },
  { id: "email", icon: Mail, text: "info@rajaderek.com", href: "mailto:info@rajaderek.com" },
  { id: "address", icon: MapPin, text: "Jl. Raya Derek No. 123, Jakarta Selatan", href: "#" },
  { id: "hours", icon: Clock, text: "24 Jam Nonstop" },
] as const;

const AREA_CITIES = [
  "Jakarta",
  "Bogor",
  "Depok",
  "Tangerang",
  "Bekasi",
  "Bandung",
  "Surabaya",
] as const;

export function Footer() {
  return (
    <footer className="bg-[#1c1f26] pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-6">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight">
              <span className="text-orange-500">Raja</span>
              <span className="text-white">Derek</span>
            </Link>
            <p className="text-base leading-relaxed text-gray-400">
              Penyedia jasa derek kendaraan profesional dan terpercaya. Melayani
              seluruh Indonesia 24 jam nonstop.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Layanan</h3>
            <ul className="space-y-4">
              {SERVICES_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-400 transition-colors hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Kontak</h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className="flex items-start gap-3">
                    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                    {'href' in item ? (
                      <a
                        href={item.href}
                        className="text-base text-gray-400 transition-colors hover:text-orange-500"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-base text-gray-400">{item.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Area Layanan</h3>
            <div className="flex flex-wrap gap-2.5">
              {AREA_CITIES.map((city) => (
                <span
                  key={city}
                  className="cursor-pointer rounded-full bg-[#2a2d36] px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Raja Derek. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}