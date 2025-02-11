import React from 'react'
import Link from 'next/link'

const items = [
	{
		title: 'Landing Page',
		link: '/admin/home/landing-page',
	},
]
const Sidebar = () => {
	return (
		<aside className="flex min-h-screen min-w-60 flex-col space-y-2 bg-blue-500 p-2">
			{items?.map((item) => (
				<Link
					href={item.link}
					key={item.title}
					className="rounded-md px-2 py-3 hover:bg-blue-200 hover:text-blue-500"
				>
					{item.title}
				</Link>
			))}
		</aside>
	)
}

export default Sidebar
