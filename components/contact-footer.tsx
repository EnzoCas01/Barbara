import Image from "next/image"
import { SITE, NAV_LINKS, whatsappLink } from "@/lib/site"

const CONTACT_LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5521951116815",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/a.reisbusiness/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    href: "mailto:barbarareisbusiness.contato@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@a.reisbusiness",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function ContactFooter() {
  return (
    <>
      {/* ── Seção de contato ── */}
      <section id="contato" className="relative overflow-hidden bg-[#0d0d0d] py-28">
        {/* círculo decorativo */}
        <div className="pointer-events-none absolute right-8 top-1/4 hidden h-80 w-80 rounded-full border border-zinc-700/40 lg:block" />
        <span className="pointer-events-none absolute right-28 top-1/3 hidden text-white lg:block" style={{ fontSize: 28 }} aria-hidden="true">✦</span>

        <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-2 lg:gap-24 lg:px-8">
          {/* Esquerda */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-300">
              Vamos conversar?
            </p>
            <h2
              className="font-sans font-black uppercase leading-[0.9] text-white"
              style={{ fontSize: "clamp(36px, 4.5vw, 68px)" }}
            >
              Sua marca pode ir mais longe.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-zinc-400">
              Se você procura Social Media, criação de conteúdo ou tráfego pago para fortalecer
              a presença digital do seu negócio, vamos construir uma estratégia personalizada.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappLink("Olá, gostaria de montar meu plano!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-zinc-200"
              >
                Monte seu plano
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-600 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white"
              >
                Falar no WhatsApp
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Direita — links de contato */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-zinc-500">
              Contato
            </p>
            <ul className="divide-y divide-zinc-800">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-5 text-white transition-colors hover:text-zinc-300"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex size-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300">
                        {link.icon}
                      </span>
                      <span className="text-sm font-medium uppercase tracking-widest">
                        {link.label}
                      </span>
                    </span>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800 bg-[#0d0d0d]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          {/* linha principal */}
          <div className="flex flex-wrap items-center justify-between gap-6 py-6">
            <a href="#inicio">
              <Image
                src="/images/logo-br.png"
                alt="BR – Bárbara Reis Business"
                width={48}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </a>

            <a
              href="#inicio"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-white"
            >
              Voltar ao topo
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </footer>
    </>
  )
}
