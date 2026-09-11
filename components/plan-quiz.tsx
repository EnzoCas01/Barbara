"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { whatsappLink } from "@/lib/site"

type Question = {
  id: string
  title: string
  helper?: string
  type: "single" | "multi"
  max?: number
  options: string[]
}

const OUTRO = "Outro"

const RAW_QUESTIONS: Question[] = [
  {
    id: "canais",
    title: "Onde você quer divulgar seu negócio?",
    helper: "Pode marcar mais de uma opção.",
    type: "multi",
    options: ["Instagram", "Facebook", "WhatsApp", "Google", "Preciso de ajuda para escolher"],
  },
  {
    id: "objetivo",
    title: "O que você mais quer conseguir agora?",
    helper: "Pode marcar até duas opções.",
    type: "multi",
    max: 2,
    options: [
      "Receber mais pedidos ou orçamentos pelo WhatsApp",
      "Vender mais pelo meu site ou loja virtual",
      "Trazer mais clientes ao meu estabelecimento",
      "Aumentar meus seguidores no Instagram",
      "Divulgar uma promoção, novidade ou evento",
      "Preciso de ajuda para definir",
    ],
  },
  {
    id: "ajuda",
    title: "Com o que você precisa de ajuda?",
    helper: "Pode marcar mais de uma opção.",
    type: "multi",
    options: [
      "Criar ou atualizar as informações do meu negócio na internet",
      "Saber o que publicar",
      "Ter fotos, vídeos e publicações prontos para usar",
      "Divulgar meu negócio com anúncios",
      "Preciso que você avalie e me oriente",
    ],
  },
  {
    id: "frequencia",
    title: "Você precisa de publicações para quando?",
    helper: "Escolha uma opção.",
    type: "single",
    options: [
      "Para uma divulgação específica",
      "Para publicar duas vezes por semana",
      "Para publicar três vezes por semana",
      "Para publicar com mais frequência",
      "Quero sua orientação para decidir",
    ],
  },
  {
    id: "material",
    title: "Você tem fotos ou vídeos do seu negócio?",
    helper: "Escolha uma opção.",
    type: "single",
    options: [
      "Sim, tenho material para enviar",
      "Tenho pouco material e preciso de ajuda",
      "Quero que alguém venha fotografar e gravar",
      "Ainda não tenho, mas posso produzir com orientação",
      "Não sei se o que tenho pode ser usado",
    ],
  },
  {
    id: "anuncios",
    title: "Você gostaria de pagar ao Instagram ou Facebook para mostrar anúncios do seu negócio?",
    helper: "Esse investimento é separado do valor do meu serviço.",
    type: "single",
    options: ["Sim, tenho interesse", "Quero entender melhor antes de decidir", "Não quero anunciar agora"],
  },
]

const QUESTIONS: Question[] = RAW_QUESTIONS.map((q) => ({ ...q, options: [...q.options, OUTRO] }))

const NAME_STEP = 0
const SUMMARY_STEP = QUESTIONS.length + 1

function formatAnswer(question: Question, selected: string[], otherText: string) {
  if (!selected.length) return "—"
  return selected
    .map((option) => (option === OUTRO ? `Outro: ${otherText.trim() || "—"}` : option))
    .join(", ")
}

function buildMessage(
  name: string,
  answers: Record<string, string[]>,
  otherTexts: Record<string, string>
) {
  const lines = [`Olá! Fiz o quiz do site e quero um orçamento.`, ``, `Nome: ${name}`]
  QUESTIONS.forEach((q, i) => {
    const chosen = formatAnswer(q, answers[q.id] || [], otherTexts[q.id] || "")
    lines.push(``, `${i + 1}. ${q.title}`, chosen)
  })
  return lines.join("\n")
}

export function PlanQuizButton({
  className,
  children,
  onOpen,
}: {
  className?: string
  children?: React.ReactNode
  onOpen?: () => void
}) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(NAME_STEP)
  const [name, setName] = useState("")
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [otherTexts, setOtherTexts] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  function reset() {
    setStep(NAME_STEP)
    setName("")
    setAnswers({})
    setOtherTexts({})
  }

  function toggleOption(question: Question, option: string) {
    setAnswers((prev) => {
      const current = prev[question.id] || []
      if (question.type === "single") {
        return { ...prev, [question.id]: [option] }
      }
      const already = current.includes(option)
      if (already) {
        return { ...prev, [question.id]: current.filter((o) => o !== option) }
      }
      if (question.max && current.length >= question.max) return prev
      return { ...prev, [question.id]: [...current, option] }
    })
  }

  const currentQuestion = step >= 1 && step <= QUESTIONS.length ? QUESTIONS[step - 1] : null
  const canAdvanceName = name.trim().length > 0
  const currentSelected = currentQuestion ? answers[currentQuestion.id] || [] : []
  const currentNeedsOtherText = currentSelected.includes(OUTRO)
  const canAdvanceQuestion = currentQuestion
    ? currentSelected.length > 0 &&
      (!currentNeedsOtherText || (otherTexts[currentQuestion.id] || "").trim().length > 0)
    : true

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onOpen?.()
          setOpen(true)
        }}
        className={
          className ??
          "inline-flex items-center gap-2 border border-zinc-400 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white"
        }
      >
        {children ?? "Monte seu plano"}
      </button>

      {open &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden border border-zinc-800 bg-[#0a0a0a]">
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {step === NAME_STEP && "Vamos começar"}
                {currentQuestion && `Pergunta ${step} de ${QUESTIONS.length}`}
                {step === SUMMARY_STEP && "Quase lá"}
              </p>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  reset()
                }}
                aria-label="Fechar"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              {step === NAME_STEP && (
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold italic text-white">
                    Vamos encontrar o que seu negócio precisa?
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-zinc-400">
                    Responda a algumas perguntas simples. Depois, envie suas escolhas pelo WhatsApp para receber
                    minha orientação e um orçamento, sem compromisso.
                  </p>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-zinc-500">
                    Como posso te chamar?
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full border border-zinc-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-white"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && canAdvanceName) setStep(1)
                    }}
                  />
                </div>
              )}

              {currentQuestion && (
                <div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-white">{currentQuestion.title}</h3>
                  {currentQuestion.helper && (
                    <p className="mb-6 text-sm text-zinc-500">{currentQuestion.helper}</p>
                  )}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {currentQuestion.options.map((option) => {
                      const selected = (answers[currentQuestion.id] || []).includes(option)
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleOption(currentQuestion, option)}
                          className={`flex items-center gap-3 border px-4 py-3.5 text-left text-sm transition-colors ${
                            option === OUTRO ? "sm:col-span-2" : ""
                          } ${
                            selected
                              ? "border-white bg-white text-black"
                              : "border-zinc-700 text-zinc-200 hover:border-zinc-400"
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
                              selected ? "border-black" : "border-zinc-500"
                            } ${currentQuestion.type === "single" ? "rounded-full" : ""}`}
                          >
                            {selected && (
                              <span className={`h-2 w-2 bg-black ${currentQuestion.type === "single" ? "rounded-full" : ""}`} />
                            )}
                          </span>
                          {option === OUTRO ? "Outro (escreva o que você quer)" : option}
                        </button>
                      )
                    })}
                  </div>

                  {currentNeedsOtherText && (
                    <input
                      type="text"
                      autoFocus
                      value={otherTexts[currentQuestion.id] || ""}
                      onChange={(e) =>
                        setOtherTexts((prev) => ({ ...prev, [currentQuestion.id]: e.target.value }))
                      }
                      placeholder="Escreva aqui o que você quer..."
                      className="mt-3 w-full border border-zinc-700 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-white"
                    />
                  )}
                </div>
              )}

              {step === SUMMARY_STEP && (
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold italic text-white">
                    Pronto, agora podemos conversar!
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                    Confira suas respostas abaixo. Vou usá-las para entender o que você precisa e preparar seu
                    orçamento.
                  </p>
                  <div className="flex flex-col gap-4 border border-zinc-800 p-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">Nome</p>
                      <p className="mt-1 text-sm text-white">{name}</p>
                    </div>
                    {QUESTIONS.map((q) => (
                      <div key={q.id}>
                        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">{q.title}</p>
                        <p className="mt-1 text-sm text-white">
                          {formatAnswer(q, answers[q.id] || [], otherTexts[q.id] || "")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-zinc-800 px-6 py-4">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(NAME_STEP, s - 1))}
                className={`text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-white ${
                  step === NAME_STEP ? "invisible" : ""
                }`}
              >
                Voltar
              </button>

              {step < SUMMARY_STEP ? (
                <button
                  type="button"
                  disabled={step === NAME_STEP ? !canAdvanceName : !canAdvanceQuestion}
                  onClick={() => setStep((s) => s + 1)}
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {step === NAME_STEP ? "Começar" : "Continuar"}
                </button>
              ) : (
                <a
                  href={whatsappLink(buildMessage(name, answers, otherTexts))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setOpen(false)
                    reset()
                  }}
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-zinc-200"
                >
                  Continuar no WhatsApp
                </a>
              )}
            </div>
          </div>
          </div>,
          document.body
        )}
    </>
  )
}
