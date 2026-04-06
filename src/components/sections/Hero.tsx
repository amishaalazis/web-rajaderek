import Image from "next/image";
import { MessageCircle, Phone, Truck } from "lucide-react";

type HeroStat = {
  id: string;
  value: string;
  label: string;
};

const HERO_STATS: HeroStat[] = [
  { id: "exp", value: "10+", label: "Tahun Pengalaman" },
  { id: "saved", value: "5000+", label: "Kendaraan Terselamatkan" },
  { id: "time", value: "24/7", label: "Siap Melayani" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100vh] w-full items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Armada Truk Derek Raja Derek"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-[#4c3a2f] px-4 py-1.5 backdrop-blur-sm">
            <Truck className="h-4 w-4 text-[#82f059]" />
            <span className="text-xs font-semibold text-orange-400 sm:text-sm">
              Layanan 24 Jam Nonstop
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Jasa Derek <span className="text-orange-500">Profesional</span> 24 Jam
          </h1>

          <p className="max-w-xl text-base text-gray-300 sm:text-lg">
            Layanan derek kendaraan cepat, aman, dan terpercaya. Siap melayani
            Anda kapan saja, di mana saja.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Kami
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              <Phone className="mr-2 h-5 w-5 text-orange-500" />
              Hubungi Sekarang
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-6 sm:gap-12">
            {HERO_STATS.map((stat) => (
              <div key={stat.id} className="space-y-0.5">
                <p className="text-2xl font-bold text-orange-500 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-gray-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[99] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </section>
  );
}