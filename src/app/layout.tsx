import { cert, getApps, initializeApp } from 'firebase-admin/app'
import type { Metadata } from 'next'
import { Sora, Plus_Jakarta_Sans, Geist } from 'next/font/google'
import './globals.css'
import AOSProvider from '@/utils/AOSProvider'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
		'Nurturing young athletes with fun and engaging sports programs. Join us to develop your child’s skills, confidence, and teamwork through sports!',
}

if (getApps().length == 0) {
	initializeApp({
		credential: cert({
			privateKey: process.env.NEXT_FIREBASE_ADMIN_PRIVATE_KEY,
			projectId: process.env.NEXT_FIREBASE_ADMIN_PROJECT_ID,
			clientEmail: process.env.NEXT_FIREBASE_ADMIN_CLIENT_EMAIL,
		}),
	})
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={cn("font-sans", geist.variable)}>
			<head>
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Little Athlete Team" />
				<meta name="theme-color" content="#FFD700" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="canonical" href="https://littleathlete.com" />
				{/* Schema.org JSON-LD for better SEO */}
			</head>
			<body className={`${sora.variable} ${plusJakartaSans.variable} antialiased`}>
				<AOSProvider />
				<main>{children}</main>
			</body>
		</html>
	)
}
