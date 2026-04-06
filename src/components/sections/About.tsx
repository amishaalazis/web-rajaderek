import Image from "next/image";
import { ShieldCheck, Users, MapPin } from "lucide-react";

type AboutFeature = {
  id: string;
  icon: React.ElementType;
  label: string;
};

const ABOUT_FEATURES: AboutFeature[] = [
  { id: "secure", icon: ShieldCheck, label: "Aman & Terpercaya" },
  { id: "team", icon: Users, label: "Tim Berpengalaman" },
  { id: "coverage", icon: MapPin, label: "Jangkauan Luas" },
];

export function About() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 space-y-8 lg:order-1">
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
                Tentang Kami
              </span>
              <h4 className="text-2xl font-bold leading-tight text-gray-900 sm:text-2xl lg:text-3xl">
                Partner Terpercaya untuk{" "}
                <span className="text-orange-500">Derek Kendaraan Anda</span>
              </h4>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-gray-600">
              <p>
                Raja Derek adalah penyedia jasa derek kendaraan profesional yang
                telah melayani ribuan pelanggan di seluruh Indonesia. Dengan
                armada modern dan tim yang terlatih, kami memastikan kendaraan
                Anda ditangani dengan aman dan sampai tujuan tepat waktu.
              </p>
              <p>
                Kami berkomitmen memberikan layanan terbaik dengan harga yang
                transparan dan respon yang cepat. Tidak ada biaya tersembunyi —
                kepuasan pelanggan adalah prioritas utama kami.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-8">
              {ABOUT_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.id} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#fff6ed]">
                      <Icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <span className="text-xs text-gray-900 font-semibold">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl lg:aspect-4/5">
              <Image
                src="/images/about-team.jpg"
                alt="Tim Profesional Raja Derek"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 flex h-24 w-24 flex-col items-center justify-center rounded-3xl bg-orange-500 text-white shadow-xl shadow-orange-500/20 sm:h-28 sm:w-28 lg:-bottom-6 lg:-left-6">
              <span className="text-3xl font-bold sm:text-4xl">24</span>
              <span className="text-xs font-semibold tracking-widest sm:text-sm">
                JAM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}