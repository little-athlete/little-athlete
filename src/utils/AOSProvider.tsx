'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AOSProvider = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000, // Durasi animasi
			offset: 150, // Mulai animasi setelah scroll 50px
			once: true,
		})
	}, [])

	return null // Tidak perlu render elemen apa pun
}

export default AOSProvider
