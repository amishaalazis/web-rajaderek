import Image from "next/image";
import Link from "next/link";
import { Car, Bike, AlertTriangle, Map, Clock, ArrowRight } from "lucide-react";

const SERVICES_DATA = [
  {
    id: "derek-mobil",
    title: "Derek Mobil",
    description:
      "Layanan derek untuk semua jenis mobil, dari sedan hingga SUV. Penanganan profesional dan aman.",
    image: "/images/service-mobil.jpg",
    icon: Car,
    href: "#",
  },
  {
    id: "derek-motor",
    title: "Derek Motor",
    description:
      "Derek motor dengan peralatan khusus yang menjamin kendaraan Anda tidak mengalami kerusakan.",
    image: "/images/service-motor.jpg",
    icon: Bike,
    href: "#",
  },
  {
    id: "evakuasi",
    title: "Evakuasi Kendaraan",
    description:
      "Tim siap mengevakuasi kendaraan yang mengalami kecelakaan atau terjebak di lokasi sulit.",
    image: "/images/service-evakuasi.jpg",
    icon: AlertTriangle,
    href: "#",
  },
  {
    id: "antar-kota",
    title: "Pengiriman Antar Kota",
    description:
      "Pengiriman kendaraan antar kota dengan armada flatbed modern dan asuransi lengkap.",
    image: "/images/service-antar-kota.jpg",
    icon: Map,
    href: "#",
  },
  {
    id: "darurat",
    title: "Layanan Darurat 24 Jam",
    description:
      "Siap melayani kapan saja Anda membutuhkan. Respon cepat dalam hitungan menit.",
    image: "/images/service-darurat.jpg",
    icon: Clock,
    href: "#",
  },
] as const;

export function Services() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-orange-500">
            Layanan Kami
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Solusi Derek <span className="text-orange-500">Lengkap</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-500">
            Kami menyediakan berbagai layanan derek dan evakuasi kendaraan untuk
            memenuhi kebutuhan Anda.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-56 w-full overflow-hidden sm:h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative flex flex-grow flex-col p-6 pt-8">
                  <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-100 bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
                  >
                    Pesan Sekarang
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}