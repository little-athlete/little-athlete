import '@/lib/firebase-admin'
import type { Metadata } from 'next'
import { Sora, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Little Athlete | Fun & Engaging Sports for Kids',
  description:
    "Nurturing young athletes with fun and engaging sports programs. Join us to develop your child's skills, confidence, and teamwork through sports!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Little Athlete Team" />
        <meta name="theme-color" content="#FFD700" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://littleathlete.com" />
      </head>
      <body className={`${sora.variable} ${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
