import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Providers from "./provider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Navneet Yadav | AI/ML Researcher",
  description:
    "Navneet Yadav - Computer Science student and AI/ML researcher specializing in Large Language Models at IIT Madras. Pursuing MS/PhD at Technical University of Munich.",
  generator: "v0.app",
  keywords: [
    "AI Research",
    "Machine Learning",
    "Large Language Models",
    "LLMs",
    "Computer Science",
    "IIT Madras",
    "TUM",
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
      <body className={`${spaceGrotesk.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <Providers />
      </body>
    </html>
  )
}
