'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WhastappIcon from '../Icon/IconWa'
import Link from 'next/link'

export const useSectionObserver = (sections: string[], heroSectionId: string) => {
	const [activeSection, setActiveSection] = useState<string | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.id

						if (window.scrollY <= 50) {
							window.history.replaceState(null, '', location.pathname)
							setActiveSection(null)
						} else {
							window.history.replaceState(null, '', `#${sectionId}`)
							setActiveSection(`#${sectionId}`)
						}
					}
				})
			},

			{ threshold: 0.2 }
		)

		sections.forEach((section) => {
			const el = document.getElementById(section)
			if (el) {
				observer.observe(el)
			}
		})

		return () => observer.disconnect()
	}, [sections])

	return activeSection
}

const Header = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	const activeSection = useSectionObserver(
		['credibility', 'about', 'programs', 'testimonials'],
		'hero'
	)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50) // Jika scroll lebih dari 50px
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navLinks = [
		{ href: '#credibility', label: 'Our Credibility' },
		{ href: '#about', label: 'About Us' },
		{ href: '#programs', label: 'Programs' },
		{ href: '#testimonials', label: 'Testimonials' },
	]

	console.log({ activeSection })

	return (
		<header
			className={`fixed left-0 top-0 z-50 w-full py-2 ${isScrolled ? 'bg-white shadow-md' : 'bg-primary'} transition-all duration-300`}
		>
			<div className="container mx-auto flex flex-wrap items-center justify-between px-6 xl:justify-center xl:gap-[180px]">
				<div className="logo md:order-1">
					<Image
						src="/logo-header.png"
						alt="Logo"
						className="h-[43px] w-[43px] lg:h-[80px] lg:w-[80px]"
						width={89}
						height={89}
					/>
				</div>
				<nav className="order-last mt-4 flex w-full justify-between md:order-2 md:flex lg:mt-0 lg:w-auto lg:space-x-14">
					{navLinks.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className={`text-xs font-medium ${activeSection === link.href ? 'text-secondary' : 'text-black'} hover:text-blue-700 lg:text-base`}
						>
							{link.label}
						</Link>
					))}
				</nav>
				{/* <nav className="order-last mt-4 flex w-full justify-between md:order-2 md:flex lg:mt-0 lg:w-auto lg:space-x-14">
					{navLinks.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className={`text-xs font-medium ${
								activeSection === link.href ? 'text-secondary' : 'text-black'
							} hover:text-blue-700 focus:outline-none focus:ring-0 active:text-inherit lg:text-base`}
						>
							{link.label}
						</Link>
					))}
				</nav> */}

				<div className="md:order-3">
					<button className="flex items-center rounded-full border-2 border-border bg-white px-4 py-1 text-base font-semibold text-black lg:px-6 lg:py-2">
						<WhastappIcon className="mt-[1px] h-[16px] w-[16px] lg:h-[32px] lg:w-[32px]" />
						<span className="text-sm lg:text-base xl:ml-2">Chat with us</span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
