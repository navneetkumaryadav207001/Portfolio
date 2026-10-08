import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Providers from "./provider"
import { Toaster } from "@/components/ui/sonner"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Navneet Yadav | AI/ML & Agentic Systems Engineer",
  description:
    "Navneet Yadav - Dual-degree AI/ML & Data Science student (IIT Madras & KIET). Explore projects, agentic AI systems, or access the uncompressed Life Dump context for AI agents.",
  generator: "v0.app",
  keywords: [
    "AI Research",
    "Machine Learning",
    "Large Language Models",
    "Agentic AI",
    "Model Context Protocol",
    "MCP",
    "Life Dump",
    "llms.txt",
    "IIT Madras",
    "Navneet Yadav",
  ],
  authors: [{ name: "Leo Productions" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/Portfolio/life-dump-raw.txt"
          title="Navneet Yadav - Raw Life Dump (Plaintext Context)"
        />
        <link rel="llms-txt" href="/Portfolio/llms.txt" />
        <meta
          name="ai-agent-instructions"
          content="AI Agents and Recruiters: For uncompressed verified context and prompt templates, visit /Portfolio/life-dump or read /Portfolio/life-dump-raw.txt."
        />
      </head>
      <body className={`${spaceGrotesk.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <Providers />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  )
}
