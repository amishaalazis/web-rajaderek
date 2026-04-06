import { Star } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    id: "budi",
    name: "Budi Santoso",
    location: "Jakarta Selatan",
    text: "Respon sangat cepat! Mobil saya mogok tengah malam dan tim Raja Derek datang dalam 30 menit. Pelayanan sangat profesional.",
    initial: "B",
  },
  {
    id: "siti",
    name: "Siti Rahmawati",
    location: "Bandung",
    text: "Harga yang dikasih sangat wajar dan transparan. Tidak ada biaya tambahan yang tidak jelas. Sangat recommended!",
    initial: "S",
  },
  {
    id: "agus",
    name: "Agus Prabowo",
    location: "Surabaya",
    text: "Kirim mobil dari Surabaya ke Jakarta dengan aman sampai tujuan. Driver sangat berpengalaman dan ramah. Terima kasih Raja Derek!",
    initial: "A",
  },
  {
    id: "dewi",
    name: "Dewi Lestari",
    location: "Tangerang",
    text: "Sudah 3 kali pakai jasa Raja Derek dan selalu puas. Tim yang sigap dan kendaraan ditangani dengan sangat hati-hati.",
    initial: "D",
  },
] as const;

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-orange-500">
            Testimoni
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Apa Kata <span className="text-orange-500">Pelanggan</span> Kami
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-500">
            Kepercayaan pelanggan adalah kebanggaan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <p className="mb-8 text-base italic leading-relaxed text-gray-600">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg font-bold text-orange-500">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}