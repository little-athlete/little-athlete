'use client'

import React from 'react'
import Typography from '@/components/Typography/Typography'

const AppBar = () => {
	return (
		<header className="flex w-full items-center justify-between bg-blue-500 px-2 py-6 border-b-2 border-blue-200">
			<div className="flex items-center space-x-2">
				<Typography className="text-white">Logo Here</Typography>
			</div>
		</header>
	)
}
export default AppBar
