import { MessageCircle, Phone } from "lucide-react";

const CTA_BUTTONS = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp Kami",
    href: "https://wa.me/6281234567890",
  },
  {
    id: "phone",
    icon: Phone,
    label: "0812-3456-7890",
    href: "tel:081234567890",
  },
] as const;

export function CTA() {
  return (
    <section className="bg-[#df7b3e] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Butuh Bantuan Derek Sekarang?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
            Jangan panik! Tim kami siap membantu Anda 24 jam nonstop.
            <br className="hidden sm:block" />
            Hubungi kami sekarang untuk layanan cepat dan terpercaya.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {CTA_BUTTONS.map((button) => {
              const Icon = button.icon;
              return (
                <a
                  key={button.id}
                  href={button.href}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-[#df7b3e] shadow-sm transition-transform hover:scale-105 sm:w-auto"
                >
                  <Icon className="mr-3 h-5 w-5" strokeWidth={2} />
                  {button.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}