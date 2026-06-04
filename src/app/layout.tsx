import '@/lib/firebase-admin'
import type { Metadata } from 'next'
import { Parkinsans, Poppins } from 'next/font/google'
import './globals.css'

const parkinsans = Parkinsans({
  variable: '--font-parkinsans',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
        <meta name="theme-color" content="#245BFF" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://littleathlete.com" />
        {/* TODO(modul Settings/Location): isi logo, sameAs (social), address (LocalBusiness) dari Firestore */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Little Athlete',
              url: 'https://littleathlete.com',
            }),
          }}
        />
      </head>
      <body className={`${parkinsans.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
