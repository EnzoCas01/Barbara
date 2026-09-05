export const WHATSAPP_NUMBER = "5521951116815"

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function whatsappLink(message?: string) {
  if (!message) return WHATSAPP_URL
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export const SITE = {
  brand: "A Reis Business",
  owner: "Bárbara Reis",
  location: "Araruama, Rio de Janeiro",
  attendance: "Atendimento presencial e online",
  instagram: "@a.reisbusiness",
  instagramUrl: "https://instagram.com/a.reisbusiness",
  phoneDisplay: "(21) 95111-6815",
  email: "barbarareisbusiness.contato@gmail.com",
}

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]
