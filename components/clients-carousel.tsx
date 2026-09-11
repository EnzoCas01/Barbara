/**
 * Carrossel infinito de logos de clientes.
 * Para adicionar/trocar clientes, edite a lista CLIENTS abaixo.
 * - `name`: nome da empresa (aparece embaixo do logo)
 * - `logo`: caminho do logo em /public/images/clientes/
 */
const CLIENTS: { name: string; logo: string }[] = [
  { name: "Inova LEDS Iluminação", logo: "/images/clientes/inova-leds.png" },
  { name: "Pousada Araruama", logo: "/images/clientes/pousada-araruama.png" },
  { name: "Lagoa de Araruama", logo: "/images/clientes/lagoa-de-araruama.png" },
  { name: "OC", logo: "/images/clientes/oc.png" },
  { name: "Plicilia Muniz Espaço de Beleza", logo: "/images/clientes/plicilia-muniz.png" },
]

function ClientItem({ client }: { client: { name: string; logo: string } }) {
  return (
    <li className="flex w-48 shrink-0 items-center justify-center px-6 md:w-56">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logo}
        alt={client.name}
        className="h-24 w-24 object-contain opacity-90 md:h-28 md:w-28"
      />
    </li>
  )
}

export function ClientsCarousel() {
  // duplicamos a lista várias vezes para o loop ficar contínuo mesmo com poucos itens
  const loop = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS]

  return (
    <section
      id="clientes"
      className="relative py-16 md:py-20"
      aria-label="Clientes atendidos"
      style={{ background: "#060606" }}
    >
      {/* entrada — funde com o fundo da hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#060606] to-transparent" />
      {/* saída — funde com a próxima seção */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#060606] to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <p className="mb-12 text-center font-serif text-xl font-semibold italic text-zinc-200 md:text-2xl">
          Negócios que já confiaram no meu trabalho
        </p>
      </div>

      <div className="marquee-mask relative overflow-hidden">
        <ul className="animate-marquee flex w-max items-start">
          {loop.map((client, i) => (
            <ClientItem key={`${client.name}-${i}`} client={client} />
          ))}
        </ul>
      </div>
    </section>
  )
}
