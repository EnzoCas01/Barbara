import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'A Reis Business | Marketing e presença digital para negócios locais em Araruama',
  description:
    'Gestão de redes sociais, consultoria de Instagram, criação de conteúdo e estratégia digital para negócios locais em Araruama e região. Fale com a Bárbara Reis.',
  generator: 'v0.app',
  keywords: [
    'social media em Araruama',
    'gestão de redes sociais em Araruama',
    'marketing digital para negócios locais',
    'consultoria de Instagram',
    'marketing digital no Rio de Janeiro',
    'Perfil da Empresa no Google',
  ],
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icon-180.png',
    shortcut: '/icon-32.png',
  },
  openGraph: {
    title: 'A Reis Business | Marketing e presença digital para negócios locais em Araruama',
    description:
      'Gestão de redes sociais, consultoria de Instagram, criação de conteúdo e estratégia digital para negócios locais em Araruama e região.',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bárbara Reis Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Reis Business | Marketing e presença digital para negócios locais em Araruama',
    description:
      'Gestão de redes sociais, consultoria de Instagram, criação de conteúdo e estratégia digital para negócios locais em Araruama e região.',
    images: ['/images/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141414',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`bg-background ${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
