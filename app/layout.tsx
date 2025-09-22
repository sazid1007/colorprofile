import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ColorProfile - Discover Your Personality Color",
  description:
    "Based on Thomas Erikson's 'Surrounded by Idiots', discover whether you're a Red leader, Yellow influencer, Green supporter, or Blue analyst. Take our 8-question personality quiz and get instant results!",
  keywords: [
    "personality test",
    "DISC assessment",
    "color personality",
    "Thomas Erikson",
    "Surrounded by Idiots",
    "personality quiz",
  ],
  authors: [{ name: "SAZID", url: "https://bento.me/sazid" }],
  creator: "SAZID",
  openGraph: {
    title: "ColorProfile - Discover Your Personality Color",
    description: "Take our personality quiz based on 'Surrounded by Idiots' and discover your color type!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColorProfile - Discover Your Personality Color",
    description: "Take our personality quiz based on 'Surrounded by Idiots' and discover your color type!",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="B9WA1ekrpytFMgcruLgoHyaIrGFE07i_qArrUnokgA0" />
        <meta name="theme-color" content="#e63946" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ColorProfile" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
