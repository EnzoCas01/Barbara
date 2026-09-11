import Image from "next/image"
import { PlanQuizButton } from "@/components/plan-quiz"

export function HeroPlaceholder() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[#0a0e14]"
      style={{ minHeight: "100vh" }}
    >
      {/* Imagem preenchendo a hero inteira */}
      <Image
        src="/images/hero-bg.png"
        alt="Bárbara Reis"
        fill
        className="object-cover object-[78%_22%] md:object-center"
        priority
      />

      {/* leve sombra só na esquerda pra dar leitura ao texto, sem escurecer a foto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      {/* saída suave para a seção seguinte */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#060606]" />

      {/* Texto na esquerda */}
      <div
        className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-5 pb-16 pt-24 lg:px-8"
        style={{ minHeight: "100vh" }}
      >
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-zinc-200">
            <span className="h-px w-8 bg-white/70" />
            Social media e tráfego pago
          </p>

          <h1 className="font-sans font-black uppercase leading-[0.9] tracking-tight">
            <span className="block text-white" style={{ fontSize: "clamp(52px, 6.5vw, 96px)" }}>
              Presença&nbsp;&amp;
            </span>
            <span className="block text-zinc-300" style={{ fontSize: "clamp(52px, 6.5vw, 96px)" }}>
              Performance
            </span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-zinc-200">
            Conteúdo, posicionamento e anúncios estratégicos para transformar
            sua presença digital em oportunidades reais para o seu negócio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-zinc-200"
            >
              Ver meu portfólio
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <PlanQuizButton />
          </div>
        </div>
      </div>
    </section>
  )
}
