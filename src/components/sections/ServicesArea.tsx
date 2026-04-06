import Link from "next/link";
import { MapPin } from "lucide-react";

const CITIES = [
  "Jakarta",
  "Bogor",
  "Depok",
  "Tangerang",
  "Bekasi",
  "Bandung",
  "Surabaya",
  "Semarang",
  "Yogyakarta",
  "Medan",
  "Makassar",
  "Bali",
  "Malang",
  "Solo",
  "Cirebon",
  "Palembang",
  "Lampung",
  "Pekanbaru",
  "Balikpapan",
  "Manado",
] as const;

export function ServiceArea() {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-orange-500">
            Jangkauan
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Area <span className="text-orange-500">Layanan</span> Kami
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500">
            Kami melayani derek dan pengiriman kendaraan di berbagai kota besar di
            seluruh Indonesia.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {CITIES.map((city) => {
            const isMalang = city === "Malang";
            return (
              <div
                key={city}
                className={`group flex cursor-pointer items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50 ${
                  isMalang
                    ? "border-orange-300 bg-orange-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <MapPin className="h-5 w-5 flex-shrink-0 text-orange-500" strokeWidth={2} />
                <span className="text-sm font-medium text-gray-900 group-hover:text-gray-900">
                  {city}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center text-sm text-gray-500">
          Tidak menemukan kota Anda?{" "}
          <Link
            href="#contact"
            className="font-semibold text-orange-500 transition-colors hover:text-orange-600"
          >
            Hubungi kami
          </Link>{" "}
          untuk informasi lebih lanjut.
        </div>
      </div>
    </section>
  );
}