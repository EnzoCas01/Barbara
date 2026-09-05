/* ─────────────────────────────────────────────
   sections.tsx  ←  nome do arquivo
   Quatro seções de página completa:
   Portfólio · Serviços · Sobre mim · Avaliações
───────────────────────────────────────────── */

import Image from "next/image"
import { Sparkle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

const PORTFOLIO = [
  {
    img: "/images/portfolio/pousada-araruama.png",
    nome: "Pousada Araruama",
    categoria: "Social Media",
  },
  {
    img: "/images/portfolio/larissa-pestana.png",
    nome: "Larissa Pestana Estética",
    categoria: "Gestão de Instagram",
  },
  {
    img: "/images/portfolio/lagoa-araruama.png",
    nome: "Lagoa de Araruama",
    categoria: "Social Media",
  },
  {
    img: "/images/portfolio/plicilia-muniz.png",
    nome: "Plicilia Muniz Beleza",
    categoria: "Criação de Conteúdo",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="flex min-h-screen flex-col justify-center bg-[#0a0a0a] py-24">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">Portfólio</p>
        <h2 className="mb-14 font-serif text-4xl font-semibold italic text-white md:text-5xl">
          Meus projetos
        </h2>
      </div>

      {/* Carrossel com scroll horizontal */}
      <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex gap-5 px-5 lg:px-8" style={{ width: "max-content" }}>
          {PORTFOLIO.map((p) => (
            <li
              key={p.nome}
              className="group relative h-[520px] w-[300px] shrink-0 overflow-hidden md:w-[340px]"
            >
              <Image
                src={p.img}
                alt={p.nome}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* overlay sempre presente no fundo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              {/* overlay extra no hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* info — aparece sempre na base */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  {p.categoria}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-white">{p.nome}</h3>

                {/* Saiba mais — aparece no hover */}
                <a
                  href="https://www.instagram.com/a.reisbusiness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex translate-y-2 items-center gap-2 border border-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white hover:text-black"
                >
                  Saiba mais
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ServicosSection() {
  const servicos = [
    { titulo: "Gestão de Redes Sociais", desc: "Planejamento, criação e publicação de conteúdo estratégico no Instagram e Facebook." },
    { titulo: "Tráfego Pago", desc: "Criação e gestão de campanhas no Meta Ads e Google Ads para atrair clientes reais." },
    { titulo: "Consultoria de Instagram", desc: "Diagnóstico completo e plano de ação para crescer no Instagram com consistência." },
    { titulo: "Criação de Conteúdo", desc: "Produção de artes, legendas e roteiros alinhados ao posicionamento da sua marca." },
    { titulo: "Perfil no Google", desc: "Otimização do Google Meu Negócio para aparecer nas buscas locais." },
    { titulo: "Estratégia Digital", desc: "Plano personalizado de presença digital com metas e indicadores para o seu negócio." },
  ]

  return (
    <section id="servicos" className="flex min-h-screen flex-col justify-center bg-[#080808] py-24">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">Serviços</p>
        <h2 className="mb-14 font-serif text-4xl font-semibold italic text-white md:text-5xl">
          O que eu ofereço
        </h2>
        <div className="grid gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <div key={s.titulo} className="flex flex-col gap-4 bg-[#080808] p-8">
              <h3 className="font-serif text-lg font-semibold text-white">{s.titulo}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SobreMimSection() {
  const destaques = [
    { titulo: "Diagnóstico", desc: "Antes da execução" },
    { titulo: "Estratégia", desc: "Sob medida" },
    { titulo: "Conhecimento", desc: "Que gera autonomia" },
  ]

  return (
    <section id="sobre" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0a0a0a] py-24">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Texto na esquerda */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-zinc-400">
              Sobre mim
              <span className="h-px w-10 bg-zinc-600" />
              <Sparkle className="size-3 text-zinc-500" />
            </p>
            <h2 className="mb-8 font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
              Conheça sua
              <br />
              gestora
            </h2>
            <div className="mb-8 space-y-5">
              <p className="text-base leading-relaxed text-zinc-400">
                Sou Bárbara Reis, gestora de marketing digital. Há dois anos, ajudo marcas e
                profissionais a transformarem ideias soltas em uma presença digital mais clara,
                consistente e conectada aos objetivos do negócio.
              </p>
              <p className="text-base leading-relaxed text-zinc-400">
                Atuo com Social Media, gestão de Instagram, criação de conteúdo e tráfego pago.
                Também ofereço consultoria de marketing digital e treinamentos online para quem
                deseja compreender o digital, tomar decisões com mais segurança e conquistar
                autonomia.
              </p>
              <p className="text-base leading-relaxed text-zinc-400">
                Mais do que seguir tendências, acredito em estratégias que façam sentido para a
                realidade, o público e o momento de cada negócio.
              </p>
            </div>
            <a
              href={whatsappLink("Olá, gostaria de montar meu plano!")}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-10 inline-flex items-center gap-2 border border-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              Monte seu plano
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="grid grid-cols-1 gap-6 border-t border-zinc-800 pt-8 sm:grid-cols-3">
              {destaques.map((d, i) => (
                <div key={d.titulo} className={`flex items-start gap-3 ${i > 0 ? "sm:border-l sm:border-zinc-800 sm:pl-6" : ""}`}>
                  <Sparkle className="mt-0.5 size-4 shrink-0 text-zinc-500" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-white">{d.titulo}</p>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Foto na direita */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-sm">
              <span className="absolute -left-4 -top-4 text-zinc-600">
                <Sparkle className="size-4" />
              </span>
              <span className="absolute -bottom-4 -right-4 text-zinc-600">
                <Sparkle className="size-4" />
              </span>
              <div
                className="relative aspect-[4/5] overflow-hidden ring-1 ring-zinc-700"
                style={{ borderRadius: "9999px 9999px 24px 24px" }}
              >
                <Image
                  src="/images/barbara-hero.jpg"
                  alt="Bárbara Reis — gestora de marketing digital"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AvaliacoesSection() {
  const avaliacoes = [
    { nome: "Cliente 01", texto: "Excelente trabalho! Nossa presença no Instagram cresceu muito depois que a Bárbara assumiu." },
    { nome: "Cliente 02", texto: "Profissional incrível, muito dedicada e criativa. Recomendo demais!" },
    { nome: "Cliente 03", texto: "Os resultados com tráfego pago superaram nossas expectativas. Muito obrigado!" },
  ]

  return (
    <section id="avaliacoes" className="flex min-h-screen flex-col justify-center bg-[#080808] py-24">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">Avaliações</p>
        <h2 className="mb-14 font-serif text-4xl font-semibold italic text-white md:text-5xl">
          O que dizem sobre mim
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {avaliacoes.map((a) => (
            <div key={a.nome} className="flex flex-col gap-5 bg-zinc-900 p-8 ring-1 ring-zinc-800">
              <p className="text-base leading-relaxed text-zinc-300">"{a.texto}"</p>
              <span className="font-serif text-sm italic text-zinc-500">— {a.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
