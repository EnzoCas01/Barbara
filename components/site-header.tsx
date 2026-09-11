"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/site"
import { PlanQuizButton } from "@/components/plan-quiz"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-zinc-800 bg-[#0a0e14]/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/logo-br.png"
            alt="BR – Bárbara Reis Business"
            width={56}
            height={56}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <PlanQuizButton className="hidden items-center gap-2 border border-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black sm:inline-flex">
            Monte seu plano
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </PlanQuizButton>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex size-10 items-center justify-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="menu-mobile"
          className="border-t border-zinc-800 bg-[#0a0e14] px-5 py-4 lg:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-widest text-zinc-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <PlanQuizButton
                onOpen={() => setOpen(false)}
                className="inline-flex items-center gap-2 border border-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-white"
              >
                Monte seu plano ↗
              </PlanQuizButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
