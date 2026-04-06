import { Zap, DollarSign, Users, Clock, MapPin } from "lucide-react";

const FEATURES_DATA = [
  {
    id: "respon-cepat",
    icon: Zap,
    title: "Respon Cepat",
    description:
      "Tim kami siap berangkat dalam hitungan menit setelah menerima panggilan Anda.",
  },
  {
    id: "harga-transparan",
    icon: DollarSign,
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Harga disepakati sebelum layanan dimulai.",
  },
  {
    id: "pengalaman",
    icon: Users,
    title: "Tim Berpengalaman",
    description:
      "Operator dan driver terlatih dengan pengalaman bertahun-tahun di bidangnya.",
  },
  {
    id: "nonstop",
    icon: Clock,
    title: "Layanan 24 Jam",
    description:
      "Kami beroperasi nonstop, siap melayani Anda kapanpun dibutuhkan.",
  },
  {
    id: "jangkauan",
    icon: MapPin,
    title: "Jangkauan Luas",
    description:
      "Melayani derek dan pengiriman kendaraan ke seluruh wilayah Indonesia.",
  },
] as const;

export function Features() {
  return (
    <section className="bg-[#1c1f26] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-orange-500">
            Mengapa Kami?
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Keunggulan <span className="text-orange-500">Raja Derek</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400">
            Alasan mengapa ribuan pelanggan mempercayakan kendaraan mereka
            kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES_DATA.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#3a281c]">
                  <Icon className="h-7 w-7 text-orange-500" strokeWidth={2} />
                </div>
                <h3 className="mb-4 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}