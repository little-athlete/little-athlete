import { useEffect, useState } from 'react'

export const useSectionObserver = (sectionIds: string[]) => {
	const [activeSection, setActiveSection] = useState<string | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log({ entry })
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id)
					}
				})
			},
			{ threshold: 0.2 } // Trigger jika 50% section terlihat
		)

		sectionIds.forEach((id) => {
			const section = document.getElementById(id)
			if (section) observer.observe(section)
		})

		return () => observer.disconnect()
	}, [sectionIds])

	return activeSection
}
